import { motion } from 'motion/react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-9 flex justify-between items-center border-b border-border"
    >
      <a href="#" className="font-mono text-xs tracking-[0.12em] uppercase text-amber hover:opacity-80 transition-opacity">
        TM·26
      </a>
      <div className="flex gap-8">
        <a href="#work" className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-muted hover:text-cream transition-colors">
          Work
        </a>
        <a href="#stack" className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-muted hover:text-cream transition-colors">
          Stack
        </a>
        <a href="https://www.linkedin.com/in/thuliomarques" target="_blank" rel="noopener noreferrer" className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-muted hover:text-cream transition-colors">
          LinkedIn
        </a>
      </div>
    </motion.nav>
  );
}
