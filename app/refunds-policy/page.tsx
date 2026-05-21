import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refunds & Returns Policy',
  description: 'MINI-MINIX LTD refunds and returns policy — everything you need to know.',
};

export default function RefundsPolicyPage() {
  return (
    <div className="page-container max-w-3xl">
      <nav className="flex items-center gap-2 text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-accent-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-stone-700">Refunds Policy</span>
      </nav>

      <h1 className="section-heading mb-2">Refunds &amp; Returns Policy</h1>
      <p className="text-stone-400 text-sm mb-10">Last updated: January 2025</p>

      <div className="prose prose-stone max-w-none space-y-8 text-stone-600 text-sm sm:text-base leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">1. Overview</h2>
          <p>
            At MINI-MINIX LTD, your satisfaction is our priority. If you are not completely happy with your purchase, we have a straightforward returns and refunds process designed to be as hassle-free as possible. Please read this policy carefully before initiating a return.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">2. Return Eligibility</h2>
          <p>To be eligible for a return, items must meet the following conditions:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>The item must be returned within <strong>14 days</strong> of the delivery date.</li>
            <li>The item must be unworn, unwashed, and in its original condition.</li>
            <li>All original tags must still be attached to the garment.</li>
            <li>The item must be returned in its original packaging where possible.</li>
            <li>Proof of purchase (order number or receipt) must be provided.</li>
          </ul>
          <p className="mt-3">
            Items that do not meet these conditions will not be accepted for return and will be sent back to the customer at their expense.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">3. Non-Returnable Items</h2>
          <p>The following items are not eligible for return or refund:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>Items clearly marked as <strong>Final Sale</strong> or <strong>Clearance</strong> at the time of purchase</li>
            <li>Intimates, swimwear, and underwear (for hygiene reasons)</li>
            <li>Items that show signs of wear, washing, or alteration</li>
            <li>Items returned after the 14-day window has expired</li>
            <li>Gift cards and store credits</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">4. How to Initiate a Return</h2>
          <p>To start a return, please follow these steps:</p>
          <ol className="list-decimal pl-5 space-y-2 mt-3">
            <li>Contact us at <a href="mailto:info@miniminix.com" className="text-accent-600 hover:underline">info@miniminix.com</a> or call <a href="tel:+2349074576935" className="text-accent-600 hover:underline">+234 907 457 6935</a> within 14 days of delivery.</li>
            <li>Provide your order number, the item(s) you wish to return, and the reason for the return.</li>
            <li>Our customer care team will confirm your return eligibility and provide return instructions within 24 hours.</li>
            <li>Ship or bring the item(s) to our store at 2 Shammah Close, Off Jetty Road, Abuloma, Port Harcourt.</li>
            <li>Once we receive and inspect the return, we will process your refund or exchange within 5–7 business days.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">5. Refund Methods</h2>
          <p>
            Approved refunds will be issued via bank transfer to the account details you provide. We do not currently offer credit card reversals, as our primary payment method is pay-on-delivery. Refunds are typically processed within 5–7 business days of us receiving and approving the return. You will receive a confirmation message once your refund has been processed.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">6. Exchanges</h2>
          <p>
            If you would like to exchange an item for a different size or colour, please initiate the process in the same way as a return. Exchanges are subject to stock availability. If the desired size or colour is not in stock, we will offer a full refund or store credit instead.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">7. Defective or Incorrect Items</h2>
          <p>
            If you receive a defective, damaged, or incorrect item, please contact us within 48 hours of delivery with photographs of the item. We will arrange a replacement or full refund at no additional cost to you, including the cost of return shipping where applicable.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">8. Return Shipping Costs</h2>
          <p>
            Unless the return is due to our error (wrong item sent, defective product), the cost of return shipping is the responsibility of the customer. We recommend using a tracked delivery service for returns, as we cannot be held responsible for items lost in transit to us.
          </p>
        </section>
      </div>
    </div>
  );
}
