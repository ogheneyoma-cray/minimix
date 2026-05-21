'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import { ShopGrid } from '@/components/ProductCard';
import { Suspense } from 'react';

const CATEGORIES = ['All', 'Dresses', 'Tops', 'Bottoms', 'Outerwear'];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') ?? 'All';
  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.includes(initialCategory) ? initialCategory : 'All'
  );
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  const filtered = useMemo(() => {
    let list = activeCategory === 'All'
      ? [...products]
      : products.filter((p) => p.category === activeCategory);

    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);

    return list;
  }, [activeCategory, sortBy]);

  return (
    <div className="page-container">
      <div className="mb-10">
        <p className="text-accent-600 text-xs font-semibold uppercase tracking-widest mb-1">
          Our Collection
        </p>
        <h1 className="section-heading">Shop All Styles</h1>
        <p className="mt-2 text-stone-500 text-sm">
          {filtered.length} {filtered.length === 1 ? 'item' : 'items'} available
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`min-h-[44px] px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                activeCategory === cat
                  ? 'bg-accent-600 text-white border-accent-600'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm text-stone-500 whitespace-nowrap">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="input-field py-2 w-auto"
          >
            <option value="default">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-24 text-stone-400">
          <p className="text-5xl mb-4">🛍️</p>
          <p className="text-lg font-medium">No products in this category yet.</p>
        </div>
      ) : (
        <ShopGrid products={filtered} />
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="page-container text-stone-400">Loading products...</div>}>
      <ShopContent />
    </Suspense>
  );
}
