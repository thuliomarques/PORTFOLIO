import { motion } from 'motion/react';
import { cases } from '../data';

export function Work() {
  return (
    <section id="work" className="py-[100px]">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-muted flex items-center gap-4 mb-0 after:content-[''] after:flex-1 after:h-px after:bg-border"
      >
        Impacto & Cases
      </motion.div>

      <div className="flex flex-col">
        {cases.map((item, index) => (
          <motion.article 
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            className="group grid grid-cols-1 md:grid-cols-[120px_1fr] gap-0 md:gap-12 py-[60px] border-b border-border relative"
          >
            {/* Hover background highlight */}
            <div className="absolute inset-0 bg-surface opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 -mx-8 px-8 rounded-xl"></div>

            <div className="hidden md:flex font-display text-[5rem] font-medium leading-none text-amber-dim border-r border-border items-start pt-1 text-gradient-amber group-hover:scale-110 transition-transform duration-500 origin-top-left">
              {item.id}
            </div>
            
            <div className="pl-0">
              <div className="flex items-center gap-4 mb-5">
                <span className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-amber">{item.company}</span>
                <span className="font-mono text-[0.65rem] text-muted">{item.role}</span>
              </div>
              
              <h3 className="font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-medium leading-[1.2] tracking-tight text-cream mb-4 max-w-[640px] group-hover:text-amber transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-[0.9rem] text-muted leading-[1.7] max-w-[560px] mb-10">
                {item.description}
              </p>
              
              <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                {item.metrics.map((metric, i) => (
                  <div key={i} className="border-l-2 border-amber/30 group-hover:border-amber transition-colors duration-500 pl-4">
                    <div className="font-display text-[1.8rem] font-medium text-cream leading-none mb-1">{metric.value}</div>
                    <div className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-muted">{metric.label}</div>
                  </div>
                ))}
              </div>
              
              <a href={item.link} className="mt-10 inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.08em] uppercase text-amber border-b border-amber/25 pb-0.5 hover:border-amber transition-colors after:content-['→'] group-hover:gap-3 duration-300">
                Explorar Case
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
