export function Footer() {
  return (
    <footer className="py-10 flex justify-between items-center">
      <p className="font-mono text-[0.65rem] tracking-[0.08em] text-muted">
        © {new Date().getFullYear()} Thúlio Marques
      </p>
      <div className="flex gap-6">
        <a 
          href="https://www.linkedin.com/in/thuliomarques" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-mono text-[0.65rem] tracking-[0.08em] text-muted hover:text-cream transition-colors"
        >
          LinkedIn
        </a>
        <a 
          href="mailto:hellothulio@gmail.com" 
          className="font-mono text-[0.65rem] tracking-[0.08em] text-muted hover:text-cream transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
