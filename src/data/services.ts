import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'website',
    category: 'website',
    title: 'Websites & Web Apps',
    shortDesc: 'Custom business websites, portfolios, landing pages, and interactive web applications.',
    benefit: 'We build fast, responsive websites engineered specifically around your commercial goals rather than generic templates.',
    result: 'Your visitors get a fast, credible, and intuitive experience that turns passive clicks into paying inquiries.',
    deliverables: [
      'High-performance custom website with mobile-first architecture',
      'Optimized page load speed & Google Core Web Vitals compliance',
      'Integrated contact / inquiry forms with direct email & WhatsApp triggers',
      'Search engine friendly structure (Semantic HTML & metadata)',
      'Clean content management or easy maintenance handover'
    ],
    iconName: 'Globe',
    tags: ['Landing Pages', 'Business Sites', 'Portfolios', 'Web Apps'],
    recommendedFor: ['Local Businesses', 'Startups', 'Creators', 'Coaches', 'Institutions']
  },
  {
    id: 'ecommerce',
    category: 'ecommerce',
    title: 'E-Commerce Stores',
    shortDesc: 'Frictionless online storefronts and product-selling websites designed to maximize sales.',
    benefit: 'We eliminate checkout confusion and design streamlined product showcases that give buyers confidence.',
    result: 'An easy shopping experience that simplifies inventory management and boosts average cart value.',
    deliverables: [
      'Clean product catalogs with multi-variant options & search filtering',
      'Secure payment gateway & checkout integration',
      'Mobile-optimized cart flow with low abandonment rate architecture',
      'Order tracking notifications and customer inquiry buttons',
      'Stock management dashboard and sales analytics setup'
    ],
    iconName: 'ShoppingBag',
    tags: ['Online Stores', 'Product Showcases', 'Payment Setup', 'Order Tracking'],
    recommendedFor: ['Shops', 'DTC Brands', 'Local Retailers', 'Artisans', 'Merch Creators']
  },
  {
    id: 'design',
    category: 'design',
    title: 'UI/UX & Visual Design',
    shortDesc: 'User interfaces, interactive wireframes, prototypes, and user journey optimization.',
    benefit: 'We turn vague product concepts into crystal-clear visual mockups before code is ever written.',
    result: 'Intuitive user experiences that keep visitors engaged and reduce costly development rework.',
    deliverables: [
      'Interactive Figma prototypes you can click and test on mobile & desktop',
      'User journey mapping & frictionless flow architecture',
      'Scalable design systems (Typography, color palettes, component libraries)',
      'High-fidelity screen layouts ready for developer handoff',
      'Accessibility and contrast audit for effortless readability'
    ],
    iconName: 'Layout',
    tags: ['Wireframing', 'Figma Prototypes', 'User Flows', 'Design Systems'],
    recommendedFor: ['App Founders', 'SaaS Creators', 'Redesigns', 'Product Teams']
  },
  {
    id: 'marketing',
    category: 'marketing',
    title: 'Digital Marketing & SEO',
    shortDesc: 'Organic discovery, local SEO, social media strategies, and content growth funnels.',
    benefit: 'We help your business become easier to discover online by targeting the exact terms your customers search.',
    result: 'Sustainable organic traffic and engaged social audiences that actually convert into customers.',
    deliverables: [
      'Targeted keyword research & competitive search ranking audit',
      'On-page SEO optimization (Title tags, schema, meta descriptions, image tags)',
      'Multi-channel social media content strategy and creative templates',
      'Google Business profile optimization for local foot-traffic and inquiries',
      'Analytics tracking dashboard to monitor visitors and inquiries'
    ],
    iconName: 'TrendingUp',
    tags: ['Search SEO', 'Local Discovery', 'Social Strategy', 'Content Funnels'],
    recommendedFor: ['Cafes & Restaurants', 'Local Services', 'Consultants', 'Retail Shops']
  },
  {
    id: 'ai-automation',
    category: 'ai-automation',
    title: 'AI & Workflow Automation',
    shortDesc: 'AI-assisted productivity tools, smart chatbot triage, and automated business workflows.',
    benefit: 'We eliminate repetitive manual tasks by automating your lead routing, data entry, and customer triage.',
    result: 'Save hours of operational time each week while responding to potential clients instantly.',
    deliverables: [
      'Custom conversational AI triage bots tailored to your services',
      'Automated form-to-CRM / Google Sheets / WhatsApp notification pipes',
      'Smart document summarization and content generation workflows',
      'Voice-assisted task triggers & system automation scripts',
      'Team training and documentation on maintaining AI workflows'
    ],
    iconName: 'Bot',
    tags: ['AI Chatbots', 'Workflow Automation', 'Lead Routing', 'Productivity'],
    recommendedFor: ['Clinics', 'Agencies', 'Service Businesses', 'Solo Founders']
  },
  {
    id: 'branding',
    category: 'branding',
    title: 'Branding & Visual Identity',
    shortDesc: 'Brand positioning, logo design, visual style guides, and consistent brand guidelines.',
    benefit: 'We shape a distinctive brand personality that separates you from generic competitors.',
    result: 'A memorable visual presence that commands respect, builds trust, and justifies premium pricing.',
    deliverables: [
      'Distinctive logo marks with complete icon sets and vector assets',
      'Comprehensive brand guideline book (Typography rules, color formulas)',
      'Social media asset kits (Banners, profile avatars, post templates)',
      'Business cards, invoice templates, and digital stationery',
      'Core brand positioning narrative & tone of voice framework'
    ],
    iconName: 'Sparkles',
    tags: ['Brand Identity', 'Logo Systems', 'Style Guides', 'Brand Narrative'],
    recommendedFor: ['New Businesses', 'Rebranding Companies', 'Personal Brands', 'Startups']
  },
  {
    id: 'research',
    category: 'research',
    title: 'Market & Competitor Research',
    shortDesc: 'Consumer insights, competitive landscape analysis, and market validation.',
    benefit: 'We uncover what your target market truly wants before you invest thousands into building.',
    result: 'Clarity on competitor weaknesses, pricing opportunities, and high-demand product features.',
    deliverables: [
      'Competitor feature matrix & pricing benchmark report',
      'Target customer persona profiling with core pain-point analysis',
      'Market opportunity roadmap highlighting untapped niches',
      'Value proposition testing feedback and messaging recommendations',
      'Executive summary presentation deck ready for stakeholders'
    ],
    iconName: 'Search',
    tags: ['Market Analysis', 'Competitor Audits', 'Consumer Insights', 'Validation'],
    recommendedFor: ['Early Entrepreneurs', 'Product Inventions', 'Business Plans']
  },
  {
    id: 'pitching',
    category: 'pitching',
    title: 'Pitch Decks & Presentations',
    shortDesc: 'Investor pitch decks, client proposals, product storytelling, and business presentations.',
    benefit: 'We distill complex business concepts into persuasive, visually compelling slide decks.',
    result: 'Confidently present to investors, clients, and partners with slides that command attention.',
    deliverables: [
      'Custom 10-15 slide presentation deck structured around investor & client logic',
      'High-impact visual diagrams, data charts, and product mockups',
      'Persuasive storytelling script with clear problem-to-solution arc',
      'Editable master presentation file (Google Slides / PowerPoint / PDF)',
      'Quick 1-page executive summary / tear-sheet'
    ],
    iconName: 'Presentation',
    tags: ['Pitch Decks', 'Investor Slides', 'Product Storytelling', 'Proposals'],
    recommendedFor: ['Startups Seeking Funding', 'Hackathon Competitors', 'Sales Pitches']
  }
];
