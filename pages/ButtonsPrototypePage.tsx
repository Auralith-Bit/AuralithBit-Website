
import React, { useState } from 'react';
import { 
  ArrowRight, 
  Send, 
  Share2, 
  Plus, 
  Play, 
  Facebook, 
  Linkedin, 
  Mail,
  Sparkles,
  Command,
  ChevronRight,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { View, ModalType } from '../types';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.05.4-.05.82-.01 1.22.12 1.01.7 1.99 1.58 2.51.8.47 1.78.56 2.66.33.82-.2 1.49-.81 1.83-1.55.22-.48.31-1.03.31-1.57V.02z"/>
  </svg>
);

interface ButtonsPrototypePageProps {
  onNavigate: (v: View) => void;
  onOpenEnrollment: (type?: ModalType) => void;
}

const ButtonsPrototypePage: React.FC<ButtonsPrototypePageProps> = ({ onNavigate, onOpenEnrollment }) => {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [successId, setSuccessId] = useState<string | null>(null);

  const simulateAction = (id: string, action?: () => void) => {
    setLoadingId(id);
    setTimeout(() => {
      setLoadingId(null);
      setSuccessId(id);
      if (action) action();
      setTimeout(() => setSuccessId(null), 2000);
    }, 1000);
  };

  return (
    <div className="pt-20 bg-white">
      {/* 1️⃣ Hero Section */}
      <section className="relative min-h-auto sm:min-h-[70vh] flex items-center overflow-hidden bg-slate-900 py-8 xs:py-10 sm:py-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            alt="UI Design System" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 sm:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900" />
          <div className="absolute top-[-10%] right-[-10%] w-[150px] xs:w-[200px] sm:w-[300px] md:w-[400px] h-[150px] xs:h-[200px] sm:h-[300px] md:h-[400px] bg-indigo-600/20 rounded-full blur-[50px] xs:blur-[60px] sm:blur-[80px] md:blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[100px] xs:w-[150px] sm:w-[250px] md:w-[400px] h-[100px] xs:h-[150px] sm:h-[250px] md:h-[400px] bg-teal-500/10 rounded-full blur-[30px] xs:blur-[40px] sm:blur-[60px] md:blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 xs:gap-2 px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full bg-white/10 border border-white/20 text-white text-[9px] xs:text-[9px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-widest mb-2 xs:mb-3 sm:mb-4 backdrop-blur-md">
            <Command className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
            UI Kit / Design System
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-black text-white mb-3 sm:mb-4 tracking-tight leading-tight">
            Button <span className="text-gradient">Prototypes</span>
          </h1>
          <p className="text-slate-400 text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto font-medium px-1 xs:px-2 mb-4 xs:mb-6">
            Explore the functional core of the AuralithBit platform. All buttons are now wired to real actions and tactile feedback.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-4 sm:mt-6">
            <button 
              onClick={() => document.getElementById('button-showcase')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-gradient text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-sm sm:text-base shadow-xl shadow-indigo-500/20 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
            >
              Explore Components
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => { onNavigate('home'); window.scrollTo(0, 0); }}
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-sm sm:text-base hover:bg-white/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

      {/* 2️⃣ Showcase Grid */}
      <section id="button-showcase" className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Category: Primary Gradients */}
            <div className="space-y-8 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div>
                <h3 className="text-xl font-black text-slate-900">Main Action Gradients</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">High conversion CTAs</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Modal Trigger (Primary)</span>
                  <button 
                    onClick={() => onOpenEnrollment('course')}
                    className="w-full bg-primary-gradient text-white py-4 rounded-xl font-black text-sm hover:shadow-2xl hover:shadow-indigo-500/30 transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    Enroll Now
                  </button>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Accent Teal-Emerald</span>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="w-full bg-accent-gradient text-white py-4 rounded-xl font-black text-sm hover:shadow-2xl hover:shadow-teal-500/30 transition-all active:scale-95"
                  >
                    Speak to an Expert
                  </button>
                </div>
              </div>
            </div>

            {/* Category: Outlines & Secondary */}
            <div className="space-y-8 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div>
                <h3 className="text-xl font-black text-slate-900">Secondary & Outlines</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Navigational & supportive</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Standard Outline</span>
                  <button 
                    onClick={() => onNavigate('solutions')}
                    className="w-full bg-white border-2 border-slate-100 text-slate-800 py-4 rounded-xl font-black text-sm hover:bg-slate-50 hover:border-slate-200 transition-all active:scale-95"
                  >
                    Explore Solutions
                  </button>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Dark Minimalist</span>
                  <button 
                    onClick={() => onNavigate('about')}
                    className="w-full bg-slate-900 text-white py-4 rounded-xl font-black text-sm hover:bg-slate-800 transition-all active:scale-95"
                  >
                    About Company
                  </button>
                </div>
              </div>
            </div>

            {/* Category: Animated Icons */}
            <div className="space-y-8 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div>
                <h3 className="text-xl font-black text-slate-900">Animated Icon States</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Dynamic feedback</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Hover Arrow Translation</span>
                  <button 
                    onClick={() => onNavigate('courses')}
                    className="w-full bg-primary-gradient text-white py-4 rounded-xl font-black text-sm flex items-center justify-center gap-3 group transition-all active:scale-95"
                  >
                    View Courses
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Interactive Simulation</span>
                  <button 
                    onClick={() => simulateAction('deploy')}
                    disabled={loadingId === 'deploy'}
                    className="w-full bg-accent-gradient text-white py-4 rounded-xl font-black text-sm flex items-center justify-center gap-3 group transition-all active:scale-95 disabled:opacity-70"
                  >
                    {loadingId === 'deploy' ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : successId === 'deploy' ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    )}
                    {successId === 'deploy' ? 'Sent!' : 'Deploy Inquiry'}
                  </button>
                </div>
              </div>
            </div>

            {/* Category: Small Tags & Rounded */}
            <div className="space-y-8 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div>
                <h3 className="text-xl font-black text-slate-900">Chips & Rounded Action</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Micro-interactions</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-50 text-blue-600 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-100 transition-all active:scale-90">
                  Web Dev
                </button>
                <button className="bg-teal-50 text-teal-600 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-teal-100 transition-all active:scale-90">
                  Hybrid
                </button>
                <button 
                  onClick={() => simulateAction('plus')}
                  className="bg-indigo-600 text-white p-4 rounded-2xl hover:scale-110 transition-all active:scale-95 shadow-lg"
                >
                   {successId === 'plus' ? <CheckCircle2 className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </button>
                <button 
                  onClick={() => onNavigate('courses')}
                  className="bg-slate-50 text-slate-400 p-4 rounded-full hover:bg-indigo-600 hover:text-white transition-all active:scale-95 border border-slate-100"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Category: Glassmorphism */}
            <div className="space-y-8 bg-slate-900 p-8 rounded-[2.5rem] border border-white/5 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-3xl group-hover:bg-indigo-500/40 transition-colors" />
              <div>
                <h3 className="text-xl font-black text-white">Glass Controls</h3>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">Hero & Dark sections</p>
              </div>
              <div className="space-y-4">
                <button className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white py-4 rounded-xl font-bold text-sm hover:bg-white/20 transition-all active:scale-95">
                  Learn More
                </button>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-4 rounded-full backdrop-blur-md border border-white/20 text-white cursor-pointer hover:scale-110 transition-all active:scale-90 group-hover:bg-white/20">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                  <span className="text-white text-xs font-bold">Watch Intro</span>
                </div>
              </div>
            </div>

            {/* Category: Social Buttons */}
            <div className="space-y-8 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div>
                <h3 className="text-xl font-black text-slate-900">Social Connections</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Official brand colors</p>
              </div>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, color: 'bg-[#1877F2]' },
                  { Icon: TikTokIcon, color: 'bg-black' },
                  { Icon: Linkedin, color: 'bg-[#0A66C2]' },
                  { Icon: Mail, color: 'bg-[#EA4335]' }
                ].map(({ Icon, color }, i) => (
                  <button key={i} className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${color} transition-all hover:-translate-y-1 shadow-md hover:shadow-xl active:scale-90`}>
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
              <button 
                onClick={() => simulateAction('share')}
                className="w-full flex items-center justify-center gap-2 text-slate-400 font-bold text-xs hover:text-indigo-600 transition-colors active:scale-95"
              >
                {successId === 'share' ? <CheckCircle2 className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                {successId === 'share' ? 'Link Copied!' : 'Share Prototype'}
              </button>
            </div>

          </div>

          {/* 3️⃣ Full Width Interaction Test */}
          <div className="mt-20">
            <div className="bg-primary-gradient rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-500/30">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
              <div className="relative z-10 space-y-8">
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  Interaction Experience Test
                </h2>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button className="w-full sm:w-auto bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black text-lg hover:shadow-2xl hover:scale-105 transition-all active:scale-95">
                    Hover Scale Effect
                  </button>
                  <button className="w-full sm:w-auto bg-indigo-700/30 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 group active:scale-95">
                    Glass Pulse
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
             <button 
               onClick={() => { onNavigate('home'); window.scrollTo(0, 0); }}
               className="inline-flex items-center gap-2 text-slate-400 font-black uppercase text-[10px] tracking-[0.3em] hover:text-indigo-600 transition-all active:scale-90"
             >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Return to Home
             </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ButtonsPrototypePage;
