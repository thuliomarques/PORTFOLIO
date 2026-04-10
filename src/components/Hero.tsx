import { motion } from 'motion/react';
import { Terminal } from './Terminal';

export function Hero() {
  return (
    <section className="pt-[100px] pb-[80px] grid grid-cols-1 md:grid-cols-[1fr_380px] gap-8 md:gap-12 items-center border-b border-border">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-amber mb-7 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-amber">
          Design Engineer & Growth
        </div>
        <h1 className="font-display text-[clamp(3rem,5.5vw,5rem)] leading-[1.05] tracking-tight text-cream font-medium">
          Código como alavanca de <span className="text-amber">conversão.</span>
        </h1>
        <p className="text-[1.1rem] text-muted leading-[1.6] mt-6 max-w-[500px]">
          Interfaces desenhadas para o usuário, arquitetadas para o negócio. Transformo fricção em receita através de design persuasivo e engenharia front-end.
        </p>
      </motion.div>
      
      <div className="w-full">
        <Terminal />
      </div>
    </section>
  );
}
