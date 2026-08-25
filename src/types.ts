export type ServiceCategory = 
  | 'website'
  | 'ecommerce'
  | 'design'
  | 'marketing'
  | 'ai-automation'
  | 'branding'
  | 'research'
  | 'pitching'
  | 'all';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  shortDesc: string;
  benefit: string;
  result: string;
  deliverables: string[];
  iconName: string;
  tags: string[];
  recommendedFor: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  focus: string[];
  tools: string[];
  strengths: string[];
  email?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  avatarColor: string;
  quote: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  typeLabel: 'Hackathon Award Winner' | 'Ideathon Phase 2 Qualifier' | 'Software Engineering Architecture' | 'E-Learning Web Platform' | 'Voice Automation System' | 'Brand & Consumer Strategy';
  badgeColor: string;
  awardText?: string;
  isVerified: boolean;
  clientOrProject: string;
  problem: string;
  approach: string;
  designAspects: string[];
  developmentAspects: string[];
  marketingAndStrategyAspects: string[];
  finalSolution: string;
  teamContribution: {
    member: string;
    role: string;
    contribution: string;
  }[];
  resultStatus: string;
  technologies: string[];
  keyHighlights: string[];
  demoUrl?: string;
  githubUrl?: string;
  accentGradient: string;
}

export interface PackageTier {
  id: 'starter' | 'growth' | 'custom';
  title: string;
  tagline: string;
  badge?: string;
  targetAudience: string;
  examples: string[];
  deliverables: string[];
  typicalTimeline: string;
  idealFor: string;
  ctaText: string;
  isPopular?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  clientAction: string;
  ourAction: string;
  deliverables: string[];
  iconName: string;
}

export interface CredibilityItem {
  id: string;
  title: string;
  organizationOrContext: string;
  badge: string;
  description: string;
  category: 'Award' | 'Qualifier' | 'Experience' | 'Delivery';
  dateOrStatus: string;
  impact: string;
}

export interface SkillCategory {
  categoryName: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Core' | 'Advanced' | 'Proficient';
    tags: string[];
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phoneWhatsApp: string;
  businessOrg: string;
  serviceNeeded: string;
  projectDescription: string;
  budgetRange: string;
  expectedTimeline: string;
}
