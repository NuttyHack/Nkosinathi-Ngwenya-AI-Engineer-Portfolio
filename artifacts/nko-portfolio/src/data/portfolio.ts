export type Project = {
  id: string;
  name: string;
  kind: string;
  visibility: 'Public' | 'Private';
  language?: string;
  description: string;
  accent: 'olive' | 'coral' | 'blue' | 'gold' | 'violet';
  github?: string;
  featured?: boolean;
  sections?: Array<{ label: string; text: string }>;
};

export type Capability = {
  title: string;
  icon: 'brain' | 'network' | 'radar' | 'git' | 'layers' | 'shield';
  status: 'Working knowledge' | 'Currently exploring';
  items: string[];
};

export const portfolio = {
  identity: {
    name: 'Nkosinathi Ngwenya',
    role: 'AI Engineer',
    location: 'Hatfield, Pretoria, South Africa',
    email: 'ngwenyankhosinathi@gmail.com',
    portraitAlt: 'Nkosinathi Ngwenya, AI Engineer',
  },
  links: {
    linkedin: 'https://www.linkedin.com/in/nkosinathi-ngwenya-3bb058347',
    github: 'https://github.com/NuttyHack',
    instagram: 'https://www.instagram.com/mongameli_ngwenya',
  },
  roles: [
    { company: '12LINKS', title: 'AI Engineer', period: 'February 2026 — Present', kind: 'Current role' },
    { company: 'Somahorse AI', title: 'Full-Stack Developer', period: 'November 2025 — February 2026', kind: 'Previous role' },
    { company: 'DevThrive', title: 'Founder & Developer', period: '2025 — Present', kind: 'Founder role' },
  ],
  education: {
    degree: 'BSc Computer Science',
    institution: 'University of Pretoria',
    period: '2025 — Present',
    modules: {
      'First-year foundation': ['Imperative Programming', 'Data Structures and Algorithms', 'Introduction to Computer Science', 'Operating Systems', 'Program Design'],
      'Second-year coursework': ['COS 210 — Theoretical Computer Science', 'COS 212 — Data Structures and Algorithms', 'COS 214 — Software Modelling', 'COS 216 — Netcentric Computer Systems', 'COS 221 — Introduction to Database Systems', 'COS 226 — Concurrent Systems', 'COS 284 — Computer Organisation and Architecture', 'WTW 285 — Discrete Structures'],
    },
  },
  certifications: ['Data Engineering — WeThinkCode', 'Ethical Hacker', 'Cyber Threat Management', 'Introduction to Cybersecurity', 'C++ Essentials', 'Operating Systems Support', 'Packet Tracer'],
  skills: [
    ['Programming', ['C++', 'Python', 'JavaScript']],
    ['Web / Application', ['HTML5', 'CSS', 'React.js', 'Node.js']],
    ['Databases', ['MySQL', 'MongoDB', 'SQLite']],
    ['Development / Infrastructure', ['Linux', 'Git', 'Azure', 'Netlify', 'Flask', 'Redis Streams', 'DVC', 'MLflow', 'Google Colab']],
    ['Machine Learning', ['XGBoost']],
  ] as Array<[string, string[]]>,
  capabilities: [
    { title: 'Generative AI', icon: 'brain', status: 'Working knowledge', items: ['LLM applications', 'Conversational AI', 'Prompt engineering', 'Structured generation', 'Tool calling', 'Context engineering', 'Retrieval-augmented generation', 'Embeddings', 'Semantic search', 'Vector search'] },
    { title: 'AI Agents', icon: 'network', status: 'Currently exploring', items: ['Agentic workflows', 'Tool-using agents', 'Multi-step workflows', 'Agent orchestration', 'Memory', 'Autonomous task execution', 'Human-in-the-loop systems'] },
    { title: 'Machine Learning', icon: 'radar', status: 'Working knowledge', items: ['Classification', 'Regression', 'Anomaly detection', 'Predictive modeling', 'Feature engineering', 'Model evaluation', 'Intelligent decision systems', 'XGBoost'] },
    { title: 'ML Engineering', icon: 'git', status: 'Working knowledge', items: ['Model serving', 'Inference workflows', 'Experiment tracking', 'Model monitoring', 'Evaluation pipelines', 'Reproducibility', 'Deployment', 'DVC', 'MLflow'] },
    { title: 'AI Infrastructure', icon: 'layers', status: 'Currently exploring', items: ['Retrieval systems', 'Vector databases', 'Caching', 'Asynchronous workflows', 'API orchestration', 'Observability', 'Latency optimization', 'Cost optimization'] },
    { title: 'Responsible AI', icon: 'shield', status: 'Currently exploring', items: ['Evaluation', 'Reliability', 'Hallucination mitigation', 'Privacy', 'Security', 'Prompt injection awareness', 'Human oversight'] },
  ] as Capability[],
  projects: [
    { id: 'cattleshield', name: 'CattleShield', kind: 'Private AI system', visibility: 'Private', description: 'Private project. Request demo access for a technical conversation.', accent: 'olive', featured: true },
    { id: 'health', name: 'AI Health Companion', kind: 'Private AI system', visibility: 'Private', description: 'Private project. Request demo access for a technical conversation.', accent: 'coral', featured: true },
    { id: 'automative', name: 'AI Automative', kind: 'AI application', visibility: 'Private', description: 'Private project. Request demo access for a technical conversation.', accent: 'blue', featured: false },
    { id: 'fraudshield', name: 'FRAUDSHIELD', kind: 'AI + security', visibility: 'Public', description: 'AI model for detecting and comparing transactions.', accent: 'gold', github: 'https://github.com/NuttyHack/FRAUDSHIELD', featured: true, sections: [{ label: 'Verified overview', text: 'AI model for detecting and comparing transactions.' }] },
    { id: 'aegis-sentinel', name: 'Aegis-Sentinel', kind: 'Security / intelligent monitoring', language: 'Python', visibility: 'Public', description: 'Public Python project in the security and intelligent monitoring space.', accent: 'violet', github: 'https://github.com/NuttyHack/Aegis-Sentinel', featured: true },
    { id: 'aegisgen', name: 'AegisGen', kind: 'AI / intelligent generation', language: 'Python', visibility: 'Public', description: 'Public Python project in the AI and intelligent generation space.', accent: 'blue', github: 'https://github.com/NuttyHack/AegisGen', featured: false },
    { id: 'skavs', name: 'skavs-ai', kind: 'AI project', language: 'TypeScript', visibility: 'Public', description: 'Public TypeScript AI project.', accent: 'coral', github: 'https://github.com/NuttyHack/skavs-ai', featured: false },
    { id: 'applyonline', name: 'ApplyOnline', kind: 'Application / automation', language: 'TypeScript', visibility: 'Public', description: 'Public TypeScript application and automation project.', accent: 'olive', github: 'https://github.com/NuttyHack/ApplyOnline', featured: false },
    { id: 'hoye-school', name: 'HOYE-SECONDARY-SCHOOL', kind: 'School website', language: 'PHP', visibility: 'Public', description: 'Modern responsive school website with admissions and funding information.', accent: 'blue', github: 'https://github.com/NuttyHack/HOYE-SECONDARY-SCHOOL' },
    { id: 'campus', name: 'campus-utility-frontend', kind: 'Student platform', language: 'JavaScript', visibility: 'Public', description: 'Mobile-first student platform with real-time lab availability and campus alerts.', accent: 'gold', github: 'https://github.com/NuttyHack/campus-utility-frontend' },
    { id: 'hoye-admission', name: 'hoye-admission-system', kind: 'Web application', language: 'HTML', visibility: 'Public', description: 'Public web application repository.', accent: 'coral', github: 'https://github.com/NuttyHack/hoye-admission-system' },
    { id: 'portfolio', name: 'Portfolio', kind: 'Personal product', visibility: 'Public', description: 'Personal portfolio showcasing AI engineering, full-stack software and security-aware solutions.', accent: 'violet', github: 'https://github.com/NuttyHack/Portfolio' },
    { id: 'ai-portfolio', name: 'Nkosinathi-Ngwenya-AI-Portfolio', kind: 'AI assistant portfolio', visibility: 'Public', description: 'AI assistant portfolio designed to help companies learn about Nkosinathi and his work.', accent: 'olive', github: 'https://github.com/NuttyHack/Nkosinathi-Ngwenya-AI-Portfolio' },
    { id: 'somahorse', name: 'somahorse', kind: 'Software project', language: 'TypeScript', visibility: 'Public', description: 'Public software project repository.', accent: 'blue', github: 'https://github.com/NuttyHack/somahorse' },
    { id: 'hoyeeeee', name: 'Hoyeeeee', kind: 'Software project', visibility: 'Public', description: 'Public software project repository.', accent: 'gold', github: 'https://github.com/NuttyHack/Hoyeeeee' },
    { id: 'nuttyhack', name: 'NuttyHack', kind: 'Software project', visibility: 'Public', description: 'Public software project repository.', accent: 'violet', github: 'https://github.com/NuttyHack/NuttyHack' },
    { id: 'devtrhive', name: 'devtrhive', kind: 'Software project', visibility: 'Public', description: 'Public software project repository.', accent: 'olive', github: 'https://github.com/NuttyHack/devtrhive' },
    { id: 'devthrive', name: 'devthrive-site', kind: 'Software company website', visibility: 'Public', description: 'Website for DevThrive software development company.', accent: 'coral', github: 'https://github.com/NuttyHack/devthrive-site' },
    { id: 'hoye-webpage', name: 'hoye-webpage', kind: 'Web project', language: 'CSS', visibility: 'Public', description: 'Public web project repository.', accent: 'blue', github: 'https://github.com/NuttyHack/hoye-webpage' },
    { id: 'somahorse-nexus', name: 'Somahorse-Nexus-website', kind: 'Website', language: 'HTML', visibility: 'Public', description: 'Public website repository.', accent: 'coral', github: 'https://github.com/NuttyHack/Somahorse-Nexus-website' },
  ] as Project[],
  assistant: {
    suggested: ['Give me a 30-second overview of Nkosinathi.', 'What AI systems has he built?', 'Tell me about his current role.', 'What is he studying?', 'What technologies and capabilities does he have?', 'Give me a recruiter-friendly summary.'],
  },
} as const;

export function answerPortfolioQuestion(question: string) {
  const q = question.toLowerCase();
  if (!q.trim()) return { text: 'Ask me about Nkosinathi’s work, experience, education, capabilities or how to navigate this portfolio.', route: null, projectIds: [] as string[] };
  if (q.includes('recruit') || q.includes('hire') || q.includes('summary')) return { text: 'Nkosinathi Ngwenya is an AI Engineer based in Hatfield, Pretoria. He builds intelligent applications, machine learning systems, AI-powered products, data systems, cybersecurity-aware software and full-stack experiences. He is currently an AI Engineer at 12LINKS, studies Computer Science at the University of Pretoria and is Founder & Developer at DevThrive.', route: '/experience', projectIds: [] as string[] };
  if (q.includes('education') || q.includes('study') || q.includes('university') || q.includes('degree') || q.includes('module')) return { text: `Nkosinathi is studying ${portfolio.education.degree} at ${portfolio.education.institution}, from ${portfolio.education.period}. The academic record includes programming, data structures, operating systems, software modelling, databases and computer organisation.`, route: '/education', projectIds: [] as string[] };
  if (q.includes('role') || q.includes('current') || q.includes('work at') || q.includes('experience') || q.includes('career')) return { text: 'Nkosinathi is currently an AI Engineer at 12LINKS, where he has been working since February 2026. Previously, he was a Full-Stack Developer at Somahorse AI from November 2025 to February 2026. He is also Founder & Developer at DevThrive, 2025 to Present.', route: '/experience', projectIds: [] as string[] };
  if (q.includes('security') || q.includes('secure') || q.includes('fraud')) return { text: 'AI and security are a deliberate intersection in the portfolio. FRAUDSHIELD is verified as an AI model for detecting and comparing transactions; Aegis-Sentinel is a public Python security / intelligent monitoring project. The capability map also includes privacy, reliability, prompt injection awareness and human oversight.', route: '/engineering', projectIds: ['fraudshield', 'aegis-sentinel'] };
  if (q.includes('technology') || q.includes('skill') || q.includes('capabilit') || q.includes('tech stack')) return { text: 'Verified technologies include C++, Python, JavaScript, HTML5, CSS, React.js, Node.js, MySQL, MongoDB, SQLite, Linux, Git, Azure, Netlify, Flask, Redis Streams, DVC, MLflow, Google Colab and XGBoost. Capability labels stay conservative: working knowledge and currently exploring.', route: '/engineering', projectIds: [] as string[] };
  if (q.includes('project') || q.includes('built') || q.includes('system') || q.includes('strongest') || q.includes('ai')) return { text: 'Verified projects include CattleShield, AI Health Companion, AI Automative, FRAUDSHIELD, Aegis-Sentinel, AegisGen, skavs-ai and ApplyOnline. CattleShield, AI Health Companion and AI Automative are private. FRAUDSHIELD is described as an AI model for detecting and comparing transactions; the other project descriptions remain intentionally concise.', route: '/projects', projectIds: ['cattleshield', 'health', 'fraudshield', 'aegis-sentinel'] };
  if (q.includes('about') || q.includes('who') || q.includes('tell me')) return { text: 'Nkosinathi Ngwenya is an AI Engineer in Hatfield, Pretoria. He builds intelligent systems, machine learning products, security-aware software and full-stack experiences, while studying Computer Science at the University of Pretoria.', route: '/about', projectIds: [] as string[] };
  return { text: 'I can answer verified questions about Nkosinathi’s current role, previous role, DevThrive, projects, technologies, security focus, education and recruiter summary. I do not infer private project details or unverified outcomes.', route: null, projectIds: [] as string[] };
}