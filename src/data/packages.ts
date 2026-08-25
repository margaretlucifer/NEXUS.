import { PackageTier } from '../types';

export const PACKAGES_DATA: PackageTier[] = [
  {
    id: 'starter',
    title: 'Starter',
    tagline: 'Ideal for individuals, personal brands & small local businesses ready for a clean digital home.',
    targetAudience: 'Individuals, Cafes, Local Shops, Freelancers, Consultants',
    examples: [
      'Single-page landing page or portfolio',
      'Local business information website',
      'Event or product pre-launch page',
      'Brand identity starter pack & social banner kit'
    ],
    deliverables: [
      'Responsive 1-to-3 page custom website',
      'Mobile-optimized layout & fast loading speed',
      'Direct WhatsApp & Email inquiry buttons',
      'Basic On-Page SEO setup for Google search',
      'Easy domain linking & launch assistance',
      '14 days of post-launch bug-fix support'
    ],
    typicalTimeline: '1 to 2 Weeks',
    idealFor: 'Getting online quickly with a polished, trustworthy presentation without overcomplicating things.',
    ctaText: 'Discuss Starter Project'
  },
  {
    id: 'growth',
    title: 'Growth',
    tagline: 'For established businesses & growing startups needing comprehensive features, e-commerce, or branding.',
    badge: 'Most Popular',
    isPopular: true,
    targetAudience: 'Small Businesses, E-Commerce, Service Clinics, Fast-Growing Startups',
    examples: [
      'Multi-page commercial business website',
      'Online store with cart, payments & catalog',
      'Complete brand redesign + social media templates',
      'Marketing strategy + local SEO campaign setup'
    ],
    deliverables: [
      'Custom multi-page responsive website / storefront',
      'Product catalog / service booking architecture',
      'Interactive UI/UX design mockups in Figma before coding',
      'Advanced SEO optimization & Google Search Console setup',
      'Branded social media templates & asset guidelines',
      'Automated email lead notifications & contact storage',
      '30 days of post-launch maintenance & guidance'
    ],
    typicalTimeline: '2 to 4 Weeks',
    idealFor: 'Businesses looking to attract more customers, sell products online, and upgrade their market presence.',
    ctaText: 'Discuss Growth Project'
  },
  {
    id: 'custom',
    title: 'Custom Solution',
    tagline: 'For bespoke web applications, AI automation workflows, 3D interactive experiences & investor pitch packages.',
    targetAudience: 'Tech Startups, Complex Operations, Educational Platforms, Innovators',
    examples: [
      'Full-stack web application / SaaS dashboard',
      'Interactive 3D / canvas browser experiences',
      'AI chatbot triage & automated business pipelines',
      'Investor pitch deck + product MVP prototype'
    ],
    deliverables: [
      'Tailored full-stack architecture (Frontend, Backend, Database)',
      'Custom AI & automation pipeline integrations',
      'High-fidelity interactive prototype & user journey testing',
      'Database modeling with ACID compliance & optimized queries',
      'Investor/Client ready presentation deck & product storytelling',
      'Dedicated multi-disciplinary team coordination',
      'Ongoing technical consultation & roadmap planning'
    ],
    typicalTimeline: 'Custom Timeline based on Scope',
    idealFor: 'Unique business problems that require a coordinated team of developers, designers, and strategists.',
    ctaText: 'Request a Consultation'
  }
];
