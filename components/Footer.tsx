
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, LayoutPanelLeft } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { View } from '../types';
import BrandLogo from './BrandLogo';

// Newsletter sign-ups are delivered as a WhatsApp message to this number.
const WHATSAPP_NUMBER = '9779766715793'; // +977 9766715793

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

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    const message = encodeURIComponent(
      `*New Newsletter Signup*\nEmail: ${newsletterEmail}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');

    setNewsletterSent(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSent(false), 4000);
  };
  const socialLinks = [
    { Icon: Facebook, bgColor: 'bg-[#1877F2]', label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61583899281707&mibextid=rS40aB7S9Ucbxw6v' },
    { Icon: TikTokIcon, bgColor: 'bg-black', label: 'TikTok', href: 'https://www.tiktok.com/@auralith.bit?_r=1&_t=ZS-93Ptr3E6zKs' },
    { Icon: Linkedin, bgColor: 'bg-[#0A66C2]', label: 'LinkedIn', href: 'https://www.linkedin.com/company/auralithbit' },
    { Icon: Mail, bgColor: 'bg-[#EA4335]', label: 'Gmail', href: 'mailto:info@auralithbit.com.np' }
  ];

  return (
    <footer id="contact" className="bg-white pt-8 xs:pt-10 sm:pt-16 pb-4 xs:pb-6 sm:pb-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 xs:gap-8 lg:gap-8 mb-8 xs:mb-10 sm:mb-12">
          
          <div className="sm:col-span-2 lg:col-span-4 space-y-4 xs:space-y-5 sm:space-y-6">
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => { onNavigate('home'); window.scrollTo(0, 0); }}
            >
              <BrandLogo className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10" />
              <span className="text-lg xs:text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                <span className="text-indigo-600">AuralithBit</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed max-w-sm font-medium text-[11px] xs:text-sm">
              Designing with vision, developing with passion, and delivering with excellence. A growing leader in IT education and solutions based in Bhairahawa, Nepal.
            </p>
            <div className="flex gap-2.5 xs:gap-3 sm:gap-4">
              {socialLinks.map(({ Icon, bgColor, label, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className={`w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white ${bgColor} transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1`}
                >
                  <Icon className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
            
            <div className="pt-1.5 xs:pt-2 sm:pt-4">
               <button 
                onClick={() => { onNavigate('prototype'); window.scrollTo(0, 0); }}
                className="flex items-center gap-1.5 xs:gap-2 text-[9px] xs:text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors"
               >
                 <LayoutPanelLeft className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
                 Explore Design System
               </button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-2.5 xs:space-y-3 sm:space-y-4">
            <h4 className="font-bold text-slate-900 uppercase text-[9px] xs:text-[10px] sm:text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-1.5 xs:space-y-2 sm:space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={() => { onNavigate(item.view); window.scrollTo(0, 0); }}
                    className="text-slate-500 hover:text-indigo-600 transition-colors text-[11px] xs:text-xs sm:text-sm font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-2.5 xs:space-y-3 sm:space-y-4">
            <h4 className="font-bold text-slate-900 uppercase text-[9px] xs:text-[10px] sm:text-xs tracking-widest">Connect</h4>
            <ul className="space-y-1.5 xs:space-y-2 sm:space-y-4">
              <li className="flex items-start gap-1.5 xs:gap-2 sm:gap-3 text-[11px] xs:text-xs sm:text-sm text-slate-500">
                <Mail className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="font-medium break-all">info@auralithbit.com.np</span>
              </li>
              <li className="flex items-start gap-1.5 xs:gap-2 sm:gap-3 text-[11px] xs:text-xs sm:text-sm text-slate-500">
                <Phone className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-teal-600 shrink-0 mt-0.5" />
                <div className="flex flex-col font-medium">
                  <span>+977 9766715783</span>
                  <span>+977 9766715793</span>
                </div>
              </li>
              <li className="flex items-start gap-1.5 xs:gap-2 sm:gap-3 text-[11px] xs:text-xs sm:text-sm text-slate-500">
                <MapPin className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="font-medium">Lumbini Road, Bhairahawa<br />Rupandehi, Nepal</span>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-3 space-y-2.5 xs:space-y-3 sm:space-y-4">
            <h4 className="font-bold text-slate-900 uppercase text-[9px] xs:text-[10px] sm:text-xs tracking-widest">Newsletter</h4>
            <p className="text-slate-500 text-[11px] xs:text-xs sm:text-sm leading-relaxed max-w-sm font-medium">Join our local & global tech community.</p>
            <form className="flex flex-col sm:flex-row gap-1.5 xs:gap-2" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Email address" 
                className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-[11px] xs:text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-grow"
              />
              <button type="submit" className="bg-indigo-600 text-white px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 sm:py-3 rounded-xl hover:bg-indigo-700 transition-all font-bold text-[10px] xs:text-xs sm:text-sm shrink-0">
                Join
              </button>
            </form>
            {newsletterSent && (
              <p className="text-teal-600 text-[10px] xs:text-xs font-bold">Thanks! We've opened WhatsApp to confirm your signup.</p>
            )}
          </div>

        </div>

        <div className="pt-4 xs:pt-6 sm:pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-2 xs:gap-3 sm:gap-4">
          <p className="text-slate-400 text-[11px] xs:text-xs sm:text-sm font-medium text-center sm:text-left">© 2026 AuralithBit. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 lg:gap-8 text-[11px] xs:text-xs sm:text-sm text-slate-400 font-medium">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
            <a href="#" className="hover:text-slate-600">Nepal Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
