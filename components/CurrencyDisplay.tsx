'use client';

import { useState } from 'react';
import { Currency } from '@/types';

const USD_TO_NGN = 1620;

interface Props {
  usd: number;
  className?: string;
}

export function CurrencyDisplay({ usd, className = '' }: Props) {
  const [currency, setCurrency] = useState<Currency>('USD');

  const formatted =
    currency === 'USD'
      ? `$${usd.toFixed(2)}`
      : `₦${(usd * USD_TO_NGN).toLocaleString('en-NG')}`;

  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <span className="font-semibold">{formatted}</span>
      <button
        onClick={() => setCurrency((c) => (c === 'USD' ? 'NGN' : 'USD'))}
        className="text-xs text-accent-600 underline hover:text-accent-800 transition-colors"
        aria-label={`Switch to ${currency === 'USD' ? 'NGN' : 'USD'}`}
      >
        {currency === 'USD' ? 'NGN' : 'USD'}
      </button>
    </span>
  );
}

interface GlobalConverterProps {
  defaultCurrency?: Currency;
  onChange?: (currency: Currency) => void;
  value?: Currency;
}

export function CurrencyToggle({ defaultCurrency = 'USD', onChange, value }: GlobalConverterProps) {
  const [internal, setInternal] = useState<Currency>(defaultCurrency);
  const active = value ?? internal;

  const toggle = (c: Currency) => {
    setInternal(c);
    onChange?.(c);
  };

  return (
    <div className="inline-flex items-center rounded-full border border-stone-200 overflow-hidden text-xs font-medium">
      {(['USD', 'NGN'] as Currency[]).map((c) => (
        <button
          key={c}
          onClick={() => toggle(c)}
          className={`px-3 py-1 transition-colors ${
            active === c
              ? 'bg-accent-600 text-white'
              : 'bg-white text-stone-600 hover:bg-stone-50'
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

export function formatPrice(usd: number, currency: Currency): string {
  if (currency === 'NGN') {
    return `₦${(usd * USD_TO_NGN).toLocaleString('en-NG')}`;
  }
  return `$${usd.toFixed(2)}`;
}
