import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { View } from '../types';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  onNavigate: (view: View) => void;
  onOpenEnrollment: () => void;
  currentView: View;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenEnrollment, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Always use white navbar for consistency across all pages
  const showLightText = false;

  const handleNavClick = (view: View, href: string) => {
    if (currentView === 'home' && view === 'home') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate(view);
      window.scrollTo(0, 0);
    }
    setIsOpen(false);
  };

  // Always use white navbar for consistency across all pages
  const navBgClass = 'bg-white/90 backdrop-blur-md shadow-sm py-2.5 xs:py-3';
    
  const textColorClass = 'text-slate-900';
  const hoverColorClass = 'hover:text-teal-600';
  const activeColorClass = 'text-teal-600';

  return (
    <nav className={`fixed w-full z-[1000] transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick('home', '#home')}
          >
            <BrandLogo className="w-10 h-10 sm:w-11 sm:h-11" />
            <span className={`text-lg sm:text-xl font-bold tracking-tight ${textColorClass}`}>
              <span className={showLightText ? 'text-teal-300' : 'text-indigo-600'}>AuralithBit</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view, item.href)}
                className={`text-sm font-medium transition-colors ${hoverColorClass} ${
                  currentView === item.view ? activeColorClass : textColorClass
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={onOpenEnrollment}
              className="bg-primary-gradient text-white px-4 xs:px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all active:scale-95"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-slate-700 focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100 bg-white border-b' : 'max-h-0 opacity-0 pointer-events-none'
      } overflow-hidden`}>
        <div className="px-3 xs:px-4 pt-1.5 xs:pt-2 pb-5 xs:pb-6 space-y-1.5 xs:space-y-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.view, item.href)}
              className="block w-full text-left px-2.5 xs:px-3 py-3 xs:py-4 text-sm xs:text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 xs:pt-4">
            <button 
              onClick={() => { onOpenEnrollment(); setIsOpen(false); }}
              className="w-full bg-primary-gradient text-white px-4 xs:px-5 py-2.5 xs:py-3 rounded-xl text-sm xs:text-base font-semibold"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
