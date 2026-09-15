
import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Target, 
  Megaphone, 
  ShoppingBag, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Layers,
  Sparkles
} from 'lucide-react';
import { View } from '../types';
import GlassHero from '../components/GlassHero';

const SolutionsPage: React.FC<{ onNavigate: (v: View) => void, onOpenEnrollment: () => void }> = ({ onNavigate, onOpenEnrollment }) => {
  const services = [
    {
      title: 'Web Development',
      desc: 'Corporate sites, e-commerce, and high-performance web apps built with the latest tech stack.',
      icon: <Globe className="w-5 h-5" />,
      features: ['React/Next.js', 'Node.js', 'WordPress', 'E-commerce']
    },
    {
      title: 'Mobile Apps',
      desc: 'Cross-platform iOS and Android applications that provide seamless user experiences.',
      icon: <Smartphone className="w-5 h-5" />,
      features: ['React Native', 'Flutter', 'Real-time Apps', 'App Store Launch']
    },
    {
      title: 'UI/UX Design',
      desc: 'Strategic design that converts. We build intuitive interfaces and engaging user journeys.',
      icon: <Palette className="w-5 h-5" />,
      features: ['User Research', 'Figma Prototyping', 'Design Systems', 'Testing']
    },
    {
      title: 'Branding',
      desc: 'Identity design that tells your story and connects with your audience across all platforms.',
      icon: <Target className="w-5 h-5" />,
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Collateral', 'Social Media Kits']
    },
    {
      title: 'Digital Marketing',
      desc: 'Data-driven marketing strategies to increase your visibility and scale your business.',
      icon: <Megaphone className="w-5 h-5" />,
      features: ['SEO/SEM', 'Social Media Ads', 'Content Strategy', 'Analytics']
    },
    {
      title: 'E-Commerce',
      desc: 'Full-service e-commerce solutions from store setup to automated inventory management.',
      icon: <ShoppingBag className="w-5 h-5" />,
      features: ['Shopify/WooCommerce', 'Payment Integration', 'Photography', 'Automation']
    }
  ];

  const processSteps = [
    { num: '01', title: 'Discovery', desc: 'Understanding your goals and requirements.' },
    { num: '02', title: 'Prototyping', desc: 'Creating blueprints and visual designs.' },
    { num: '03', title: 'Development', desc: 'Building your solution with clean code.' },
    { num: '04', title: 'Launch', desc: 'Final testing and seamless deployment.' }
  ];

  const industries = ['E-Commerce', 'Education', 'Healthcare', 'Real Estate', 'Finance', 'Restaurants', 'Corporate', 'Creative Agencies'];

  return (
    <div className="pt-16 bg-white">
      <GlassHero
        title={<>Digital Solutions that <span className="text-gradient">Scale</span></>}
        subtitle={"From startups to enterprises, we deliver high-quality custom software and digital products designed to drive growth and efficiency."}
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
        ctaText="Get a Free Consultation"
        onCta={onOpenEnrollment}
      />

      {/* 2️⃣ Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-[#f8f9fc] p-12 rounded-[2.5rem] flex flex-col h-full border border-slate-50 hover:bg-white hover:border-teal-500 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 group cursor-default">
                <div className="w-14 h-14 bg-white text-teal-600 rounded-2xl flex items-center justify-center shadow-sm mb-10 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-black text-[#0b0e29] mb-6">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-medium">{s.desc}</p>
                <ul className="space-y-4 mb-10">
                  {s.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span className="text-slate-700 text-sm font-bold">{f}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={onOpenEnrollment}
                  className="bg-primary-gradient text-white px-8 py-3.5 rounded-xl text-sm font-black hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 w-fit"
                >
                  Start Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ Development Process */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#0b0e29]">Our Development Process</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              We follow a transparent, results-driven process to ensure your vision comes to life exactly as intended.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-[#f8f9fc]/50 p-10 rounded-[2.5rem] border border-slate-50 text-center relative overflow-hidden group">
                <div className="text-8xl font-black text-slate-100 absolute top-4 left-1/2 -translate-x-1/2 group-hover:text-indigo-50 transition-colors">
                  {step.num}
                </div>
                <div className="relative z-10 pt-12">
                  <h4 className="text-xl font-black text-[#0b0e29] mb-4">{step.title}</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Trust Section */}
      <section className="py-24 bg-[#0b0e29]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-12">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Why Companies <span className="text-indigo-400">Trust</span> Us
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <ShieldCheck className="w-7 h-7 text-teal-400" />
                  <h4 className="text-white font-black text-lg">12+ Delivered</h4>
                  <p className="text-slate-400 text-sm font-medium">Proven track record</p>
                </div>
                <div className="space-y-3">
                  <Zap className="w-7 h-7 text-yellow-400" />
                  <h4 className="text-white font-black text-lg">Modern Stack</h4>
                  <p className="text-slate-400 text-sm font-medium">Clean, scalable code</p>
                </div>
                <div className="space-y-3">
                  <Clock className="w-7 h-7 text-blue-400" />
                  <h4 className="text-white font-black text-lg">On-Time</h4>
                  <p className="text-slate-400 text-sm font-medium">Reliable delivery</p>
                </div>
                <div className="space-y-3">
                  <Layers className="w-7 h-7 text-purple-400" />
                  <h4 className="text-white font-black text-lg">Post-Support</h4>
                  <p className="text-slate-400 text-sm font-medium">We grow with you</p>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-7 bg-[#1a1f3d] p-10 md:p-12 rounded-[3.5rem] border border-white/5 space-y-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-white">Target Industries</h3>
                <div className="flex flex-wrap gap-3">
                  {industries.map((ind, i) => (
                    <span key={i} className="bg-white/5 text-slate-300 px-5 py-2.5 rounded-xl text-sm font-bold border border-white/5 hover:bg-white/10 transition-all cursor-default">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 p-10 md:p-12 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                <h4 className="text-white text-2xl font-black text-center md:text-left leading-snug">
                  Transforming Ideas <br className="hidden md:block" /> into Reality.
                </h4>
                <button 
                  onClick={onOpenEnrollment}
                  className="bg-primary-gradient text-white px-10 py-4 rounded-2xl font-black text-lg hover:shadow-2xl transition-all active:scale-95 whitespace-nowrap"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Final CTA Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-gradient rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-indigo-500/30">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
            <div className="relative z-10 space-y-8">
              <div className="inline-flex p-4 rounded-2xl bg-white/20 backdrop-blur-md mb-2">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Ready to scale <br /> your business?
              </h2>
              <div className="space-y-4">
                <p className="text-indigo-50 text-xl max-w-2xl mx-auto font-medium opacity-90">
                  Engineer your success with AuralithBit's enterprise solutions.
                </p>
                <p className="text-indigo-100 text-sm max-w-xl mx-auto leading-relaxed opacity-75">
                  Our team of expert engineers and strategists are ready to partner with you to deliver high-performance, scalable, and secure digital products tailored to your unique business needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button 
                  onClick={onOpenEnrollment}
                  className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black text-lg hover:shadow-xl transition-all hover:-translate-y-1 active:scale-95"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => { onNavigate('solutions'); window.scrollTo(0, 0); }}
                  className="bg-accent-gradient text-white px-10 py-5 rounded-2xl font-black text-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-white/20 flex items-center justify-center gap-2"
                >
                  Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
