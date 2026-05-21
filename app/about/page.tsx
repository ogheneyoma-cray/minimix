import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn the story behind MINI-MINIX LTD — a proudly Nigerian fashion brand born in Port Harcourt to celebrate every woman\'s style.',
};

export default function AboutPage() {
  return (
    <div className="page-container">
      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <p className="text-accent-600 text-xs font-semibold uppercase tracking-widest mb-2">
            Our Story
          </p>
          <h1 className="section-heading mb-6">
            Born in Port Harcourt.<br />
            Dressed for Every Woman.
          </h1>
          <div className="space-y-4 text-stone-600 leading-relaxed text-sm sm:text-base">
            <p>
              MINI-MINIX LTD was founded with a clear vision: to create a fashion destination in Nigeria where quality, style, and accessibility intersect. Our roots in Port Harcourt — one of Nigeria&apos;s most vibrant and culturally rich cities — inform everything we do, from the way we curate our collections to the way we treat every customer who walks through our doors, whether physically or online.
            </p>
            <p>
              We started as a small boutique on the fringes of Abuloma, serving a community of women who had long felt underserved by the fashion industry. Too often, high-quality, well-styled clothing was either out of reach financially or simply unavailable in Nigeria without expensive importing. We decided to change that narrative. We built relationships with trusted suppliers who share our values — quality over quantity, sustainability where possible, and style that celebrates rather than diminishes the women who wear it.
            </p>
            <p>
              Today, MINI-MINIX serves customers across Nigeria, delivering fashion-forward pieces at prices that respect the reality of everyday life in our country. We are proud of every order we fulfil, every smile our packages bring, and every woman who finds something in our collection that makes her feel truly seen.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
          <Image
            src="https://picsum.photos/seed/about1/600/750"
            alt="MINI-MINIX store"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      {/* Values */}
      <div className="bg-stone-50 rounded-3xl p-8 sm:p-12 mb-20">
        <div className="text-center mb-10">
          <p className="text-accent-600 text-xs font-semibold uppercase tracking-widest mb-2">What We Stand For</p>
          <h2 className="section-heading">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: '✨',
              title: 'Authentic Style',
              desc: 'Every piece in our store is chosen because it genuinely belongs in a modern woman\'s wardrobe — not because it follows a trend, but because it creates one.',
            },
            {
              icon: '🤝',
              title: 'Customer-First Always',
              desc: 'We treat every customer like a VIP. From first browse to post-delivery support, your experience matters to us more than any single sale.',
            },
            {
              icon: '🇳🇬',
              title: 'Proudly Nigerian',
              desc: 'We are deeply proud of our roots. We celebrate Nigerian women, Nigerian fashion culture, and the vibrant spirit of Port Harcourt in everything we do.',
            },
            {
              icon: '💎',
              title: 'Quality Without Compromise',
              desc: 'We personally review and test every garment before adding it to our store. If we wouldn\'t wear it ourselves, we won\'t sell it to you.',
            },
            {
              icon: '♻️',
              title: 'Conscious Choices',
              desc: 'We are committed to reducing our environmental footprint — from packaging choices to working with suppliers who share our ethical standards.',
            },
            {
              icon: '🌍',
              title: 'Inclusive Fashion',
              desc: 'Fashion is for everyone. We are actively working to offer a wider range of sizes, styles, and price points to serve every woman in Nigeria.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-stone-100">
              <span className="text-3xl block mb-3">{icon}</span>
              <h3 className="font-bold text-stone-900 mb-2">{title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="bg-accent-600 text-white rounded-3xl p-8 sm:p-10">
          <h2 className="text-xl font-bold mb-4">Our Mission</h2>
          <p className="leading-relaxed text-accent-100">
            To make high-quality, well-designed fashion accessible to every Nigerian woman — regardless of her location, budget, or body type — while delivering an exceptional shopping experience rooted in warmth, trust, and genuine care.
          </p>
        </div>
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-10">
          <h2 className="text-xl font-bold mb-4">Our Vision</h2>
          <p className="leading-relaxed text-stone-300">
            To become Nigeria&apos;s most loved fashion destination — a brand synonymous with style, quality, and authentic celebration of Nigerian womanhood, recognised across the African continent and beyond.
          </p>
        </div>
      </div>

      {/* Team / Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
          <Image
            src="https://picsum.photos/seed/about2/600/450"
            alt="MINI-MINIX team"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="text-accent-600 text-xs font-semibold uppercase tracking-widest mb-2">The People Behind MINI-MINIX</p>
          <h2 className="section-heading mb-6">A Team That Cares</h2>
          <div className="space-y-4 text-stone-600 leading-relaxed text-sm sm:text-base">
            <p>
              MINI-MINIX is more than a business — it is a labour of love built by people who genuinely care about fashion, community, and the women they serve. Our small but passionate team handles everything from sourcing and styling to packaging and customer care with pride and precision.
            </p>
            <p>
              We believe that the best businesses are built on relationships — with suppliers, with delivery partners, and most importantly with customers. Every order that leaves our hands carries a piece of us in it: our dedication, our eye for quality, and our hope that it makes you feel wonderful.
            </p>
            <p>
              We are always looking for talented individuals who share our values. If you are passionate about fashion and want to be part of something growing in Port Harcourt, reach out to us.
            </p>
          </div>
          <Link href="/contact" className="btn-primary mt-8 inline-block">
            Get in Touch
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-stone-50 rounded-3xl py-12 px-6">
        <h2 className="section-heading mb-3">Ready to Explore the Collection?</h2>
        <p className="text-stone-500 text-sm max-w-md mx-auto mb-6">
          From everyday essentials to statement pieces for special occasions, we have something for every woman, every day.
        </p>
        <Link href="/shop" className="btn-primary">
          Shop the Collection
        </Link>
      </div>
    </div>
  );
}
