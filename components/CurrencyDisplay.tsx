'use client';

import { useCurrency } from '@/context/CurrencyContext';
import { Currency } from '@/types';

export const USD_TO_NGN = 1620;

export function formatPrice(usd: number, currency: Currency): string {
  if (currency === 'NGN') {
    return `₦${(usd * USD_TO_NGN).toLocaleString('en-NG')}`;
  }
  return `$${usd.toFixed(2)}`;
}

/** Renders a price that automatically reflects the global currency selection. */
export function PriceTag({ usd, className = '' }: { usd: number; className?: string }) {
  const { currency } = useCurrency();
  return <span className={className}>{formatPrice(usd, currency)}</span>;
}

/** Standalone toggle — reads & writes the global currency. */
export function CurrencyToggle({ className = '' }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();
  return (
    <div className={`inline-flex items-center rounded-full border border-stone-200 overflow-hidden text-xs font-semibold ${className}`}>
      {(['USD', 'NGN'] as Currency[]).map((c) => (
        <button
          key={c}
          onClick={() => setCurrency(c)}
          className={`px-3 py-1.5 min-h-[32px] transition-colors ${
            currency === c
              ? 'bg-accent-600 text-white'
              : 'bg-white text-stone-600 hover:bg-stone-50'
          }`}
          aria-pressed={currency === c}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
