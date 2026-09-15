import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock
} from 'lucide-react';
import { View } from '../types';
import GlassHero from '../components/GlassHero';

// All form submissions are delivered as a pre-filled WhatsApp message to this number.
const WHATSAPP_NUMBER = '9779766715793'; // +977 9766715793 (country code required for wa.me links)

const ContactPage: React.FC<{ onNavigate: (v: View) => void, onOpenEnrollment: () => void }> = ({ onOpenEnrollment }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const handleChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build a pre-filled WhatsApp message with the form details and open it
    // so the submission is delivered straight to AuralithBit's WhatsApp.
    const lines = [
      '*New Contact Form Message*',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      formData.course ? `Interested Course: ${formData.course}` : '',
      `Message: ${formData.message}`,
    ].filter(Boolean);
    const message = encodeURIComponent(lines.join('\n'));
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      alert("Thank you! We've opened WhatsApp with your message ready to send to our team.");
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    }, 800);
  };

  return (
    <div className="pt-16 bg-white">
      <GlassHero
        title={<>Contact <span className="text-gradient">Us</span></>}
        subtitle={"Have questions about our IT training or enterprise solutions? We're here to help you navigate your digital transformation journey."}
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000"
        ctaText="Get Started Today"
        onCta={onOpenEnrollment}
      />

      {/* 2️⃣ "Get In Touch" Section */}
      <section id="contact-form" className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Get In Touch</h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto font-medium leading-relaxed">
              Have questions? We are here to help. Reach out to us for course details, admission process, or career guidance.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: Send us a Message Form */}
            <div className="lg:col-span-7 bg-white p-10 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300">
              <h3 className="text-2xl font-black text-slate-900 mb-8">Send us a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input required type="text" value={formData.name} onChange={handleChange('name')} placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-300 font-medium" />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input required type="email" value={formData.email} onChange={handleChange('email')} placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-300 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <input required type="text" value={formData.phone} onChange={handleChange('phone')} placeholder="+977 9800000000" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-300 font-medium" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Interested Course</label>
                  <select value={formData.course} onChange={handleChange('course')} className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-bold text-slate-600 appearance-none">
                    <option value="">Select a course</option>
                    <option>Full Stack Web Development</option>
                    <option>UI/UX Design Masterclass</option>
                    <option>Data Science & AI</option>
                    <option>Mobile App Engineering</option>
                    <option>Enterprise IT Solutions</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                  <textarea required rows={5} value={formData.message} onChange={handleChange('message')} placeholder="Tell us about your learning goals..." className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-300 font-medium"></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-primary-gradient text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Contact Information Cards */}
            <div className="lg:col-span-5 grid sm:grid-cols-2 gap-6">
              {/* Visit Us */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm group hover:shadow-2xl hover:border-teal-500 hover:shadow-teal-500/10 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-2">Visit Us</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  SNP-05, Milan Chowk, Bhairahawa<br />
                  Rupandehi, Nepal
                </p>
              </div>

              {/* Call Us */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm group hover:shadow-2xl hover:border-teal-500 hover:shadow-teal-500/10 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-2">Call Us</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  +977 9766715783<br />
                  +977 9766715793
                </p>
              </div>

              {/* Email Us */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm group hover:shadow-2xl hover:border-teal-500 hover:shadow-teal-500/10 transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-2">Email Us</h4>
                <p className="text-slate-500 text-xs font-medium leading-relaxed break-all">
                  info@auralithbit.com.np
                </p>
              </div>

              {/* Working Hours */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm group hover:shadow-2xl hover:border-teal-500 hover:shadow-teal-500/10 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-2">Working Hours</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Sun - Fri: 7:00 AM - 6:00 PM<br />
                  Saturday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f0f4f8] rounded-[3rem] p-1 border border-slate-100 shadow-inner overflow-hidden relative min-h-[500px] flex items-center justify-center group">
            <div className="absolute inset-0 z-0">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14138.868019349883!2d83.43577317240398!3d27.50917614041187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399696667a969343%3A0x6734c5678996e123!2sLumbini%20Rd%2C%20Bhairahawa!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp" 
                width="100%" 
                height="100%" 
                style={{ border: 0, opacity: 0.8 }} 
                allowFullScreen={true} 
                loading="lazy" 
                className="group-hover:opacity-100 transition-opacity duration-700"
              ></iframe>
            </div>

            {/* Placeholder-style overlay matching the reference image */}
            <div className="relative z-10 flex flex-col items-center gap-4 pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <div className="w-8 h-8 rounded-full border-4 border-red-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
               </div>
               <p className="text-[#8ba2ba] font-bold text-xl tracking-tight">Visit Our Institution</p>
            </div>
            
            {/* Real location info card overlay */}
            <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-white shadow-2xl hidden md:flex items-center gap-4 z-20 hover:border-teal-500 hover:shadow-teal-500/20 group-hover:scale-105 transition-all duration-300">
               <div className="bg-primary-gradient p-3 rounded-xl shadow-lg">
                  <MapPin className="text-white w-6 h-6" />
               </div>
                <div>
                   <h4 className="font-black text-slate-900 text-sm tracking-tight">AuralithBit</h4>
                  <p className="text-slate-500 font-bold uppercase text-[9px] tracking-[0.2em] mt-0.5">SNP-05, Milan Chowk, Bhairahawa, Nepal</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;