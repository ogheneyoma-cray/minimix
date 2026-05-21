'use client';

import { useState, FormEvent } from 'react';
import type { Metadata } from 'next';

const faqs = [
  {
    q: 'How long does delivery take?',
    a: 'We deliver across Nigeria. Orders within Rivers State typically arrive within 1–3 business days. For other states, please allow 3–7 business days depending on your location. Remote areas may take slightly longer. Once your order is dispatched, our delivery team will contact you with a tracking update and estimated delivery window.',
  },
  {
    q: 'What is your return and refund policy?',
    a: 'We accept returns within 14 days of delivery for items that are unworn, unwashed, and in their original condition with all tags attached. To initiate a return, please contact us at info@miniminix.com or call us with your order number. Once we receive and inspect the returned item, we will process your refund or exchange within 5–7 business days. Please note that items marked as final sale are not eligible for return.',
  },
  {
    q: 'How do I determine the right size?',
    a: 'Each product page includes a size guide relevant to that garment\'s cut and style. We recommend taking your measurements — bust, waist, and hips — and comparing them against the size chart before ordering. If you are between sizes, we generally recommend sizing up for comfort, especially in woven fabrics. If you need specific sizing advice, please reach out to us via email or phone and our team will be happy to help.',
  },
  {
    q: 'Do you offer payment on delivery?',
    a: 'Yes! We currently offer pay-on-delivery (POD) for all orders within Nigeria. When your order arrives, our delivery agent will collect payment in cash or via bank transfer. If you prefer to pay in advance via direct bank transfer to confirm your order before dispatch, please contact us and we will provide our account details. We are working on integrating an online payment gateway and will update our customers when this is live.',
  },
  {
    q: 'Can I change or cancel my order after placing it?',
    a: 'Orders can be modified or cancelled within 2 hours of being placed, provided they have not yet been dispatched. Please contact us immediately via phone at +234 907 457 6935 or email info@miniminix.com if you need to make changes. Once an order has been dispatched, we are unable to make changes to the delivery address or cancel the order, but you are welcome to return the items upon delivery in accordance with our returns policy.',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const validate = () => {
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = 'Please enter your name';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Please enter a valid email';
    if (!form.message.trim() || form.message.length < 10)
      errs.message = 'Please enter a message (at least 10 characters)';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <div className="page-container">
      <div className="mb-12">
        <p className="text-accent-600 text-xs font-semibold uppercase tracking-widest mb-1">Get in Touch</p>
        <h1 className="section-heading">Contact Us</h1>
        <p className="mt-2 text-stone-500 text-sm max-w-lg">
          We would love to hear from you. Whether you have a question, need styling advice, or want to give feedback — we are always happy to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-3">✉️</div>
              <h2 className="text-lg font-bold text-green-800 mb-2">Message Received!</h2>
              <p className="text-green-700 text-sm leading-relaxed">
                Thank you for reaching out. We have received your message and a member of our team will get back to you within 24 hours during business days.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
                className="mt-5 text-sm font-medium text-green-700 hover:text-green-900 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => { setForm((f) => ({ ...f, name: e.target.value })); setErrors((er) => ({ ...er, name: undefined })); }}
                  className={`input-field ${errors.name ? 'border-red-400' : ''}`}
                  placeholder="Chioma Obi"
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => { setForm((f) => ({ ...f, email: e.target.value })); setErrors((er) => ({ ...er, email: undefined })); }}
                  className={`input-field ${errors.email ? 'border-red-400' : ''}`}
                  placeholder="chioma@example.com"
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => { setForm((f) => ({ ...f, message: e.target.value })); setErrors((er) => ({ ...er, message: undefined })); }}
                  rows={5}
                  className={`input-field resize-none ${errors.message ? 'border-red-400' : ''}`}
                  placeholder="How can we help you today?"
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>
              <button type="submit" disabled={submitting} className="btn-primary w-full">
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        {/* Store Info */}
        <div className="space-y-6">
          <div className="bg-stone-50 rounded-2xl border border-stone-100 p-6">
            <h2 className="font-bold text-stone-900 text-base mb-5">Store Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-5 h-5 text-accent-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-900">Address</p>
                  <p className="text-sm text-stone-600 mt-0.5">
                    2 Shammah Close, Off Jetty Road<br />
                    Abuloma, Port Harcourt LGA<br />
                    Rivers State, Nigeria
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-5 h-5 text-accent-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-900">Email</p>
                  <a href="mailto:info@miniminix.com" className="text-sm text-accent-600 hover:underline mt-0.5 block">
                    info@miniminix.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-5 h-5 text-accent-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-900">Phone</p>
                  <a href="tel:+2349074576935" className="text-sm text-accent-600 hover:underline mt-0.5 block">
                    +234 907 457 6935
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-5 h-5 text-accent-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-900">Business Hours</p>
                  <div className="text-sm text-stone-600 mt-0.5 space-y-0.5">
                    <p>Monday – Friday: 9:00am – 6:00pm</p>
                    <p>Saturday: 10:00am – 4:00pm</p>
                    <p>Sunday: Closed</p>
                    <p className="text-xs text-stone-400 mt-1">All times are WAT (West Africa Time, UTC+1)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16">
        <h2 className="section-heading mb-8">Frequently Asked Questions</h2>
        <div className="space-y-3 max-w-3xl">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-stone-100 rounded-2xl overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                aria-expanded={openFaq === i}
              >
                <span className="font-semibold text-stone-900 text-sm sm:text-base">{faq.q}</span>
                <span className={`text-accent-600 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-stone-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
