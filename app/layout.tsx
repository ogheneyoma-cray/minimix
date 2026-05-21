import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import { CurrencyProvider } from '@/context/CurrencyContext';

export const metadata: Metadata = {
  title: {
    default: 'MINI-MINIX LTD — Fashion & Style',
    template: '%s | MINI-MINIX LTD',
  },
  description:
    'Shop the latest women\'s fashion at MINI-MINIX LTD. Quality clothes and fashion items at accessible prices. Based in Port Harcourt, Rivers State, Nigeria.',
  keywords: ['fashion', 'clothing', 'women fashion', 'Port Harcourt', 'Nigeria', 'online shopping'],
  openGraph: {
    siteName: 'MINI-MINIX LTD',
    locale: 'en_NG',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="no-referrer" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <CurrencyProvider>
          <CartProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </CartProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
