import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Hobby } from "../backend.d";
import { useActor } from "./useActor";

export function useGetHobbies() {
  const { actor, isFetching } = useActor();
  return useQuery<Hobby[]>({
    queryKey: ["hobbies"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getHobbies();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddHobby() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (name: string) => {
      if (!actor) throw new Error("No actor available");
      return actor.addHobby(name);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hobbies"] });
    },
  });
}

export function useRemoveHobby() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("No actor available");
      return actor.removeHobby(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hobbies"] });
    },
  });
}
