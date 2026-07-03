// Iconos SVG inline — sin librerías externas.
type P = { className?: string };
const base = "h-5 w-5";

export const Icon = {
  chart: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 19V5M4 19h16" strokeLinecap="round" />
      <path d="M7 14l3.5-4 3 2.5L18 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  scale: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 4v16M6 7h12M6 7l-2.5 5a3 3 0 005 0L6 7zM18 7l-2.5 5a3 3 0 005 0L18 7z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  cloud: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M7 18a4 4 0 01-.5-7.97A5.5 5.5 0 0117.3 9.6 3.8 3.8 0 0117 17.2" strokeLinecap="round" />
      <path d="M9 20l1-2M13 21l1-2M16 20l1-2" strokeLinecap="round" />
    </svg>
  ),
  sun: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
    </svg>
  ),
  doc: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M6 3h8l4 4v14H6V3z" strokeLinejoin="round" />
      <path d="M14 3v4h4M9 12h6M9 16h6" strokeLinecap="round" />
    </svg>
  ),
  currency: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9.5 9.5c0-1 1.1-1.8 2.5-1.8s2.5.8 2.5 1.8-1 1.5-2.5 2-2.5 1-2.5 2 1.1 1.8 2.5 1.8 2.5-.8 2.5-1.8" strokeLinecap="round" />
    </svg>
  ),
  ship: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 15l1.5 4h13L20 15M4 15l8-2 8 2M4 15V9h16v6M9 9V5h6v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  bars: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M5 20V10M10 20V4M15 20v-8M20 20V7" strokeLinecap="round" />
    </svg>
  ),
  layers: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  calendar: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" strokeLinecap="round" />
    </svg>
  ),
  collect: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 3v12M12 15l-4-4M12 15l4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 21h14" strokeLinecap="round" />
    </svg>
  ),
  db: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </svg>
  ),
  gear: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" strokeLinecap="round" />
    </svg>
  ),
  brain: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M9 4a3 3 0 00-3 3 3 3 0 00-2 3c0 1 .5 2 1.3 2.5A3 3 0 006 16a3 3 0 003 3c0 1 .9 2 2 2h1V3h-1a2 2 0 00-2 1zM15 4a3 3 0 013 3 3 3 0 012 3c0 1-.5 2-1.3 2.5A3 3 0 0118 16a3 3 0 01-3 3c0 1-.9 2-2 2h-1V3h1a2 2 0 012 1z" strokeLinejoin="round" />
    </svg>
  ),
  history: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 12a8 8 0 108-8 8.3 8.3 0 00-6 2.7L4 9" strokeLinecap="round" />
      <path d="M4 4v5h5M12 8v4l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  api: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  screen: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4M7 13l3-3 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  send: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M21 3L3 11l7 2 2 7 9-17z" strokeLinejoin="round" />
      <path d="M10 13l5-5" strokeLinecap="round" />
    </svg>
  ),
  phone: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" strokeLinecap="round" />
    </svg>
  ),
  github: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0012 2z" />
    </svg>
  ),
  mail: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  arrowDown: ({ className = base }: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 4v16M12 20l-5-5M12 20l5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export type IconName = keyof typeof Icon;
