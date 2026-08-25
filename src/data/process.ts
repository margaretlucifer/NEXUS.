import { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discuss',
    subtitle: 'Tell us about your idea',
    description: 'We hop on a call or chat via WhatsApp/Email to understand your initial concept, business context, target audience, and challenges.',
    clientAction: 'Share your idea, existing links, or rough notes (even if unstructured).',
    ourAction: 'Listen, ask clarifying questions, and identify core objectives.',
    deliverables: ['Initial Discovery Notes', 'High-level Scope Checklist'],
    iconName: 'MessageSquare'
  },
  {
    number: '02',
    title: 'Understand',
    subtitle: 'Clarify goals & audience',
    description: 'We research your niche, analyze competitors, understand user expectations, and define what real success looks like for your project.',
    clientAction: 'Provide feedback on target client preferences and priorities.',
    ourAction: 'Competitor benchmarking and user journey breakdown.',
    deliverables: ['Target Audience Profile', 'Key Feature Requirements'],
    iconName: 'Compass'
  },
  {
    number: '03',
    title: 'Plan',
    subtitle: 'Define scope & timeline',
    description: 'We draft a clear, transparent project roadmap with transparent milestones, deliverables, timelines, and assigned team responsibilities.',
    clientAction: 'Review the proposal, timeline, and deliverables.',
    ourAction: 'Structure technical architecture, design sprint schedule, and milestones.',
    deliverables: ['Project Blueprint', 'Milestone Calendar', 'Transparent Quote'],
    iconName: 'FileText'
  },
  {
    number: '04',
    title: 'Design',
    subtitle: 'Visuals & user experience',
    description: 'Our UI/UX designer and brand strategist create wireframes, interactive prototypes, and visual styling for your review before building.',
    clientAction: 'Test the clickable prototype and share aesthetic preferences.',
    ourAction: 'Refine layouts, typography, micro-interactions, and design tokens.',
    deliverables: ['Figma Prototype', 'UI Component System', 'Brand Style Guide'],
    iconName: 'Palette'
  },
  {
    number: '05',
    title: 'Build',
    subtitle: 'Engineering & development',
    description: 'Our lead developer and AI operations lead write clean, fast, modular code. We implement responsive design, databases, integrations, and SEO.',
    clientAction: 'Monitor progress updates and preview staging builds.',
    ourAction: 'Frontend, backend, API integration, database schema, and performance tuning.',
    deliverables: ['Working Staging Build', 'Clean Modular Codebase'],
    iconName: 'Code2'
  },
  {
    number: '06',
    title: 'Review',
    subtitle: 'Feedback & refinement',
    description: 'You test the live staging environment. We gather your feedback and polish every detail across desktop, tablet, and mobile screens.',
    clientAction: 'Perform user testing and list any final adjustments.',
    ourAction: 'Implement refinements, fix edge cases, and ensure cross-browser stability.',
    deliverables: ['Refinement Log', 'Quality & Speed Audit Report'],
    iconName: 'CheckCircle2'
  },
  {
    number: '07',
    title: 'Launch',
    subtitle: 'Deployment & go-live',
    description: 'We configure your domain, setup SSL, connect analytics, verify SEO tags, and push your digital product live to the world.',
    clientAction: 'Provide domain access and celebrate the launch.',
    ourAction: 'Production deployment, DNS linking, search console indexing, and launch check.',
    deliverables: ['Live Production Website', 'Handover Credentials & Guide'],
    iconName: 'Rocket'
  },
  {
    number: '08',
    title: 'Support',
    subtitle: 'Maintenance & growth',
    description: 'We stay available for post-launch maintenance, troubleshooting, SEO optimization, and feature additions as your business grows.',
    clientAction: 'Reach out whenever you need updates or new features.',
    ourAction: 'Ongoing monitoring, quick fixes, and growth consultations.',
    deliverables: ['Warranty Support Period', 'Future Roadmap Guidance'],
    iconName: 'ShieldCheck'
  }
];

export const CLIENT_JOURNEY_STEPS = [
  { step: '01', title: 'You Have An Idea', desc: 'Even if it is just a rough thought on paper or a business problem.', icon: 'Lightbulb' },
  { step: '02', title: 'Send Us A Message', desc: 'Use our quick form or chat directly on WhatsApp in one click.', icon: 'Send' },
  { step: '03', title: 'Free Initial Discussion', desc: 'Zero-pressure conversation to explore possibilities and solutions.', icon: 'Coffee' },
  { step: '04', title: 'Requirements', desc: 'We outline the exact features and user journeys needed.', icon: 'ListChecks' },
  { step: '05', title: 'Proposal', desc: 'Clear deliverables, honest timeline, and transparent pricing.', icon: 'FileSpreadsheet' },
  { step: '06', title: 'Design', desc: 'You see and click through the visual prototype first.', icon: 'Layers' },
  { step: '07', title: 'Development', desc: 'We build the code, database, and integrations with speed.', icon: 'Terminal' },
  { step: '08', title: 'Review', desc: 'You test the staging link and we make all polish adjustments.', icon: 'Eye' },
  { step: '09', title: 'Launch', desc: 'Your idea is live, fast, discoverable, and ready for clients.', icon: 'PartyPopper' }
];
