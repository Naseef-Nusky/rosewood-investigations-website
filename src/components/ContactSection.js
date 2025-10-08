import React, { useState } from 'react';

const ContactSection = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', message: '' });
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const phoneOk = /^\+?\d[\d\s-]{6,}$/.test(form.phone);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); /* hook up later */ };

  return (
    <section id="contact"
      className="pt-16 pb-16 md:pt-24 md:pb-24 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/contact-bottom.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Call Us Today For A Free Confidential Discussion</h2>
          <p className="text-gray-200 mt-3 max-w-3xl mx-auto">
            Looking for confidential advice from a trusted private investigator in the county town of Guildford, Surrey? Then look no further than Rosewood Investigations. We offer a wide range of services in both Guildford and across the whole of the UK tailored to your specific needs, all delivered with professionalism, ethics, and confidentiality. No matter how challenging your situation may seem, we’ll work tirelessly to uncover the truth. Get in touch with Rosewood Investigations today and let us guide you toward clarity and resolution.
          </p>
          <div className="mt-4 inline-flex items-center justify-center text-teal-300 font-semibold">
            <span className="mr-2">📞</span> <span>0740 7612 398</span>
          </div>
        </div>

        <form onSubmit={submit} className="bg-white/95 backdrop-blur rounded-2xl shadow-sm border border-white/20 p-6 md:p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">First Name*</label>
              <input name="firstName" value={form.firstName} onChange={handle} required className={`w-full px-6 py-4 rounded-xl focus:ring-teal-500 text-left ${form.firstName.trim() ? 'border-gray-300 focus:border-teal-500' : 'border-red-300 focus:border-red-500'}`} placeholder="First Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Last Name*</label>
              <input name="lastName" value={form.lastName} onChange={handle} required className={`w-full px-6 py-4 rounded-xl focus:ring-teal-500 text-left ${form.lastName.trim() ? 'border-gray-300 focus:border-teal-500' : 'border-red-300 focus:border-red-500'}`} placeholder="Last Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Phone*</label>
              <input name="phone" value={form.phone} onChange={handle} required className={`w-full px-6 py-4 rounded-xl focus:ring-teal-500 text-left ${phoneOk ? 'border-gray-300 focus:border-teal-500' : 'border-red-300 focus:border-red-500'}`} placeholder="Phone" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Email*</label>
              <input type="email" name="email" value={form.email} onChange={handle} required className={`w-full px-6 py-4 rounded-xl focus:ring-teal-500 text-left ${emailOk ? 'border-gray-300 focus:border-teal-500' : 'border-red-300 focus:border-red-500'}`} placeholder="Email" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Message</label>
              <textarea name="message" rows={4} value={form.message} onChange={handle} className="w-full px-6 py-4 rounded-xl border-gray-300 focus:border-teal-500 focus:ring-teal-500 text-left" placeholder="How can we help?" />
            </div>
          </div>
          <div className="mt-6 text-right">
            <button type="submit" disabled={!form.firstName || !form.lastName || !emailOk || !phoneOk} className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold text-white ${form.firstName && form.lastName && emailOk && phoneOk ? 'bg-teal-600 hover:bg-teal-700' : 'bg-gray-400 cursor-not-allowed'}`}>Get in touch</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;


