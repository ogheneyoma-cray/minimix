'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/components/CurrencyDisplay';
import { Currency } from '@/types';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  notes: string;
}

const EMPTY_FORM: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  notes: '',
};

export default function CheckoutPage() {
  const router = useRouter();
  const { items, cartTotal, cartCount, clearCart } = useCart();
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [currency] = useState<Currency>('NGN');
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const shipping = cartTotal >= 31 ? 0 : 5;
  const total = cartTotal + shipping;

  if (items.length === 0) {
    return (
      <div className="page-container flex flex-col items-center justify-center min-h-[60vh] text-center">
        <span className="text-7xl mb-6">🛒</span>
        <h1 className="section-heading mb-3">Your cart is empty</h1>
        <p className="text-stone-500 mb-8">Add items to your cart before checking out.</p>
        <Link href="/shop" className="btn-primary">Browse Products</Link>
      </div>
    );
  }

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!form.firstName.trim()) errs.firstName = 'First name is required';
    if (!form.lastName.trim()) errs.lastName = 'Last name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Valid email is required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    if (!form.address.trim()) errs.address = 'Delivery address is required';
    if (!form.city.trim()) errs.city = 'City is required';
    if (!form.state.trim()) errs.state = 'State is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    const orderNumber = `MMX-${Date.now().toString(36).toUpperCase()}`;
    sessionStorage.setItem('miniminix-order', JSON.stringify({ orderNumber, form, items, total }));
    clearCart();
    router.push(`/order-confirmation?order=${orderNumber}`);
  };

  return (
    <div className="page-container">
      <div className="mb-10">
        <h1 className="section-heading">Checkout</h1>
        <p className="text-stone-500 text-sm mt-1">Complete your order below</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact */}
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
              <h2 className="font-bold text-stone-900 text-base mb-5 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-accent-600 text-white text-xs font-bold flex items-center justify-center">1</span>
                Contact Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={handleChange('firstName')}
                    className={`input-field ${errors.firstName ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : ''}`}
                    placeholder="Ada"
                  />
                  {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={handleChange('lastName')}
                    className={`input-field ${errors.lastName ? 'border-red-400' : ''}`}
                    placeholder="Okafor"
                  />
                  {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    className={`input-field ${errors.email ? 'border-red-400' : ''}`}
                    placeholder="ada@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    className={`input-field ${errors.phone ? 'border-red-400' : ''}`}
                    placeholder="+234 800 000 0000"
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Delivery */}
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
              <h2 className="font-bold text-stone-900 text-base mb-5 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-accent-600 text-white text-xs font-bold flex items-center justify-center">2</span>
                Delivery Address
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    Street Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.address}
                    onChange={handleChange('address')}
                    className={`input-field ${errors.address ? 'border-red-400' : ''}`}
                    placeholder="5 Example Street, GRA Phase 2"
                  />
                  {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={handleChange('city')}
                      className={`input-field ${errors.city ? 'border-red-400' : ''}`}
                      placeholder="Port Harcourt"
                    />
                    {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">
                      State <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={form.state}
                      onChange={handleChange('state')}
                      className={`input-field ${errors.state ? 'border-red-400' : ''}`}
                    >
                      <option value="">Select State</option>
                      {['Abia','Adamawa','Akwa Ibom','Anambra','Bauchi','Bayelsa','Benue','Borno','Cross River','Delta','Ebonyi','Edo','Ekiti','Enugu','FCT','Gombe','Imo','Jigawa','Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara','Lagos','Nasarawa','Niger','Ogun','Ondo','Osun','Oyo','Plateau','Rivers','Sokoto','Taraba','Yobe','Zamfara'].map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Postal Code</label>
                    <input
                      type="text"
                      value={form.zipCode}
                      onChange={handleChange('zipCode')}
                      className="input-field"
                      placeholder="500001"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    Order Notes <span className="text-stone-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    value={form.notes}
                    onChange={handleChange('notes')}
                    rows={3}
                    className="input-field resize-none"
                    placeholder="Special delivery instructions, gate code, etc."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 sticky top-24">
              <h2 className="font-bold text-stone-900 text-base mb-5">
                Order Summary ({cartCount} items)
              </h2>
              <div className="space-y-3 mb-5">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="relative w-12 h-14 rounded-lg overflow-hidden bg-stone-100 shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="48px" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-stone-900 line-clamp-1">{item.name}</p>
                      <p className="text-xs text-stone-400">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-xs font-bold text-stone-900 shrink-0">
                      {formatPrice(item.price * item.quantity, currency)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-stone-200 pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(cartTotal, currency)}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? 'text-green-600' : ''}>
                    {shipping === 0 ? 'Free' : formatPrice(shipping, currency)}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-base text-stone-900 pt-2 border-t border-stone-200">
                  <span>Total</span>
                  <span>{formatPrice(total, currency)}</span>
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full mt-6 disabled:opacity-70"
              >
                {submitting ? 'Placing Order...' : 'Place Order'}
              </button>
              <p className="text-xs text-center text-stone-400 mt-3">
                Payment is collected upon delivery
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
