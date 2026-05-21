'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/types';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, CurrencyToggle } from '@/components/CurrencyDisplay';
import { Currency } from '@/types';

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [added, setAdded] = useState(false);

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="page-container">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-accent-600 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-accent-600 transition-colors">Shop</Link>
        <span>/</span>
        <span className="text-stone-700 font-medium">{product.name}</span>
      </nav>

      {/* Product */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        {/* Image */}
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-stone-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
              <span className="bg-stone-900 text-white text-lg font-bold px-6 py-3 rounded-2xl">
                Sold Out
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6">
          <div>
            <span className="inline-block text-xs font-semibold text-accent-600 uppercase tracking-widest bg-accent-50 px-3 py-1 rounded-full mb-3">
              {product.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-tight mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-accent-600">
                {formatPrice(product.price, currency)}
              </span>
              <CurrencyToggle value={currency} onChange={setCurrency} />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-stone-700 mb-2">Description</p>
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
              {product.description}
            </p>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-2">
            <span
              className={`inline-block w-2.5 h-2.5 rounded-full ${
                product.inStock ? 'bg-green-500' : 'bg-stone-300'
              }`}
            />
            <span className="text-sm text-stone-600">
              {product.inStock ? 'In Stock — Ready to ship' : 'Currently out of stock'}
            </span>
          </div>

          {/* Quantity */}
          {product.inStock && (
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-2">Quantity</p>
              <div className="inline-flex items-center border border-stone-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-stone-600 hover:bg-stone-50 transition-colors text-lg font-medium"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-12 text-center text-sm font-semibold text-stone-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  className="w-11 h-11 flex items-center justify-center text-stone-600 hover:bg-stone-50 transition-colors text-lg font-medium"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAdd}
              disabled={!product.inStock || added}
              className={`flex-1 min-h-[52px] rounded-xl font-semibold text-base transition-all ${
                !product.inStock
                  ? 'bg-stone-100 text-stone-400 cursor-not-allowed'
                  : added
                  ? 'bg-green-600 text-white'
                  : 'bg-accent-600 hover:bg-accent-700 text-white active:scale-95'
              }`}
            >
              {!product.inStock ? 'Out of Stock' : added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>
            <Link
              href="/cart"
              className="flex-1 btn-secondary text-center flex items-center justify-center"
            >
              View Cart
            </Link>
          </div>

          {/* Meta */}
          <div className="border-t border-stone-100 pt-4 grid grid-cols-2 gap-3 text-xs text-stone-500">
            <div>
              <span className="font-semibold text-stone-700 block">Free Delivery</span>
              On qualifying orders
            </div>
            <div>
              <span className="font-semibold text-stone-700 block">Easy Returns</span>
              14-day return policy
            </div>
            <div>
              <span className="font-semibold text-stone-700 block">Secure Payment</span>
              Pay on delivery
            </div>
            <div>
              <span className="font-semibold text-stone-700 block">Authentic Quality</span>
              Inspected before dispatch
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-20">
          <h2 className="section-heading mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((rp) => (
              <Link
                key={rp.id}
                href={`/shop/${rp.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-stone-100 transition-shadow"
              >
                <div className="relative aspect-[4/5] bg-stone-50 overflow-hidden">
                  <Image
                    src={rp.image}
                    alt={rp.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold text-stone-900 line-clamp-1">{rp.name}</p>
                  <p className="text-sm font-bold text-accent-600 mt-0.5">
                    {formatPrice(rp.price, currency)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
