import React from 'react';
import { CheckCircle2, Award, Globe, ArrowRight, Lightbulb, Shield, Linkedin, Mail } from 'lucide-react';
import GlassHero from '../components/GlassHero';
import { View } from '../types';

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
        subtitle={"AuralithBit is an IT education and digital solutions provider based in Bhairahawa, Nepal."}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
        ctaText="Learn More About Us"
        onCta={() => { document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }); }}
      />

      {/* 2️⃣ Core Values Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50/50">
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
              <div key={i} className="glass-panel p-6 sm:p-10 rounded-[2.5rem] hover:border-teal-300 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 group cursor-default">
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

      {/* Experience */}
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
                    "Courses cover design, development, marketing, and productivity",
                    "Course listings include online, offline, and hybrid modes",
                    "Internship tracks have a separate application path",
                    "The portfolio presents software and digital project examples"
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
                     <h4 className="font-black text-slate-900">Team collaboration</h4>
                  </div>
                  <p className="text-sm text-slate-500 font-medium">Practical learning and digital product development.</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 5️⃣ Founder & CEO Section */}
      <section id="team" className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/60 py-16 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-teal-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-indigo-600 sm:text-xs sm:tracking-[0.35em]">
              The Vision Behind AuralithBit
            </p>
            <h3 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Meet Our Founder &amp; CEO
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
              The driving force behind our mission to transform IT education and digital solutions.
            </p>
          </header>

          <div className="grid items-stretch gap-5 sm:gap-7 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
            <article className="relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-slate-950 shadow-[0_28px_70px_rgba(15,23,42,0.2)] sm:min-h-[32rem] sm:rounded-[2rem]">
              <img src={ceo.image} alt={ceo.name} className="absolute inset-0 -z-10 h-full w-full object-cover object-center" />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/5 via-slate-950/10 to-slate-950/90" />

              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white glass-panel-dark sm:left-7 sm:top-7 sm:px-4 sm:text-[11px]">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                Founder &amp; CEO
              </div>

              <div className="relative px-5 pb-6 pt-20 sm:px-8 sm:pb-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Leadership</p>
                <h4 className="text-2xl font-black tracking-tight text-white sm:text-3xl">{ceo.name}</h4>
                <div className="mt-5 h-px w-full bg-white/25" />
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
                  Guiding practical learning and client-focused work at AuralithBit.
                </p>
              </div>
            </article>

            <article className="glass-panel flex flex-col justify-center rounded-[1.75rem] p-5 sm:rounded-[2rem] sm:p-8 lg:p-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
                  <Award className="h-5 w-5" />
                </span>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600">AuralithBit Leadership</p>
              </div>

              <h4 className="max-w-xl text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                Building confidence through real-world learning.
              </h4>

              <div className="mt-6 space-y-4 text-sm font-medium leading-7 text-slate-600 sm:text-base">
                <p>Aakriti Bista is the Founder &amp; CEO of AuralithBit. The organization combines IT education with digital product and software services.</p>
                <p>Explore the course catalog, internship tracks, and project portfolio to learn more about AuralithBit’s current offerings.</p>
              </div>

              <div className="mt-7 flex flex-col gap-3 border-t border-slate-200/80 pt-6 sm:flex-row">
                <a href="https://www.linkedin.com/company/auralithbit" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <Linkedin className="h-4 w-4" /> Connect on LinkedIn
                </a>
                <a href="mailto:info@auralithbit.com.np" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-teal-400 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  <Mail className="h-4 w-4" /> Email AuralithBit
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
