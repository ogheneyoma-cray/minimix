'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get('order') ?? 'MMX-XXXXXXX';

  return (
    <div className="page-container flex flex-col items-center justify-center min-h-[70vh] text-center">
      {/* Success Icon */}
      <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 text-green-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
        Order Placed Successfully!
      </h1>
      <p className="text-stone-500 text-base sm:text-lg max-w-md mb-6">
        Thank you for shopping with MINI-MINIX LTD. We&apos;ve received your order and will process it shortly.
      </p>

      {/* Order Number */}
      <div className="bg-accent-50 border border-accent-200 rounded-2xl px-8 py-5 mb-8">
        <p className="text-sm text-accent-700 font-medium mb-1">Your Order Number</p>
        <p className="text-2xl font-bold text-accent-700 tracking-wider font-mono">{orderNumber}</p>
        <p className="text-xs text-accent-600 mt-2">Save this for tracking your order</p>
      </div>

      {/* Next Steps */}
      <div className="bg-stone-50 rounded-2xl border border-stone-100 p-6 max-w-md w-full text-left mb-8">
        <h2 className="font-semibold text-stone-900 text-sm mb-4">What happens next?</h2>
        <div className="space-y-4">
          {[
            { icon: '📧', step: 'Confirmation Email', desc: 'You\'ll receive an order confirmation email within the next few minutes.' },
            { icon: '📦', step: 'Order Processing', desc: 'Our team will carefully pack and prepare your items within 1–2 business days.' },
            { icon: '🚚', step: 'Delivery', desc: 'Your order will be dispatched to your delivery address. Delivery typically takes 2–5 business days within Nigeria.' },
            { icon: '💰', step: 'Payment', desc: 'Payment is collected upon delivery. Have your payment ready when your order arrives.' },
          ].map(({ icon, step, desc }) => (
            <div key={step} className="flex items-start gap-3">
              <span className="text-xl shrink-0">{icon}</span>
              <div>
                <p className="text-sm font-semibold text-stone-900">{step}</p>
                <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/shop" className="btn-primary">
          Continue Shopping
        </Link>
        <Link href="/contact" className="btn-outline">
          Contact Support
        </Link>
      </div>

      <p className="mt-8 text-xs text-stone-400">
        Questions? Email us at{' '}
        <a href="mailto:info@miniminix.com" className="text-accent-600 hover:underline">
          info@miniminix.com
        </a>{' '}
        or call{' '}
        <a href="tel:+2349074576935" className="text-accent-600 hover:underline">
          +234 907 457 6935
        </a>
      </p>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<div className="page-container text-center text-stone-400 py-24">Loading...</div>}>
      <ConfirmationContent />
    </Suspense>
  );
}
