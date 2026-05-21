import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <p className="font-bold text-xl text-white tracking-tight">MINI-MINIX</p>
              <p className="text-xs tracking-widest text-accent-400 uppercase font-medium mt-0.5">
                Fashion &amp; Style
              </p>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Curated fashion for the modern woman. Quality pieces, timeless style, accessible prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/shop', label: 'Shop' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
                { href: '/cart', label: 'Cart' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-stone-400 hover:text-accent-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Policies
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/shipping-policy', label: 'Shipping Policy' },
                { href: '/refunds-policy', label: 'Refunds Policy' },
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/terms-and-conditions', label: 'Terms & Conditions' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-stone-400 hover:text-accent-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <address className="not-italic space-y-2 text-sm text-stone-400">
              <p>2 Shammah Close, Off Jetty Road</p>
              <p>Abuloma, Port Harcourt LGA</p>
              <p>Rivers State, Nigeria</p>
              <p className="pt-2">
                <a href="mailto:info@miniminix.com" className="hover:text-accent-400 transition-colors">
                  info@miniminix.com
                </a>
              </p>
              <p>
                <a href="tel:+2349074576935" className="hover:text-accent-400 transition-colors">
                  +234 907 457 6935
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} MINI-MINIX LTD. All rights reserved.</p>
          <p>Designed &amp; built with care in Port Harcourt, Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
