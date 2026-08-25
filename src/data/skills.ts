import { SkillCategory } from '../types';

export const SKILLS_MATRIX: SkillCategory[] = [
  {
    categoryName: 'Development',
    description: 'Modern frontend, scalable backends, 3D browser graphics, relational databases, and AI automation.',
    iconName: 'Code',
    skills: [
      { name: 'React', level: 'Core', tags: ['Frontend', 'Components', 'SPA', 'Hooks'] },
      { name: 'JavaScript / TypeScript', level: 'Core', tags: ['Modern ESNext', 'Type Safety', 'APIs'] },
      { name: 'HTML5 & Modern CSS3', level: 'Core', tags: ['Semantics', 'Accessibility', 'Responsive'] },
      { name: 'Tailwind CSS', level: 'Core', tags: ['Utility Design', 'Responsive UI', 'Dark Mode'] },
      { name: 'Python', level: 'Advanced', tags: ['Automation', 'Voice Systems', 'Data Scripts'] },
      { name: 'Three.js / 3D Web', level: 'Advanced', tags: ['Spatial 3D', 'WebGL', 'Interactive Models'] },
      { name: 'MySQL / SQL Architecture', level: 'Advanced', tags: ['3NF Normalization', 'Queries', 'ACID'] },
      { name: 'Node.js & Express', level: 'Advanced', tags: ['REST APIs', 'Server Routing', 'Auth'] },
      { name: 'AI-Assisted Development', level: 'Core', tags: ['Rapid Prototyping', 'Prompt Engineering', 'Workflows'] }
    ]
  },
  {
    categoryName: 'Design',
    description: 'User-centered interfaces, clickable wireframe prototypes, cohesive visual systems, and brand assets.',
    iconName: 'Palette',
    skills: [
      { name: 'UI / UX Design', level: 'Core', tags: ['User Experience', 'Interface Architecture', 'Accessibility'] },
      { name: 'Wireframing & Flowcharts', level: 'Core', tags: ['Information Architecture', 'User Paths'] },
      { name: 'Interactive Prototyping', level: 'Core', tags: ['Figma', 'Clickable Demos', 'Transitions'] },
      { name: 'Visual Design Systems', level: 'Core', tags: ['Typography', 'Color Schemes', 'Component Sets'] },
      { name: 'Brand Identity & Logos', level: 'Advanced', tags: ['Visual Guidelines', 'Asset Kits', 'Vector Logos'] },
      { name: 'Responsive Layouts', level: 'Core', tags: ['Mobile-First', 'Tablet/Desktop Grid', 'Breakpoints'] }
    ]
  },
  {
    categoryName: 'Marketing',
    description: 'Data-driven market research, organic search optimization, brand narratives, and multi-channel reach.',
    iconName: 'TrendingUp',
    skills: [
      { name: 'Search Engine Optimization (SEO)', level: 'Core', tags: ['On-Page SEO', 'Keyword Research', 'Local SEO'] },
      { name: 'Brand Strategy', level: 'Core', tags: ['Brand Positioning', 'Tone of Voice', 'Value Mapping'] },
      { name: 'Market Research', level: 'Core', tags: ['Competitor Benchmarking', 'Market Gaps', 'Surveys'] },
      { name: 'Consumer Insights', level: 'Advanced', tags: ['Psychographics', 'User Pain Points', 'Target Profiles'] },
      { name: 'Social Media Strategy', level: 'Advanced', tags: ['Content Pillars', 'Engagement Funnels', 'Creative Assets'] },
      { name: 'Campaign Planning', level: 'Advanced', tags: ['Launch Roadmaps', 'Conversion Copy', 'CRO'] }
    ]
  },
  {
    categoryName: 'Business & Strategy',
    description: 'Client communication, project scoping, investor pitch decks, and cross-functional project execution.',
    iconName: 'Briefcase',
    skills: [
      { name: 'Client Communication', level: 'Core', tags: ['Non-Technical Translation', 'Clear Updates', 'Expectations'] },
      { name: 'Product Strategy & Roadmaps', level: 'Core', tags: ['Scope Prioritization', 'Feature MVP', 'Feasibility'] },
      { name: 'Pitch Decks & Storytelling', level: 'Core', tags: ['Investor Pitch', 'Jury Presentations', 'Visual Narratives'] },
      { name: 'Value Propositions', level: 'Core', tags: ['Hook Formulation', 'Competitive Differentiation'] },
      { name: 'Project Coordination', level: 'Core', tags: ['Milestone Tracking', 'Zero-Delay Cycles', 'Operations'] },
      { name: 'AI Productivity Systems', level: 'Advanced', tags: ['Process Improvement', 'Task Automation', 'Workflows'] }
    ]
  }
];
