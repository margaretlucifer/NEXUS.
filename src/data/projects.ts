import { ProjectCaseStudy } from '../types';

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: '3d-gesture-medical-chatbot',
    title: '3D Hand-Gesture Interaction System & Medical Chatbot',
    category: 'Development / AI / 3D',
    subtitle: 'Touchless spatial interaction and conversational medical triage system',
    typeLabel: 'Hackathon Award Winner',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    awardText: 'Hackathon — 3rd Prize Winner',
    isVerified: true,
    clientOrProject: 'Competitive Hackathon Engineering Project (3rd Prize)',
    problem: 'Healthcare environments require sterile, touch-free interfaces to prevent cross-contamination while interacting with medical dashboards. Simultaneously, patients and clinic visitors need rapid, clear access to symptom triage information without overwhelming medical staff.',
    approach: 'Engineered a unified touchless system combining real-time computer vision for spatial hand gestures with an integrated AI-powered conversational medical assistant running on a responsive 3D interactive viewport.',
    designAspects: [
      'Spatial UI designed for distance viewing with high-contrast feedback states',
      'Visual cues for active hand tracking zones and real-time gesture responsiveness',
      'Accessible medical chat interface with clear symptom triage cards'
    ],
    developmentAspects: [
      'Implemented real-time 3D rendering with Three.js for interactive model manipulation',
      'Integrated computer vision hand-tracking algorithms with zero-latency gesture recognition',
      'Built intelligent NLP chatbot pipeline for medical query analysis and structured triage responses'
    ],
    marketingAndStrategyAspects: [
      'Positioned the solution for clinical sterile rooms, kiosks, and touchless public health check-ins',
      'Structured live demonstration pitch highlighting rapid user adoption and cross-contamination reduction'
    ],
    finalSolution: 'A working full-stack prototype where users interact with 3D medical anatomy models entirely through natural hand gestures in mid-air, while consulting an intelligent AI assistant for symptom categorization.',
    teamContribution: [
      {
        member: 'Aryan Jadhav',
        role: 'Lead Software & 3D/AI Developer',
        contribution: 'Engineered Three.js 3D viewport, computer vision gesture pipeline, and core AI backend integration.'
      },
      {
        member: 'Sahejata Patil',
        role: 'Lead UI/UX Designer',
        contribution: 'Designed spatial HUD layout, gesture feedback indicators, and medical conversation cards.'
      },
      {
        member: 'Yashraj',
        role: 'Product Strategist & Pitch Lead',
        contribution: 'Developed the hackathon pitch deck, business feasibility framing, and live jury demonstration flow.'
      },
      {
        member: 'Devang Revandkar',
        role: 'Operations Lead',
        contribution: 'Streamlined hackathon build sprint timeline, dependency orchestration, and performance profiling.'
      }
    ],
    resultStatus: 'Awarded 3rd Prize in competitive Hackathon; demonstrated working zero-contact interaction pipeline with >95% gesture accuracy in live test conditions.',
    technologies: ['Three.js', 'Computer Vision', 'AI / NLP', 'React', 'JavaScript', 'Python', 'Tailwind CSS'],
    keyHighlights: [
      '3rd Prize in Hackathon Competition',
      'Touchless spatial gesture navigation',
      'AI-powered clinical triage chatbot',
      'Low-latency 3D rendering in the browser'
    ],
    accentGradient: 'from-emerald-600/30 via-indigo-600/20 to-transparent'
  },
  {
    id: 'hospital-management-system',
    title: 'Hospital Management System',
    category: 'Database / Software Engineering',
    subtitle: 'Relational database architecture and healthcare administrative engine',
    typeLabel: 'Software Engineering Architecture',
    badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
    awardText: 'Engineered Relational Architecture',
    isVerified: true,
    clientOrProject: 'Healthcare Software Engineering Architecture Project',
    problem: 'Hospitals face significant operational inefficiencies, data silos, and scheduling bottlenecks when managing patient records, doctor allocations, pharmacy inventories, and billing across disconnected legacy systems.',
    approach: 'Designed and deployed a normalized MySQL relational database schema paired with an administrative dashboard to manage patient admissions, appointments, prescription histories, and staff schedules with ACID transactional integrity.',
    designAspects: [
      'High-density dashboard interface tailored for hospital receptionists, nurses, and doctors',
      'Clear role-based view hierarchy with swift keyboard shortcuts and status color codings',
      'Structured form layouts to minimize human data entry errors in emergency admissions'
    ],
    developmentAspects: [
      'Architected 3rd Normal Form (3NF) relational database schema in MySQL with indexed foreign keys and stored procedures',
      'Constructed backend API endpoints for transactional appointment booking and real-time bed allocation',
      'Implemented robust data validation, role-based access control, and query optimization for high-concurrency operations'
    ],
    marketingAndStrategyAspects: [
      'Mapped operational pain points of private clinic administrators to feature modules',
      'Created system demonstration documentation showcasing reduced wait times and automated billing calculations'
    ],
    finalSolution: 'A comprehensive, modular healthcare management platform that unifies patient registration, doctor schedules, pharmacy tracking, and billing into one synchronized database system.',
    teamContribution: [
      {
        member: 'Aryan Jadhav',
        role: 'Lead Software Developer & Database Architect',
        contribution: 'Designed SQL schemas, relational constraints, stored procedures, and backend query optimization.'
      },
      {
        member: 'Devang Revandkar',
        role: 'Operations & Data Lead',
        contribution: 'Structured entity relationship workflows, clinic data models, and edge-case operational validation.'
      },
      {
        member: 'Sahejata Patil',
        role: 'Lead UI/UX Designer',
        contribution: 'Crafted the administrative dashboard wireframes, patient record cards, and multi-step intake flows.'
      }
    ],
    resultStatus: 'Full functional relational architecture with sub-100ms query latency on complex multi-table joins across 10,000+ simulated patient records.',
    technologies: ['MySQL', 'SQL Architecture', 'Node.js', 'Express', 'React', 'Tailwind CSS', 'Relational Modeling'],
    keyHighlights: [
      'Optimized 3NF Relational Database Schema',
      'Role-based permissions for doctors, staff & admins',
      'Automated billing and bed occupancy tracker',
      'ACID transactional record integrity'
    ],
    accentGradient: 'from-blue-600/30 via-indigo-600/20 to-transparent'
  },
  {
    id: 'jarvis-voice-assistant',
    title: 'Jarvis-Style Voice Assistant',
    category: 'Python / Automation / AI',
    subtitle: 'Voice-responsive desktop automation and multi-tasking conversational system',
    typeLabel: 'Voice Automation System',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    awardText: 'Intelligent Desktop Automation',
    isVerified: true,
    clientOrProject: 'AI Productivity & Desktop Automation Engineering',
    problem: 'Knowledge workers and developers lose significant productive time constantly switching contexts between windows, manually triggering repetitive system tasks, searching files, and managing calendars.',
    approach: 'Constructed an intelligent, voice-activated desktop automation assistant in Python that executes voice commands, controls application states, searches real-time web info, and schedules tasks hands-free.',
    designAspects: [
      'Minimalist floating desktop HUD with dynamic voice wave visualizer responding to mic input amplitude',
      'Non-intrusive notification overlays for command execution confirmations',
      'Clean audio feedback and customizable wake-word response modes'
    ],
    developmentAspects: [
      'Built multi-threaded Python core integrating Speech-to-Text (STT) and Text-to-Speech (TTS) engines',
      'Developed modular command dispatch system for OS-level automation, application launching, and browser control',
      'Integrated live web scraping and API connectors for instant weather, news, email summaries, and search queries'
    ],
    marketingAndStrategyAspects: [
      'Packaged the utility for productivity-focused creators and remote professionals seeking hands-free workflow shortcuts',
      'Documented modular plugin expansion framework for custom developer automations'
    ],
    finalSolution: 'A responsive desktop voice agent capable of executing complex multi-step commands (e.g., "Prep my morning workspace", "Summarize latest tech headlines", "Search and play reference track") in seconds.',
    teamContribution: [
      {
        member: 'Aryan Jadhav',
        role: 'Lead Python Developer & AI Systems',
        contribution: 'Engineered voice processing pipeline, OS automation dispatchers, and external API hooks.'
      },
      {
        member: 'Devang Revandkar',
        role: 'AI Productivity Lead',
        contribution: 'Mapped developer workflows, command shortcuts, and automated productivity task sequences.'
      }
    ],
    resultStatus: 'Fully operational desktop voice assistant supporting hands-free system control with sub-second voice command transcription.',
    technologies: ['Python', 'Speech Recognition', 'TTS / STT', 'OS Automation', 'APIs', 'Thread Management'],
    keyHighlights: [
      'Voice-activated desktop system control',
      'Real-time information querying & TTS output',
      'Custom workflow automation macros',
      'Low CPU overhead background listener'
    ],
    accentGradient: 'from-amber-600/30 via-indigo-600/20 to-transparent'
  },
  {
    id: 'avishkaar-academy',
    title: 'Avishkaar Academy',
    category: 'Web Development / Education',
    subtitle: 'Modern e-learning website and student-course enrollment platform',
    typeLabel: 'E-Learning Web Platform',
    badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
    awardText: 'Live Web Platform Development',
    isVerified: true,
    clientOrProject: 'Educational Institution & Academy Web Platform',
    problem: 'The academy needed an accessible, fast-loading modern digital home to showcase curriculum courses, facilitate student enrollment inquiries, and build educational trust with prospective learners and parents.',
    approach: 'Designed and built a high-conversion, responsive e-learning web platform with clean course categorization, faculty profiles, interactive inquiry forms, and lightning-fast page speed performance.',
    designAspects: [
      'Welcoming, trustworthy educational visual identity with clear course hierarchy and typography',
      'Mobile-optimized navigation and course syllabus preview cards with duration and skill level tags',
      'Frictionless enrollment inquiry modal and direct WhatsApp advisory trigger'
    ],
    developmentAspects: [
      'Developed responsive frontend using modern web standards ensuring sub-1s load times across mobile devices',
      'Created modular course catalog filtering by subject, grade level, and learning mode',
      'Implemented robust form handling with input sanitization and email notification dispatch'
    ],
    marketingAndStrategyAspects: [
      'Integrated local SEO structure to rank for regional academy and course search queries',
      'Placed strategic CTA touchpoints across course pages to maximize student inquiry conversion rates'
    ],
    finalSolution: 'A polished, high-performing educational platform that provides students and parents with instant clarity on academic programs and a frictionless path to enroll.',
    teamContribution: [
      {
        member: 'Aryan Jadhav',
        role: 'Lead Web Developer',
        contribution: 'Built the responsive web codebase, interactive course modules, and inquiry integration.'
      },
      {
        member: 'Nakshatra Pachpund',
        role: 'Marketing & SEO Strategist',
        contribution: 'Conducted local search keyword research, structured metadata, and optimized copy for conversions.'
      },
      {
        member: 'Sahejata Patil',
        role: 'Lead UI/UX Designer',
        contribution: 'Designed student-friendly visual identity, course cards, and responsive layout wireframes.'
      }
    ],
    resultStatus: 'Successfully deployed educational platform delivering 98+ Google Lighthouse performance score and streamlined student intake.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'SEO Optimization', 'Responsive Architecture'],
    keyHighlights: [
      'Complete course syllabus directory',
      'Mobile-first responsive UX',
      'Integrated WhatsApp & email intake flows',
      'SEO-optimized architecture for organic reach'
    ],
    accentGradient: 'from-indigo-600/30 via-purple-600/20 to-transparent'
  },
  {
    id: 'virtual-science-lab',
    title: 'Virtual Science Lab',
    category: 'Web / Education / Innovation',
    subtitle: 'Interactive browser-based experimental simulation platform for STEM learners',
    typeLabel: 'Ideathon Phase 2 Qualifier',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    awardText: 'India Tech Summit: Innovate 2026 Ideathon Phase 2 Qualifier',
    isVerified: true,
    clientOrProject: 'India Tech Summit: Innovate 2026 Ideathon Innovation Qualifier',
    problem: 'Many schools and students lack access to physical laboratory equipment, making hands-on physics and chemistry experimentation inaccessible and theoretical learning abstract.',
    approach: 'Conceptualized and prototyped an interactive virtual laboratory allowing students to manipulate lab apparatus, combine compounds, adjust variables in real-time, and observe physical reactions inside an accessible web browser.',
    designAspects: [
      'Intuitive drag-and-drop apparatus interface designed for young learners and educators',
      'Dynamic visual measurement dials, temperature gauges, and color-changing chemical reactions',
      'Gamified experiment step-by-step guidance system with observation notes'
    ],
    developmentAspects: [
      'Built interactive canvas-based simulation engine with accurate physical collision and reaction state logic',
      'Created modular experiment definitions allowing educators to load physics and chemistry experiments seamlessly',
      'Engineered state management to record student hypothesis, experimental steps, and measured outcomes'
    ],
    marketingAndStrategyAspects: [
      'Prepared the competitive Ideathon innovation proposal, market scalability analysis, and educational impact thesis',
      'Presented phase 2 qualification pitch demonstrating cost reduction for under-resourced schools'
    ],
    finalSolution: 'An interactive web-based scientific simulator bridging the educational equipment gap by bringing realistic lab experiments to any screen.',
    teamContribution: [
      {
        member: 'Aryan Jadhav',
        role: 'Lead Developer & Simulation Architect',
        contribution: 'Engineered the interactive experiment state machine and browser canvas interaction mechanics.'
      },
      {
        member: 'Yashraj',
        role: 'Product Strategist & Lead Pitcher',
        contribution: 'Formulated the Ideathon submission, educational impact proposition, and jury presentation.'
      },
      {
        member: 'Sahejata Patil',
        role: 'Lead UI/UX Designer',
        contribution: 'Designed student laboratory workbench, apparatus vector assets, and experiment guide UI.'
      },
      {
        member: 'Devang Revandkar',
        role: 'Operations Lead',
        contribution: 'Synthesized curriculum standards, mapped experiment parameters, and managed build milestones.'
      }
    ],
    resultStatus: 'Selected as Phase 2 Qualifier at India Tech Summit: Innovate 2026 Ideathon among hundreds of competing innovative tech ideas.',
    technologies: ['Interactive Canvas', 'JavaScript', 'Physics Engine', 'React', 'Tailwind CSS', 'State Machines'],
    keyHighlights: [
      'India Tech Summit Phase 2 Qualifier',
      'Interactive hands-on science simulations',
      'Zero-installation browser accessible',
      'Designed for under-resourced STEM classrooms'
    ],
    accentGradient: 'from-cyan-600/30 via-indigo-600/20 to-transparent'
  },
  {
    id: 'brand-launch-consumer-strategy',
    title: 'Brand Launch & Consumer Strategy',
    category: 'Marketing / Branding',
    subtitle: 'Comprehensive brand positioning, competitor benchmarking, and consumer acquisition strategy',
    typeLabel: 'Brand & Consumer Strategy',
    badgeColor: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
    awardText: 'Verified Strategic Brand Blueprint',
    isVerified: true,
    clientOrProject: 'Strategic Brand Identity & Market Positioning Blueprint',
    problem: 'Emerging consumer brands and local businesses often struggle with fragmented visual identities, unclear value propositions, and ineffective ad spend due to a lack of structured consumer research.',
    approach: 'Executed deep qualitative consumer research, competitor differentiation mapping, and created an end-to-end launch roadmap combining visual identity guidelines, organic content strategy, and multi-channel campaign architectures.',
    designAspects: [
      'Comprehensive brand style guide detailing typography hierarchy, color harmony, and visual assets',
      'Omnichannel social media templates and high-converting ad creative mockups',
      'Cohesive packaging and digital touchpoint guidelines for unified brand recall'
    ],
    developmentAspects: [
      'Audited digital touchpoints for conversion rate optimization (CRO) and messaging clarity',
      'Implemented marketing analytics tracking setup to measure audience engagement and bounce rates'
    ],
    marketingAndStrategyAspects: [
      'Conducted consumer psychographic interviews and competitor price-to-value quadrant analysis',
      'Architected 90-day organic and paid content calendar focused on educational trust and community building',
      'Defined core brand narrative: "Clear differentiation over generic competition"'
    ],
    finalSolution: 'An actionable, 360-degree brand launch blueprint that aligns visual identity, market positioning, consumer psychographics, and conversion funnels into one cohesive growth strategy.',
    teamContribution: [
      {
        member: 'Nakshatra Pachpund',
        role: 'Lead Marketing & Brand Strategist',
        contribution: 'Conducted consumer research, market segmentation, competitor benchmarking, and campaign roadmap.'
      },
      {
        member: 'Sahejata Patil',
        role: 'Lead UI/UX Designer',
        contribution: 'Developed visual identity design system, social media templates, and aesthetic guidelines.'
      },
      {
        member: 'Yashraj',
        role: 'Product & Value Strategist',
        contribution: 'Refined brand storytelling narrative, pitch deck messaging, and customer value hooks.'
      }
    ],
    resultStatus: 'Delivered complete ready-to-execute brand roadmap with differentiated positioning matrices and multi-channel content funnel.',
    technologies: ['Brand Strategy', 'Consumer Insights', 'Market Analytics', 'SEO Planning', 'Visual Identity Systems'],
    keyHighlights: [
      'Comprehensive brand positioning blueprint',
      'Target consumer psychographic profiling',
      'Omnichannel launch roadmap & templates',
      'Actionable conversion-focused copy frameworks'
    ],
    accentGradient: 'from-teal-600/30 via-emerald-600/20 to-transparent'
  }
];
