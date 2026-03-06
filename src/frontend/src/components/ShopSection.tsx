import {
  BookOpen,
  ExternalLink,
  Gamepad2,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { Hobby } from "../backend.d";
import {
  CODING_PLANS,
  GAME_CARTRIDGES,
  GAMING_PLANS,
  GENERAL_BOOKS,
  type Product,
  TRENDING_HOBBIES,
  getBooksForHobby,
  getProductsForHobby,
} from "../data/shopData";

// ── Helpers ───────────────────────────────────────────────────────────────────

function buildAmazonUrl(query: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}`;
}

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
  if (n.includes("read") || n.includes("book")) return "📖";
  if (n.includes("travel") || n.includes("hike") || n.includes("camp"))
    return "🏕️";
  if (n.includes("dance") || n.includes("ballet")) return "💃";
  if (n.includes("film") || n.includes("movie") || n.includes("video"))
    return "🎬";
  if (n.includes("gaming") || n.includes("game")) return "🎮";
  if (n.includes("3d") || n.includes("print")) return "🖨️";
  if (n.includes("drone") || n.includes("fly")) return "🚁";
  if (n.includes("stream")) return "🎥";
  return "✨";
}

function isCodingHobby(name: string): boolean {
  const n = name.toLowerCase();
  return (
    n.includes("code") ||
    n.includes("coding") ||
    n.includes("program") ||
    n.includes("dev") ||
    n.includes("software") ||
    n.includes("web") ||
    n.includes("javascript") ||
    n.includes("python") ||
    n.includes("typescript")
  );
}

// ── Category accent colors (cycling) ─────────────────────────────────────────

const CATEGORY_COLORS = [
  {
    chip: "bg-hobby-coral/15 border-hobby-coral/40 text-hobby-coral",
    chipActive: "bg-hobby-coral text-white border-hobby-coral shadow-md",
    cardBorder: "border-hobby-coral/25",
    cardBg: "bg-hobby-coral/5",
    btnClass: "bg-hobby-coral hover:bg-hobby-coral/90 text-white",
    badge: "bg-hobby-coral/10 text-hobby-coral",
    sectionBg: "from-hobby-coral/8 to-transparent",
    sectionBorder: "border-hobby-coral/20",
    headingColor: "text-hobby-coral",
  },
  {
    chip: "bg-hobby-teal/15 border-hobby-teal/40 text-hobby-teal",
    chipActive: "bg-hobby-teal text-white border-hobby-teal shadow-md",
    cardBorder: "border-hobby-teal/25",
    cardBg: "bg-hobby-teal/5",
    btnClass: "bg-hobby-teal hover:bg-hobby-teal/90 text-white",
    badge: "bg-hobby-teal/10 text-hobby-teal",
    sectionBg: "from-hobby-teal/8 to-transparent",
    sectionBorder: "border-hobby-teal/20",
    headingColor: "text-hobby-teal",
  },
  {
    chip: "bg-hobby-amber/15 border-hobby-amber/40 text-hobby-amber",
    chipActive: "bg-hobby-amber text-white border-hobby-amber shadow-md",
    cardBorder: "border-hobby-amber/25",
    cardBg: "bg-hobby-amber/5",
    btnClass: "bg-hobby-amber hover:bg-hobby-amber/90 text-white",
    badge: "bg-hobby-amber/10 text-hobby-amber",
    sectionBg: "from-hobby-amber/8 to-transparent",
    sectionBorder: "border-hobby-amber/20",
    headingColor: "text-hobby-amber",
  },
  {
    chip: "bg-hobby-lime/15 border-hobby-lime/40 text-hobby-lime",
    chipActive: "bg-hobby-lime text-white border-hobby-lime shadow-md",
    cardBorder: "border-hobby-lime/25",
    cardBg: "bg-hobby-lime/5",
    btnClass: "bg-hobby-lime hover:bg-hobby-lime/90 text-white",
    badge: "bg-hobby-lime/10 text-hobby-lime",
    sectionBg: "from-hobby-lime/8 to-transparent",
    sectionBorder: "border-hobby-lime/20",
    headingColor: "text-hobby-lime",
  },
  {
    chip: "bg-hobby-violet/15 border-hobby-violet/40 text-hobby-violet",
    chipActive: "bg-hobby-violet text-white border-hobby-violet shadow-md",
    cardBorder: "border-hobby-violet/25",
    cardBg: "bg-hobby-violet/5",
    btnClass: "bg-hobby-violet hover:bg-hobby-violet/90 text-white",
    badge: "bg-hobby-violet/10 text-hobby-violet",
    sectionBg: "from-hobby-violet/8 to-transparent",
    sectionBorder: "border-hobby-violet/20",
    headingColor: "text-hobby-violet",
  },
];

function getCategoryColor(index: number) {
  return CATEGORY_COLORS[index % CATEGORY_COLORS.length];
}

// ── Product Card ──────────────────────────────────────────────────────────────

interface ProductCardProps {
  product: Product;
  cardIndex: number;
  colorIndex: number;
  ocidPrefix?: string;
}

function ProductCard({
  product,
  cardIndex,
  colorIndex,
  ocidPrefix = "shop.product",
}: ProductCardProps) {
  const color = getCategoryColor(colorIndex);
  const href = product.siteUrl
    ? product.siteUrl
    : buildAmazonUrl(product.amazonQuery);
  const btnLabel = product.siteUrl ? "Visit Site" : "Buy on Amazon";
  const ariaLabel = product.siteUrl
    ? `Visit ${product.name}`
    : `Buy ${product.name} on Amazon`;

  return (
    <motion.div
      data-ocid={`${ocidPrefix}.item.${cardIndex + 1}`}
      layout
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.18 } }}
      transition={{ delay: cardIndex * 0.05, duration: 0.28, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className={`relative flex flex-col rounded-2xl border-2 ${color.cardBorder} ${color.cardBg} p-4 shadow-card overflow-hidden`}
    >
      {/* Decorative circle */}
      <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-current opacity-5 pointer-events-none" />

      {/* Emoji + price */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <span
          className="text-3xl leading-none"
          role="img"
          aria-label={product.name}
        >
          {product.emoji}
        </span>
        <span
          className={`text-xs font-bold px-2 py-1 rounded-full ${color.badge} tabular-nums whitespace-nowrap`}
        >
          {product.priceRange}
        </span>
      </div>

      {/* Name */}
      <h4 className="font-display font-bold text-sm leading-tight text-foreground mb-1 line-clamp-2">
        {product.name}
      </h4>

      {/* Description */}
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-4">
        {product.description}
      </p>

      {/* CTA */}
      <a
        data-ocid={`${ocidPrefix}.button.${cardIndex + 1}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-1.5 w-full rounded-xl py-2 px-3 text-xs font-bold transition-all duration-200 shadow-xs hover:shadow-card ${color.btnClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
        aria-label={ariaLabel}
      >
        <ShoppingBag className="w-3.5 h-3.5 flex-shrink-0" />
        <span>{btnLabel}</span>
        <ExternalLink className="w-3 h-3 opacity-70 flex-shrink-0" />
      </a>
    </motion.div>
  );
}

// ── Trending Section ──────────────────────────────────────────────────────────

function TrendingSection() {
  const [activeTrendingId, setActiveTrendingId] = useState<string>(
    TRENDING_HOBBIES[0].id,
  );

  const activeTrending =
    TRENDING_HOBBIES.find((h) => h.id === activeTrendingId) ??
    TRENDING_HOBBIES[0];
  const activeTrendingIndex = TRENDING_HOBBIES.findIndex(
    (h) => h.id === activeTrendingId,
  );

  return (
    <section className="mb-10">
      {/* Section header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-xl hobby-gradient flex items-center justify-center shadow-xs flex-shrink-0">
          <TrendingUp className="w-4 h-4 text-white" />
        </div>
        <div>
          <h2 className="font-display font-bold text-lg text-foreground leading-none">
            Trending Now 🔥
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Top hobby gear everyone is buying right now
          </p>
        </div>
      </div>

      {/* Horizontal hobby chip tabs */}
      <div
        role="tablist"
        aria-label="Trending hobbies"
        className="flex gap-2 overflow-x-auto pb-2 mb-5 scrollbar-thin"
      >
        {TRENDING_HOBBIES.map((hobby, i) => {
          const color = getCategoryColor(i);
          const isActive = activeTrendingId === hobby.id;
          return (
            <button
              key={hobby.id}
              type="button"
              data-ocid="shop.trending.tab"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTrendingId(hobby.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 flex-shrink-0 ${
                isActive ? color.chipActive : color.chip
              }`}
            >
              <span>{hobby.emoji}</span>
              <span>{hobby.name}</span>
            </button>
          );
        })}
      </div>

      {/* Product grid for active trending hobby */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTrendingId}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4, transition: { duration: 0.15 } }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className={`rounded-2xl border ${getCategoryColor(activeTrendingIndex).sectionBorder} bg-gradient-to-br ${getCategoryColor(activeTrendingIndex).sectionBg} p-4`}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">{activeTrending.emoji}</span>
            <h3
              className={`font-display font-bold text-base ${getCategoryColor(activeTrendingIndex).headingColor}`}
            >
              {activeTrending.name} Gear
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {activeTrending.products.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                cardIndex={i}
                colorIndex={activeTrendingIndex}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

// ── Books Section ─────────────────────────────────────────────────────────────

function BooksSection() {
  const color = getCategoryColor(1); // teal

  return (
    <motion.section
      data-ocid="shop.books.section"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
      className={`mb-10 rounded-2xl border ${color.sectionBorder} bg-gradient-to-br ${color.sectionBg} p-5`}
    >
      {/* Section header */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-xs flex-shrink-0 ${color.btnClass}`}
        >
          <BookOpen className="w-4 h-4 text-white" />
        </div>
        <div>
          <h2
            className={`font-display font-bold text-lg leading-none ${color.headingColor}`}
          >
            📚 Books & Reading
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Expand your mind — from bestsellers to hobby deep-dives
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {GENERAL_BOOKS.map((book, i) => (
          <ProductCard
            key={book.id}
            product={book}
            cardIndex={i}
            colorIndex={1}
            ocidPrefix="shop.books"
          />
        ))}
      </div>
    </motion.section>
  );
}

// ── Gaming Section ────────────────────────────────────────────────────────────

function GamingSection() {
  const color = getCategoryColor(0); // coral

  return (
    <motion.section
      data-ocid="shop.gaming.section"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.3, ease: "easeOut" }}
      className={`mb-10 rounded-2xl border ${color.sectionBorder} bg-gradient-to-br ${color.sectionBg} p-5`}
    >
      {/* Section header */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-xs flex-shrink-0 ${color.btnClass}`}
        >
          <Gamepad2 className="w-4 h-4 text-white" />
        </div>
        <div>
          <h2
            className={`font-display font-bold text-lg leading-none ${color.headingColor}`}
          >
            🎮 Gaming
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Video games, cartridges, and gaming subscriptions
          </p>
        </div>
      </div>

      {/* Games & Cartridges */}
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-foreground mb-3">
          🕹️ Games &amp; Cartridges
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {GAME_CARTRIDGES.map((game, i) => (
            <ProductCard
              key={game.id}
              product={game}
              cardIndex={i}
              colorIndex={0}
              ocidPrefix="shop.gaming"
            />
          ))}
        </div>
      </div>

      {/* Subtle divider */}
      <div className="flex items-center gap-3 my-5">
        <div className="h-px flex-1 bg-border/60" />
        <span className="text-xs text-muted-foreground font-medium px-2">
          Gaming Subscriptions
        </span>
        <div className="h-px flex-1 bg-border/60" />
      </div>

      {/* Gaming Subscriptions & Passes */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          🎯 Gaming Subscriptions &amp; Passes
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {GAMING_PLANS.map((plan, i) => (
            <ProductCard
              key={plan.id}
              product={plan}
              cardIndex={i}
              colorIndex={0}
              ocidPrefix="shop.gaming_plans"
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ── Your Hobby Shop Section ───────────────────────────────────────────────────

interface HobbyShopSectionProps {
  hobby: Hobby;
  sectionIndex: number;
}

function HobbyShopSection({ hobby, sectionIndex }: HobbyShopSectionProps) {
  const products = getProductsForHobby(hobby.name);
  const hobbyBooks = getBooksForHobby(hobby.name);
  const emoji = getHobbyEmoji(hobby.name);
  const color = getCategoryColor(sectionIndex);
  const showCodingPlans = isCodingHobby(hobby.name);

  return (
    <motion.section
      data-ocid={`shop.hobby_section.${sectionIndex + 1}`}
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: sectionIndex * 0.08,
        duration: 0.3,
        ease: "easeOut",
      }}
      className={`mb-8 rounded-2xl border ${color.sectionBorder} bg-gradient-to-br ${color.sectionBg} p-4`}
    >
      {/* Hobby section header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl" role="img" aria-label={hobby.name}>
          {emoji}
        </span>
        <div>
          <h3
            className={`font-display font-bold text-base capitalize ${color.headingColor}`}
          >
            {hobby.name}
          </h3>
          <p className="text-xs text-muted-foreground">
            {products.length} recommended items
          </p>
        </div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {products.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            cardIndex={i}
            colorIndex={sectionIndex}
          />
        ))}
      </div>

      {/* Recommended Books subsection */}
      {hobbyBooks.length > 0 && (
        <div className="mt-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 bg-border/60" />
            <span className="text-xs text-muted-foreground font-medium px-2">
              📚 Recommended Books
            </span>
            <div className="h-px flex-1 bg-border/60" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {hobbyBooks.map((book, i) => (
              <ProductCard
                key={book.id}
                product={book}
                cardIndex={i}
                colorIndex={sectionIndex}
                ocidPrefix={`shop.hobby_books.${sectionIndex + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Coding Platforms & Plans subsection */}
      {showCodingPlans && (
        <div className="mt-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 bg-border/60" />
            <span className="text-xs text-muted-foreground font-medium px-2">
              💻 Coding Platforms &amp; Plans
            </span>
            <div className="h-px flex-1 bg-border/60" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CODING_PLANS.map((plan, i) => (
              <ProductCard
                key={plan.id}
                product={plan}
                cardIndex={i}
                colorIndex={sectionIndex}
                ocidPrefix="shop.coding_plans"
              />
            ))}
          </div>
        </div>
      )}
    </motion.section>
  );
}

// ── Main ShopSection ──────────────────────────────────────────────────────────

interface ShopSectionProps {
  hobbies: Hobby[];
}

export default function ShopSection({ hobbies }: ShopSectionProps) {
  return (
    <div className="py-2">
      {/* ── Trending Now — always visible ── */}
      <TrendingSection />

      {/* ── Books & Reading — always visible ── */}
      <BooksSection />

      {/* ── Gaming — always visible ── */}
      <GamingSection />

      {/* ── Your Hobby Shop — only when user has hobbies ── */}
      {hobbies.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-5">
            <div className="h-px flex-1 bg-border" />
            <div className="flex items-center gap-2 px-3">
              <span className="text-lg">🎯</span>
              <h2 className="font-display font-bold text-base text-foreground whitespace-nowrap">
                Your Hobby Shop
              </h2>
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>
          <p className="text-xs text-muted-foreground mb-5 text-center">
            Personalized gear picks based on your hobbies
          </p>

          <AnimatePresence mode="popLayout">
            {hobbies.map((hobby, i) => (
              <HobbyShopSection
                key={hobby.id.toString()}
                hobby={hobby}
                sectionIndex={i}
              />
            ))}
          </AnimatePresence>
        </section>
      )}

      {/* ── Empty state prompt — only when no hobbies ── */}
      {hobbies.length === 0 && (
        <motion.div
          data-ocid="shop.empty_state"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
          className="rounded-2xl border-2 border-dashed border-border bg-muted/30 p-8 text-center"
        >
          <p className="text-3xl mb-3">🛍️</p>
          <h3 className="font-display font-bold text-base text-foreground mb-1">
            Your personalized shop awaits
          </h3>
          <p className="text-sm text-muted-foreground max-w-xs mx-auto">
            Add hobbies in the <strong>Hobbies</strong> tab to get personalized
            gear recommendations tailored just for you.
          </p>
        </motion.div>
      )}

      {/* Footer note */}
      <p className="text-xs text-center text-muted-foreground mt-8 pb-2">
        Prices are approximate. Product links open in a new tab — Amazon for
        physical items, official sites for subscriptions.
      </p>
    </div>
  );
}
