
import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Sparkles, User, Mail, Phone, BookOpen, Rocket, Briefcase, Building, Link as LinkIcon, Globe } from 'lucide-react';
import { ModalType } from '../types';
import { COURSES } from '../constants';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: ModalType;
}

const AURALITH_EMAIL = 'info@auralithbit.com.np';

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose, type }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selection: '',
    extra: '' // Used for Portfolio URL or Company Name
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Set default selection based on type
      const courseOptions = COURSES.map(c => c.title);
      const internshipOptions = ['Web Development', 'UI/UX Design', 'Digital Marketing', 'Mobile App', 'Graphics Design', 'Full Stack'];
      const defaultSelection = 
        type === 'course' ? courseOptions[0] :
        type === 'internship' ? internshipOptions[0] :
        'Custom Software Solutions';
      setFormData(prev => ({ ...prev, selection: defaultSelection }));
    } else {
      document.body.style.overflow = 'unset';
      setTimeout(() => {
        setStep('form');
        setFormData({ name: '', email: '', phone: '', selection: '', extra: '' });
      }, 300);
    }
  }, [isOpen, type]);

  const content_typeLabel = type === 'internship' ? 'Internship Application' : type === 'solution' ? 'Business Solution Inquiry' : 'Course Enrollment';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const currentContent = getModalContent();
    const lines = [
      `New ${content_typeLabel}`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `${currentContent.selectionLabel}: ${formData.selection}`,
      currentContent.extraLabel ? `${currentContent.extraLabel}: ${formData.extra}` : '',
    ].filter(Boolean);
    const subject = encodeURIComponent(`New ${content_typeLabel}`);
    const body = encodeURIComponent(lines.join('\n'));
    const mailtoUrl = `mailto:${AURALITH_EMAIL}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setStep('success');
    }, 300);
  };

  const getModalContent = () => {
    // Get course titles for enrollment form
    const courseOptions = COURSES.map(c => c.title);
    // Get internship track options
    const internshipOptions = ['Web Development', 'UI/UX Design', 'Digital Marketing', 'Mobile App', 'Graphics Design', 'Full Stack'];
    
    switch (type) {
      case 'internship':
        return {
          title: 'Join Our Team',
          subtitle: 'Launch your career as an intern.',
          selectionLabel: 'Internship Track',
          extraLabel: 'Portfolio / LinkedIn URL',
          extraPlaceholder: 'https://...',
          options: internshipOptions,
          benefits: ["Real Client Projects", "Expert Mentorship", "Career Path Guidance"],
          successMsg: "Our HR team will review your portfolio and contact you for an initial screening."
        };
      case 'solution':
        return {
          title: 'Scale Your Business',
          subtitle: 'Get a tailored enterprise solution.',
          selectionLabel: 'Service Interest',
          extraLabel: 'Company Name',
          extraPlaceholder: 'Your Business Name',
          options: ['Web Development', 'Mobile App Development', 'UI/UX Design', 'Digital Marketing', 'Custom Software'],
          benefits: ["Scalable Architecture", "Hardened Security", "24/7 Priority Support"],
          successMsg: "A solutions architect will call you within 24 hours to discuss your requirements."
        };
      default:
        return {
          title: 'Quick Enrollment',
          subtitle: 'Secure your spot in our next cohort.',
          selectionLabel: 'Select Program',
          extraLabel: 'Preferred Batch Time',
          extraPlaceholder: 'e.g., Morning, Evening, Weekend',
          options: courseOptions,
          benefits: ["Industry Mentorship", "Live Project Access", "Job Placement Support"],
          successMsg: "Check your email for the next steps and course orientation details."
        };
    }
  };

  const content = getModalContent();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-start justify-center overflow-y-auto p-3 sm:p-4 pt-20 sm:pt-24">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-[900px] max-h-[72vh] sm:max-h-[76vh] bg-white rounded-[1.75rem] shadow-[0_30px_80px_rgba(79,70,229,0.18)] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 z-50 p-3 sm:p-4 rounded-full bg-slate-200/90 hover:bg-slate-300 shadow-lg transition-all text-slate-700 hover:text-slate-900 hover:scale-110 active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="grid md:grid-cols-[0.9fr_1.25fr] h-full overflow-y-auto">
          <div className="hidden md:flex bg-gradient-to-br from-[#4f46e5] via-[#5b53d7] to-[#7c3aed] p-6 xl:p-8 flex-col justify-between text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.15),_transparent_20%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="w-10 h-10 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                {type === 'internship' ? <Briefcase className="w-5 h-5" /> : type === 'solution' ? <Globe className="w-5 h-5" /> : <Rocket className="w-5 h-5" />}
              </div>
              <h2 className="text-4xl xl:text-[3.2rem] font-black leading-[0.95] mb-4 tracking-[-0.06em]">AuralithBit<br /><span className="text-indigo-100">Excellence.</span></h2>
              <p className="text-indigo-100/85 text-lg font-medium leading-relaxed max-w-[17rem]">
                Empowering technical minds and global businesses with precision engineering.
              </p>
            </div>

            <div className="relative z-10 space-y-4 mt-6">
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.22em] text-indigo-100">
                <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                Applications Open
              </div>
              <div className="space-y-3">
                {content.benefits.map((txt) => (
                  <div key={txt} className="flex items-center gap-3 text-base font-medium text-white/90">
                    <CheckCircle className="w-4 h-4 text-cyan-300 shrink-0" />
                    {txt}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-full md:col-span-1 bg-[#f5f7fb] p-5 sm:p-6 lg:p-7 flex flex-col justify-center overflow-y-auto">
            {step === 'form' ? (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="mb-4 sm:mb-5">
                  <h3 className="text-[1.7rem] sm:text-[2rem] font-black text-slate-900 tracking-[-0.04em] leading-none">{content.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1.5">{content.subtitle}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] sm:text-[11px] font-black text-slate-500 uppercase tracking-[0.22em] ml-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Alex Johnson"
                          className="w-full pl-11 pr-3 py-3 bg-white border border-slate-200 rounded-xl shadow-[0_2px_0_rgba(15,23,42,0.02)] focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition-all text-sm font-medium text-slate-700 placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] sm:text-[11px] font-black text-slate-500 uppercase tracking-[0.22em] ml-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          required
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+977 9800000000"
                          className="w-full pl-11 pr-3 py-3 bg-white border border-slate-200 rounded-xl shadow-[0_2px_0_rgba(15,23,42,0.02)] focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition-all text-sm font-medium text-slate-700 placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] sm:text-[11px] font-black text-slate-500 uppercase tracking-[0.22em] ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="name@company.com"
                        className="w-full pl-11 pr-3 py-3 bg-white border border-slate-200 rounded-xl shadow-[0_2px_0_rgba(15,23,42,0.02)] focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition-all text-sm font-medium text-slate-700 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] sm:text-[11px] font-black text-slate-500 uppercase tracking-[0.22em] ml-1">{content.selectionLabel}</label>
                    <div className="relative">
                      <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <select 
                        value={formData.selection}
                        onChange={(e) => setFormData({...formData, selection: e.target.value})}
                        className="w-full pl-11 pr-9 py-3 bg-white border border-slate-200 rounded-xl shadow-[0_2px_0_rgba(15,23,42,0.02)] focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition-all text-sm font-bold text-slate-700 appearance-none"
                      >
                        {content.options.map(opt => <option key={opt}>{opt}</option>)}
                      </select>
                    </div>
                  </div>

                  {content.extraLabel && (
                    <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2">
                      <label className="text-[10px] sm:text-[11px] font-black text-slate-500 uppercase tracking-[0.22em] ml-1">{content.extraLabel}</label>
                      <div className="relative">
                        {type === 'internship' ? (
                          <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        ) : type === 'solution' ? (
                          <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        ) : (
                          <Rocket className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        )}
                        <input 
                          required
                          type="text" 
                          value={formData.extra}
                          onChange={(e) => setFormData({...formData, extra: e.target.value})}
                          placeholder={content.extraPlaceholder}
                          className="w-full pl-11 pr-3 py-3 bg-white border border-slate-200 rounded-xl shadow-[0_2px_0_rgba(15,23,42,0.02)] focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition-all text-sm font-medium text-slate-700 placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#4f46e5] via-[#5b53d7] to-[#7c3aed] text-white py-3.5 rounded-xl font-black text-xl flex items-center justify-center gap-2 hover:shadow-[0_18px_40px_rgba(79,70,229,0.28)] transition-all active:scale-[0.99] disabled:opacity-70 group"
                    >
                      {isSubmitting ? "Processing Request..." : "Submit Application"}
                      {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </button>
                    <p className="text-[9px] sm:text-[10px] text-center text-slate-400 mt-3 font-bold uppercase tracking-[0.3em]">
                      AuralithBit • Secure Data Transmission
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 animate-in zoom-in-95 duration-500">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shadow-inner">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900">Request Confirmed!</h3>
                  <p className="text-slate-500 text-xs sm:text-base font-medium leading-relaxed max-w-[320px] mx-auto">
                    Thank you, {formData.name.split(' ')[0]}! {content.successMsg}
                  </p>
                </div>
                <button 
                  onClick={onClose}
                  className="bg-slate-900 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm hover:bg-slate-800 transition-all shadow-xl active:scale-95"
                >
                  Return to Website
                </button>
                <div className="flex items-center gap-2 text-indigo-600 font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em]">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  Experience Excellence
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentModal;
