import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import {
  BookOpen,
  Loader2,
  Play,
  Plus,
  Sparkles,
  Trash2,
  Youtube,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { type FormEvent, useRef, useState } from "react";
import { toast } from "sonner";
import type { Hobby } from "./backend.d";
import { useAddHobby, useGetHobbies, useRemoveHobby } from "./hooks/useQueries";

// ── Tutorial suggestions per hobby ──────────────────────────────────────────

interface TutorialSuggestion {
  label: string;
  emoji: string;
  query: string;
}

function getTutorialSuggestions(hobbyName: string): TutorialSuggestion[] {
  const encoded = encodeURIComponent(hobbyName);
  return [
    {
      label: "Beginner Tutorial",
      emoji: "🎯",
      query: `${encoded}+tutorial+beginners`,
    },
    { label: "How to Start", emoji: "🚀", query: `${encoded}+how+to+start` },
    {
      label: "Tips & Tricks",
      emoji: "💡",
      query: `${encoded}+tips+for+beginners`,
    },
    {
      label: "Step by Step",
      emoji: "📋",
      query: `${encoded}+tutorial+step+by+step`,
    },
    {
      label: "Complete Guide",
      emoji: "📚",
      query: `${encoded}+complete+guide+beginners`,
    },
    {
      label: "Lessons",
      emoji: "🎓",
      query: `${encoded}+lessons+for+beginners`,
    },
  ];
}

// ── Colour accent cycling ────────────────────────────────────────────────────

const CARD_COLORS = [
  {
    bg: "bg-hobby-coral/10",
    border: "border-hobby-coral/30",
    accent: "bg-hobby-coral",
    text: "text-hobby-coral",
  },
  {
    bg: "bg-hobby-teal/10",
    border: "border-hobby-teal/30",
    accent: "bg-hobby-teal",
    text: "text-hobby-teal",
  },
  {
    bg: "bg-hobby-amber/10",
    border: "border-hobby-amber/30",
    accent: "bg-hobby-amber",
    text: "text-hobby-amber",
  },
  {
    bg: "bg-hobby-lime/10",
    border: "border-hobby-lime/30",
    accent: "bg-hobby-lime",
    text: "text-hobby-lime",
  },
  {
    bg: "bg-hobby-violet/10",
    border: "border-hobby-violet/30",
    accent: "bg-hobby-violet",
    text: "text-hobby-violet",
  },
];

const TUTORIAL_BG_COLORS = [
  "from-hobby-coral to-[oklch(0.72_0.16_35)]",
  "from-hobby-teal to-[oklch(0.55_0.18_210)]",
  "from-hobby-amber to-[oklch(0.72_0.14_60)]",
  "from-hobby-lime to-[oklch(0.62_0.22_160)]",
  "from-hobby-violet to-[oklch(0.65_0.2_280)]",
  "from-[oklch(0.65_0.2_310)] to-[oklch(0.58_0.22_295)]",
];

// ── Tutorial Card ────────────────────────────────────────────────────────────

interface TutorialCardProps {
  suggestion: TutorialSuggestion;
  index: number;
}

function TutorialCard({ suggestion, index }: TutorialCardProps) {
  const gradClass = TUTORIAL_BG_COLORS[index % TUTORIAL_BG_COLORS.length];

  return (
    <motion.a
      href={`https://www.youtube.com/results?search_query=${suggestion.query}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.3, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="group relative overflow-hidden rounded-xl shadow-card cursor-pointer block"
    >
      {/* Gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradClass} opacity-90`}
      />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/20 -translate-y-8 translate-x-8" />
        <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white/10 translate-y-6 -translate-x-6" />
      </div>

      {/* Content */}
      <div className="relative p-4 flex flex-col gap-3 min-h-[100px]">
        {/* Play button circle */}
        <div className="flex items-center justify-between">
          <span className="text-2xl">{suggestion.emoji}</span>
          <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors">
            <Play className="w-4 h-4 text-white fill-white ml-0.5" />
          </div>
        </div>

        <div>
          <p className="text-white font-display font-semibold text-sm leading-tight">
            {suggestion.label}
          </p>
          <div className="flex items-center gap-1 mt-1.5">
            <Youtube className="w-3 h-3 text-white/70" />
            <span className="text-white/70 text-xs">YouTube</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

// ── Tutorial Panel ───────────────────────────────────────────────────────────

interface TutorialPanelProps {
  hobby: Hobby;
}

function TutorialPanel({ hobby }: TutorialPanelProps) {
  const suggestions = getTutorialSuggestions(hobby.name);

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="overflow-hidden"
    >
      <div className="mt-3 pt-4 border-t border-border">
        <div className="flex items-center gap-2 mb-3">
          <Youtube className="w-4 h-4 text-destructive" />
          <p className="text-sm font-semibold text-foreground">
            Tutorial videos for{" "}
            <span className="capitalize font-display font-bold">
              {hobby.name}
            </span>
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {suggestions.map((s, i) => (
            <TutorialCard key={s.label} suggestion={s} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Hobby Card ───────────────────────────────────────────────────────────────

interface HobbyCardProps {
  hobby: Hobby;
  index: number;
  isDeleting: boolean;
  onDelete: () => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

function HobbyCard({
  hobby,
  index,
  isDeleting,
  onDelete,
  isExpanded,
  onToggleExpand,
}: HobbyCardProps) {
  const colors = CARD_COLORS[index % CARD_COLORS.length];

  // Emoji for hobby based on name patterns
  const hobbyEmoji = getHobbyEmoji(hobby.name);

  return (
    <motion.div
      data-ocid={`hobby.item.${index + 1}`}
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className={`relative rounded-2xl border-2 ${colors.border} ${colors.bg} p-4 shadow-card`}
    >
      {/* Accent bar on left */}
      <div
        className={`absolute left-0 top-4 bottom-4 w-1 rounded-full ${colors.accent}`}
      />

      <div className="pl-3">
        {/* Hobby name row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span
              className="text-2xl flex-shrink-0"
              role="img"
              aria-label={hobby.name}
            >
              {hobbyEmoji}
            </span>
            <h3 className="font-display font-bold text-lg text-foreground capitalize truncate leading-tight">
              {hobby.name}
            </h3>
          </div>

          {/* Delete button */}
          <Button
            data-ocid={`hobby.delete_button.${index + 1}`}
            variant="ghost"
            size="icon"
            onClick={onDelete}
            disabled={isDeleting}
            className="flex-shrink-0 h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
            aria-label={`Remove ${hobby.name}`}
          >
            {isDeleting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Trash2 className="w-4 h-4" />
            )}
          </Button>
        </div>

        {/* Find Tutorials button */}
        <div className="mt-3">
          <Button
            data-ocid={`hobby.button.${index + 1}`}
            onClick={onToggleExpand}
            size="sm"
            className={`gap-2 text-sm font-semibold transition-all ${
              isExpanded
                ? "bg-foreground text-background hover:bg-foreground/90"
                : `${colors.accent} text-white hover:opacity-90`
            }`}
            aria-expanded={isExpanded}
          >
            <Play className={`w-3.5 h-3.5 ${isExpanded ? "" : "fill-white"}`} />
            {isExpanded ? "Hide Tutorials" : "Find Tutorials"}
          </Button>
        </div>

        {/* Tutorial panel */}
        <AnimatePresence>
          {isExpanded && <TutorialPanel hobby={hobby} />}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ── Emoji helper ─────────────────────────────────────────────────────────────

function getHobbyEmoji(name: string): string {
  const n = name.toLowerCase();
  if (
    n.includes("guitar") ||
    n.includes("music") ||
    n.includes("piano") ||
    n.includes("violin") ||
    n.includes("drum")
  )
    return "🎸";
  if (n.includes("photo") || n.includes("camera")) return "📷";
  if (n.includes("paint") || n.includes("art") || n.includes("draw"))
    return "🎨";
  if (n.includes("cook") || n.includes("bake") || n.includes("chef"))
    return "🍳";
  if (n.includes("code") || n.includes("program") || n.includes("dev"))
    return "💻";
  if (n.includes("garden") || n.includes("plant") || n.includes("flower"))
    return "🌱";
  if (n.includes("yoga") || n.includes("meditat")) return "🧘";
  if (n.includes("run") || n.includes("jog") || n.includes("marathon"))
    return "🏃";
  if (n.includes("swim") || n.includes("pool")) return "🏊";
  if (n.includes("chess") || n.includes("board game")) return "♟️";
  if (n.includes("read") || n.includes("book")) return "📖";
  if (n.includes("travel") || n.includes("hike") || n.includes("camp"))
    return "🏕️";
  if (n.includes("dance") || n.includes("ballet")) return "💃";
  if (n.includes("film") || n.includes("movie") || n.includes("video"))
    return "🎬";
  if (n.includes("knit") || n.includes("sew") || n.includes("crochet"))
    return "🧶";
  if (n.includes("origami") || n.includes("craft")) return "✂️";
  if (n.includes("language") || n.includes("learn")) return "🗣️";
  if (
    n.includes("tennis") ||
    n.includes("sport") ||
    n.includes("soccer") ||
    n.includes("football")
  )
    return "⚽";
  if (n.includes("chess")) return "♟️";
  if (n.includes("fish") || n.includes("fishing")) return "🎣";
  if (n.includes("climb") || n.includes("boulder")) return "🧗";
  if (n.includes("skateboard") || n.includes("skate")) return "🛹";
  if (n.includes("surf")) return "🏄";
  if (n.includes("candle") || n.includes("pottery") || n.includes("ceramic"))
    return "🕯️";
  return "✨";
}

// ── Empty State ──────────────────────────────────────────────────────────────

function EmptyState() {
  return (
    <motion.div
      data-ocid="hobby.empty_state"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center justify-center py-16 px-6 text-center"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="text-7xl mb-6"
      >
        🎯
      </motion.div>
      <h3 className="font-display font-bold text-2xl text-foreground mb-2">
        No hobbies yet!
      </h3>
      <p className="text-muted-foreground max-w-xs">
        Type a hobby above and hit <strong>Add</strong> to get started. We'll
        find tutorial videos for you!
      </p>
      <div className="flex gap-2 mt-6 flex-wrap justify-center">
        {["🎸 Guitar", "📷 Photography", "🎨 Painting", "🍳 Cooking"].map(
          (idea) => (
            <span
              key={idea}
              className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium border border-border"
            >
              {idea}
            </span>
          ),
        )}
      </div>
    </motion.div>
  );
}

// ── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [expandedId, setExpandedId] = useState<bigint | null>(null);
  const [deletingId, setDeletingId] = useState<bigint | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { data: hobbies = [], isLoading, isError, error } = useGetHobbies();
  const addHobby = useAddHobby();
  const removeHobby = useRemoveHobby();

  const handleAdd = async (e: FormEvent) => {
    e.preventDefault();
    const name = inputValue.trim();
    if (!name) return;

    try {
      await addHobby.mutateAsync(name);
      setInputValue("");
      toast.success(`Added "${name}" to your hobbies! 🎉`);
      inputRef.current?.focus();
    } catch {
      toast.error("Failed to add hobby. Please try again.");
    }
  };

  const handleDelete = async (hobby: Hobby) => {
    setDeletingId(hobby.id);
    try {
      await removeHobby.mutateAsync(hobby.id);
      if (expandedId === hobby.id) setExpandedId(null);
      toast.success(`Removed "${hobby.name}"`);
    } catch {
      toast.error("Failed to remove hobby.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleToggleExpand = (id: bigint) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Toaster richColors position="top-right" />

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hobby-pattern-bg.dim_1200x400.png"
            alt=""
            className="w-full h-full object-cover opacity-20"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </div>

        <div className="relative container max-w-3xl mx-auto px-4 pt-12 pb-8">
          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-12 h-12 rounded-2xl hobby-gradient flex items-center justify-center shadow-pop">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display font-extrabold text-2xl md:text-3xl text-foreground leading-none">
                  Hobby Tutorial Finder
                </h1>
                <Sparkles className="w-5 h-5 text-hobby-amber" />
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                Track hobbies, discover tutorials, level up your skills
              </p>
            </div>
          </motion.div>

          {/* Add hobby form */}
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
            onSubmit={handleAdd}
            className="flex gap-2"
          >
            <Input
              data-ocid="hobby.input"
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter a hobby (e.g. guitar, photography...)"
              className="flex-1 h-12 text-base bg-card border-2 border-border focus-visible:border-primary focus-visible:ring-0 rounded-xl placeholder:text-muted-foreground/60"
              disabled={addHobby.isPending}
              maxLength={60}
              aria-label="Hobby name"
            />
            <Button
              data-ocid="hobby.add_button"
              type="submit"
              disabled={addHobby.isPending || !inputValue.trim()}
              className="h-12 px-5 rounded-xl font-display font-bold text-base gap-2 hobby-gradient text-white border-0 hover:opacity-90 transition-opacity shadow-card disabled:opacity-50"
            >
              {addHobby.isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
              {addHobby.isPending ? "Adding..." : "Add"}
            </Button>
          </motion.form>
        </div>
      </header>

      {/* ── Main Content ───────────────────────────────────── */}
      <main className="flex-1 container max-w-3xl mx-auto px-4 py-6">
        {/* Loading state */}
        {isLoading && (
          <div
            data-ocid="hobby.loading_state"
            className="flex flex-col items-center justify-center py-16 gap-3"
          >
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-muted-foreground text-sm">
              Loading your hobbies...
            </p>
          </div>
        )}

        {/* Error state */}
        {isError && !isLoading && (
          <motion.div
            data-ocid="hobby.error_state"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-6 text-center"
          >
            <p className="text-2xl mb-2">😕</p>
            <p className="font-display font-bold text-foreground mb-1">
              Something went wrong
            </p>
            <p className="text-sm text-muted-foreground">
              {(error as Error)?.message ??
                "Failed to load hobbies. Please refresh."}
            </p>
          </motion.div>
        )}

        {/* Hobby list */}
        {!isLoading &&
          !isError &&
          (hobbies.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-muted-foreground">
                  {hobbies.length} {hobbies.length === 1 ? "hobby" : "hobbies"}{" "}
                  tracked
                </p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-hobby-coral" />
                  <div className="w-2 h-2 rounded-full bg-hobby-teal" />
                  <div className="w-2 h-2 rounded-full bg-hobby-amber" />
                </div>
              </div>

              <motion.div layout className="flex flex-col gap-3">
                <AnimatePresence mode="popLayout">
                  {hobbies.map((hobby, index) => (
                    <HobbyCard
                      key={hobby.id.toString()}
                      hobby={hobby}
                      index={index}
                      isDeleting={deletingId === hobby.id}
                      onDelete={() => handleDelete(hobby)}
                      isExpanded={expandedId === hobby.id}
                      onToggleExpand={() => handleToggleExpand(hobby.id)}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            </>
          ))}
      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="py-6 border-t border-border mt-auto">
        <p className="text-center text-xs text-muted-foreground">
          © {currentYear}. Built with{" "}
          <span className="text-hobby-coral" aria-hidden="true">
            ♥
          </span>{" "}
          using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.hostname : "",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
