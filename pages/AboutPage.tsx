import React from 'react';
import { CheckCircle2, Award, Globe, ArrowRight, Lightbulb, Shield, Linkedin, Mail } from 'lucide-react';
import GlassHero from '../components/GlassHero';
import { View } from '../types';
import { STATS } from '../constants';

const AboutPage: React.FC<{ onNavigate: (v: View) => void, onOpenEnrollment: () => void }> = ({ onOpenEnrollment }) => {
  const ceo = {
    name: "Aakriti Bista",
    role: "Founder & CEO",
    image: "/team/Aakriti Bista.jpeg"
  };

  return (
    <div className="pt-16 overflow-x-hidden">
      {/* 1️⃣ Glass Hero */}
      <GlassHero
        title={<>About <span className="text-gradient">AuralithBit</span></>}
        subtitle={"Discover the nexus of technical mastery and industry delivery. We are more than an institute; we are the engine of your digital future."}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
        ctaText="Learn More About Us"
        onCta={() => { document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }); }}
      />

      {/* 2️⃣ Core Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs font-black text-indigo-600 uppercase tracking-[0.4em]">Our Foundation</h2>
            <h3 className="text-4xl font-black text-slate-900 tracking-tight">What Drives AuralithBit?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Global Mission', desc: 'To empower the next generation of engineers with production-grade skills that transcend borders.', icon: <Globe className="w-6 h-6" /> },
              { title: 'Visionary Design', desc: 'To define the future of digital products through human-centric design and technical precision.', icon: <Lightbulb className="w-6 h-6" /> },
              { title: 'Core Integrity', desc: 'Building trust through transparent delivery and a commitment to genuine human impact.', icon: <Shield className="w-6 h-6" /> }
            ].map((v, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:border-teal-500 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 group cursor-default">
                <div className="w-14 h-14 bg-white text-teal-600 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">{v.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ Stats Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-gradient opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="text-5xl font-black text-white">{stat.value}</div>
                <div className="text-xs font-bold text-indigo-300 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Experience Excellence */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <h2 className="text-4xl font-black text-slate-900 leading-tight">Bridging the Industry <br /><span className="text-indigo-600">Skill Gap.</span></h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                   Traditional education often fails to keep pace with the rapid evolution of technology. At AuralithBit, we operate as both a high-end development agency and an institute, creating a unique synergy.
                </p>
                <div className="space-y-4">
                  {[
                    "Curriculum built on real client project feedback",
                    "Mentorship from engineers currently in production",
                    "A focus on scalability, security, and performance",
                    "Structured pathways into high-growth corporate roles"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="bg-teal-50 text-teal-500 p-1.5 rounded-full group-hover:bg-teal-500 group-hover:text-white transition-all">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-slate-700 font-bold">{text}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <button onClick={onOpenEnrollment} className="w-full sm:w-auto bg-primary-gradient text-white px-10 py-4 rounded-xl font-bold hover:shadow-2xl transition-all active:scale-95">
                    Get Started with Us
                  </button>
                </div>
             </div>
             <div className="relative">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" className="rounded-[3rem] shadow-2xl border-8 border-slate-50" alt="Team meeting" />
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-4 mb-4">
                     <Award className="w-10 h-10 text-indigo-600" />
                     <h4 className="font-black text-slate-900">Industry Leader</h4>
                  </div>
                  <p className="text-sm text-slate-500 font-medium">Recognized for excellence in <br />technical delivery and training.</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 5️⃣ Founder & CEO Section */}
      <section id="team" className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs font-black text-indigo-600 uppercase tracking-[0.4em]">The Vision Behind AuralithBit</h2>
            <h3 className="text-4xl font-black text-slate-900 tracking-tight">Meet Our Founder & CEO</h3>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              The driving force behind our mission to transform IT education and digital solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="flex justify-center">
              <div className="flex flex-col items-center bg-white rounded-2xl p-8 border border-slate-100 shadow-lg max-w-sm w-full">
                <div className="w-44 h-44 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-inner">
                  <img src={ceo.image} alt={ceo.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center mt-4">
                  <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900">{ceo.name}</h4>
                  <p className="text-xs sm:text-sm text-indigo-600 uppercase tracking-widest mt-1">{ceo.role}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm w-full">
                <h4 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">About Our CEO</h4>
                <p className="text-slate-600 font-medium leading-relaxed mb-3">
                  Aakriti leads AuralithBit with a clear focus on bridging education and industry. She prioritizes hands-on, project-based learning and client-focused solutions so students graduate with practical skills and workplace confidence.
                </p>
                <p className="text-slate-600 font-medium leading-relaxed mb-4">
                  Under her leadership, the institute partners with real clients to give learners exposure to production workflows and delivers enterprise-grade digital solutions that help businesses scale. Her approach blends mentorship, practical experience, and a strong industry network.
                </p>
                <div className="mt-4">
                  <a href="#" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition mr-3">
                    <Linkedin className="w-4 h-4" /> Connect
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 bg-white text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold border border-slate-200 hover:border-teal-500 hover:text-teal-600 transition">
                    <Mail className="w-4 h-4" /> Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;