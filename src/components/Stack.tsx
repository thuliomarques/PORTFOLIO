import { motion } from 'motion/react';
import { bentoItems } from '../data';

export function Stack() {
  return (
    <section id="stack" className="py-[100px] border-b border-border">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-muted flex items-center gap-4 mb-12 after:content-[''] after:flex-1 after:h-px after:bg-border"
      >
        Arquitetura de Valor (Stack)
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {bentoItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`p-8 bg-surface border border-border hover:border-amber/40 hover:bg-surface/80 transition-all duration-300 group ${item.colSpan} relative overflow-hidden`}
          >
            {/* Subtle gradient glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <h4 className={`font-display text-[1.1rem] font-medium tracking-tight mb-3 ${item.accent} group-hover:text-amber transition-colors relative z-10`}>
              {item.title}
            </h4>
            <p className="text-[0.95rem] text-muted leading-[1.6] relative z-10">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
