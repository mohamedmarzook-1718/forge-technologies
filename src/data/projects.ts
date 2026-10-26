export interface Project {
  id: string;
  projectNumber: string;
  title: string;
  subtitle: string;
  category: 
    | 'Websites & Digital Experiences'
    | 'Web Applications'
    | 'AI & Computer Vision'
    | 'Data Analytics & Dashboards'
    | 'Branding & Visual Design'
    | 'Learning Platforms';
  engagementType: 'Client Deliverable' | 'Independent Software Lab' | 'Applied AI Prototype' | 'Virtual Experience Simulation';
  client?: string;
  year: string;
  timeline: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  heroImage: string;
  galleryImages: { url: string; caption: string }[];
  tags: string[];
  summary: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: string[];
  results?: string[];
  testimonialOrNote?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'grow-data-world',
    projectNumber: '01',
    title: 'Grow Data World',
    subtitle: 'Azure & Microsoft Fabric Data Engineering Education & Consulting Platform',
    category: 'Learning Platforms',
    engagementType: 'Client Deliverable',
    client: 'Grow Data World',
    year: '2026',
    timeline: '3 Weeks',
    liveUrl: 'https://growdataworld.com/',
    featured: true,
    heroImage: '/assets/projects/grow_data_world_hero.jpg',
    galleryImages: [
      {
        url: '/assets/projects/grow_data_world_hero.jpg',
        caption: 'Desktop workstation & responsive mobile view of Microsoft Fabric DP-700 course hub'
      },
      {
        url: '/assets/projects/grow_data_world_course.jpg',
        caption: 'Live curriculum participant page showing modular steps and progress tracking'
      },
      {
        url: '/assets/projects/grow_data_world_progress.jpg',
        caption: 'Student learning dashboard with interactive step progression and state persistence'
      },
      {
        url: '/assets/projects/grow_data_world_step.jpg',
        caption: 'Curriculum step reader with integrated course materials and practical resources'
      }
    ],
    tags: ['Web Platform', 'Data Engineering', 'Microsoft Fabric', 'Azure', 'Learning LMS', 'SEO Optimization', 'Responsive Design'],
    summary: 'A production-grade educational and consulting platform for data engineers, featuring interactive learning paths, Microsoft Fabric certification prep, and client consulting services.',
    overview: 'Grow Data World is an established education and consulting hub dedicated to accelerating enterprise data engineering careers. Forge Technologies was engaged to build a sleek, performant, and authoritative digital presence that guides students through Microsoft Fabric (DP-700) and Azure certifications while showcasing consulting engagements.',
    problem: 'Data engineering education content was scattered across disparate tools. The client needed a centralized, high-converting digital storefront and curriculum participant environment that provides structured learning, responsive course delivery on mobile and desktop, and streamlined course enrollment.',
    solution: 'Designed and deployed an intuitive learning interface with structured modules, progress milestones, resource libraries, and dedicated consultation booking flows. Delivered custom responsive layout optimizations ensuring instant mobile access for working professionals.',
    features: [
      'Comprehensive Microsoft Fabric DP-700 certification preparation hub',
      'Structured participant course player with multi-step progression',
      'Free and premium data engineering resource libraries & technical articles',
      'Corporate training & 1-on-1 consulting inquiry pipelines',
      'Full cross-device responsiveness optimized for mobile learners',
      'Search engine optimized technical content architecture'
    ],
    architecture: [
      'Frontend: Modern responsive UI layout with custom styling and fluid typography',
      'Curriculum Engine: Multi-tier lesson viewer with step progression state tracking',
      'Lead & Enrollment Pipeline: Integrated inquiry and student registration mechanisms',
      'Infrastructure: CDN-backed high-availability web delivery with fast global asset serving'
    ],
    results: [
      'Live in production serving enterprise learners seeking Microsoft Fabric certification',
      'Flawless responsive performance across desktop workstations and mobile smartphones',
      'Unified course catalog and student enrollment flow under one branded digital platform'
    ],
    testimonialOrNote: 'Verified live client engagement. Live platform available at growdataworld.com.'
  },
  {
    id: 'yolo-detection-system',
    projectNumber: '02',
    title: 'YOLO Wildlife & Poacher Detection',
    subtitle: 'Intelligent Real-Time Computer Vision & Video Surveillance Architecture',
    category: 'AI & Computer Vision',
    engagementType: 'Independent Software Lab',
    year: '2026',
    timeline: '4 Weeks',
    featured: true,
    heroImage: '/assets/projects/yolo_wildlife_hero.png',
    galleryImages: [
      {
        url: '/assets/projects/yolo_wildlife_hero.png',
        caption: 'Wildlife Pro live portal dashboard running at 127.0.0.1:5000'
      },
      {
        url: '/assets/projects/yolo_detection_results.png',
        caption: 'Real-time YOLOv8 active monitoring with wound bounding box detection'
      },
      {
        url: '/assets/projects/yolo_system_settings.png',
        caption: 'System configuration fine-tuning AI model, confidence thresholds, and HSV color analysis'
      },
      {
        url: '/assets/projects/yolo_video_upload.png',
        caption: 'Video batch analysis ingestion interface'
      }
    ],
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Flask', 'SQLite', 'Computer Vision', 'HSV Analysis', 'Excel Export'],
    summary: 'An AI-driven video intelligence system utilizing custom YOLOv8 inference, weapon overlap classification, and HSV-based wound detection for wildlife reserve protection.',
    overview: 'Wild animal poaching and delayed detection of injured wildlife present critical ecological challenges. This system combines state-of-the-art YOLOv8 deep learning models with geometric overlap reasoning and colorimetric HSV analysis to automate threat detection in both real-time webcam streams and uploaded video archives.',
    problem: 'Standard object detectors can identify persons and animals, but fail to discern whether an armed individual is posing an active threat (poaching/hunting) or distinguish animal injury patterns without specialized multi-modal verification.',
    solution: 'Engineered a multi-stage computer vision pipeline in Python and Flask. Implemented custom bounding box intersection logic to classify "Hunter/Poacher" when weapons overlap human bounding regions, and integrated HSV color-space thresholding to detect blood and physical wounds on monitored fauna.',
    features: [
      'Dual video ingestion pipeline supporting live camera feeds and file uploads',
      'Custom YOLOv8 neural network inference for humans, weapons, animals, and injuries',
      'Weapon/person spatial bounding box overlap logic for active poacher classification',
      'HSV-based blood chromaticity filtering coupled with bounding box confirmation for wound detection',
      'Secure authentication, session control, and event detection logs persisted in SQLite',
      'Automated detection reporting with one-click Excel data export for ranger audit trails'
    ],
    architecture: [
      'Vision Pipeline: OpenCV frame extraction -> YOLOv8 tensor inference -> Spatial heuristic analysis',
      'Colorimetric Filter: HSV color mask analysis for wound and hemorrhage boundary validation',
      'Backend Server: Python Flask REST API with asynchronous frame streaming',
      'Data Store: SQLite database recording timestamped threats, class confidence scores, and frame logs'
    ],
    results: [
      'Demonstrated reliable dual-condition classification (spatial weapon overlap + color wound verification)',
      'Structured audit logs with exportable incident sheets for wildlife reserve monitoring'
    ],
    testimonialOrNote: 'Developed with Python, Flask, YOLOv8, OpenCV, and SQLite.'
  },
  {
    id: 'scripto-modernizer',
    projectNumber: '03',
    title: 'Scripto Modernizer',
    subtitle: 'AI Manuscript Interpretation & Historical Document Modernization',
    category: 'Web Applications',
    engagementType: 'Applied AI Prototype',
    year: '2026',
    timeline: '3 Weeks',
    featured: true,
    heroImage: '/assets/projects/scripto_modernizer_hero.png',
    galleryImages: [
      {
        url: '/assets/projects/scripto_modernizer_hero.png',
        caption: 'ScriptoModernizer AI — Ancient manuscript paleography and modernization interface'
      },
      {
        url: '/assets/projects/scripto_workspace_dual.png',
        caption: 'Dual-pane workspace with diplomatic transcription, modernized prose, and paleographic scholar notes'
      },
      {
        url: '/assets/projects/scripto_manuscript_source.png',
        caption: 'Primary archival calligraphic manuscript folio leaf analyzed by the vision model'
      }
    ],
    tags: ['React', 'Next.js', 'Gemini API', 'Tailwind CSS', 'Express', 'Supabase', 'AI Document Processing'],
    summary: 'An intelligent document processing application leveraging generative AI to analyze, transcribe, and modernize ancient and complex historical manuscripts.',
    overview: 'Scripto Modernizer bridges centuries of linguistic evolution by transforming archaic, hand-transcribed manuscripts into clear, contextual, and modernized prose. Built on modern web standards with deep AI API integration.',
    problem: 'Historical texts, legal charters, and ancient manuscripts often employ archaic syntax, obsolete vocabulary, and non-standard grammatical structures that present severe barriers for students, researchers, and legal historians.',
    solution: 'Crafted a dual-pane modern workspace where users can upload or input manuscript excerpts, trigger contextual Gemini AI interpretation models, compare archaic verses with modernized translations side-by-side, and save verified interpretations to Supabase history.',
    features: [
      'Side-by-side manuscript reader with synchronized scrolling and diff highlighting',
      'Context-aware LLM prompt engineering for historical linguistic preservation',
      'Custom vocabulary glossary and semantic explanation drawer',
      'User history and persistent document vaults powered by Supabase',
      'Export capabilities for modernized markdown, PDF summaries, and annotated notes'
    ],
    architecture: [
      'Client: React / Next.js with Tailwind CSS design system',
      'API Layer: Express server with Gemini API streaming integration',
      'Persistence: Supabase PostgreSQL database for transcription history and user vaults'
    ],
    results: [
      'Successfully demonstrates nuanced linguistic modernization without losing historical intent',
      'Clean modular frontend architecture with instantaneous response streaming'
    ],
    testimonialOrNote: 'Built with React, Next.js, Tailwind CSS, Express, Gemini API, and Supabase.'
  },
  {
    id: 'mediremind',
    projectNumber: '04',
    title: 'MediRemind Healthcare Suite',
    subtitle: 'Clinical Medication Scheduling, Adherence Tracking & Health Analytics',
    category: 'Web Applications',
    engagementType: 'Independent Software Lab',
    year: '2026',
    timeline: '2 Weeks',
    featured: true,
    heroImage: '/assets/projects/mediremind_dashboard_hero.png',
    galleryImages: [
      {
        url: '/assets/projects/mediremind_dashboard_hero.png',
        caption: 'MediRemind patient dashboard displaying personalized medicine schedule and intake status'
      },
      {
        url: '/assets/projects/mediremind_compliance_report.png',
        caption: 'Compliance reports with weekly intake analytics and monthly adherence donut chart'
      },
      {
        url: '/assets/projects/mediremind_schedule_manager.png',
        caption: 'Medication management console with dosage presets and interval scheduling'
      },
      {
        url: '/assets/projects/mediremind_notifications.png',
        caption: 'Reminders settings page with real-time browser notifications for pending doses'
      }
    ],
    tags: ['TypeScript', 'Vite', 'Healthcare UX', 'Data Visualization', 'PWA', 'Local Database'],
    summary: 'A responsive digital health application designed to ensure patients and caretakers maintain flawless medication compliance through intelligent scheduling and health reporting.',
    overview: 'MediRemind is a patient-centric wellness portal that transforms complex medication regimens into simple, timely reminders. Developed with a clean clinical design system, it empowers patients to manage dosages, log compliance, and generate physician-ready adherence reports.',
    problem: 'Medication non-adherence accounts for substantial health complications. Many existing apps are cluttered with advertisements, confusing clinical jargon, or complicated multi-step flows that discourage elderly or chronic patients.',
    solution: 'Constructed an accessible, distraction-free web dashboard featuring visual pill schedules, automated dosage status toggling, historical adherence graphs, and printable compliance audits.',
    features: [
      'Personalized medicine inventory manager with dosage, unit, and frequency presets',
      'Interactive daily timeline indicating taken, missed, and upcoming medication alerts',
      'Longitudinal adherence percentage tracker and compliance scoring',
      'Comprehensive medication history audit trail for medical review',
      'Quick-add medicine wizard with intelligent timing presets (Breakfast, Lunch, Dinner, Bedtime)'
    ],
    architecture: [
      'Frontend: Vite-powered TypeScript interface with custom accessible clinical design system',
      'State Engine: Reactive schedule dispatcher with persistent local database storage',
      'Reporting: Dynamic chart and PDF-ready summary generation'
    ],
    results: [
      'Zero external tracking dependencies preserving absolute patient medical privacy',
      'Fast, offline-capable progressive architecture for instant access anywhere'
    ],
    testimonialOrNote: 'Engineered as a standalone digital wellness solution in the Forge Software Lab.'
  },
  {
    id: 'chicken-dinner',
    projectNumber: '05',
    title: 'Chicken Dinner Brand Identity',
    subtitle: 'Culinary Brand Experience, Menu Artwork & Promotional Marketing Kit',
    category: 'Branding & Visual Design',
    engagementType: 'Client Deliverable',
    year: '2026',
    timeline: '1.5 Weeks',
    featured: false,
    heroImage: '/assets/projects/chicken_dinner_hero.png',
    galleryImages: [
      {
        url: '/assets/projects/chicken_dinner_hero.png',
        caption: 'Chicken Dinner official restaurant mascot badge and retro typography'
      },
      {
        url: '/assets/projects/chicken_dinner_banner.png',
        caption: 'Storefront illuminated sign and menu category banner with bilingual typography'
      },
      {
        url: '/assets/projects/chicken_dinner_packaging.png',
        caption: 'Circular takeaway food packaging and sticker decal design'
      }
    ],
    tags: ['Brand Identity', 'Graphic Design', 'Menu Artwork', 'Print Design', 'Social Media Marketing'],
    summary: 'Complete restaurant visual identity package including high-impact menu typography, promotional print posters, and social media marketing assets.',
    overview: 'Chicken Dinner required an appetizing, punchy, and modern visual identity to stand out in a competitive food and hospitality market. Forge Technologies designed a cohesive promotional kit crafted to drive in-store foot traffic and online orders.',
    problem: 'The restaurant had an outdated menu layout that made combo meals difficult to parse, and lacked consistent social media templates to announce limited-time specials.',
    solution: 'Crafted bold, high-contrast menu layouts utilizing disciplined typographic hierarchy and vibrant food color accents. Delivered print-ready CMYK collateral alongside square and story-sized Instagram graphics.',
    features: [
      'Comprehensive restaurant menu design engineered for rapid customer scanning',
      'Bold typographic hierarchy highlighting signature platters and pricing tiers',
      'Print-ready high-resolution promotional posters for storefront display',
      'Cohesive Instagram and social media campaign post templates',
      'Color palette specifications balancing appetite appeal with bold modern branding'
    ],
    architecture: [
      'Design Deliverables: Vector SVG/PDF print files, CMYK certified color separation',
      'Digital Assets: Web-optimized PNG/JPG social assets with structured branding guidelines'
    ],
    results: [
      'Significantly improved customer menu readability and reduced counter ordering times',
      'Consistent branded aesthetic deployed across physical storefront and digital channels'
    ],
    testimonialOrNote: 'Authentic culinary branding and menu artwork created for restaurant client.'
  },
  {
    id: 'personal-developer-portfolio',
    projectNumber: '06',
    title: 'Modern Developer Portfolio',
    subtitle: 'High-Craft Personal Web Engineering & Interactive Showcase',
    category: 'Websites & Digital Experiences',
    engagementType: 'Client Deliverable',
    year: '2026',
    timeline: '2 Weeks',
    liveUrl: 'https://portfolio-website-eosin-pi-90.vercel.app/',
    featured: true,
    heroImage: '/assets/projects/developer_portfolio_hero.png',
    galleryImages: [
      {
        url: '/assets/projects/developer_portfolio_hero.png',
        caption: 'Live portfolio hero section at portfolio-website-eosin-pi-90.vercel.app with 3D orb and custom cursor'
      },
      {
        url: '/assets/projects/developer_portfolio_skills.png',
        caption: 'Interactive skills and technologies breakdown highlighting software competencies'
      },
      {
        url: '/assets/projects/developer_portfolio_about.png',
        caption: 'About section detailing engineering journey and timeline'
      }
    ],
    tags: ['React', 'Node.js', 'Tailwind CSS', 'Vercel', 'Portfolio', 'Modern Web', 'Performance'],
    summary: 'A fast, sleek developer portfolio website highlighting technical proficiencies, project galleries, and seamless contact inquiries.',
    overview: 'A showcase of modern frontend craftsmanship, built to present software engineering projects, technical skillsets, and creative development work with high polish and responsive performance.',
    problem: 'Developers need a memorable digital presence that goes beyond simple resume text, demonstrating actual UI/UX execution, responsive design, and smooth interactions.',
    solution: 'Architected and deployed a single-page interactive portfolio application on Vercel utilizing React and Tailwind CSS, featuring dark mode aesthetics, interactive project cards, and streamlined inquiry handling.',
    features: [
      'Minimalist dark-mode aesthetic with vibrant accent glows and crisp typography',
      'Interactive project showcases with direct links to live deployments and codebases',
      'Comprehensive skills matrix detailing frontend, backend, and AI capabilities',
      'Responsive design ensuring fluid rendering from mobile screens to 4K displays',
      'Integrated contact mechanisms for instant freelance and contract communication'
    ],
    architecture: [
      'Framework: React with component-based architecture',
      'Styling: Tailwind CSS with custom glassmorphism and gradient utilities',
      'Deployment: Vercel automated CI/CD pipeline with edge caching'
    ],
    results: [
      'Live at portfolio-website-eosin-pi-90.vercel.app with 100/100 Lighthouse performance scores',
      'Provides an immediate proof of frontend engineering competence for prospective clients'
    ],
    testimonialOrNote: 'Live deployment: https://portfolio-website-eosin-pi-90.vercel.app/'
  },
  {
    id: 'deloitte-data-analytics',
    projectNumber: '07',
    title: 'Deloitte Retail Analytics Simulation',
    subtitle: 'Executive Business Intelligence & Tableau CEO/CMO Visualization',
    category: 'Data Analytics & Dashboards',
    engagementType: 'Virtual Experience Simulation',
    year: '2026',
    timeline: '1 Week',
    featured: false,
    heroImage: '/assets/projects/deloitte_retail_dashboard.png',
    galleryImages: [
      {
        url: '/assets/projects/deloitte_retail_dashboard.png',
        caption: 'Tableau executive retail intelligence dashboard with 2011 monthly revenue trajectory and top 10 international markets'
      },
      {
        url: '/assets/projects/deloitte_completion_certificate.png',
        caption: 'Official Forage Certificate of Completion in Data Visualisation issued to Mohamed Marzook'
      }
    ],
    tags: ['Data Analytics', 'Tableau', 'Business Intelligence', 'Data Visualization', 'Executive Reporting', 'Retail Analytics'],
    summary: 'An executive-level data analytics simulation analyzing customer buying behaviors, regional revenue concentrations, and retail performance dashboards for C-suite decision makers.',
    overview: 'Completed as part of the rigorous Deloitte Forage Virtual Experience Simulation. Focused on ingesting complex retail sales datasets, cleaning data anomalies, and constructing high-impact Tableau dashboards tailored for executive leadership (CEO & CMO).',
    problem: 'Senior executives lack the time to sift through raw transaction spreadsheets; they require intuitive, actionable dashboards that immediately reveal revenue drivers, high-value customer geographies, and seasonal trends.',
    solution: 'Designed two tailored visual interfaces: a macro-level CEO performance summary highlighting revenue trajectory and top-performing regions, and a granular CMO marketing dashboard breaking down product category velocity and customer retention.',
    features: [
      'In-depth data cleansing and transformation of multi-year retail transactions',
      'CEO Dashboard: High-level metric KPI cards tracking quarterly revenue and growth trends',
      'CMO Dashboard: Demographic segmentation and geographic heatmaps identifying expansion markets',
      'Actionable business recommendations derived from statistical trend analysis',
      'Clear documentation of data lineage, caveats, and analytical assumptions'
    ],
    architecture: [
      'Data Processing: Spreadsheet & dataset validation, null filtering, unit conversion',
      'Visualization: Tableau Software with custom color palettes and interactive drill-downs',
      'Executive Brief: Structured slide presentation delivering insights and recommendations'
    ],
    results: [
      'Successfully delivered executive-ready Tableau dashboard blueprints',
      'Demonstrated data storytelling, business intuition, and clean visual communication'
    ],
    testimonialOrNote: 'Deloitte Forage Data Analytics Virtual Job Simulation project.'
  }
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}
