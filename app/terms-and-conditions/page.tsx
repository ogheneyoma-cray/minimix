import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using the MINI-MINIX LTD website and services.',
};

export default function TermsPage() {
  return (
    <div className="page-container max-w-3xl">
      <nav className="flex items-center gap-2 text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-accent-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-stone-700">Terms &amp; Conditions</span>
      </nav>

      <h1 className="section-heading mb-2">Terms &amp; Conditions</h1>
      <p className="text-stone-400 text-sm mb-10">Last updated: January 2025</p>

      <div className="prose prose-stone max-w-none space-y-8 text-stone-600 text-sm sm:text-base leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the MINI-MINIX LTD website and services, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please refrain from using our website or placing an order. These terms apply to all visitors, users, and customers of our website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">2. Products and Pricing</h2>
          <p>
            All products listed on our website are subject to availability. We reserve the right to discontinue any product at any time without notice. Product images are for illustrative purposes only and may vary slightly from the actual product.
          </p>
          <p className="mt-3">
            Prices are listed in United States Dollars (USD) with a Nigerian Naira (NGN) equivalent displayed as a guide. The NGN price is calculated using an indicative exchange rate and may differ slightly from the exact rate applied at the time of your transaction. All prices are inclusive of applicable taxes unless stated otherwise. We reserve the right to change prices without notice, though confirmed orders will be honoured at the price stated at the time of purchase.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">3. Orders and Contract</h2>
          <p>
            When you place an order, you are making an offer to purchase the selected items at the stated price. An order is not confirmed until you receive an order confirmation from us. We reserve the right to refuse or cancel any order at our discretion, including in cases of product unavailability, pricing errors, or suspected fraud. If your order is cancelled after payment has been made, a full refund will be issued.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">4. Payment</h2>
          <p>
            Our primary payment method is pay-on-delivery (POD) for all orders within Nigeria. The total amount due will be confirmed to you before dispatch, and payment is expected at the time of delivery. We accept cash and bank transfers. Failure to make payment upon delivery may result in the order being returned to our store, and future orders may require advance payment.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">5. User Responsibilities</h2>
          <p>When using our website and services, you agree to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>Provide accurate and truthful information when placing orders</li>
            <li>Not use the website for any unlawful or fraudulent purpose</li>
            <li>Not attempt to gain unauthorised access to our systems or data</li>
            <li>Not interfere with the proper operation of our website</li>
            <li>Respect the intellectual property rights of MINI-MINIX LTD</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">6. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text, images, logos, graphics, and product descriptions, is the property of MINI-MINIX LTD or its licensors and is protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, or use any content from this website without our prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, MINI-MINIX LTD shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or products. Our total liability to you for any claim arising from the use of our services shall not exceed the amount you paid for the order in question.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">8. Returns and Refunds</h2>
          <p>
            Returns and refunds are governed by our <Link href="/refunds-policy" className="text-accent-600 hover:underline">Refunds &amp; Returns Policy</Link>, which forms part of these Terms and Conditions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">10. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Rivers State, Nigeria.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">11. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of the website after any changes constitutes your acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">12. Contact</h2>
          <p>If you have any questions about these Terms and Conditions, please contact us:</p>
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
