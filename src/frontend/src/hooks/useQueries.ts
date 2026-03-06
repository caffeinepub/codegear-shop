import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import type { Hobby } from "../backend.d";
import { useActor } from "./useActor";

export function useGetHobbies() {
  const { actor, isFetching } = useActor();
  return useQuery<Hobby[]>({
    queryKey: ["hobbies"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.getHobbies();
      return result ?? [];
    },
    enabled: !!actor && !isFetching,
    // Always retry on failure so canister warm-up is transparent to the user
    retry: 10,
    retryDelay: (attempt) => Math.min(2000 * 2 ** attempt, 30000),
  });
}

function isCanisterUnavailable(err: unknown): boolean {
  const msg = (err as Error)?.message ?? "";
  return (
    msg.includes("stopped") ||
    msg.includes("not found") ||
    msg.includes("could not find") ||
    msg.includes("starting") ||
    msg.includes("IC0508") ||
    msg.includes("CallContextManager") ||
    msg.includes("Reject code: 5")
  );
}

export function useAddHobby() {
  const { actor, isFetching } = useActor();
  // Keep a ref so the mutation closure always sees the latest actor
  const actorRef = useRef(actor);
  actorRef.current = actor;
  const isFetchingRef = useRef(isFetching);
  isFetchingRef.current = isFetching;
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (name: string) => {
      // Poll until actor is ready and not fetching (up to 15 seconds)
      let tries = 0;
      while ((!actorRef.current || isFetchingRef.current) && tries < 15) {
        await new Promise((res) => setTimeout(res, 1000));
        tries++;
      }
      if (!actorRef.current) {
        throw new Error(
          "App is still starting up. Please try again in a moment.",
        );
      }
      try {
        return await actorRef.current.addHobby(name);
      } catch (err) {
        if (isCanisterUnavailable(err)) {
          throw new Error(
            "The backend is still warming up. Please wait a moment and try again.",
          );
        }
        throw err;
      }
    },
    retry: (failureCount, error) => {
      // Don't retry if canister is unavailable -- user should wait and retry manually
      if (isCanisterUnavailable(error)) return false;
      return failureCount < 2;
    },
    retryDelay: 2000,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hobbies"] });
    },
  });
}

export function useRemoveHobby() {
  const { actor, isFetching } = useActor();
  const actorRef = useRef(actor);
  actorRef.current = actor;
  const isFetchingRef = useRef(isFetching);
  isFetchingRef.current = isFetching;
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      let tries = 0;
      while ((!actorRef.current || isFetchingRef.current) && tries < 15) {
        await new Promise((res) => setTimeout(res, 1000));
        tries++;
      }
      if (!actorRef.current) {
        throw new Error(
          "App is still starting up. Please try again in a moment.",
        );
      }
      try {
        return await actorRef.current.removeHobby(id);
      } catch (err) {
        if (isCanisterUnavailable(err)) {
          throw new Error(
            "The backend is still warming up. Please wait a moment and try again.",
          );
        }
        throw err;
      }
    },
    retry: (failureCount, error) => {
      if (isCanisterUnavailable(error)) return false;
      return failureCount < 2;
    },
    retryDelay: 2000,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hobbies"] });
    },
  });
}
