import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How MINI-MINIX LTD collects, uses, and protects your personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="page-container max-w-3xl">
      <nav className="flex items-center gap-2 text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-accent-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-stone-700">Privacy Policy</span>
      </nav>

      <h1 className="section-heading mb-2">Privacy Policy</h1>
      <p className="text-stone-400 text-sm mb-10">Last updated: January 2025</p>

      <div className="prose prose-stone max-w-none space-y-8 text-stone-600 text-sm sm:text-base leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">1. Introduction</h2>
          <p>
            MINI-MINIX LTD (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase with us. Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">2. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li><strong>Personal identification information:</strong> name, email address, phone number</li>
            <li><strong>Delivery information:</strong> shipping address, city, state, postal code</li>
            <li><strong>Order information:</strong> products purchased, order value, order history</li>
            <li><strong>Communication data:</strong> messages sent through our contact form</li>
          </ul>
          <p className="mt-3">
            We also collect certain information automatically when you visit our website, including browser type, IP address, referring pages, and pages visited, through standard web analytics tools.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>Process and fulfil your orders and communicate order status</li>
            <li>Send you transactional messages (order confirmations, delivery updates)</li>
            <li>Respond to your enquiries and customer service requests</li>
            <li>Improve our website, products, and services</li>
            <li>Send you marketing communications (only with your consent)</li>
            <li>Comply with legal obligations and resolve disputes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">4. Sharing Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li><strong>Delivery partners:</strong> We share your name, phone number, and delivery address with our logistics partners solely for the purpose of fulfilling your order.</li>
            <li><strong>Legal requirements:</strong> We may disclose your information if required by law or in response to valid legal proceedings.</li>
            <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of our business, your information may be transferred to the new owner.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">5. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Order records are typically retained for a minimum of six years for accounting and legal compliance purposes. You may request deletion of your personal data at any time by contacting us, subject to our legal retention obligations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">6. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. These include essential cookies required for the site to function (such as your shopping cart), and analytics cookies that help us understand how visitors use our site. You can disable cookies through your browser settings, though this may affect some functionality of the website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal data (subject to legal requirements)</li>
            <li>Opt out of marketing communications at any time</li>
            <li>Lodge a complaint with the relevant data protection authority in Nigeria</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact us at <a href="mailto:info@miniminix.com" className="text-accent-600 hover:underline">info@miniminix.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">8. Security</h2>
          <p>
            We implement reasonable technical and organisational measures to protect your personal information from unauthorised access, disclosure, alteration, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. We will notify you of any significant changes by posting the updated policy on our website with a revised &ldquo;last updated&rdquo; date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">10. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <ul className="list-none space-y-1 mt-3">
            <li>📧 <a href="mailto:info@miniminix.com" className="text-accent-600 hover:underline">info@miniminix.com</a></li>
            <li>📞 <a href="tel:+2349074576935" className="text-accent-600 hover:underline">+234 907 457 6935</a></li>
            <li>📍 2 Shammah Close, Off Jetty Road, Abuloma, Port Harcourt, Rivers State, Nigeria</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
