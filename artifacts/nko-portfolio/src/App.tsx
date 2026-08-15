import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  BrainCircuit,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clipboard,
  Code2,
  Command,
  ExternalLink,
  GitBranch,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  Moon,
  Network,
  PanelRight,
  Play,
  Radar,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  Terminal,
  X,
  Zap,
} from 'lucide-react';
import portrait from '@assets/NUTTY_1786787978810.png';
import { Route, Switch, useLocation } from 'wouter';
import NotFound from '@/pages/not-found';

type Project = {
  id: string;
  name: string;
  kind: string;
  language?: string;
  visibility: 'Public' | 'Private';
  description: string;
  accent: string;
  github?: string;
  featured?: boolean;
};

const projects: Project[] = [
  { id: 'cattleshield', name: 'CattleShield', kind: 'Private AI system', visibility: 'Private', description: 'Details coming soon. Request project information for a technical conversation.', accent: 'olive', featured: true },
  { id: 'health', name: 'AI Health Companion', kind: 'Private AI system', visibility: 'Private', description: 'Details coming soon. Request project information for a technical conversation.', accent: 'coral', featured: true },
  { id: 'automative', name: 'AI Automative', kind: 'AI application', visibility: 'Private', description: 'Details coming soon. Request project information for a technical conversation.', accent: 'blue', featured: true },
  { id: 'fraudshield', name: 'FRAUDSHIELD', kind: 'AI + security', language: 'Unspecified', visibility: 'Public', description: 'AI model for detecting and comparing transactions.', accent: 'gold', github: 'https://github.com/NuttyHack/FRAUDSHIELD', featured: true },
  { id: 'aegis-sentinel', name: 'Aegis-Sentinel', kind: 'Security / intelligent monitoring', language: 'Python', visibility: 'Public', description: 'Security / intelligent monitoring project. Details coming soon.', accent: 'violet', github: 'https://github.com/NuttyHack/Aegis-Sentinel', featured: true },
  { id: 'aegisgen', name: 'AegisGen', kind: 'AI / intelligent generation', language: 'Python', visibility: 'Public', description: 'AI / intelligent generation project. Details coming soon.', accent: 'blue', github: 'https://github.com/NuttyHack/AegisGen', featured: true },
  { id: 'skavs', name: 'skavs-ai', kind: 'AI project', language: 'TypeScript', visibility: 'Public', description: 'AI project. Details coming soon.', accent: 'coral', github: 'https://github.com/NuttyHack/skavs-ai', featured: true },
  { id: 'applyonline', name: 'ApplyOnline', kind: 'Application / automation', language: 'TypeScript', visibility: 'Public', description: 'Application / automation project. Details coming soon.', accent: 'olive', github: 'https://github.com/NuttyHack/ApplyOnline', featured: true },
];

const repoList: Project[] = [
  ...projects,
  { id: 'hoye-school', name: 'HOYE-SECONDARY-SCHOOL', kind: 'School website', language: 'PHP', visibility: 'Public', description: 'Modern responsive school website with admissions and funding information.', accent: 'blue', github: 'https://github.com/NuttyHack/HOYE-SECONDARY-SCHOOL' },
  { id: 'campus', name: 'campus-utility-frontend', kind: 'Student platform', language: 'JavaScript', visibility: 'Public', description: 'Mobile-first student platform with real-time lab availability and campus alerts.', accent: 'gold', github: 'https://github.com/NuttyHack/campus-utility-frontend' },
  { id: 'hoye-admission', name: 'hoye-admission-system', kind: 'Web application', language: 'HTML', visibility: 'Public', description: 'Details coming soon.', accent: 'coral', github: 'https://github.com/NuttyHack/hoye-admission-system' },
  { id: 'portfolio', name: 'Portfolio', kind: 'Personal product', visibility: 'Public', description: 'Personal portfolio showcasing work as an AI Engineer, featuring machine learning systems, intelligent applications, full-stack development projects and cybersecurity-driven solutions.', accent: 'violet', github: 'https://github.com/NuttyHack/Portfolio' },
  { id: 'ai-portfolio', name: 'Nkosinathi-Ngwenya-AI-Portfolio', kind: 'AI assistant portfolio', visibility: 'Public', description: 'AI assistant portfolio designed to help companies learn about Nkosinathi and his work.', accent: 'olive', github: 'https://github.com/NuttyHack/Nkosinathi-Ngwenya-AI-Portfolio' },
  { id: 'somahorse', name: 'somahorse', kind: 'Software project', language: 'TypeScript', visibility: 'Public', description: 'Details coming soon.', accent: 'blue', github: 'https://github.com/NuttyHack/somahorse' },
  { id: 'hoyeeeee', name: 'Hoyeeeee', kind: 'Software project', visibility: 'Public', description: 'Details coming soon.', accent: 'gold', github: 'https://github.com/NuttyHack/Hoyeeeee' },
  { id: 'nuttyhack', name: 'NuttyHack', kind: 'Software project', visibility: 'Public', description: 'Details coming soon.', accent: 'violet', github: 'https://github.com/NuttyHack/NuttyHack' },
  { id: 'devtrhive', name: 'devtrhive', kind: 'Software project', visibility: 'Public', description: 'Details coming soon.', accent: 'olive', github: 'https://github.com/NuttyHack/devtrhive' },
  { id: 'devthrive', name: 'devthrive-site', kind: 'Software company website', visibility: 'Public', description: 'Website for DevThrive software development company.', accent: 'coral', github: 'https://github.com/NuttyHack/devthrive-site' },
  { id: 'hoye-webpage', name: 'hoye-webpage', kind: 'Web project', language: 'CSS', visibility: 'Public', description: 'Details coming soon.', accent: 'blue', github: 'https://github.com/NuttyHack/hoye-webpage' },
  { id: 'somahorse-nexus', name: 'Somahorse-Nexus-website', kind: 'Website', language: 'HTML', visibility: 'Public', description: 'Details coming soon.', accent: 'coral', github: 'https://github.com/NuttyHack/Somahorse-Nexus-website' },
];

const navItems = [
  ['work', 'Work'],
  ['engineering', 'Engineering'],
  ['architecture', 'Architecture'],
  ['experience', 'Experience'],
  ['lab', 'Lab'],
  ['about', 'About'],
  ['contact', 'Contact'],
];

const capabilityGroups = [
  { title: 'Generative AI', icon: BrainCircuit, status: 'Working knowledge', items: ['LLM applications', 'Conversational AI', 'Prompt engineering', 'Structured generation', 'Tool calling', 'Context engineering', 'Retrieval-augmented generation', 'Embeddings', 'Semantic search', 'Vector search'] },
  { title: 'AI Agents', icon: Network, status: 'Currently exploring', items: ['Agentic workflows', 'Tool-using agents', 'Multi-step workflows', 'Agent orchestration', 'Memory', 'Autonomous task execution', 'Human-in-the-loop systems'] },
  { title: 'Machine Learning', icon: Radar, status: 'Working knowledge', items: ['Classification', 'Regression', 'Anomaly detection', 'Predictive modeling', 'Feature engineering', 'Model evaluation', 'Intelligent decision systems', 'XGBoost'] },
  { title: 'ML Engineering', icon: GitBranch, status: 'Working knowledge', items: ['Model serving', 'Inference workflows', 'Experiment tracking', 'Model monitoring', 'Evaluation pipelines', 'Reproducibility', 'Deployment', 'DVC', 'MLflow'] },
  { title: 'AI Infrastructure', icon: Layers3, status: 'Currently exploring', items: ['Retrieval systems', 'Vector databases', 'Caching', 'Asynchronous workflows', 'API orchestration', 'Observability', 'Latency optimization', 'Cost optimization'] },
  { title: 'Responsible AI', icon: ShieldCheck, status: 'Currently exploring', items: ['Evaluation', 'Reliability', 'Hallucination mitigation', 'Privacy', 'Security', 'Prompt injection awareness', 'Human oversight'] },
];

const skillGroups: Array<[string, string[]]> = [
  ['Programming', ['C++', 'Python', 'JavaScript']],
  ['Web / Application', ['HTML5', 'CSS', 'React.js', 'Node.js']],
  ['Databases', ['MySQL', 'MongoDB', 'SQLite']],
  ['Development / Infrastructure', ['Linux', 'Git', 'Azure', 'Netlify', 'Flask', 'Redis Streams', 'DVC', 'MLflow', 'Google Colab']],
  ['Machine Learning', ['XGBoost']],
];

const aiPrompts = [
  'Give me a 30-second overview of Nkosinathi.',
  "What is Nkosinathi's strongest AI project?",
  'What AI systems has he built?',
  'Tell me about his current role.',
  'What technologies and AI capabilities does he have?',
  'Give me a recruiter-friendly summary.',
];

const aiAnswers: Record<string, { text: string; links: Array<[string, string]> }> = {
  overview: { text: 'Nkosinathi Ngwenya is an AI Engineer in Hatfield, Pretoria. He builds intelligent applications, machine learning systems, security-aware software and full-stack products. He is currently an AI Engineer at 12LINKS, studies Computer Science at the University of Pretoria, and is a Founder & Developer at DevThrive.', links: [['View experience', 'experience'], ['View capabilities', 'engineering']] },
  project: { text: 'The verified portfolio spotlights CattleShield, AI Health Companion, AI Automative, FRAUDSHIELD, Aegis-Sentinel, AegisGen, skavs-ai and ApplyOnline. CattleShield and AI Health Companion are private; their exact details are intentionally not exposed here. FRAUDSHIELD is described as an AI model for detecting and comparing transactions.', links: [['Explore featured work', 'work'], ['Inspect AI × security', 'security']] },
  systems: { text: 'The verified project list includes CattleShield, AI Health Companion, AI Automative, FRAUDSHIELD, Aegis-Sentinel, AegisGen, skavs-ai and ApplyOnline. Where functionality is unclear, this portfolio labels it details coming soon rather than filling gaps with assumptions.', links: [['Open project workbench', 'work']] },
  role: { text: 'Nkosinathi is currently an AI Engineer at 12LINKS, from February 2026 to Present. Previously, he was a Full-Stack Developer at Somahorse AI from November 2025 to February 2026. He is also Founder & Developer at DevThrive, 2025 to Present.', links: [['View timeline', 'experience']] },
  technologies: { text: 'Known technologies include C++, Python, JavaScript, HTML5, CSS, React.js, Node.js, MySQL, MongoDB, SQLite, Linux, Git, Azure, Netlify, Flask, Redis Streams, DVC, MLflow, Google Colab and XGBoost. Capability labels are deliberately conservative: working knowledge and currently exploring are used where depth is not verified.', links: [['See capability map', 'engineering'], ['See skill index', 'skills']] },
  recruiter: { text: 'Recruiter summary: AI Engineer building intelligent applications, machine learning systems, AI-powered products, data systems, automation, cybersecurity-aware solutions and full-stack software. Based in Pretoria, South Africa. Contact: ngwenyankhosinathi@gmail.com.', links: [['Open recruiter view', 'recruiter'], ['Contact Nkosinathi', 'contact']] },
};

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.replaceState(null, '', `#${id}`);
}

function useMeta() {
  useEffect(() => {
    document.title = 'Nkosinathi Ngwenya — AI Engineer';
    const description = 'Nkosinathi Ngwenya is an AI Engineer in Pretoria building intelligent systems, machine learning products, security-aware software and full-stack experiences.';
    const tags: Array<[string, string, string]> = [
      ['name', 'description', description],
      ['property', 'og:title', 'Nkosinathi Ngwenya — AI Engineer'],
      ['property', 'og:description', description],
      ['property', 'og:type', 'website'],
      ['property', 'og:image', portrait],
      ['name', 'twitter:card', 'summary_large_image'],
    ];
    tags.forEach(([kind, key, value]) => {
      let el = document.head.querySelector(`meta[${kind}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(kind, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    });
    let favicon = document.head.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.href = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#21333a"/><path fill="#d6ef53" d="M17 17h9v21c0 4 2 6 6 6s6-2 6-6V17h9v21c0 10-5 15-15 15S17 48 17 38V17Z"/></svg>')}`;
  }, []);
}

function Brand({ onNavigate }: { onNavigate: (id: string) => void }) {
  return <button data-testid="button-brand" onClick={() => onNavigate('top')} className="flex items-center gap-3 text-left">
    <span className="grid h-9 w-9 place-items-center rounded-lg bg-[hsl(var(--foreground))] text-[hsl(var(--accent))] font-display font-bold">N</span>
    <span><span className="block font-display text-sm font-bold tracking-tight">NKOSINATHI</span><span className="block font-mono-ui text-[9px] uppercase tracking-[.18em] text-[hsl(var(--muted-foreground))]">AI engineer / Pretoria</span></span>
  </button>;
}

function TopNav({ onAsk, onCommand, onRecruiter, dark, onTheme, onNavigate }: { onAsk: () => void; onCommand: () => void; onRecruiter: () => void; dark: boolean; onTheme: () => void; onNavigate: (id: string) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return <header className="sticky top-0 z-40 border-b border-[hsl(var(--border)/.75)] bg-[hsl(var(--background)/.9)] backdrop-blur-xl">
    <div className="section-wrap flex h-[72px] items-center justify-between gap-4">
      <Brand onNavigate={onNavigate} />
      <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
        {navItems.map(([id, label]) => <button key={id} data-testid={`nav-${id}`} onClick={() => onNavigate(id)} className="font-mono-ui text-[10px] uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]">{label}</button>)}
      </nav>
      <div className="flex items-center gap-2">
        <button data-testid="button-command" onClick={onCommand} className="hidden h-9 items-center gap-2 rounded-md border border-[hsl(var(--border))] px-2.5 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] sm:flex" aria-label="Open command palette"><Command size={14} /><span className="font-mono-ui text-[10px]">⌘ K</span></button>
        <button data-testid="button-theme" onClick={onTheme} className="grid h-9 w-9 place-items-center rounded-md border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]" aria-label="Toggle color theme">{dark ? <Sun size={15} /> : <Moon size={15} />}</button>
        <button data-testid="button-recruiter" onClick={onRecruiter} className="hidden h-9 items-center gap-2 rounded-md bg-[hsl(var(--accent))] px-3 font-mono-ui text-[10px] font-medium uppercase text-[hsl(var(--accent-foreground))] md:flex"><PanelRight size={13} /> Recruiter view</button>
        <button data-testid="button-mobile-menu" onClick={() => setMobileOpen(!mobileOpen)} className="grid h-9 w-9 place-items-center rounded-md border border-[hsl(var(--border))] lg:hidden" aria-label="Toggle navigation">{mobileOpen ? <X size={17} /> : <Menu size={17} />}</button>
      </div>
    </div>
    {mobileOpen && <div className="border-t border-[hsl(var(--border))] px-5 py-4 lg:hidden">
      <div className="section-wrap grid grid-cols-2 gap-1">
        {navItems.map(([id, label]) => <button key={id} data-testid={`mobile-nav-${id}`} onClick={() => { onNavigate(id); setMobileOpen(false); }} className="rounded-md px-3 py-3 text-left font-mono-ui text-[11px] uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))]">{label}</button>)}
        <button data-testid="mobile-ask-ai" onClick={() => { onAsk(); setMobileOpen(false); }} className="col-span-2 mt-2 flex items-center gap-2 rounded-md bg-[hsl(var(--primary))] px-3 py-3 text-left font-mono-ui text-[11px] uppercase tracking-[.1em] text-[hsl(var(--primary-foreground))]"><MessageSquareText size={14} /> Ask Nkosinathi's AI</button>
      </div>
    </div>}
  </header>;
}

function Hero({ onAsk, onNavigate }: { onAsk: () => void; onNavigate: (id: string) => void }) {
  return <section id="top" className="relative overflow-hidden border-b border-[hsl(var(--border))]">
    <div className="absolute inset-0 hairline-grid opacity-55" />
    <div className="section-wrap relative grid min-h-[calc(100dvh-72px)] items-center gap-12 py-20 lg:grid-cols-[1.12fr_.88fr] lg:py-28">
      <div className="max-w-3xl">
        <div className="reveal flex flex-wrap items-center gap-x-5 gap-y-3">
          <span className="eyebrow">01 / personal systems log</span>
          <span className="flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[.12em] text-[hsl(var(--primary))]"><span className="status-dot live-dot" /> Available for opportunities</span>
        </div>
        <h1 className="display-xl reveal reveal-delay-1 mt-8 max-w-4xl text-[hsl(var(--foreground))]">Building intelligent systems that <span className="text-[hsl(var(--primary))]">solve real problems.</span></h1>
        <p className="reveal reveal-delay-2 mt-8 max-w-xl text-lg leading-8 text-[hsl(var(--muted-foreground))]">AI Engineer building intelligent applications, machine learning systems, AI-powered products, data systems, cybersecurity-aware software, and full-stack experiences.</p>
        <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-3">
          <button data-testid="button-explore-work" onClick={() => onNavigate('work')} className="btn-primary">Explore my work <ArrowDownRight size={16} /></button>
          <button data-testid="button-hero-ask" onClick={onAsk} className="btn-outline"><MessageSquareText size={16} /> Ask my AI</button>
        </div>
        <div className="reveal reveal-delay-3 mt-14 grid max-w-xl grid-cols-1 gap-4 border-t border-[hsl(var(--border))] pt-5 sm:grid-cols-2">
          <div><span className="eyebrow">Current signal</span><p className="mt-2 font-display text-sm font-semibold">AI Engineer <span className="text-[hsl(var(--muted-foreground))]">@ 12LINKS</span></p><p className="mt-1 font-mono-ui text-[10px] text-[hsl(var(--muted-foreground))]">February 2026 — Present</p></div>
          <div><span className="eyebrow">Academic base</span><p className="mt-2 font-display text-sm font-semibold">BSc Computer Science</p><p className="mt-1 font-mono-ui text-[10px] text-[hsl(var(--muted-foreground))]">University of Pretoria · 2025 — Present</p></div>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[440px] lg:justify-self-end">
        <div className="absolute -right-3 -top-4 z-10 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-3 py-2 shadow-sm"><div className="flex items-center gap-2"><span className="status-dot live-dot" /><span className="font-mono-ui text-[9px] uppercase tracking-[.12em]">System status / building</span></div></div>
        <div className="relative aspect-[.86] overflow-hidden rounded-[1.3rem] border border-[hsl(var(--border))] bg-[hsl(var(--muted))] p-3 shadow-[var(--shadow-card)]">
          <div className="relative h-full overflow-hidden rounded-[.9rem]">
            <img data-testid="img-portrait" src={portrait} alt="Nkosinathi Ngwenya" className="h-full w-full object-cover object-top grayscale-[.08]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222_31%_15%/.82)] via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[hsl(var(--card))]"><div><p className="font-mono-ui text-[10px] uppercase tracking-[.16em] text-[hsl(var(--accent))]">N / 001</p><p className="mt-1 font-display text-xl font-semibold">Nkosinathi Ngwenya</p></div><span className="font-mono-ui text-[10px]">AI / ENG</span></div>
          </div>
        </div>
        <div className="absolute -bottom-5 -left-6 hidden w-44 border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-3 shadow-sm sm:block"><div className="flex items-center justify-between"><span className="eyebrow">Coordinates</span><MapPin size={13} className="text-[hsl(var(--primary))]" /></div><p className="mt-3 font-display text-sm font-semibold">Hatfield, Pretoria</p><p className="mt-1 font-mono-ui text-[9px] text-[hsl(var(--muted-foreground))]">South Africa / local time</p></div>
      </div>
    </div>
  </section>;
}

function SectionHeading({ eyebrow, title, text, action }: { eyebrow: string; title: string; text?: string; action?: ReactNode }) {
  return <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><div className="accent-rule mb-5" /><p className="eyebrow">{eyebrow}</p><h2 className="display-lg mt-4 max-w-3xl">{title}</h2>{text && <p className="mt-5 max-w-2xl leading-7 text-[hsl(var(--muted-foreground))]">{text}</p>}</div>{action}</div>;
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  const colors: Record<string, string> = { olive: 'from-[#dfe9ae] to-[#9eb497]', coral: 'from-[#f4c2ad] to-[#c98477]', blue: 'from-[#b7d3de] to-[#6f8fa1]', gold: 'from-[#ebd89c] to-[#c09c5d]', violet: 'from-[#d0c7e5] to-[#9389af]' };
  return <article data-testid={`card-project-${project.id}`} className="group surface relative flex min-h-[270px] flex-col overflow-hidden rounded-[1rem] p-6 transition-transform duration-300 hover:-translate-y-1">
    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${colors[project.accent]}`} />
    <div className="flex items-start justify-between gap-3"><span className="pill">{project.visibility === 'Private' ? <LockKeyhole size={11} /> : <Globe2 size={11} />}{project.visibility}</span><span className="font-mono-ui text-[10px] text-[hsl(var(--muted-foreground))]">SYS / {project.id.toUpperCase()}</span></div>
    <div className="mt-auto"><p className="eyebrow">{project.kind}</p><h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{project.name}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-[hsl(var(--muted-foreground))]">{project.description}</p><div className="mt-5 flex items-center gap-3"><button data-testid={`button-open-project-${project.id}`} onClick={() => onOpen(project)} className="inline-flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[.12em] text-[hsl(var(--primary))]">Inspect system <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" /></button>{project.github && <a data-testid={`link-project-github-${project.id}`} href={project.github} target="_blank" rel="noreferrer" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]" aria-label={`Open ${project.name} on GitHub`}><Github size={15} /></a>}</div></div>
  </article>;
}

function WorkSection({ onOpen }: { onOpen: (project: Project) => void }) {
  return <section id="work" className="section-pad"><div className="section-wrap"><SectionHeading eyebrow="02 / featured systems" title="The workbench is the proof." text="A curated view of intelligent applications, security-aware systems and products. Unknowns stay visible: details coming soon is more useful than a polished fiction." action={<span className="pill"><Terminal size={12} /> 08 systems indexed</span>} /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{projects.map((project, index) => <div key={project.id} className={index < 2 ? 'lg:col-span-2' : ''}><ProjectCard project={project} onOpen={onOpen} /></div>)}</div></div></section>;
}

function EngineeringSection() {
  const [active, setActive] = useState<string | null>(null);
  return <section id="engineering" className="section-pad border-y border-[hsl(var(--border))] bg-[hsl(var(--muted)/.42)]"><div className="section-wrap"><SectionHeading eyebrow="03 / AI engineering" title="A capability map, not a skill bar." text="The labels are intentionally conservative. Explore the domains, then open the technical vocabulary inside each one." /><div className="mb-6 flex flex-wrap gap-2"><span className="pill"><span className="status-dot" /> Experienced / verified tools</span><span className="pill">Working knowledge</span><span className="pill">Currently exploring</span></div><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{capabilityGroups.map((group) => { const Icon = group.icon; const open = active === group.title; return <div key={group.title} className={`surface-flat rounded-[.85rem] p-5 transition-colors ${open ? 'border-[hsl(var(--primary))]' : ''}`}><button data-testid={`button-capability-${group.title}`} onClick={() => setActive(open ? null : group.title)} className="flex w-full items-start justify-between text-left"><div className="flex gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-[hsl(var(--primary)/.1)] text-[hsl(var(--primary))]"><Icon size={17} /></span><span><span className="block font-display font-semibold">{group.title}</span><span className="mt-1 block font-mono-ui text-[9px] uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))]">{group.status}</span></span></div><ChevronDown size={16} className={`mt-1 transition-transform ${open ? 'rotate-180' : ''}`} /></button>{open && <div className="mt-5 flex flex-wrap gap-2 border-t border-[hsl(var(--border))] pt-4">{group.items.map(item => <span key={item} className="rounded-md bg-[hsl(var(--muted))] px-2.5 py-1.5 font-mono-ui text-[10px] text-[hsl(var(--muted-foreground))]">{item}</span>)}</div>}</div>; })}</div><div id="skills" className="mt-16"><div className="mb-5 flex items-center gap-3"><p className="eyebrow">Technical index</p><span className="h-px flex-1 bg-[hsl(var(--border))]" /></div><div className="grid gap-px overflow-hidden rounded-[.85rem] border border-[hsl(var(--border))] bg-[hsl(var(--border))] md:grid-cols-2 lg:grid-cols-5">{skillGroups.map(([name, values]) => <div key={name} className="bg-[hsl(var(--card))] p-5"><p className="font-mono-ui text-[10px] uppercase tracking-[.1em] text-[hsl(var(--primary))]">{name}</p><div className="mt-4 space-y-2">{(values as string[]).map(value => <p key={value} className="font-display text-sm">{value}</p>)}</div></div>)}</div></div></div></section>;
}

function SecuritySection({ onNavigate }: { onNavigate: (id: string) => void }) {
  return <section id="security" className="section-pad"><div className="section-wrap"><div className="surface overflow-hidden rounded-[1.2rem] bg-[hsl(var(--sidebar))] text-[hsl(var(--sidebar-foreground))]"><div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[.9fr_1.1fr] lg:p-14"><div><span className="pill border-[hsl(var(--sidebar-border))] text-[hsl(var(--sidebar-foreground)/.7)]"><ShieldCheck size={12} /> signature intersection</span><h2 className="display-lg mt-7 max-w-xl">AI <span className="text-[hsl(var(--accent))]">×</span> Security</h2><p className="mt-6 max-w-md leading-7 text-[hsl(var(--sidebar-foreground)/.68)]">Building intelligent systems with security, reliability and failure modes in mind.</p><button data-testid="button-security-work" onClick={() => onNavigate('work')} className="mt-8 inline-flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[.12em] text-[hsl(var(--accent))]">Inspect related systems <ArrowRight size={14} /></button></div><div className="grid gap-3 sm:grid-cols-2">{['FRAUDSHIELD', 'Aegis-Sentinel', 'AegisGen'].map((name, i) => <div key={name} className="rounded-lg border border-[hsl(var(--sidebar-border))] bg-[hsl(var(--sidebar-foreground)/.04)] p-5"><span className="font-mono-ui text-[10px] text-[hsl(var(--accent))]">0{i + 1} / system</span><h3 className="mt-8 font-display text-xl">{name}</h3><p className="mt-2 text-sm text-[hsl(var(--sidebar-foreground)/.58)]">{i === 0 ? 'AI model for detecting and comparing transactions.' : 'Details coming soon.'}</p></div>)}<div className="rounded-lg border border-[hsl(var(--sidebar-border))] p-5"><span className="font-mono-ui text-[10px] text-[hsl(var(--sidebar-foreground)/.5)]">credentials / focus</span><p className="mt-4 text-sm leading-6 text-[hsl(var(--sidebar-foreground)/.72)]">Ethical Hacker · Cyber Threat Management · Introduction to Cybersecurity · Packet Tracer · Operating Systems Support</p></div></div></div></div></div></section>;
}

function LabSection() {
  const experiments = ['AI Agents', 'RAG experiments', 'Model evaluation', 'AI reliability', 'AI automation', 'Data experiments', 'Security experiments'];
  const [selected, setSelected] = useState('AI Agents');
  return <section id="lab" className="section-pad border-y border-[hsl(var(--border))] bg-[hsl(var(--muted)/.42)]"><div className="section-wrap"><SectionHeading eyebrow="04 / experimental notebook" title="AI Lab" text="An intentionally unfinished research surface. Hypotheses and observations will be added as the work is ready to be shared." /><div className="grid gap-4 lg:grid-cols-[.7fr_1.3fr]"><div className="surface-flat rounded-[1rem] p-3">{experiments.map((experiment, i) => <button data-testid={`button-experiment-${i}`} key={experiment} onClick={() => setSelected(experiment)} className={`flex w-full items-center justify-between rounded-lg px-4 py-4 text-left transition-colors ${selected === experiment ? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]' : 'hover:bg-[hsl(var(--muted))]'}`}><span className="flex items-center gap-3"><span className="font-mono-ui text-[10px] opacity-60">0{i + 1}</span><span className="font-display text-sm font-semibold">{experiment}</span></span><ChevronRight size={15} /></button>)}</div><div className="surface rounded-[1rem] p-6 sm:p-8"><div className="flex items-center justify-between"><span className="pill"><Sparkles size={11} /> {selected}</span><span className="eyebrow">notebook / draft</span></div><div className="mt-8 grid gap-6 sm:grid-cols-2">{[['Hypothesis', 'Add a verified hypothesis here.'], ['Approach', 'Details coming soon.'], ['Experiment', 'Details coming soon.'], ['Observation', 'Results not recorded yet.'], ['Conclusion', 'Evaluation data coming soon.']].map(([label, text]) => <div key={label}><p className="font-mono-ui text-[10px] uppercase tracking-[.12em] text-[hsl(var(--primary))]">{label}</p><p className="mt-2 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{text}</p></div>)}</div><div className="mt-8 border-t border-[hsl(var(--border))] pt-5 font-mono-ui text-[10px] text-[hsl(var(--muted-foreground))]">Notebook state / awaiting verified experiment notes</div></div></div></div></section>;
}

function EvaluationSection() {
  const metrics = ['Accuracy', 'Task success', 'Groundedness', 'Retrieval quality', 'Citation accuracy', 'Latency', 'Cost', 'Failure rate'];
  return <section id="evaluation" className="section-pad"><div className="section-wrap"><SectionHeading eyebrow="05 / responsible measurement" title="AI Evaluation" text="A system is not ready because it demos well. This dashboard is structured for the measures that matter; real values appear only when they are available." action={<span className="pill"><CircleHelp size={12} /> No fabricated metrics</span>} /><div className="surface overflow-hidden rounded-[1rem]"><div className="flex flex-col gap-4 border-b border-[hsl(var(--border))] p-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-display font-semibold">Evaluation workspace</p><p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">Portfolio-wide view / current state</p></div><span className="flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))]"><span className="status-dot bg-[hsl(var(--muted-foreground))] shadow-none" /> Awaiting data</span></div><div className="grid gap-px bg-[hsl(var(--border))] sm:grid-cols-2 lg:grid-cols-4">{metrics.map(metric => <div key={metric} className="bg-[hsl(var(--card))] p-5"><div className="flex items-center justify-between"><p className="font-mono-ui text-[10px] uppercase tracking-[.08em] text-[hsl(var(--muted-foreground))]">{metric}</p><span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--border))]" /></div><p className="mt-7 font-display text-lg text-[hsl(var(--muted-foreground))]">Evaluation data coming soon.</p></div>)}</div></div></div></section>;
}

function ArchitectureSection() {
  const nodes = [
    ['User', 'Input enters through the product experience.'],
    ['Application', 'The interface and product layer.'],
    ['AI orchestrator', 'A conceptual coordination layer.'],
    ['Retrieval / tools / memory', 'Context and actions when a system uses them.'],
    ['Model', 'The intelligence layer.'],
    ['Evaluation', 'Measurement before confidence.'],
    ['Response', 'The result returned to the user.'],
  ];
  const [selected, setSelected] = useState(0);
  return <section id="architecture" className="section-pad border-y border-[hsl(var(--border))] bg-[hsl(var(--sidebar))] text-[hsl(var(--sidebar-foreground))]"><div className="section-wrap"><SectionHeading eyebrow="06 / inspect the system" title="Architecture Explorer" text="A conceptual AI application flow. Select a node to understand the role it plays; project-specific architecture is not inferred." /><div className="grid gap-8 lg:grid-cols-[1.25fr_.75fr]"><div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">{nodes.map(([name], i) => <button data-testid={`button-architecture-node-${i}`} key={name} onClick={() => setSelected(i)} className={`relative z-10 rounded-lg border p-4 text-left transition-colors ${selected === i ? 'border-[hsl(var(--accent))] bg-[hsl(var(--accent)/.12)]' : 'border-[hsl(var(--sidebar-border))] bg-[hsl(var(--sidebar-foreground)/.03)] hover:border-[hsl(var(--accent)/.6)]'}`}><span className="font-mono-ui text-[9px] text-[hsl(var(--accent))]">0{i + 1}</span><span className="mt-8 block font-display text-sm font-semibold">{name}</span><span className="mt-2 block text-[11px] text-[hsl(var(--sidebar-foreground)/.5)]">{i === 0 ? 'entry' : i === 6 ? 'output' : 'layer'}</span></button>)}<span className="architecture-line hidden sm:block" /></div><div className="rounded-[1rem] border border-[hsl(var(--sidebar-border))] bg-[hsl(var(--sidebar-foreground)/.04)] p-6"><span className="eyebrow text-[hsl(var(--accent))]">selected node / 0{selected + 1}</span><h3 className="mt-4 font-display text-2xl">{nodes[selected][0]}</h3><p className="mt-4 leading-7 text-[hsl(var(--sidebar-foreground)/.65)]">{nodes[selected][1]}</p><p className="mt-8 border-t border-[hsl(var(--sidebar-border))] pt-4 font-mono-ui text-[10px] leading-5 text-[hsl(var(--sidebar-foreground)/.45)]">Conceptual diagram / not a claim about any single project</p></div></div></div></section>;
}

function ExperienceSection() {
  const entries = [
    ['02.2026 — Present', '12LINKS', 'AI Engineer', 'Current role'],
    ['11.2025 — 02.2026', 'Somahorse AI', 'Full-Stack Developer', 'Previous role'],
    ['2025 — Present', 'DevThrive', 'Founder & Developer', 'Entrepreneurial work'],
  ];
  return <section id="experience" className="section-pad"><div className="section-wrap"><SectionHeading eyebrow="07 / career signal" title="Experience, without the filler." text="A concise timeline of the roles that shape the workbench. Responsibilities and outcomes remain unfilled until they are verified." /><div className="space-y-3">{entries.map(([date, company, role, type], index) => <article data-testid={`card-experience-${index}`} key={company} className="surface grid gap-5 rounded-[1rem] p-6 sm:grid-cols-[150px_1fr_auto] sm:items-center"><span className="font-mono-ui text-[10px] text-[hsl(var(--muted-foreground))]">{date}</span><div><p className="eyebrow">{type}</p><h3 className="mt-2 font-display text-2xl font-semibold">{company}</h3><p className="mt-1 text-sm text-[hsl(var(--primary))]">{role}</p></div><span className="hidden items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))] sm:flex"><span className="status-dot bg-[hsl(var(--primary))] shadow-none" /> Details coming soon</span></article>)}</div></div></section>;
}

function ProofSection() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'AI systems', 'Software', 'Security'];
  const filtered = useMemo(() => repoList.filter(repo => filter === 'All' || (filter === 'AI systems' ? repo.kind.toLowerCase().includes('ai') || repo.kind.toLowerCase().includes('application') : filter === 'Security' ? repo.kind.toLowerCase().includes('security') || repo.name.toLowerCase().includes('fraud') : filter === 'Software' ? !repo.kind.toLowerCase().includes('security') : true)), [filter]);
  return <section id="proof" className="section-pad border-y border-[hsl(var(--border))] bg-[hsl(var(--muted)/.42)]"><div className="section-wrap"><SectionHeading eyebrow="08 / proof of work" title="Open source, indexed honestly." text="Curated repositories from NuttyHack. No stars, dates or outcomes are invented; use the source links to inspect the work directly." action={<a data-testid="link-github-profile" href="https://github.com/NuttyHack" target="_blank" rel="noreferrer" className="btn-outline"><Github size={15} /> @NuttyHack <ExternalLink size={13} /></a>} /><div className="mb-6 flex flex-wrap gap-2">{filters.map(item => <button data-testid={`button-filter-${item}`} key={item} onClick={() => setFilter(item)} className={`rounded-full px-3 py-2 font-mono-ui text-[10px] uppercase tracking-[.1em] ${filter === item ? 'bg-[hsl(var(--foreground))] text-[hsl(var(--background))]' : 'border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))]'}`}>{item}</button>)}</div><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{filtered.map(repo => <div data-testid={`card-repo-${repo.id}`} key={repo.id} className="surface-flat rounded-[.85rem] p-5"><div className="flex items-center justify-between"><span className="flex items-center gap-2 font-mono-ui text-[10px] text-[hsl(var(--muted-foreground))]"><Github size={13} /> {repo.visibility}</span>{repo.language && <span className="font-mono-ui text-[10px] text-[hsl(var(--primary))]">{repo.language}</span>}</div><h3 className="mt-6 font-display text-lg font-semibold">{repo.name}</h3><p className="mt-2 min-h-[48px] text-sm leading-6 text-[hsl(var(--muted-foreground))]">{repo.description}</p><a data-testid={`link-repo-${repo.id}`} href={repo.github} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[.1em] text-[hsl(var(--primary))]">View source <ArrowRight size={13} /></a></div>)}</div></div></section>;
}

function BuildingSection() {
  return <section id="building" className="section-pad"><div className="section-wrap"><div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">09 / live board</p><h2 className="display-lg mt-4">Currently building.</h2><p className="mt-5 max-w-sm leading-7 text-[hsl(var(--muted-foreground))]">A transparent surface for the next thing. Content stays editable and truthful.</p><div className="mt-7 flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[.1em] text-[hsl(var(--primary))]"><span className="status-dot live-dot" /> Active / AI Engineering</div></div><div className="grid gap-3 sm:grid-cols-3"><div className="surface rounded-[1rem] p-6 sm:translate-y-6"><span className="eyebrow">Recently built</span><p className="mt-12 font-display text-lg font-semibold">Details coming soon.</p></div><div className="surface rounded-[1rem] bg-[hsl(var(--primary))] p-6 text-[hsl(var(--primary-foreground))]"><span className="font-mono-ui text-[10px] uppercase tracking-[.12em] text-[hsl(var(--primary-foreground)/.68)]">Currently exploring</span><p className="mt-12 font-display text-lg font-semibold">Intelligent systems, AI evaluation and automation.</p></div><div className="surface rounded-[1rem] p-6 sm:translate-y-12"><span className="eyebrow">Next</span><p className="mt-12 font-display text-lg font-semibold">Details coming soon.</p></div></div></div></div></section>;
}

function ThinkingSection() {
  const principles = [['01', 'Build for reality', 'AI systems should work outside demos.'], ['02', 'Measure before optimizing', 'Performance should be demonstrated, not assumed.'], ['03', 'Simplicity wins', 'Complexity should solve a real problem.'], ['04', 'Security is engineering', 'Failure modes and abuse cases matter.'], ['05', 'Learn by building', 'The strongest learning happens through implementation.']];
  return <section id="about" className="section-pad border-y border-[hsl(var(--border))] bg-[hsl(var(--muted)/.42)]"><div className="section-wrap"><SectionHeading eyebrow="10 / engineering philosophy" title="How I think." text="A small operating manual for building things that have to survive contact with reality." /><div className="grid gap-px overflow-hidden rounded-[1rem] border border-[hsl(var(--border))] bg-[hsl(var(--border))] md:grid-cols-5">{principles.map(([number, title, text]) => <div key={number} className="bg-[hsl(var(--card))] p-6"><p className="font-mono-ui text-[10px] text-[hsl(var(--primary))]">{number}</p><h3 className="mt-12 font-display text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{text}</p></div>)}</div></div></section>;
}

function NotesSection() {
  const notes = [['What I learned building an AI health companion', 'AI Engineering'], ['Designing reliable AI agents', 'Agents'], ['Building AI systems with security in mind', 'Security'], ['From machine learning model to production system', 'Machine Learning'], ['Lessons from building CattleShield', 'AI Engineering']];
  return <section id="notes" className="section-pad"><div className="section-wrap"><SectionHeading eyebrow="11 / engineering journal" title="Engineering Notes" text="The writing queue is open. These are deliberately marked as drafts until there is a finished piece to read." /><div className="grid gap-3 md:grid-cols-2">{notes.map(([title, category], i) => <div data-testid={`card-note-${i}`} key={title} className="surface flex items-center justify-between rounded-[.9rem] p-5 text-left"><span><span className="pill">{category}</span><h3 className="mt-4 font-display text-lg font-semibold">{title}</h3></span><span className="flex flex-col items-end gap-3"><span className="font-mono-ui text-[9px] uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))]">Draft / coming soon</span><ArrowRight size={16} className="text-[hsl(var(--primary))]" /></span></div>)}</div></div></section>;
}

function JourneySection() {
  const cards = [['01', 'Project development', 'The workbench evolves through implementation.'], ['02', 'University foundation', 'Computer Science at the University of Pretoria.'], ['03', 'Engineering milestones', 'A record of things built, not a list of claims.']];
  return <section id="journey" className="section-pad border-y border-[hsl(var(--border))] bg-[hsl(var(--sidebar))] text-[hsl(var(--sidebar-foreground))]"><div className="section-wrap"><SectionHeading eyebrow="12 / the building gallery" title="The Journey" text="A visual index of the path so far. New entries will be added when there is a story worth showing." /><div className="grid gap-3 md:grid-cols-3">{cards.map(([number, title, text]) => <div key={number} className="group min-h-[250px] rounded-[1rem] border border-[hsl(var(--sidebar-border))] bg-[linear-gradient(145deg,hsl(var(--sidebar-foreground)/.08),transparent)] p-6"><div className="flex items-center justify-between"><span className="font-mono-ui text-[10px] text-[hsl(var(--accent))]">{number}</span><ArrowDownRight size={16} className="text-[hsl(var(--sidebar-foreground)/.4)] transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></div><div className="mt-24"><p className="eyebrow text-[hsl(var(--sidebar-foreground)/.5)]">Archive entry</p><h3 className="mt-2 font-display text-xl">{title}</h3><p className="mt-2 text-sm text-[hsl(var(--sidebar-foreground)/.55)]">{text}</p></div></div>)}</div></div></section>;
}

function EducationSection() {
  const [open, setOpen] = useState<string | null>(null);
  const firstYear = ['Imperative Programming', 'Data Structures and Algorithms', 'Introduction to Computer Science', 'Operating Systems', 'Program Design'];
  const secondYear = ['COS 210 — Theoretical Computer Science', 'COS 212 — Data Structures and Algorithms', 'COS 214 — Software Modelling', 'COS 216 — Netcentric Computer Systems', 'COS 221 — Introduction to Database Systems', 'COS 226 — Concurrent Systems', 'COS 284 — Computer Organisation and Architecture', 'WTW 285 — Discrete Structures'];
  const tracks: Array<[string, string[]]> = [['First-year foundation', firstYear], ['Second-year coursework', secondYear]];
  return <section id="education" className="section-pad"><div className="section-wrap"><SectionHeading eyebrow="13 / academic foundation" title="Education & credentials." text="The academic and security foundations behind the work." /><div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]"><div><span className="pill"><MapPin size={11} /> Pretoria, South Africa</span><h3 className="mt-6 font-display text-3xl font-semibold">BSc Computer Science</h3><p className="mt-2 text-lg text-[hsl(var(--primary))]">University of Pretoria</p><p className="mt-2 font-mono-ui text-[10px] text-[hsl(var(--muted-foreground))]">2025 — Present</p><p className="mt-7 max-w-sm leading-7 text-[hsl(var(--muted-foreground))]">A foundation in programming, systems, data structures, software modelling and computer organisation.</p></div><div className="space-y-3">{tracks.map(([title, items]) => { const isOpen = open === title; return <div key={title} className="surface-flat rounded-[.9rem]"><button data-testid={`button-education-${title}`} onClick={() => setOpen(isOpen ? null : title)} className="flex w-full items-center justify-between p-5 text-left"><span><span className="eyebrow">{title}</span><span className="mt-2 block font-display text-lg font-semibold">{items.length} modules indexed</span></span><ChevronDown size={18} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} /></button>{isOpen && <div className="grid gap-2 border-t border-[hsl(var(--border))] p-5 sm:grid-cols-2">{items.map(item => <div key={item} className="rounded-md bg-[hsl(var(--muted))] px-3 py-2.5 font-mono-ui text-[10px] leading-5">{item}</div>)}</div>}</div>; })}</div></div><div id="certifications" className="mt-20"><div className="mb-5 flex items-center gap-3"><p className="eyebrow">Credentials</p><span className="h-px flex-1 bg-[hsl(var(--border))]" /></div><div className="flex flex-wrap gap-2">{['Data Engineering — WeThinkCode', 'Ethical Hacker', 'Cyber Threat Management', 'Introduction to Cybersecurity', 'C++ Essentials', 'Operating Systems Support', 'Packet Tracer'].map(item => <span data-testid={`credential-${item}`} key={item} className="surface-flat rounded-full px-4 py-2.5 font-mono-ui text-[10px]">{item}</span>)}</div></div></div></section>;
}

function ContactSection({ onCopy }: { onCopy: () => void }) {
  return <section id="contact" className="section-pad border-t border-[hsl(var(--border))]"><div className="section-wrap"><div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end"><div><p className="eyebrow">14 / open channel</p><h2 className="display-xl mt-5 max-w-3xl">Let's build something <span className="text-[hsl(var(--primary))]">useful.</span></h2><p className="mt-7 max-w-lg text-lg leading-8 text-[hsl(var(--muted-foreground))]">Interested in AI engineering, intelligent products, software systems, collaboration or technical opportunities?</p><div className="mt-8 flex flex-wrap gap-3"><a data-testid="link-contact-email" href="mailto:ngwenyankhosinathi@gmail.com" className="btn-primary"><Mail size={16} /> Email Nkosinathi</a><button data-testid="button-copy-email" onClick={onCopy} className="btn-outline"><Clipboard size={15} /> Copy email</button></div></div><div className="surface rounded-[1rem] p-6"><div className="flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[.1em] text-[hsl(var(--primary))]"><span className="status-dot live-dot" /> Open to opportunities</div><div className="mt-8 space-y-4 border-t border-[hsl(var(--border))] pt-5"><p className="flex items-center gap-3 text-sm"><MapPin size={15} className="text-[hsl(var(--primary))]" /> Hatfield, Pretoria, South Africa</p><p className="flex items-center gap-3 text-sm"><Mail size={15} className="text-[hsl(var(--primary))]" /> ngwenyankhosinathi@gmail.com</p></div><div className="mt-7 flex gap-2"><a data-testid="link-contact-linkedin" href="https://www.linkedin.com/in/nkosinathi-ngwenya-3bb058347" target="_blank" rel="noreferrer" className="btn-outline flex-1"><Linkedin size={15} /> LinkedIn</a><a data-testid="link-contact-github" href="https://github.com/NuttyHack" target="_blank" rel="noreferrer" className="btn-outline flex-1"><Github size={15} /> GitHub</a></div><a data-testid="link-contact-instagram" href="https://www.instagram.com/mongameli_ngwenya" target="_blank" rel="noreferrer" className="mt-2 flex items-center justify-center gap-2 rounded-md border border-[hsl(var(--border))] py-3 font-mono-ui text-[10px] uppercase tracking-[.1em]"><ExternalLink size={13} /> Instagram</a></div></div></div></section>;
}

function DemoRequestModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [form, setForm] = useState({ name: '', email: '', organization: '', message: '' });
  if (!project) return null;
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const subject = `Demo access request: ${project.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.organization}\nProject requested: ${project.name}\n\n${form.message}`;
    window.location.href = `mailto:ngwenyankhosinathi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };
  return <div className="modal-backdrop !z-[88]" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="demo-dialog-title"><div className="flex items-start justify-between border-b border-[hsl(var(--border))] p-6 sm:p-8"><div><span className="eyebrow">Private system / access channel</span><h2 id="demo-dialog-title" className="mt-3 font-display text-3xl font-semibold">Request {project.name}</h2><p className="mt-3 max-w-lg text-sm leading-6 text-[hsl(var(--muted-foreground))]">This sends a prepared email. Private repositories and credentials are never exposed here.</p></div><button data-testid="button-close-demo-request" onClick={onClose} className="grid h-9 w-9 place-items-center rounded-md border border-[hsl(var(--border))]" aria-label="Close demo request"><X size={16} /></button></div><form onSubmit={submit} className="space-y-4 p-6 sm:p-8"><div className="grid gap-4 sm:grid-cols-2"><label className="space-y-2"><span className="eyebrow">Name</span><input data-testid="input-demo-name" required value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} className="w-full rounded-md border border-[hsl(var(--border))] bg-transparent px-3 py-3 text-sm outline-none focus:border-[hsl(var(--primary))]" /></label><label className="space-y-2"><span className="eyebrow">Email</span><input data-testid="input-demo-email" required type="email" value={form.email} onChange={event => setForm({ ...form, email: event.target.value })} className="w-full rounded-md border border-[hsl(var(--border))] bg-transparent px-3 py-3 text-sm outline-none focus:border-[hsl(var(--primary))]" /></label></div><label className="block space-y-2"><span className="eyebrow">Organization</span><input data-testid="input-demo-organization" value={form.organization} onChange={event => setForm({ ...form, organization: event.target.value })} className="w-full rounded-md border border-[hsl(var(--border))] bg-transparent px-3 py-3 text-sm outline-none focus:border-[hsl(var(--primary))]" /></label><label className="block space-y-2"><span className="eyebrow">Message</span><textarea data-testid="input-demo-message" required rows={4} value={form.message} onChange={event => setForm({ ...form, message: event.target.value })} placeholder="What would you like to understand about this system?" className="w-full resize-y rounded-md border border-[hsl(var(--border))] bg-transparent px-3 py-3 text-sm outline-none focus:border-[hsl(var(--primary))]" /></label><div className="flex justify-end gap-3 pt-2"><button data-testid="button-cancel-demo-request" type="button" onClick={onClose} className="btn-outline">Cancel</button><button data-testid="button-send-demo-request" type="submit" className="btn-primary"><Send size={15} /> Prepare request</button></div></form></div></div>;
}

function ProjectModal({ project, onClose, onAsk, onRequestDemo }: { project: Project | null; onClose: () => void; onAsk: () => void; onRequestDemo: (project: Project) => void }) {
  if (!project) return null;
  const isPrivate = project.visibility === 'Private';
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title"><div className="flex items-start justify-between border-b border-[hsl(var(--border))] p-6 sm:p-8"><div><span className="eyebrow">{project.kind} / technical deep dive</span><h2 id="project-dialog-title" className="mt-3 font-display text-3xl font-semibold">{project.name}</h2></div><button data-testid="button-close-project" onClick={onClose} className="grid h-9 w-9 place-items-center rounded-md border border-[hsl(var(--border))]" aria-label="Close project"><X size={16} /></button></div><div className="space-y-7 p-6 sm:p-8"><div className="flex flex-wrap gap-2"><span className="pill">{isPrivate ? <LockKeyhole size={11} /> : <Globe2 size={11} />}{project.visibility}</span>{project.language && <span className="pill"><Code2 size={11} /> {project.language}</span>}<span className="pill"><Zap size={11} /> {isPrivate ? 'Request access' : 'Source available'}</span></div><p className="text-lg leading-8">{project.description}</p><div className="grid gap-3 sm:grid-cols-2">{[['Overview', project.description], ['Architecture', 'Details coming soon.'], ['Engineering', 'Details coming soon.'], ['Evaluation', 'Evaluation data coming soon.'], ['Challenges', 'Details coming soon.'], ['Results', 'No verified outcome provided.']].map(([label, value]) => <div key={label} className="surface-flat rounded-lg p-4"><p className="font-mono-ui text-[10px] uppercase tracking-[.1em] text-[hsl(var(--primary))]">{label}</p><p className="mt-3 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{value}</p></div>)}</div><div className="flex flex-wrap gap-3 border-t border-[hsl(var(--border))] pt-6">{project.github && <a data-testid="modal-project-source" href={project.github} target="_blank" rel="noreferrer" className="btn-primary"><Github size={15} /> View source</a>}{isPrivate && <button data-testid="button-request-demo" onClick={() => onRequestDemo(project)} className="btn-outline"><Mail size={15} /> Request demo access</button>}<button data-testid="button-project-ask" onClick={onAsk} className="btn-quiet"><MessageSquareText size={15} /> Ask about this system</button></div></div></div></div>;
}

function AskDrawer({ onClose, onNavigate }: { onClose: () => void; onNavigate: (id: string) => void }) {
  const [question, setQuestion] = useState('');
  const [answerKey, setAnswerKey] = useState('overview');
  const answer = aiAnswers[answerKey];
  const answerFor = (prompt: string) => {
    const p = prompt.toLowerCase();
    if (p.includes('recruiter') || p.includes('summary')) return 'recruiter';
    if (p.includes('role') || p.includes('current')) return 'role';
    if (p.includes('technology') || p.includes('capabilit')) return 'technologies';
    if (p.includes('project') || p.includes('strongest')) return 'project';
    if (p.includes('system')) return 'systems';
    return 'overview';
  };
  const ask = (prompt: string) => { setQuestion(prompt); setAnswerKey(answerFor(prompt)); };
  return <><div className="modal-backdrop !z-[75]" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }} /><aside className="drawer !z-[76]" aria-label="Ask Nkosinathi's AI"><div className="flex items-start justify-between border-b border-[hsl(var(--border))] p-5 sm:p-7"><div><div className="flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-md bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"><BrainCircuit size={16} /></span><span className="font-display font-bold">Nkosinathi AI</span></div><p className="mt-3 font-mono-ui text-[10px] uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))]">Verified portfolio navigation layer</p></div><button data-testid="button-close-ai" onClick={onClose} className="grid h-9 w-9 place-items-center rounded-md border border-[hsl(var(--border))]" aria-label="Close AI assistant"><X size={16} /></button></div><div className="p-5 sm:p-7"><div className="rounded-[.9rem] bg-[hsl(var(--muted))] p-4"><div className="flex items-start gap-3"><span className="mt-1 status-dot" /><p data-testid="text-ai-answer" className="text-sm leading-7">{answer.text}</p></div><div className="mt-5 flex flex-wrap gap-2">{answer.links.map(([label, id]) => <button data-testid={`ai-link-${id}`} key={id} onClick={() => { onNavigate(id); onClose(); }} className="inline-flex items-center gap-2 rounded-md bg-[hsl(var(--card))] px-3 py-2 font-mono-ui text-[10px] uppercase tracking-[.08em] text-[hsl(var(--primary))]">{label} <ArrowRight size={12} /></button>)}</div></div><div className="mt-7"><p className="eyebrow">Suggested prompts</p><div className="mt-3 space-y-2">{aiPrompts.map((prompt, i) => <button data-testid={`button-ai-prompt-${i}`} key={prompt} onClick={() => ask(prompt)} className="flex w-full items-center justify-between rounded-md border border-[hsl(var(--border))] px-3 py-3 text-left text-sm hover:border-[hsl(var(--primary))]"><span>{prompt}</span><ChevronRight size={14} className="shrink-0 text-[hsl(var(--muted-foreground))]" /></button>)}</div></div><form className="mt-8" onSubmit={(event: FormEvent) => { event.preventDefault(); if (question.trim()) ask(question); }}><label htmlFor="ai-question" className="eyebrow">Ask a verified question</label><div className="mt-3 flex gap-2"><input data-testid="input-ai-question" id="ai-question" value={question} onChange={event => setQuestion(event.target.value)} placeholder="Ask about experience, projects..." className="min-w-0 flex-1 rounded-md border border-[hsl(var(--border))] bg-transparent px-3 py-3 text-sm outline-none focus:border-[hsl(var(--primary))]" /><button data-testid="button-submit-ai" type="submit" className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]" aria-label="Ask question"><Send size={15} /></button></div><p className="mt-3 font-mono-ui text-[9px] leading-5 text-[hsl(var(--muted-foreground))]">Answers are grounded only in verified portfolio content. Unknown details stay unknown.</p></form></div></aside></>;
}

function CommandPalette({ onClose, onNavigate, onAsk }: { onClose: () => void; onNavigate: (id: string) => void; onAsk: () => void }) {
  const [query, setQuery] = useState('');
  const commands = useMemo(() => [
    ...navItems.map(([id, label]) => ({ id, label: `Open ${label}`, hint: 'Section', action: () => onNavigate(id) })),
    ...projects.map(project => ({ id: `project-${project.id}`, label: project.name, hint: project.kind, action: () => { onNavigate('work'); } })),
    { id: 'ask', label: 'Ask Nkosinathi AI', hint: 'Assistant', action: onAsk },
    { id: 'github', label: 'Open GitHub profile', hint: '@NuttyHack', action: () => window.open('https://github.com/NuttyHack', '_blank') },
  ], [onAsk, onNavigate]);
  const filtered = commands.filter(command => `${command.label} ${command.hint}`.toLowerCase().includes(query.toLowerCase())).slice(0, 9);
  return <div className="modal-backdrop !z-[90]" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><div className="w-full max-w-xl overflow-hidden rounded-[1rem] border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-2xl" role="dialog" aria-modal="true" aria-label="Command palette"><div className="flex items-center gap-3 border-b border-[hsl(var(--border))] px-5"><Search size={17} className="text-[hsl(var(--muted-foreground))]" /><input data-testid="input-command-search" autoFocus value={query} onChange={event => setQuery(event.target.value)} onKeyDown={event => { if (event.key === 'Escape') onClose(); if (event.key === 'Enter' && filtered[0]) { filtered[0].action(); onClose(); } }} placeholder="Search projects, skills, sections..." className="h-16 flex-1 bg-transparent outline-none" /><span className="font-mono-ui text-[9px] text-[hsl(var(--muted-foreground))]">ESC</span></div><div className="max-h-[55vh] overflow-y-auto p-2">{filtered.length ? filtered.map(command => <button data-testid={`command-${command.id}`} key={command.id} onClick={() => { command.action(); onClose(); }} className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left hover:bg-[hsl(var(--muted))]"><span className="flex items-center gap-3"><span className="grid h-7 w-7 place-items-center rounded bg-[hsl(var(--muted))] text-[hsl(var(--primary))]"><ArrowRight size={13} /></span><span className="font-display text-sm">{command.label}</span></span><span className="font-mono-ui text-[9px] uppercase text-[hsl(var(--muted-foreground))]">{command.hint}</span></button>) : <div className="p-8 text-center"><p className="font-display font-semibold">No matching signal.</p><p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">Try a project, role, skill or section.</p></div>}</div><div className="flex items-center justify-between border-t border-[hsl(var(--border))] px-5 py-3 font-mono-ui text-[9px] text-[hsl(var(--muted-foreground))]"><span>Portfolio operating system</span><span>↑ ↓ navigate · ↵ open</span></div></div></div>;
}

function RecruiterView({ onClose, onNavigate }: { onClose: () => void; onNavigate: (id: string) => void }) {
  return <div className="modal-backdrop !z-[85]"><div className="modal-panel max-w-3xl"><div className="flex items-start justify-between border-b border-[hsl(var(--border))] p-6 sm:p-8"><div><span className="eyebrow">Fast scan / recruiter view</span><h2 className="mt-3 font-display text-3xl font-semibold">Nkosinathi Ngwenya</h2><p className="mt-2 text-[hsl(var(--primary))]">AI Engineer</p></div><button data-testid="button-close-recruiter" onClick={onClose} className="grid h-9 w-9 place-items-center rounded-md border border-[hsl(var(--border))]" aria-label="Close recruiter view"><X size={16} /></button></div><div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1.1fr_.9fr]"><div><p className="eyebrow">Current</p><p className="mt-3 font-display text-xl font-semibold">12LINKS — AI Engineer</p><p className="mt-1 font-mono-ui text-[10px] text-[hsl(var(--muted-foreground))]">February 2026 — Present</p><p className="eyebrow mt-8">Previous</p><p className="mt-3 font-display text-xl font-semibold">Somahorse AI — Full-Stack Developer</p><p className="mt-1 font-mono-ui text-[10px] text-[hsl(var(--muted-foreground))]">November 2025 — February 2026</p><p className="mt-6 font-display text-lg font-semibold">DevThrive — Founder & Developer</p><p className="mt-1 font-mono-ui text-[10px] text-[hsl(var(--muted-foreground))]">2025 — Present</p></div><div className="surface-flat rounded-[.9rem] p-5"><p className="eyebrow">Core areas</p><div className="mt-4 flex flex-wrap gap-2">{['AI Engineering', 'Machine Learning', 'Generative AI', 'Full-Stack Engineering', 'Data Engineering', 'Cybersecurity'].map(item => <span key={item} className="rounded-md bg-[hsl(var(--muted))] px-2.5 py-2 font-mono-ui text-[10px]">{item}</span>)}</div><p className="eyebrow mt-7">Education</p><p className="mt-3 font-display font-semibold">BSc Computer Science</p><p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">University of Pretoria · 2025 — Present</p></div></div><div className="flex flex-wrap gap-3 border-t border-[hsl(var(--border))] p-6 sm:p-8"><a data-testid="recruiter-contact" href="mailto:ngwenyankhosinathi@gmail.com" className="btn-primary"><Mail size={15} /> Contact</a><a data-testid="recruiter-linkedin" href="https://www.linkedin.com/in/nkosinathi-ngwenya-3bb058347" target="_blank" rel="noreferrer" className="btn-outline"><Linkedin size={15} /> LinkedIn</a><a data-testid="recruiter-github" href="https://github.com/NuttyHack" target="_blank" rel="noreferrer" className="btn-outline"><Github size={15} /> GitHub</a><button data-testid="recruiter-experience" onClick={() => { onClose(); onNavigate('experience'); }} className="btn-quiet">View full experience <ArrowRight size={14} /></button></div></div></div>;
}

function Home() {
  const [dark, setDark] = useState(() => localStorage.getItem('nko-theme') === 'dark');
  const [askOpen, setAskOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [recruiterOpen, setRecruiterOpen] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [demoProject, setDemoProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);
  useMeta();
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('nko-theme', dark ? 'dark' : 'light');
  }, [dark]);
  useEffect(() => {
    const handler = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setCommandOpen(true); } if (event.key === 'Escape') { setCommandOpen(false); setAskOpen(false); setRecruiterOpen(false); setProject(null); } };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);
  const navigate = (id: string) => scrollToId(id);
  const copyEmail = () => { navigator.clipboard?.writeText('ngwenyankhosinathi@gmail.com'); setCopied(true); window.setTimeout(() => setCopied(false), 1600); };
  return <div className="site-shell"><TopNav onAsk={() => setAskOpen(true)} onCommand={() => setCommandOpen(true)} onRecruiter={() => setRecruiterOpen(true)} dark={dark} onTheme={() => setDark(value => !value)} onNavigate={navigate} /><main><Hero onAsk={() => setAskOpen(true)} onNavigate={navigate} /><WorkSection onOpen={setProject} /><EngineeringSection /><SecuritySection onNavigate={navigate} /><LabSection /><EvaluationSection /><ArchitectureSection /><ExperienceSection /><ProofSection /><BuildingSection /><ThinkingSection /><NotesSection /><JourneySection /><EducationSection /><ContactSection onCopy={copyEmail} /></main><footer className="border-t border-[hsl(var(--border))] py-8"><div className="section-wrap flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="font-mono-ui text-[10px] uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))]">Nkosinathi Ngwenya / AI Engineer</p><div className="flex items-center gap-4 font-mono-ui text-[10px] text-[hsl(var(--muted-foreground))]"><span>Pretoria, South Africa</span><button data-testid="button-footer-ask" onClick={() => setAskOpen(true)} className="text-[hsl(var(--primary))]">Ask AI <ArrowRight size={12} className="inline" /></button></div></div></footer><button data-testid="button-floating-ai" onClick={() => setAskOpen(true)} className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-[hsl(var(--foreground))] px-4 py-3 text-[hsl(var(--background))] shadow-xl transition-transform hover:-translate-y-1"><MessageSquareText size={16} /><span className="font-mono-ui text-[10px] uppercase tracking-[.1em]">Ask AI</span></button>{copied && <div data-testid="status-copied" className="fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-md bg-[hsl(var(--foreground))] px-4 py-3 text-[hsl(var(--background))] font-mono-ui text-[10px]"><Check size={14} /> Email copied</div>}{project && <ProjectModal project={project} onClose={() => setProject(null)} onAsk={() => setAskOpen(true)} onRequestDemo={(selectedProject) => { setProject(null); setDemoProject(selectedProject); }} />}{demoProject && <DemoRequestModal project={demoProject} onClose={() => setDemoProject(null)} />}{askOpen && <AskDrawer onClose={() => setAskOpen(false)} onNavigate={navigate} />}{commandOpen && <CommandPalette onClose={() => setCommandOpen(false)} onNavigate={navigate} onAsk={() => setAskOpen(true)} />}{recruiterOpen && <RecruiterView onClose={() => setRecruiterOpen(false)} onNavigate={navigate} />}</div>;
}

function Router() {
  return <Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch>;
}

export default function App() {
  const [location] = useLocation();
  return <Router key={location} />;
}