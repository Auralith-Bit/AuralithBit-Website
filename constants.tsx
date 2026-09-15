import {
  Code,
  Layout,
  ShieldCheck,
  Cpu,
  Users,
  Globe,
  Lightbulb,
  Target,
  TrendingUp,
  BrainCircuit,
  SearchCheck,
  Palette,
  Briefcase
} from 'lucide-react';
import { Course, Solution, UpcomingClass, Testimonial, Stat, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', view: 'home' },
  { label: 'About', href: '#about', view: 'about' },
  { label: 'Courses', href: '#courses', view: 'courses' },
  { label: 'Internship', href: '#internship', view: 'internship' },
  { label: 'Solutions', href: '#solutions', view: 'solutions' },
  { label: 'Contact', href: '#contact', view: 'contact' },
];

const instructors = {
  aakriti: {
    name: 'Akash Prasad Barai',
    role: 'UI/UX Designer',
    avatar: '/team/Akas Barai.jpeg',
    bio: 'Creative designer with expertise in user-centered design and modern prototyping tools.'
  },
  aakritiBista: {
    name: 'Aakriti Bista',
    role: 'Digital Marketing Specialist',
    avatar: '/team/Aakriti Bista.jpeg',
    bio: 'Marketing strategist with skills in SEO, social media, and digital campaigns.'
  },
  akas: {
    name: 'Supriya Dwivedi',
    role: 'Full Stack Developer',
    avatar: '/team/Supriya Dwivedi.jpg',
    bio: 'Experienced developer specializing in MERN stack and scalable web applications.'
  },
  anjali: {
    name: 'Anjali Bista',
    role: 'Graphic Designer',
    avatar: '/team/Anjali Bista.jpg',
    bio: 'Talented graphic designer with a passion for visual storytelling and branding.'
  },
  parwesh: {
    name: 'Akash Prasad Barai',
    role: 'QA Engineer',
    avatar: '/team/Akas Barai.jpeg',
    bio: 'Quality assurance expert focused on delivering bug-free software solutions.'
  }
};



export const COURSES: Course[] = [
  {
    id: '1',
    title: 'UI/UX Designing',
    description: 'Master the art of user-centric design with Figma and industry-standard prototyping workflows.',
    icon: <Layout className="w-6 h-6" />,
    tag: 'Design',
    level: 'Beginner',
    duration: '2.5 Months',
    mode: 'Offline',
    price: 'NPR 20,000',
    originalPrice: 'NPR 35,000',
    rating: 4.7,
    reviewsCount: 12,
    instructors: [instructors.aakriti, instructors.aakritiBista],
    learningOutcomes: ['Design Thinking', 'Visual Hierarchy', 'Prototyping in Figma', 'User Testing', 'Wireframing', 'Usability Testing'],
    curriculum: [
      { title: 'Module 1: Design Fundamentals', duration: '2 Weeks', topics: ['Color Theory', 'Typography', 'Layout Principles'] },
      { title: 'Module 2: UI Design', duration: '3 Weeks', topics: ['Figma Basics', 'Component Design', 'Responsive Design'] },
      { title: 'Module 3: UX Research', duration: '3 Weeks', topics: ['User Research', 'Personas', 'Journey Mapping'] }
    ]
  },
  {
    id: '2',
    title: 'MERN Stack',
    description: 'Master MERN stack (MongoDB, Express, React, Node) and build enterprise-grade applications.',
    icon: <Code className="w-6 h-6" />,
    tag: 'Web Development',
    level: 'Beginner',
    duration: '3 Months',
    mode: 'Hybrid',
    price: 'NPR 20,000',
    originalPrice: 'NPR 45,000',
    rating: 4.8,
    reviewsCount: 18,
    instructors: [instructors.anjali],
    learningOutcomes: ['Master industry-standard tools', 'Understand core principles', 'Deploy applications', 'Build real-world projects', 'Collaborate in teams', 'Best coding practices'],
    curriculum: [
      { title: 'Module 1: Frontend with React', duration: '4 Weeks', topics: ['React Basics', 'Components', 'State Management'] },
      { title: 'Module 2: Backend with Node.js', duration: '4 Weeks', topics: ['Express.js', 'API Development', 'Authentication'] },
      { title: 'Module 3: Database with MongoDB', duration: '4 Weeks', topics: ['MongoDB Basics', 'Mongoose', 'Data Modeling'] }
    ]
  },
  {
    id: '3',
    title: 'Graphic Designing',
    description: 'Learn graphic design principles and tools to create stunning visuals for branding and marketing.',
    icon: <Palette className="w-6 h-6" />,
    tag: 'Design',
    level: 'Beginner',
    duration: '2 Months',
    mode: 'Offline',
    price: 'NPR 20,000',
    originalPrice: 'NPR 30,000',
    rating: 4.6,
    reviewsCount: 15,
    instructors: [instructors.anjali],
    learningOutcomes: ['Adobe Creative Suite', 'Branding Design', 'Digital Illustration', 'Print Design', 'Color Theory', 'Composition'],
    curriculum: [
      { title: 'Module 1: Design Basics', duration: '2 Weeks', topics: ['Elements of Design', 'Color Theory', 'Typography'] },
      { title: 'Module 2: Adobe Tools', duration: '4 Weeks', topics: ['Photoshop', 'Illustrator', 'InDesign'] },
      { title: 'Module 3: Projects', duration: '2 Weeks', topics: ['Logo Design', 'Poster Design', 'Branding Kit'] }
    ]
  },
  {
    id: '4',
    title: 'Quality Assurance (QA)',
    description: 'Learn software testing methodologies and tools to ensure high-quality software delivery.',
    icon: <SearchCheck className="w-6 h-6" />,
    tag: 'Quality Assurance',
    level: 'Intermediate',
    duration: '2.5 Months',
    mode: 'Online',
    price: 'NPR 20,000',
    originalPrice: 'NPR 38,000',
    rating: 4.7,
    reviewsCount: 10,
    instructors: [instructors.akas],
    learningOutcomes: ['Manual Testing', 'Automated Testing', 'Test Planning', 'Bug Tracking', 'Performance Testing', 'Agile Testing'],
    curriculum: [
      { title: 'Module 1: Testing Fundamentals', duration: '3 Weeks', topics: ['SDLC', 'Testing Types', 'Test Cases'] },
      { title: 'Module 2: Automation', duration: '3 Weeks', topics: ['Selenium', 'Cypress', 'API Testing'] },
      { title: 'Module 3: Advanced QA', duration: '2 Weeks', topics: ['Performance Testing', 'Security Testing', 'CI/CD'] }
    ]
  },
  {
    id: '5',
    title: 'Web Designing',
    description: 'Create beautiful and responsive websites using HTML, CSS, and modern design principles.',
    icon: <Layout className="w-6 h-6" />,
    tag: 'Web Development',
    level: 'Beginner',
    duration: '2 Months',
    mode: 'Hybrid',
    price: 'NPR 20,000',
    originalPrice: 'NPR 32,000',
    rating: 4.5,
    reviewsCount: 14,
    instructors: [instructors.akas],
    learningOutcomes: ['HTML5 & CSS3', 'Responsive Design', 'JavaScript Basics', 'Web Accessibility', 'SEO Principles', 'Version Control'],
    curriculum: [
      { title: 'Module 1: HTML & CSS', duration: '3 Weeks', topics: ['HTML Structure', 'CSS Styling', 'Flexbox & Grid'] },
      { title: 'Module 2: JavaScript', duration: '2 Weeks', topics: ['DOM Manipulation', 'Events', 'Basic Scripting'] },
      { title: 'Module 3: Projects', duration: '3 Weeks', topics: ['Portfolio Site', 'Landing Page', 'Responsive Design'] }
    ]
  },
  {
    id: '6',
    title: 'Digital Marketing',
    description: 'Master digital marketing strategies including SEO, social media, and online advertising.',
    icon: <TrendingUp className="w-6 h-6" />,
    tag: 'Marketing',
    level: 'Beginner',
    duration: '2.5 Months',
    mode: 'Online',
    price: 'NPR 20,000',
    originalPrice: 'NPR 36,000',
    rating: 4.8,
    reviewsCount: 16,
    instructors: [instructors.aakritiBista],
    learningOutcomes: ['SEO & SEM', 'Social Media Marketing', 'Content Marketing', 'Email Marketing', 'Analytics', 'PPC Advertising'],
    curriculum: [
      { title: 'Module 1: Marketing Fundamentals', duration: '2 Weeks', topics: ['Digital Landscape', 'Target Audience', 'Marketing Strategy'] },
      { title: 'Module 2: Channels & Tools', duration: '4 Weeks', topics: ['Google Ads', 'Social Platforms', 'Analytics Tools'] },
      { title: 'Module 3: Campaigns', duration: '2 Weeks', topics: ['Campaign Planning', 'A/B Testing', 'Performance Tracking'] }
    ]
  },
  {
    id: '7',
    title: 'Python',
    description: 'Learn Python programming from basics to advanced concepts including data analysis and automation.',
    icon: <BrainCircuit className="w-6 h-6" />,
    tag: 'Programming',
    level: 'Beginner',
    duration: '3 Months',
    mode: 'Online',
    price: 'NPR 20,000',
    originalPrice: 'NPR 40,000',
    rating: 4.9,
    reviewsCount: 20,
    instructors: [instructors.akas],
    learningOutcomes: ['Python Syntax', 'Data Structures', 'Object-Oriented Programming', 'Libraries (Pandas, NumPy)', 'Web Scraping', 'Automation'],
    curriculum: [
      { title: 'Module 1: Python Basics', duration: '4 Weeks', topics: ['Syntax', 'Data Types', 'Control Flow'] },
      { title: 'Module 2: Advanced Python', duration: '4 Weeks', topics: ['OOP', 'File Handling', 'Error Handling'] },
      { title: 'Module 3: Applications', duration: '4 Weeks', topics: ['Data Analysis', 'Web Development', 'Automation Scripts'] }
    ]
  },
  {
    id: '8',
    title: 'Office Package',
    description: 'Master Microsoft Office suite including Word, Excel, PowerPoint for professional productivity.',
    icon: <Briefcase className="w-6 h-6" />,
    tag: 'Productivity',
    level: 'Beginner',
    duration: '1.5 Months',
    mode: 'Offline',
    price: 'NPR 15,000',
    originalPrice: 'NPR 25,000',
    rating: 4.4,
    reviewsCount: 11,
    instructors: [instructors.anjali],
    learningOutcomes: ['Word Processing', 'Spreadsheet Management', 'Presentation Skills', 'Data Analysis in Excel', 'Collaboration Tools', 'Advanced Features'],
    curriculum: [
      { title: 'Module 1: Microsoft Word', duration: '2 Weeks', topics: ['Document Creation', 'Formatting', 'Mail Merge'] },
      { title: 'Module 2: Excel', duration: '3 Weeks', topics: ['Formulas', 'Charts', 'Pivot Tables'] },
      { title: 'Module 3: PowerPoint & Outlook', duration: '2 Weeks', topics: ['Presentations', 'Email Management', 'Integration'] }
    ]
  }
];

export const SOLUTIONS: Solution[] = [
  {
    id: '1',
    title: 'UI/UX Strategy',
    description: 'Visionary designs that engage users and drive meaningful business results.',
    icon: <Target className="w-8 h-8" />
  },
  {
    id: '2',
    title: 'Custom Software',
    description: 'Tailored enterprise solutions built to solve complex organizational challenges.',
    icon: <Cpu className="w-8 h-8" />
  },
  {
    id: '3',
    title: 'Cloud Security',
    description: 'Hardened infrastructure and real-time monitoring to protect your digital assets.',
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    id: '4',
    title: 'Maintenance & Support',
    description: '24/7 dedicated support to ensure your systems run smoothly and efficiently.',
    icon: <TrendingUp className="w-8 h-8" />
  }
];

// Resolve instructor names from the COURSES array when possible so changes propagate
const findInstructorFor = (title: string) => {
  const match = COURSES.find((c) => title.includes(c.title) || c.title.includes(title) || title.toLowerCase().includes(c.title.toLowerCase()) );
  if (match && match.instructors && match.instructors.length > 0) return match.instructors[0].name;
  return undefined;
};

export const UPCOMING_CLASSES: UpcomingClass[] = [
  { id: '1', title: 'UI/UX Designing Fundamentals', date: 'Dec 3', time: '10:00 AM', instructor: findInstructorFor('UI/UX Designing') ?? 'Akash Prasad Barai' },
  { id: '2', title: 'MERN Stack Introduction', date: 'Dec 5', time: '02:00 PM', instructor: findInstructorFor('MERN Stack') ?? 'Anjali Bista' },
  { id: '3', title: 'Graphic Designing with Adobe', date: 'Dec 8', time: '09:00 AM', instructor: findInstructorFor('Graphic Designing') ?? 'Anjali Bista' },
  { id: '4', title: 'Quality Assurance Basics', date: 'Dec 10', time: '11:00 AM', instructor: findInstructorFor('Quality Assurance') ?? 'Supriya Dwivedi' },
  { id: '5', title: 'Web Designing Workshop', date: 'Dec 12', time: '01:00 PM', instructor: findInstructorFor('Web Designing') ?? 'Supriya Dwivedi' },
  { id: '6', title: 'Digital Marketing Strategies', date: 'Dec 15', time: '03:00 PM', instructor: findInstructorFor('Digital Marketing') ?? 'Aakriti Bista' },
  { id: '7', title: 'Python Programming', date: 'Dec 17', time: '10:00 AM', instructor: findInstructorFor('Python') ?? 'Supriya Dwivedi' },
  { id: '8', title: 'Office Package Training', date: 'Dec 19', time: '09:00 AM', instructor: findInstructorFor('Office Package') ?? 'Anjali Bista' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Priyanka Sharma',
    role: 'Full Stack Developer',
    content: 'AuralithBit gave me real-world IT experience. The transition from student to professional was seamless thanks to their excellent mentorship.',
    avatar: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: '2',
    name: 'Sanjay Maharjan',
    role: 'Startup Founder',
    content: 'Professional delivery and innovative digital solutions. They transformed our legacy system into a high-performance modern app. Highly recommended!',
    avatar: 'https://picsum.photos/id/91/100/100'
  },
  {
    id: '3',
    name: 'Priya Sharma',
    role: 'UI/UX Designer',
    content: 'The curriculum is world-class. I learned tools and techniques that I use every day in my current role at a tech company.',
    avatar: 'https://picsum.photos/id/102/100/100'
  }
];

export const STATS: Stat[] = [
  { label: 'Trained Learners', value: '75+' },
  { label: 'Projects Delivered', value: '12+' },
  { label: 'Expert Mentors', value: '4+' },
  { label: 'Industry Partners', value: '8+' }
];

export const WHY_CHOOSE_US = [
  { title: 'Hands-on Training', description: 'Learn by building real projects with expert guidance.', icon: <Users className="w-6 h-6" /> },
  { title: 'Real-world Experience', description: 'Work on live client projects from day one.', icon: <Globe className="w-6 h-6" /> },
  { title: 'Career Support', description: 'Dedicated guidance for your tech career path.', icon: <TrendingUp className="w-6 h-6" /> },
  { title: 'Modern Skills', description: 'Master cutting-edge tech stacks and tools.', icon: <Lightbulb className="w-6 h-6" /> }
];
