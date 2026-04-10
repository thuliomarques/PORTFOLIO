import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Terminal() {
  const [text, setText] = useState('');
  const fullText = `> analyze_profile --target="Thúlio Marques"
[System]: Loading Design Engineer profile...
[Skill]: Product-Led Growth (PLG)
[Skill]: AI-Assisted Prototyping
[Status]: Ready to scale your metrics.
> _`;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 35);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="mt-10 p-5 bg-surface border border-border rounded-lg font-mono text-[0.7rem] leading-relaxed text-muted max-w-md shadow-2xl relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber/20 via-amber/50 to-amber/20 opacity-50"></div>
      <div className="flex gap-2 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-border group-hover:bg-red-500/50 transition-colors"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-border group-hover:bg-yellow-500/50 transition-colors"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-border group-hover:bg-green-500/50 transition-colors"></div>
      </div>
      <pre className="whitespace-pre-wrap font-mono text-cream/80">{text}</pre>
    </motion.div>
  );
}
