import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Code2,
  ExternalLink,
  Globe2,
  HeartPulse,
  LayoutDashboard,
  ShoppingBag,
  ClipboardList,
  GraduationCap,
  QrCode,
  Receipt,
  School,
  UsersRound,
} from 'lucide-react';
import { View } from '../types';
import GlassHero from '../components/GlassHero';

type ProjectsPageProps = {
  onNavigate: (view: View) => void;
  onOpenEnrollment: () => void;
};

const clientProjects = [
  {
    number: '01',
    name: 'StudyXpert',
    category: 'Education | Study abroad',
    summary:
      'A multi-page digital home for a study-abroad consultancy, bringing destinations, counseling services, student stories and enquiry paths together.',
    outcome: 'A clear path from exploring study options to requesting guidance.',
    icon: BookOpen,
    accent: 'indigo',
    live: 'https://study-xpert-ochre.vercel.app',
    tags: ['Responsive website', 'Destination pages', 'Eligibility checker', 'Counseling enquiries'],
    preview: (
      <div className="relative mx-auto w-full max-w-[24rem] rotate-[-2deg] rounded-[1.5rem] border border-white/80 bg-white p-3 shadow-[0_28px_70px_rgba(30,41,59,0.2)] sm:p-4">
        <div className="flex items-center gap-1.5 border-b border-slate-100 pb-3">
          <span className="h-2 w-2 rounded-full bg-rose-300" /><span className="h-2 w-2 rounded-full bg-amber-300" /><span className="h-2 w-2 rounded-full bg-emerald-300" />
          <span className="ml-auto rounded-full bg-slate-100 px-3 py-1 text-[9px] font-semibold text-slate-400">studyxpert.com</span>
        </div>
        <div className="relative mt-3 overflow-hidden rounded-[1rem] bg-gradient-to-br from-indigo-950 via-indigo-800 to-violet-600 p-5 text-white sm:p-7">
          <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-indigo-200">Your future, worldwide</span>
          <div className="mt-3 max-w-[12rem] text-xl font-black leading-tight sm:text-2xl">Make your next chapter count.</div>
          <div className="mt-5 inline-flex items-center gap-1 rounded-lg bg-white px-3 py-2 text-[9px] font-bold text-indigo-700">Explore destinations <ArrowRight className="h-3 w-3" /></div>
          <div className="absolute -bottom-8 -right-5 h-36 w-36 rounded-full border-[18px] border-white/10" />
          <div className="absolute bottom-3 right-8 h-16 w-16 rounded-full border border-white/20" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {['Australia', 'Canada', 'United Kingdom'].map((place) => <div key={place} className="rounded-lg bg-slate-50 px-2 py-2.5 text-center text-[8px] font-bold text-slate-500">{place}</div>)}
        </div>
      </div>
    ),
  },
  {
    number: '02',
    name: 'Kamakhya Cosmetics CMS',
    category: 'Commerce | Cosmetics CMS',
    summary:
      'A product-led cosmetics experience supported by a content management workflow, designed to make product discovery and brand storytelling feel effortless.',
    outcome: 'A flexible digital storefront for product browsing and brand presentation.',
    icon: ShoppingBag,
    accent: 'rose',
    live: 'https://kamakhya-cosmetics.vercel.app',
    tags: ['Product catalog', 'Brand storytelling', 'CMS workflow', 'Mobile-first UI'],
    preview: (
      <div className="relative mx-auto w-full max-w-[24rem] rotate-[2deg] rounded-[1.5rem] border border-white/80 bg-[#fffaf7] p-3 shadow-[0_28px_70px_rgba(30,41,59,0.2)] sm:p-4">
        <div className="flex items-center justify-between border-b border-rose-100 pb-3"><span className="text-[10px] font-black tracking-[0.18em] text-rose-950">KAMAKHYA</span><span className="text-[9px] text-rose-800">Beauty | Care | Trust</span></div>
        <div className="mt-3 grid grid-cols-[1.1fr_.9fr] gap-2">
          <div className="flex min-h-36 flex-col justify-center rounded-[1rem] bg-gradient-to-br from-rose-100 via-orange-50 to-amber-100 p-4 sm:min-h-44 sm:p-5"><span className="text-[8px] font-bold uppercase tracking-[0.2em] text-rose-700">Thoughtful everyday care</span><strong className="mt-2 text-xl font-black leading-tight text-rose-950 sm:text-2xl">Beauty, made with care.</strong><span className="mt-3 w-fit rounded-full bg-rose-950 px-3 py-1.5 text-[8px] font-bold text-white">Discover products</span></div>
          <div className="flex items-center justify-center rounded-[1rem] bg-gradient-to-br from-amber-100 to-rose-200"><div className="relative flex h-28 w-16 items-center justify-center rounded-t-2xl rounded-b-lg border border-white/70 bg-white/65 shadow-xl sm:h-36 sm:w-20"><div className="absolute top-[-9px] h-3 w-7 rounded-t bg-rose-900"/><span className="text-center text-[8px] font-black leading-tight tracking-wider text-rose-950">K<br/>C</span></div></div>
        </div>
        <div className="mt-3 flex items-center justify-between"><span className="text-[9px] font-bold text-slate-700">Featured collection</span><span className="text-[8px] text-rose-700">View all <ArrowUpRight className="inline h-3 w-3" /></span></div>
      </div>
    ),
  },
  {
    number: '03',
    name: 'R&R Food Products',
    category: 'Commerce | Website + CMS',
    summary:
      'A food-products platform pairing the public shopping experience with an admin content manager and API in one connected application.',
    outcome: 'Product and site content can be managed alongside the customer-facing experience.',
    icon: LayoutDashboard,
    accent: 'emerald',
    live: 'https://rnrfood.com',
    tags: ['Public storefront', 'Admin content manager', 'Product API', 'Catalog fallback'],
    preview: (
      <div className="relative mx-auto w-full max-w-[24rem] rotate-[-1deg] rounded-[1.5rem] border border-white/80 bg-white p-3 shadow-[0_28px_70px_rgba(30,41,59,0.2)] sm:p-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3"><span className="text-[10px] font-black text-slate-900">R&R <span className="text-emerald-700">FOOD PRODUCTS</span></span><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[8px] font-bold text-emerald-700">Fresh picks</span></div>
        <div className="mt-3 rounded-[1rem] bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-600 p-5 text-white sm:p-6"><span className="text-[8px] font-bold uppercase tracking-[0.2em] text-emerald-200">Good food, made simple</span><div className="mt-2 max-w-[13rem] text-xl font-black leading-tight sm:text-2xl">Find something delicious.</div><div className="mt-4 h-1.5 w-20 rounded-full bg-lime-300" /></div>
        <div className="mt-3 grid grid-cols-3 gap-2">{['Pantry', 'Snacks', 'Specials'].map((item, index) => <div key={item} className="rounded-xl bg-slate-50 p-2"><div className={`mb-2 h-10 rounded-lg ${index === 0 ? 'bg-amber-100' : index === 1 ? 'bg-orange-100' : 'bg-emerald-100'}`} /><span className="text-[8px] font-bold text-slate-600">{item}</span></div>)}</div>
      </div>
    ),
  },
];

type OtherProject = {
  name: string;
  category: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
  live?: string;
};

const otherProjects: OtherProject[] = [
  {
    name: 'Auralith ERP',
    category: 'Organization management',
    description: 'An internal ERP for managing courses, mentors, learners, staff, departments, projects, budgets, certificates, and notifications.',
    icon: LayoutDashboard,
    tags: ['Django', 'Operations', 'Role-based tools'],
  },
  {
    name: 'Office Bills',
    category: 'Office operations',
    description: 'Office bill records managed alongside shared accounts, payments, and budget information in Auralith Bit’s internal ERP.',
    icon: Receipt,
    tags: ['Bill records', 'Shared office data', 'ERP finance'],
  },
  {
    name: 'Auralith Nexus',
    category: 'Public services',
    description: 'A bilingual citizenship application platform with role-based review, document handling, and an application workflow across administrative levels.',
    icon: Globe2,
    tags: ['Nepali + English', 'Application workflow', 'Document management'],
  },
  {
    name: 'QR Order System',
    category: 'Restaurant technology',
    description: 'A QR-based ordering experience where guests browse a menu and place orders from their table while staff manage orders and tables.',
    icon: QrCode,
    tags: ['QR ordering', 'Admin dashboard', 'Live order updates'],
  },
  {
    name: 'AuraTrack',
    category: 'Education technology',
    description: 'A multi-school attendance management system with role-based access and invitation-based login.',
    icon: School,
    tags: ['School attendance', 'Multi-school', 'Role-based access'],
  },
  {
    name: 'CoopFlow',
    category: 'Cooperative management',
    description: 'A digital cooperative management system for member records, savings, loans, accounting, and reports.',
    icon: UsersRound,
    tags: ['Member management', 'Savings + loans', 'Reporting'],
  },
  {
    name: 'AuraCoop Website',
    category: 'Organization website',
    description: 'A public-facing website for a Nepali savings and credit cooperative.',
    icon: Globe2,
    tags: ['React', 'Responsive website', 'Nepali organization'],
  },
  {
    name: 'PTE-AI',
    category: 'Learning technology',
    description: 'A frontend for an AI-powered PTE exam practice platform, built to support digital English test preparation.',
    icon: GraduationCap,
    tags: ['PTE preparation', 'AI-powered practice', 'Next.js'],
  },
  {
    name: 'Registration Portal',
    category: 'Web application',
    description: 'A lightweight online registration experience with a deployed web version.',
    icon: ClipboardList,
    tags: ['Online forms', 'Registration flow', 'HTML'],
    live: 'https://form-registration-theta.vercel.app',
  },
  {
    name: 'Aura-CareFlow',
    category: 'Healthcare technology',
    description: 'A healthcare workflow project with a separate backend repository in the Auralith-Bit portfolio.',
    icon: HeartPulse,
    tags: ['Care workflows', 'Web application', 'Backend service'],
  },
  {
    name: 'AuralithBit Website',
    category: 'Company website',
    description: 'The AuralithBit website, bringing together the company’s training programs, digital services, and project portfolio.',
    icon: Code2,
    tags: ['React + TypeScript', 'Responsive website', 'Cloud deployment'],
    live: 'https://auralithbit-website.onrender.com/',
  },
];

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onOpenEnrollment }) => {
  const [activeSection, setActiveSection] = useState<'client' | 'other'>('client');

  return (
  <main id="projects" className="overflow-hidden bg-white pt-16">
    <GlassHero
      title={<>Projects built with <span className="text-gradient">purpose.</span></>}
      subtitle="Explore a selection of digital products and web experiences spanning education, commerce, and content management."
      image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000"
      ctaText="Explore our work"
      onCta={() => document.getElementById('project-list')?.scrollIntoView({ behavior: 'smooth' })}
    />

    <section id="project-list" className="scroll-mt-24 bg-white px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div role="tablist" aria-label="Project categories" className="mb-8 grid grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1.5 sm:mb-10 sm:inline-flex sm:rounded-full">
          <button type="button" role="tab" aria-selected={activeSection === 'client'} onClick={() => setActiveSection('client')} className={`flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition sm:rounded-full sm:px-5 sm:text-sm ${activeSection === 'client' ? 'bg-white text-indigo-700 shadow-sm ring-1 ring-slate-200' : 'text-slate-500 hover:text-slate-900'}`}>
            Client projects <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] text-indigo-700">{clientProjects.length}</span>
          </button>
          <button type="button" role="tab" aria-selected={activeSection === 'other'} onClick={() => setActiveSection('other')} className={`flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition sm:rounded-full sm:px-5 sm:text-sm ${activeSection === 'other' ? 'bg-white text-indigo-700 shadow-sm ring-1 ring-slate-200' : 'text-slate-500 hover:text-slate-900'}`}>
            Other projects <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] text-indigo-700">{otherProjects.length}</span>
          </button>
        </div>
        <div className="mb-8 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-extrabold uppercase tracking-[0.22em] text-indigo-600">{activeSection === 'client' ? 'Built for clients' : 'More from our team'}</p><h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{activeSection === 'client' ? 'Client projects' : 'Other projects we’ve built'}</h2></div><p className="max-w-md text-sm leading-6 text-slate-500">{activeSection === 'client' ? 'Live digital experiences created around each organization’s goals.' : 'Internal tools, platforms, and product experiments across different industries.'}</p></div>

        <div className="space-y-6 sm:space-y-8">
          {activeSection === 'client' && clientProjects.map((project, index) => {
            const Icon = project.icon;
            const isReverse = index % 2 === 1;
            return (
              <article key={project.name} className={`group relative grid overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-[0_18px_60px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)] sm:rounded-[2rem] lg:grid-cols-2 ${isReverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className={`relative flex min-h-[17rem] items-center justify-center overflow-hidden p-5 sm:min-h-[24rem] sm:p-10 ${project.accent === 'indigo' ? 'bg-gradient-to-br from-indigo-100 via-slate-100 to-violet-100' : project.accent === 'rose' ? 'bg-gradient-to-br from-rose-100 via-orange-50 to-amber-100' : 'bg-gradient-to-br from-emerald-100 via-teal-50 to-lime-100'}`}>
                  <div className="absolute -left-10 -top-14 h-44 w-44 rounded-full border border-white/60" /><div className="absolute -bottom-20 -right-12 h-56 w-56 rounded-full border border-white/60" />
                  <div className="relative z-10 w-full">{project.preview}</div>
                  <span className="absolute bottom-4 left-5 rounded-full border border-white/70 bg-white/65 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-600 backdrop-blur sm:bottom-6 sm:left-7">Project {project.number}</span>
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10 xl:p-12">
                  <div className="flex items-center gap-3"><span className={`flex h-10 w-10 items-center justify-center rounded-xl ${project.accent === 'indigo' ? 'bg-indigo-50 text-indigo-700' : project.accent === 'rose' ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'}`}><Icon className="h-5 w-5" /></span><span className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-slate-500 sm:text-xs">{project.category}</span></div>
                  <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{project.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{project.summary}</p>
                  <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 sm:p-4"><div className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"/><p className="text-xs font-semibold leading-5 text-slate-700 sm:text-sm">{project.outcome}</p></div></div>
                  <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-semibold text-slate-600 sm:text-xs">{tag}</span>)}</div>
                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5">
                    <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-indigo-700 sm:text-sm">View live project <ExternalLink className="h-4 w-4" /></a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {activeSection === 'other' && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {otherProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <article key={project.name} className="group flex h-full flex-col rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)] sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${['bg-indigo-50 text-indigo-700', 'bg-violet-50 text-violet-700', 'bg-amber-50 text-amber-700', 'bg-sky-50 text-sky-700'][index % 4]}`}><Icon className="h-5 w-5" /></span>
                    <span className="rounded-full bg-slate-50 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-slate-500">{project.category}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-black tracking-tight text-slate-950">{project.name}</h3>
                  <p className="mt-2 flex-grow text-sm leading-6 text-slate-600">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-semibold text-slate-600">{tag}</span>)}</div>
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-slate-950 px-3.5 py-2 text-xs font-bold text-white transition hover:bg-indigo-700">Live project <ExternalLink className="h-3.5 w-3.5" /></a>}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>

    <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-slate-950 px-6 py-10 text-center shadow-2xl shadow-indigo-950/15 sm:rounded-[2rem] sm:px-12 sm:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.45),_transparent_55%)]"/><div className="relative"><Globe2 className="mx-auto h-7 w-7 text-indigo-300"/><h2 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl">Have a project in mind?</h2><p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">Tell us what you’re building. We’ll help shape the right digital experience for your next step.</p><div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><button onClick={() => onNavigate('contact')} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-indigo-50">Talk to our team <ArrowRight className="h-4 w-4"/></button><button onClick={onOpenEnrollment} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/15">Get a consultation</button></div></div>
      </div>
    </section>
  </main>
  );
};

export default ProjectsPage;
