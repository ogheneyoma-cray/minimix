import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedProducts } from '@/data/products';
import { ShopGrid } from '@/components/ProductCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MINI-MINIX LTD — Fashion & Style',
  description:
    'Discover curated fashion at MINI-MINIX LTD. Shop premium clothes and accessories at accessible prices, delivered from Port Harcourt, Nigeria.',
};

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80"
            alt="MINI-MINIX fashion hero"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <span className="inline-block text-accent-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              New Season — Now Live
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              MINI-MINIX
              <br />
              <span className="text-accent-400">LTD</span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-300 leading-relaxed mb-8 max-w-lg">
              Where everyday elegance meets accessible luxury. Discover clothes that tell your story,
              crafted for the modern Nigerian woman.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop" className="btn-primary text-base px-8 py-4">
                Shop Now
              </Link>
              <Link href="/about" className="btn-outline text-base px-8 py-4 border-stone-600 text-stone-300 hover:border-white hover:text-white">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="page-container">
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div>
            <p className="text-accent-600 text-xs font-semibold uppercase tracking-widest mb-1">
              Handpicked for you
            </p>
            <h2 className="section-heading">Featured Pieces</h2>
          </div>
          <Link href="/shop" className="text-sm font-medium text-stone-600 hover:text-accent-600 transition-colors hidden sm:block">
            View all &rarr;
          </Link>
        </div>
        <ShopGrid products={featured} />
        <div className="mt-10 text-center sm:hidden">
          <Link href="/shop" className="btn-outline">
            View All Products
          </Link>
        </div>
      </section>

      {/* Category Strips */}
      <section className="bg-stone-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-10">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Dresses', img: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&q=80', color: 'from-rose-100' },
              { label: 'Tops', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80', color: 'from-sky-100' },
              { label: 'Bottoms', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80', color: 'from-amber-100' },
              { label: 'Outerwear', img: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80', color: 'from-emerald-100' },
            ].map(({ label, img, color }) => (
              <Link
                key={label}
                href={`/shop?category=${label}`}
                className={`group relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-b ${color} to-stone-100`}
              >
                <Image
                  src={img}
                  alt={label}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-bold text-lg">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Intro */}
      <section className="page-container">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent-600 text-xs font-semibold uppercase tracking-widest mb-2">
                About MINI-MINIX LTD
              </p>
              <h2 className="section-heading mb-6">
                Fashion That Feels Like Home
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed text-sm sm:text-base">
                <p>
                  MINI-MINIX LTD was born from a simple but powerful belief: every woman in Nigeria deserves
                  access to beautiful, well-made clothing that reflects her personality, ambition, and grace —
                  without compromising her budget or values.
                </p>
                <p>
                  Founded in the vibrant city of Port Harcourt, Rivers State, we are a proudly Nigerian fashion
                  brand rooted in the energy, diversity, and creativity of our people. We understand the demands
                  of the modern Nigerian woman — whether she is managing a boardroom, running errands, attending
                  an owambe, or exploring the streets of the Garden City.
                </p>
                <p>
                  Our collections are thoughtfully curated to blend international style trends with the warmth
                  and confidence that defines Nigerian femininity. Each piece in our store is selected with care,
                  evaluated not just for its aesthetic appeal but also for the quality of its construction, the
                  comfort of its wear, and the versatility it brings to a wardrobe.
                </p>
                <p>
                  At MINI-MINIX, we are more than a clothing store — we are a community. We celebrate women of
                  all shapes, sizes, skin tones, and stories. Fashion is not one-size-fits-all, and neither are
                  we. We are committed to expanding our size range, growing our product range, and always
                  listening to what our customers actually want.
                </p>
                <p>
                  When you shop with us, you are supporting a local business that is deeply invested in the
                  future of fashion in Nigeria. Thank you for being part of our journey.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/about" className="btn-secondary">
                  Read Our Full Story
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                alt="MINI-MINIX brand story"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-accent-600 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { icon: '🚚', title: 'Nationwide Delivery', desc: 'Delivered to your door across Nigeria' },
              { icon: '✅', title: 'Quality Assured', desc: 'Every item inspected before shipping' },
              { icon: '🔄', title: 'Easy Returns', desc: '14-day hassle-free return policy' },
              { icon: '💬', title: 'Dedicated Support', desc: 'Friendly team ready to help you' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{icon}</span>
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-accent-100 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
