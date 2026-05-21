import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
};

export default function NotFound() {
  return (
    <div className="page-container flex flex-col items-center justify-center min-h-[70vh] text-center">
      <p className="text-8xl font-bold text-stone-100 mb-4 select-none">404</p>
      <h1 className="text-2xl font-bold text-stone-900 mb-3">Page Not Found</h1>
      <p className="text-stone-500 max-w-sm mb-8">
        Sorry, we couldn&apos;t find the page you were looking for. It may have moved or no longer exists.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="btn-primary">Go Home</Link>
        <Link href="/shop" className="btn-outline">Browse Shop</Link>
      </div>
    </div>
  );
}
