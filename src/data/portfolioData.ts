import {
  ServiceItem,
  WhyWorkItem,
  SkillCategory,
  ProcessStep,
  ProjectItem,
  EducationItem,
} from '../types.ts';

export const PERSONAL_INFO = {
  name: 'Reuben',
  brandName: 'RMK Solutions',
  title: 'Founder | Full Stack Developer | ASP.NET Core MVC & MERN Stack Specialist',
  location: 'South Africa',
  email: 'reuben534@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  tagline: 'From Idea to Deployment, I Build Digital Solutions That Drive Results.',
  heroHeadline: 'Turning Ideas Into Powerful Digital Solutions',
  heroSubheadline:
    'At RMK Solutions, I help businesses, entrepreneurs, and startups transform concepts into professional websites and applications using modern technologies—specializing in ASP.NET Core MVC and the MERN Stack (MongoDB, Express, React, Node.js).',
  profileImage: '/src/assets/images/reuben_profile_portrait_1792314371764.jpg',
  brandLogoMockup: '/src/assets/images/rmk_solutions_logo_1792317141613.jpg',
  aboutNarrative: [
    'My software development journey began in 2020 with a passion for technology, problem-solving, and building solutions that make a difference.',
    'Over the years, I have continuously improved my skills through practical projects, self-learning, and formal education. In 2024, I established RMK Solutions with the vision of helping businesses and entrepreneurs bring their ideas to life through technology.',
    'I graduated from Boston City Campus in 2024 with a Diploma in Systems Development and further strengthened my expertise by completing an Advanced Diploma in Applications Development in 2026.',
    'My education, combined with hands-on project experience, provides a solid foundation in software development, web applications, system analysis, database design, and modern application architecture across both enterprise .NET ecosystems and the modern MERN Stack (MongoDB, Express.js, React, and Node.js).',
    'Today, through RMK Solutions, I specialize in creating modern websites, web applications, and business solutions that are scalable, secure, and designed to help organizations grow.',
  ],
  mission:
    'At RMK Solutions, my mission is to help businesses, startups, and individuals turn their technological visions into resilient, high-performing digital realities. By combining end-to-end engineering rigor, dual-stack versatility across ASP.NET Core MVC and the MERN stack, and a founder’s dedication to business outcomes, I deliver digital products that scale smoothly, look exceptional, and drive measurable value.',
};

export const STATISTICS = [
  { value: '2020+', label: 'Development Journey Started', description: 'Years of continuous engineering practice' },
  { value: '2024', label: 'Founder Established', description: 'Independent development brand launched' },
  { value: '2', label: 'Formal Qualifications', description: 'Diploma & Advanced Diploma in Systems & App Dev' },
  { value: '100%', label: 'Commitment to Quality', description: 'Zero compromise on security, speed & architecture' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'business-websites',
    number: '01',
    title: 'Business Websites',
    shortDesc: 'Professional websites that strengthen online presence and attract customers.',
    iconName: 'Globe',
    deliverables: ['Custom Brand-Aligned Layouts', 'High-Converting Landing Funnels', 'SEO & Performance Tuning', 'CMS / Content Management Integration'],
    techStack: ['React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Vite / Next.js'],
    bestFor: 'Corporate companies, professional service firms, and growing consultancies.',
  },
  {
    id: 'portfolio-websites',
    number: '02',
    title: 'Portfolio Websites',
    shortDesc: 'Modern personal and professional portfolio websites.',
    iconName: 'UserCheck',
    deliverables: ['Personal Brand Identity', 'Interactive Project Showcases', 'Case Study Modals', 'Responsive Visual Aesthetics'],
    techStack: ['React', 'Tailwind CSS', 'Motion / Transitions', 'Web Accessibility'],
    bestFor: 'Founders, executives, creatives, and industry specialists looking to stand out.',
  },
  {
    id: 'custom-web-apps',
    number: '03',
    title: 'Custom Web Applications',
    shortDesc: 'Tailored solutions built to solve specific business challenges with ASP.NET Core or MERN Stack.',
    iconName: 'Layers',
    deliverables: ['End-to-End Workflow Automation', 'Role-Based Access Control (RBAC)', 'RESTful API Backends', 'Modular Component Architecture'],
    techStack: ['ASP.NET Core MVC', 'MERN Stack (MongoDB, Express, React, Node.js)', 'C#', 'SQL Server & MongoDB'],
    bestFor: 'Startups and businesses replacing disjointed spreadsheets and manual workflows.',
  },
  {
    id: 'ecommerce-dev',
    number: '04',
    title: 'E-Commerce Development',
    shortDesc: 'Online stores designed for growth and customer engagement.',
    iconName: 'ShoppingCart',
    deliverables: ['Product Catalog & Filtering', 'Secure Payment Gateway Gateways', 'Order Lifecycle Management', 'Mobile Checkout Optimization'],
    techStack: ['MERN Stack', 'ASP.NET Core', 'Stripe / PayFast', 'React', 'MongoDB / SQL Server'],
    bestFor: 'Retailers, digital creators, and DTC brands driving sales.',
  },
  {
    id: 'dashboard-development',
    number: '05',
    title: 'Dashboard Development',
    shortDesc: 'Business intelligence dashboards and reporting systems.',
    iconName: 'BarChart3',
    deliverables: ['Real-Time KPI Monitoring', 'Data Visualizations & Charts', 'Exportable Financial & Activity Reports', 'Custom Role Views'],
    techStack: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'ASP.NET Core APIs', 'MongoDB Aggregations'],
    bestFor: 'Managers, founders, and teams needing instant business clarity.',
  },
  {
    id: 'database-solutions',
    number: '06',
    title: 'Database Solutions',
    shortDesc: 'Efficient relational (SQL Server) and document (MongoDB) database design and management.',
    iconName: 'Database',
    deliverables: ['Relational & NoSQL Schema Design', 'Query Indexing & Optimization', 'Data Integrity & Migration Scripts', 'Aggregation Pipelines & Backups'],
    techStack: ['MongoDB', 'SQL Server', 'Entity Framework Core', 'Mongoose', 'PostgreSQL'],
    bestFor: 'Systems requiring consistent, high-integrity transaction handling or flexible document stores.',
  },
  {
    id: 'cloud-deployment',
    number: '07',
    title: 'Cloud Deployment',
    shortDesc: 'Deploying applications to modern cloud environments.',
    iconName: 'Cloud',
    deliverables: ['Azure & Cloud Host Configuration', 'CI/CD Automated Pipelines', 'SSL Configuration & DNS Routing', 'Production Environment Hardening'],
    techStack: ['Microsoft Azure', 'Node.js Cloud Hosts', 'GitHub Actions', 'Docker', 'Linux / IIS'],
    bestFor: 'Businesses transitioning to resilient, highly available cloud infrastructure.',
  },
  {
    id: 'maintenance-support',
    number: '08',
    title: 'Website Maintenance & Support',
    shortDesc: 'Ongoing updates, monitoring, and improvements.',
    iconName: 'ShieldCheck',
    deliverables: ['Security Audits & Patching', 'Uptime & Performance Monitoring', 'Feature Iterations & Content Updates', 'Technical Troubleshooting'],
    techStack: ['System Telemetry', 'Version Control', 'Security Best Practices'],
    bestFor: 'Organizations requiring reliable technical uptime without full-time in-house dev staff.',
  },
];

export const WHY_WORK_WITH_ME: WhyWorkItem[] = [
  {
    id: 'end-to-end',
    title: 'End-to-End Development',
    description: 'Comprehensive execution covering database architecture, backend logic, responsive frontends, and production deployment under one unified vision.',
    iconName: 'Cpu',
    highlight: 'Full Lifecycle Ownership',
  },
  {
    id: 'dual-stack',
    title: 'Dual-Stack Versatility (.NET + MERN)',
    description: 'Specialized in both enterprise ASP.NET Core MVC robustness and high-agility modern MERN Stack (MongoDB, Express, React, Node.js) development.',
    iconName: 'Code2',
    highlight: 'ASP.NET Core & MERN Stack',
  },
  {
    id: 'idea-to-deploy',
    title: 'From Idea to Deployment',
    description: 'Translating early business concepts into fully realized, tested, and live web products that serve users reliably from day one.',
    iconName: 'Rocket',
    highlight: 'Turnkey Execution',
  },
  {
    id: 'tech-foundation',
    title: 'Strong Technical Foundation',
    description: 'Backed by formal qualifications in Systems Development and Applications Development, ensuring code adheres to verified computer science principles.',
    iconName: 'GraduationCap',
    highlight: 'Diploma & Advanced Diploma',
  },
  {
    id: 'responsive-design',
    title: 'Responsive & Mobile-Friendly Design',
    description: 'Pixel-precise layouts crafted for flawless performance across smartphones, tablets, ultra-wide desktops, and touch devices.',
    iconName: 'Smartphone',
    highlight: 'Cross-Device Precision',
  },
  {
    id: 'secure-scalable',
    title: 'Secure and Scalable Solutions',
    description: 'Engineered with defense-in-depth principles: parameterized queries, role authorization, sanitized inputs, and architectures ready for user growth.',
    iconName: 'Shield',
    highlight: 'Production Hardened',
  },
  {
    id: 'clean-code',
    title: 'Clean and Maintainable Code',
    description: 'Structured adhering to SOLID principles, separation of concerns, and rigorous naming conventions that your team can easily extend.',
    iconName: 'Sparkles',
    highlight: 'Maintainability First',
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning and Innovation',
    description: 'Consistently adopting modern engineering practices, cloud patterns, and frontend innovations to keep your business ahead of competitors.',
    iconName: 'TrendingUp',
    highlight: 'Modern Standards',
  },
  {
    id: 'reliable-comm',
    title: 'Reliable Communication',
    description: 'Clear, transparent progress updates, transparent timelines, and prompt responsiveness throughout every project milestone.',
    iconName: 'MessageSquare',
    highlight: 'Zero Guesswork',
  },
  {
    id: 'problem-solving',
    title: 'Problem-Solving Mindset',
    description: 'Viewing technical challenges through a business outcome lens, prioritizing pragmatic solutions that deliver tangible return on investment.',
    iconName: 'CheckCircle2',
    highlight: 'Business-Driven Engineering',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'MERN Stack & JavaScript',
    badge: 'Full-Stack JavaScript & NoSQL',
    iconName: 'Layers',
    skills: [
      { name: 'MongoDB', level: 'Advanced', categoryTag: 'NoSQL Database & Mongoose' },
      { name: 'Express.js', level: 'Advanced', categoryTag: 'Backend Framework & APIs' },
      { name: 'React', level: 'Advanced', categoryTag: 'UI Library & Components' },
      { name: 'Node.js', level: 'Advanced', categoryTag: 'Server Runtime & Event Loop' },
      { name: 'RESTful API Architecture', level: 'Expert', categoryTag: 'MERN Communication' },
      { name: 'JWT Authentication', level: 'Advanced', categoryTag: 'Security & Sessions' },
      { name: 'Mongoose ODM', level: 'Advanced', categoryTag: 'Document Modeling' },
    ],
  },
  {
    category: 'Backend & ASP.NET Core',
    badge: 'Enterprise Architecture & APIs',
    iconName: 'Server',
    skills: [
      { name: 'ASP.NET Core MVC', level: 'Expert', categoryTag: 'Enterprise Framework' },
      { name: 'C#', level: 'Advanced', categoryTag: 'Language' },
      { name: '.NET', level: 'Advanced', categoryTag: 'Ecosystem' },
      { name: 'Entity Framework Core', level: 'Advanced', categoryTag: 'ORM' },
      { name: 'REST APIs', level: 'Advanced', categoryTag: 'Architecture' },
      { name: 'Authentication & Authorization', level: 'Advanced', categoryTag: 'RBAC Security' },
      { name: 'SQL Server', level: 'Advanced', categoryTag: 'Relational DB' },
      { name: 'Business Logic Development', level: 'Expert', categoryTag: 'Domain Logic' },
    ],
  },
  {
    category: 'Frontend Development',
    badge: 'Modern UI & Styling',
    iconName: 'Layout',
    skills: [
      { name: 'HTML5', level: 'Advanced', categoryTag: 'Markup' },
      { name: 'CSS3', level: 'Advanced', categoryTag: 'Styling' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', categoryTag: 'Core Scripting' },
      { name: 'React', level: 'Advanced', categoryTag: 'Framework' },
      { name: 'Tailwind CSS', level: 'Expert', categoryTag: 'Utility CSS' },
      { name: 'Responsive Design', level: 'Expert', categoryTag: 'Mobile-First' },
      { name: 'Bootstrap', level: 'Proficient', categoryTag: 'UI Framework' },
    ],
  },
  {
    category: 'Tools & DevOps',
    badge: 'Tooling & Infrastructure',
    iconName: 'Wrench',
    skills: [
      { name: 'Git', level: 'Advanced', categoryTag: 'VCS' },
      { name: 'GitHub', level: 'Advanced', categoryTag: 'Collaboration & CI/CD' },
      { name: 'Visual Studio', level: 'Expert', categoryTag: 'IDE' },
      { name: 'VS Code', level: 'Expert', categoryTag: 'Editor' },
      { name: 'Azure', level: 'Proficient', categoryTag: 'Cloud Platform' },
      { name: 'Cloud Deployment', level: 'Advanced', categoryTag: 'Infrastructure' },
      { name: 'Agile Development', level: 'Advanced', categoryTag: 'Scrum Methodology' },
    ],
  },
  {
    category: 'Software Engineering',
    badge: 'Architecture & Discipline',
    iconName: 'Binary',
    skills: [
      { name: 'Systems Analysis', level: 'Advanced', categoryTag: 'Analysis' },
      { name: 'Software Design', level: 'Advanced', categoryTag: 'Design Patterns' },
      { name: 'Database Design', level: 'Advanced', categoryTag: 'Relational & NoSQL' },
      { name: 'Object-Oriented Programming (OOP)', level: 'Expert', categoryTag: 'Core Principles' },
      { name: 'Application Architecture', level: 'Advanced', categoryTag: 'System Design' },
      { name: 'Problem Solving', level: 'Expert', categoryTag: 'Engineering Mindset' },
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Discovery & Planning',
    tagline: 'Laying the Blueprint for Success',
    description:
      'We define the project scope, business objectives, target audience, technical specifications, and system requirements—choosing between ASP.NET Core or MERN Stack architecture to best meet your timeline and scalability goals.',
    deliverables: ['System Requirements Specification', 'Information Architecture & Site Map', 'Milestone Schedule & Tech Stack Agreement'],
    clientRole: 'Share goals, existing assets, workflows, and functional expectations.',
  },
  {
    stepNumber: 2,
    title: 'UI/UX Design',
    tagline: 'Crafting Intuitive, High-Impact Interfaces',
    description:
      'Translating functional requirements into modern, accessible user interfaces with clean wireframes, visual style guides, and responsive component layouts.',
    deliverables: ['Responsive Component Mockups', 'Color Palette & Typographic System', 'Interactive User Flow Prototypes'],
    clientRole: 'Review interface aesthetics, UX flows, and provide brand feedback.',
  },
  {
    stepNumber: 3,
    title: 'Development',
    tagline: 'Clean Code & Robust Architecture',
    description:
      'Writing secure, clean backend business logic and responsive frontend views. Implementing ASP.NET Core MVC controllers, MERN stack APIs (Node/Express/MongoDB), and modern React interfaces.',
    deliverables: ['Modular Codebase adhering to SOLID', 'Normalized Database Schemas & Migrations', 'Secure API Endpoints & Auth Rules'],
    clientRole: 'Bi-weekly demo reviews and staging environment walkthroughs.',
  },
  {
    stepNumber: 4,
    title: 'Testing & Optimization',
    tagline: 'Ensuring Reliability, Speed, and Security',
    description:
      'Conducting rigorous cross-browser testing, mobile responsiveness checks, SQL/NoSQL query optimization, edge-case validation, and security sanitization.',
    deliverables: ['Quality Assurance Checklist', 'Performance & Speed Optimization', 'Cross-Device Responsiveness Verification'],
    clientRole: 'Acceptance testing on staging server with real-world scenarios.',
  },
  {
    stepNumber: 5,
    title: 'Deployment',
    tagline: 'Taking Your Solution Live',
    description:
      'Configuring cloud environments, SSL certificates, database connections, and CI/CD pipelines to launch your solution seamlessly with zero downtime.',
    deliverables: ['Cloud Provisioning (Azure / Cloud Host)', 'Custom Domain & SSL Setup', 'Production Health Verification'],
    clientRole: 'Final launch sign-off and domain DNS authorization.',
  },
  {
    stepNumber: 6,
    title: 'Ongoing Support',
    tagline: 'Long-Term Reliability & Evolution',
    description:
      'Providing continuous monitoring, scheduled security updates, feature enhancements, and technical support to ensure your application continues driving results as your business expands.',
    deliverables: ['Uptime & Error Monitoring', 'Regular Framework & Dependency Patching', 'Feature Iteration & Priority Bug Fixes'],
    clientRole: 'Monthly performance review and roadmap prioritizations.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'devsync-mern-workspace',
    title: 'DevSync Agile Hub – MERN Stack Workspace',
    subtitle: 'Full-Stack MERN Project Management & Sprint Dashboard',
    description:
      'A collaborative project management platform built completely on the MERN stack (MongoDB, Express.js, React, Node.js). Features interactive drag-and-drop Kanban sprint boards, team burndown analytics, real-time activity feeds, and secure JWT authentication with role permissions.',
    image: '/src/assets/images/project_mern_workspace_1792315276678.jpg',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'JWT Auth', 'REST API'],
    metrics: ['Sub-30ms API Responses', 'Real-Time State Sync', 'Multi-Team Workspaces'],
    architecture: [
      'Document modeling with Mongoose schemas and compound indexes',
      'Modular Express RESTful API with token verification middleware',
      'Optimized React state management and responsive Kanban boards',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com',
    caseStudyAvailable: true,
  },
  {
    id: 'nexus-cloud-ops',
    title: 'Nexus Cloud ERP & Ops Management Portal',
    subtitle: 'Enterprise Resource & Operations Architecture',
    description:
      'A comprehensive enterprise web application engineered with ASP.NET Core MVC, Entity Framework Core, and SQL Server. Features role-based access control, automated inventory tracking, real-time service health monitoring, and exportable operational audit logs.',
    image: '/src/assets/images/project_enterprise_system_1792314371556.jpg',
    tags: ['ASP.NET Core MVC', 'C#', 'SQL Server', 'Entity Framework Core', 'Bootstrap & Tailwind', 'Azure Cloud'],
    metrics: ['Sub-50ms API Latency', 'Multi-tenant RBAC', '99.9% Uptime Architecture'],
    architecture: [
      'Repository & Unit of Work patterns for clean data persistence',
      'ASP.NET Identity with fine-grained claim-based authorization',
      'Optimized T-SQL stored procedures and indexed database views',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com',
    caseStudyAvailable: true,
  },
  {
    id: 'stratos-saas-bi',
    title: 'Stratos BI – SaaS Analytics & Intelligence Hub',
    subtitle: 'Data Visualization & Business Reporting Suite',
    description:
      'A modern business intelligence dashboard providing executives with real-time MRR tracking, user geographic distribution, churn forecasting, and multi-tier subscription analytics. Built with React, TypeScript, and high-performance REST APIs.',
    image: '/src/assets/images/project_saas_dashboard_1792314372096.jpg',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'REST APIs', 'Data Analytics'],
    metrics: ['+18.9% User Onboarding Velocity', 'Instant Multi-Filter Rendering', 'Automated Daily Summaries'],
    architecture: [
      'Interactive canvas and SVG chart rendering with tabular numerals',
      'Normalized state management with resilient error boundaries',
      'Secure token-based API authentication and caching layers',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com',
    caseStudyAvailable: true,
  },
  {
    id: 'aura-ecommerce',
    title: 'Aura Elevated Tech – E-Commerce Storefront',
    subtitle: 'High-Converting Digital Store & Checkout Engine',
    description:
      'A high-performance digital commerce experience featuring lightning-fast product filtering, reactive bag slideouts, seamless payment integration, customer account dashboards, and automated order invoice generation.',
    image: '/src/assets/images/project_ecommerce_web_1792314372351.jpg',
    tags: ['React', 'Node.js / ASP.NET', 'MongoDB & SQL', 'Tailwind CSS', 'Payment Gateway Integration'],
    metrics: ['1.2s Page Load Speed', 'Zero Cart Dropoff UX', 'Mobile-First Conversion Funnel'],
    architecture: [
      'Optimized media delivery and responsive image rendering',
      'Atomic cart state synchronization with local storage persistence',
      'Stripe/PayFast webhook verification and order fulfillment pipeline',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com',
    caseStudyAvailable: true,
  },
];

export const EDUCATION: EducationItem[] = [
  {
    year: '2024',
    degree: 'Diploma in Systems Development',
    institution: 'Boston City Campus',
    description:
      'Completed rigorous training covering computer programming fundamentals, database architecture, systems analysis methodologies, and the full software engineering lifecycle.',
    keyAreas: [
      'Software Development',
      'Database Systems',
      'Systems Analysis',
      'Programming Fundamentals',
      'Object-Oriented Design',
      'Information Systems',
    ],
  },
  {
    year: '2026',
    degree: 'Advanced Diploma in Applications Development',
    institution: 'Higher Education Institution',
    description:
      'Advanced specialized qualification focusing on enterprise architecture, distributed systems, advanced algorithms, secure enterprise engineering, and modern cloud application deployment.',
    keyAreas: [
      'Application Architecture',
      'Advanced Programming',
      'Software Engineering',
      'Enterprise Application Development',
      'Cloud Architecture & Integration',
      'Security & Scalability Paradigms',
    ],
  },
];
