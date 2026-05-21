import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shipping Policy',
  description: 'Learn how MINI-MINIX LTD ships your orders across Nigeria.',
};

export default function ShippingPolicyPage() {
  return (
    <div className="page-container max-w-3xl">
      <nav className="flex items-center gap-2 text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-accent-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-stone-700">Shipping Policy</span>
      </nav>

      <h1 className="section-heading mb-2">Shipping Policy</h1>
      <p className="text-stone-400 text-sm mb-10">Last updated: January 2025</p>

      <div className="prose prose-stone max-w-none space-y-8 text-stone-600 text-sm sm:text-base leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">1. Where We Ship</h2>
          <p>
            MINI-MINIX LTD currently ships to all 36 states and the Federal Capital Territory (FCT) of Nigeria. We specialise in deliveries across Rivers State, where most orders are fulfilled the fastest. We are a physical store based in Port Harcourt and operate as an in-store and online fashion retailer. At this time, we do not ship internationally, but we are actively working towards offering cross-border shipping for our diaspora customers in the near future.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">2. Shipping Timelines</h2>
          <p>We process and dispatch all orders within 1–2 business days of receiving them. Delivery timelines after dispatch are as follows:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li><strong>Port Harcourt (and Abuloma environs):</strong> Same day to next business day</li>
            <li><strong>Rivers State (other areas):</strong> 1–3 business days</li>
            <li><strong>South-South and South-East regions:</strong> 2–4 business days</li>
            <li><strong>Lagos, Abuja, and major metropolitan areas:</strong> 3–5 business days</li>
            <li><strong>Other states and remote areas:</strong> 4–7 business days</li>
          </ul>
          <p className="mt-3">
            Please note that these are estimated timeframes and may vary during peak seasons (Christmas, Eid, Valentine&apos;s Day, etc.) or due to logistical disruptions beyond our control. We will communicate any expected delays proactively.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">3. Shipping Costs</h2>
          <p>
            Shipping fees are calculated based on your delivery location and the size/weight of your order. The shipping cost for your specific order will be communicated to you upon order confirmation before dispatch. We offer <strong>free shipping</strong> on orders that meet our minimum qualifying threshold (reviewed periodically — check our homepage for current promotions).
          </p>
          <p className="mt-3">
            For in-store collections at our Port Harcourt address, there is no shipping fee. Walk-in customers are always welcome during our business hours.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">4. Order Tracking</h2>
          <p>
            Once your order is dispatched, you will receive a call or WhatsApp message from our delivery partner with an estimated delivery window. We do not currently provide automated online tracking, but our customer care team can provide live delivery updates upon request. Please contact us at info@miniminix.com or +234 907 457 6935 with your order number.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">5. Failed Deliveries</h2>
          <p>
            If delivery is unsuccessful due to an incorrect address, unavailability of the recipient, or inaccessibility of the premises, our delivery agent will attempt redelivery once. After two failed attempts, the item will be returned to our store. You will be contacted to arrange redelivery, which may incur an additional shipping fee.
          </p>
          <p className="mt-3">
            To avoid failed deliveries, please ensure your contact number is correct and active at the time of expected delivery, and that the delivery address is complete and accurate.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">6. Damaged or Lost Shipments</h2>
          <p>
            In the rare event that your order arrives damaged or does not arrive at all, please contact us within 48 hours of the expected delivery date. We will investigate with our logistics partner and, where responsibility is confirmed on our end, we will arrange a replacement or refund at no additional cost to you. Please keep all packaging and take photographs of any damaged items to assist our investigation.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-3">7. Contact Us</h2>
          <p>
            For any shipping-related enquiries, please do not hesitate to reach out to our customer support team:
          </p>
          <ul className="list-none space-y-1 mt-3">
            <li>📧 <a href="mailto:info@miniminix.com" className="text-accent-600 hover:underline">info@miniminix.com</a></li>
            <li>📞 <a href="tel:+2349074576935" className="text-accent-600 hover:underline">+234 907 457 6935</a></li>
            <li>📍 2 Shammah Close, Off Jetty Road, Abuloma, Port Harcourt, Rivers State</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
