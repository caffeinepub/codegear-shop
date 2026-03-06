import { ExternalLink, ShoppingBag } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { type Category, type Product, shopCategories } from "../data/shopData";

// ── Helpers ──────────────────────────────────────────────────────────────────

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildAmazonUrl(query: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}`;
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
  },
  {
    chip: "bg-hobby-teal/15 border-hobby-teal/40 text-hobby-teal",
    chipActive: "bg-hobby-teal text-white border-hobby-teal shadow-md",
    cardBorder: "border-hobby-teal/25",
    cardBg: "bg-hobby-teal/5",
    btnClass: "bg-hobby-teal hover:bg-hobby-teal/90 text-white",
    badge: "bg-hobby-teal/10 text-hobby-teal",
  },
  {
    chip: "bg-hobby-amber/15 border-hobby-amber/40 text-hobby-amber",
    chipActive: "bg-hobby-amber text-white border-hobby-amber shadow-md",
    cardBorder: "border-hobby-amber/25",
    cardBg: "bg-hobby-amber/5",
    btnClass: "bg-hobby-amber hover:bg-hobby-amber/90 text-white",
    badge: "bg-hobby-amber/10 text-hobby-amber",
  },
  {
    chip: "bg-hobby-lime/15 border-hobby-lime/40 text-hobby-lime",
    chipActive: "bg-hobby-lime text-white border-hobby-lime shadow-md",
    cardBorder: "border-hobby-lime/25",
    cardBg: "bg-hobby-lime/5",
    btnClass: "bg-hobby-lime hover:bg-hobby-lime/90 text-white",
    badge: "bg-hobby-lime/10 text-hobby-lime",
  },
  {
    chip: "bg-hobby-violet/15 border-hobby-violet/40 text-hobby-violet",
    chipActive: "bg-hobby-violet text-white border-hobby-violet shadow-md",
    cardBorder: "border-hobby-violet/25",
    cardBg: "bg-hobby-violet/5",
    btnClass: "bg-hobby-violet hover:bg-hobby-violet/90 text-white",
    badge: "bg-hobby-violet/10 text-hobby-violet",
  },
];

function getCategoryColor(index: number) {
  return CATEGORY_COLORS[index % CATEGORY_COLORS.length];
}

// ── Product Card ──────────────────────────────────────────────────────────────

interface ProductCardProps {
  product: Product;
  index: number;
  colorIndex: number;
}

function ProductCard({ product, index, colorIndex }: ProductCardProps) {
  const color = getCategoryColor(colorIndex);

  return (
    <motion.div
      data-ocid={`shop.product.item.${index + 1}`}
      layout
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.18 } }}
      transition={{ delay: index * 0.045, duration: 0.28, ease: "easeOut" }}
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
      <h3 className="font-display font-bold text-sm leading-tight text-foreground mb-1 line-clamp-2">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-4">
        {product.description}
      </p>

      {/* CTA */}
      <a
        data-ocid={`shop.product.buy_button.${index + 1}`}
        href={buildAmazonUrl(product.amazonQuery)}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-1.5 w-full rounded-xl py-2 px-3 text-xs font-bold transition-all duration-200 shadow-xs hover:shadow-card ${color.btnClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
        aria-label={`Buy ${product.name} on Amazon`}
      >
        <ShoppingBag className="w-3.5 h-3.5 flex-shrink-0" />
        <span>Buy on Amazon</span>
        <ExternalLink className="w-3 h-3 opacity-70 flex-shrink-0" />
      </a>
    </motion.div>
  );
}

// ── Category Section ──────────────────────────────────────────────────────────

interface CategorySectionProps {
  category: Category;
  colorIndex: number;
}

function CategorySection({ category, colorIndex }: CategorySectionProps) {
  // Shuffle products once on mount for variety
  const shuffled = useMemo(
    () => shuffleArray(category.products),
    [category.products],
  );

  return (
    <section className="mb-10">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl" role="img" aria-label={category.label}>
          {category.emoji}
        </span>
        <h2 className="font-display font-bold text-lg text-foreground">
          {category.label}
        </h2>
        <span className="text-xs text-muted-foreground ml-1">
          ({category.products.length} products)
        </span>
      </div>
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <AnimatePresence mode="popLayout">
          {shuffled.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              colorIndex={colorIndex}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

// ── Main ShopSection ──────────────────────────────────────────────────────────

export default function ShopSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories = useMemo<Category[]>(() => {
    if (activeCategory === "all") return shopCategories;
    return shopCategories.filter((cat) => cat.id === activeCategory);
  }, [activeCategory]);

  const activeCatIndex = useMemo(() => {
    if (activeCategory === "all") return 0;
    return shopCategories.findIndex((c) => c.id === activeCategory);
  }, [activeCategory]);

  return (
    <div className="py-2">
      {/* Category filter chips */}
      <div
        role="tablist"
        aria-label="Filter by category"
        className="flex flex-wrap gap-2 mb-6"
      >
        {/* All chip */}
        <button
          type="button"
          data-ocid="shop.category_filter.tab"
          role="tab"
          aria-selected={activeCategory === "all"}
          onClick={() => setActiveCategory("all")}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${
            activeCategory === "all"
              ? "bg-foreground text-background border-foreground shadow-md"
              : "bg-muted/60 border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
          }`}
        >
          🛒 All
        </button>

        {shopCategories.map((cat, i) => {
          const color = getCategoryColor(i);
          const isActive = activeCategory === cat.id;
          return (
            <button
              type="button"
              key={cat.id}
              data-ocid="shop.category_filter.tab"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${
                isActive ? color.chipActive : color.chip
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          );
        })}
      </div>

      {/* Product grid by category */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {filteredCategories.map((cat, i) => (
            <CategorySection
              key={cat.id}
              category={cat}
              colorIndex={activeCategory === "all" ? i : activeCatIndex}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Footer note */}
      <p className="text-xs text-center text-muted-foreground mt-4 pb-2">
        Prices are approximate. Clicking "Buy on Amazon" opens an Amazon search
        in a new tab.
      </p>
    </div>
  );
}
