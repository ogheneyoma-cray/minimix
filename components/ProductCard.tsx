'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { formatPrice, CurrencyToggle } from '@/components/CurrencyDisplay';
import { Currency } from '@/types';

interface Props {
  product: Product;
  currency?: Currency;
}

export default function ProductCard({ product, currency = 'USD' }: Props) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!product.inStock) return;
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-stone-100 transition-shadow flex flex-col">
      <Link href={`/shop/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-stone-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {!product.inStock && (
          <span className="absolute top-3 left-3 bg-stone-800 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            Sold Out
          </span>
        )}
        <span className="absolute top-3 right-3 bg-white text-xs font-semibold text-stone-600 px-2.5 py-1 rounded-full border border-stone-100">
          {product.category}
        </span>
      </Link>

      <div className="p-4 flex flex-col flex-1 gap-3">
        <div className="flex-1">
          <Link href={`/shop/${product.slug}`}>
            <h3 className="text-sm font-semibold text-stone-900 hover:text-accent-600 transition-colors leading-snug line-clamp-2">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1 text-sm font-bold text-accent-600">
            {formatPrice(product.price, currency)}
          </p>
        </div>

        <button
          onClick={handleAdd}
          disabled={!product.inStock || added}
          className={`w-full min-h-[44px] rounded-xl text-sm font-semibold transition-all ${
            !product.inStock
              ? 'bg-stone-100 text-stone-400 cursor-not-allowed'
              : added
              ? 'bg-green-600 text-white'
              : 'bg-accent-600 hover:bg-accent-700 text-white active:scale-95'
          }`}
        >
          {!product.inStock ? 'Out of Stock' : added ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

interface ShopGridProps {
  products: Product[];
}

export function ShopGrid({ products }: ShopGridProps) {
  const [currency, setCurrency] = useState<Currency>('USD');

  return (
    <div>
      <div className="flex justify-end mb-6">
        <CurrencyToggle value={currency} onChange={setCurrency} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} currency={currency} />
        ))}
      </div>
    </div>
  );
}
