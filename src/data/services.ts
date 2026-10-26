import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    category: 'web',
    shortDesc: 'Tailored business websites, retail storefronts, portfolios, and custom web presences built for speed, responsiveness, and conversion.',
    fullDesc: 'We build responsive, modern websites designed to represent your business authentically and turn visitors into customers. From retail storefronts to company marketing sites and creative portfolios, each build is crafted with clean code, fast load times, and intuitive content management.',
    deliverables: [
      'Business & corporate websites',
      'E-commerce & retail online shops',
      'Professional portfolios & catalogs',
      'Custom bespoke website builds',
      'Mobile-first responsive layouts',
      'Fast loading & search engine optimization'
    ],
    idealFor: 'Startups, retail stores, local service companies, and independent entrepreneurs wanting a strong web presence.',
    iconName: 'Globe'
  },
  {
    id: 'frontend-development',
    title: 'Web & Frontend Development',
    category: 'web',
    shortDesc: 'Semantic HTML, modern CSS, robust JavaScript, responsive design, interactive interfaces, and full-stack web applications.',
    fullDesc: 'Engineering clean, maintainable frontend systems and interactive web applications. Whether you need a dynamic customer portal, interactive dashboards, or custom frontend integrations, we turn design ideas into high-performance web experiences.',
    deliverables: [
      'Modern HTML, CSS & JavaScript engineering',
      'Clean interactive UI components & dashboards',
      'Single-page and full-stack web applications',
      'Cross-browser & cross-device compatibility',
      'Accessible, performance-tuned web standards',
      'API integrations & dynamic interfaces'
    ],
    idealFor: 'Businesses needing custom digital tools, interactive customer portals, or technical frontend refactoring.',
    iconName: 'Code2'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    category: 'mobile-software',
    shortDesc: 'Custom mobile applications and dedicated business app solutions tailored for iOS, Android, and cross-platform devices.',
    fullDesc: 'Purpose-built mobile applications that streamline operations or connect directly with your mobile customers. We focus on lightweight architectures, smooth touch interactions, and dependable offline-ready capabilities for real-world usage.',
    deliverables: [
      'Custom iOS & Android mobile applications',
      'Internal business & operational mobile tools',
      'Retail order & loyalty app concepts',
      'Cross-platform responsive mobile frontends',
      'App store deployment preparation',
      'Push notification & backend API sync'
    ],
    idealFor: 'Retail businesses wanting customer engagement apps and startups building mobile-first solutions.',
    iconName: 'Smartphone'
  },
  {
    id: 'java-development',
    title: 'Java Development',
    category: 'mobile-software',
    shortDesc: 'Robust Java applications, backend services, enterprise integration modules, and custom software solutions.',
    fullDesc: 'Dependable Java engineering for enterprise logic, backend data processing, and custom software utilities. We deliver stable, type-safe, and well-structured codebases designed to handle business-critical workflows without fragility.',
    deliverables: [
      'Custom Java desktop & server applications',
      'Backend services & RESTful APIs',
      'Database integration & data processing utilities',
      'Legacy software maintenance & modularization',
      'Object-oriented architecture & testing',
      'Enterprise workflow automation tools'
    ],
    idealFor: 'Organizations requiring reliable backend software, data handling utilities, or structured Java applications.',
    iconName: 'Cpu'
  },
  {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    category: 'ai',
    shortDesc: 'Practical AI chatbots, RAG-based knowledge assistants, automated business workflows, and smart customer support tools.',
    fullDesc: 'Pragmatic artificial intelligence solutions that solve everyday business friction. From custom customer service chatbots trained on your store policies and inventory to internal RAG (Retrieval-Augmented Generation) assistants and automated data pipelines.',
    deliverables: [
      'Custom AI customer service chatbots',
      'RAG-based business knowledge assistants',
      'Document Q&A and knowledge retrieval',
      'Repetitive task & workflow automation',
      'Smart customer query triage & escalation',
      'Integration with existing communication tools'
    ],
    idealFor: 'Startups and retail shops wanting 24/7 customer guidance, automated answers, and streamlined workflows.',
    iconName: 'Bot'
  },
  {
    id: 'graphic-design-branding',
    title: 'Graphic Design & Branding',
    category: 'creative',
    shortDesc: 'Distinctive brand logos, marketing posters, promotional creatives, social visuals, and cohesive identity materials.',
    fullDesc: 'Refined visual identity work that establishes instant credibility for your business. We craft cohesive logos, print-ready marketing materials, shop banners, and digital graphics tailored to your specific market segment.',
    deliverables: [
      'Logo design & visual identity lockups',
      'Brand style guides (color palettes & typography)',
      'Promotional posters, flyers & retail banners',
      'Digital campaign assets & marketing visuals',
      'Product packaging & label layouts',
      'Vector asset export for print & digital'
    ],
    idealFor: 'New ventures launching their identity and retail storefronts refreshing their visual materials.',
    iconName: 'Palette'
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    category: 'creative',
    shortDesc: 'Strategic content creation, promotional campaign posts, Instagram business management, and brand visibility support.',
    fullDesc: 'Consistent, authentic social media execution that keeps your brand top of mind. We plan, design, and organize content calendars tailored for Instagram and business networks to showcase your products, services, and everyday expertise.',
    deliverables: [
      'Instagram business content planning & styling',
      'Promotional feed posts, carousels & stories',
      'Content calendar scheduling & copy drafting',
      'Brand aesthetic harmonization',
      'Community engagement guidance',
      'Audience reach & profile optimization'
    ],
    idealFor: 'Retail shops and startups seeking consistent, polished social media presence without overwhelming internal staff.',
    iconName: 'Share2'
  }
];
