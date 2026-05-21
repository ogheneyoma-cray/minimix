'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { formatPrice, CurrencyToggle } from '@/components/CurrencyDisplay';
import { Currency } from '@/types';
import type { Metadata } from 'next';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
  const [currency, setCurrency] = useState<Currency>('USD');

  if (items.length === 0) {
    return (
      <div className="page-container flex flex-col items-center justify-center min-h-[60vh] text-center">
        <span className="text-7xl mb-6">🛒</span>
        <h1 className="section-heading mb-3">Your cart is empty</h1>
        <p className="text-stone-500 mb-8 max-w-sm">
          Looks like you haven&apos;t added anything to your cart yet. Explore our latest collection and find something you love.
        </p>
        <Link href="/shop" className="btn-primary">
          Shop Now
        </Link>
      </div>
    );
  }

  const shipping = cartTotal >= 31 ? 0 : 5;
  const total = cartTotal + shipping;

  return (
    <div className="page-container">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="section-heading">Your Cart</h1>
          <p className="text-stone-500 text-sm mt-1">
            {cartCount} {cartCount === 1 ? 'item' : 'items'}
          </p>
        </div>
        <CurrencyToggle value={currency} onChange={setCurrency} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-white rounded-2xl border border-stone-100 p-4 shadow-sm"
            >
              {/* Image */}
              <Link href={`/shop/${item.slug}`} className="relative shrink-0 w-24 h-28 rounded-xl overflow-hidden bg-stone-50">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </Link>

              {/* Details */}
              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div>
                  <Link
                    href={`/shop/${item.slug}`}
                    className="font-semibold text-stone-900 text-sm hover:text-accent-600 transition-colors line-clamp-2"
                  >
                    {item.name}
                  </Link>
                  <p className="text-xs text-stone-400 mt-0.5">{item.category}</p>
                  <p className="text-sm font-bold text-accent-600 mt-1">
                    {formatPrice(item.price, currency)}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-3">
                  {/* Quantity */}
                  <div className="inline-flex items-center border border-stone-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-9 h-9 flex items-center justify-center text-stone-600 hover:bg-stone-50 transition-colors"
                      aria-label="Decrease"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm font-semibold text-stone-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-9 h-9 flex items-center justify-center text-stone-600 hover:bg-stone-50 transition-colors"
                      aria-label="Increase"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal + Remove */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-stone-900">
                      {formatPrice(item.price * item.quantity, currency)}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-9 h-9 flex items-center justify-center text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      aria-label={`Remove ${item.name}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-accent-600 transition-colors mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 sticky top-24">
            <h2 className="font-bold text-stone-900 text-lg mb-5">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal ({cartCount} items)</span>
                <span className="font-medium text-stone-900">{formatPrice(cartTotal, currency)}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Shipping</span>
                <span className={`font-medium ${shipping === 0 ? 'text-green-600' : 'text-stone-900'}`}>
                  {shipping === 0 ? 'Free' : formatPrice(shipping, currency)}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-stone-400">
                  Add {formatPrice(31 - cartTotal, currency)} more for free shipping
                </p>
              )}
              <div className="border-t border-stone-200 pt-3 flex justify-between font-bold text-base text-stone-900">
                <span>Total</span>
                <span>{formatPrice(total, currency)}</span>
              </div>
            </div>
            <Link href="/checkout" className="btn-primary w-full text-center mt-6 block">
              Proceed to Checkout
            </Link>
            <p className="text-xs text-center text-stone-400 mt-3">
              Secure checkout — your data is safe with us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
