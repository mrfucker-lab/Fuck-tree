import { motion } from 'motion/react';
import { Trees as TreeIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1920"
          alt="Ancient Forest"
          className="w-full h-full object-cover opacity-20 transition-opacity duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-dark-bg/0 via-dark-bg/50 to-dark-bg" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="pill bg-dark-accent/10 text-dark-accent border border-dark-accent/20 mb-10 inline-block">
            Botanical Archive No. 24
          </span>
          <h1 className="text-7xl md:text-9xl font-serif leading-[0.9] tracking-tighter text-dark-ink mb-10">
            The Silent <span className="italic accent-text text-dark-accent">Wisdom</span> <br className="hidden md:block" /> of High Canopies.
          </h1>
          <p className="text-xl text-dark-ink/60 max-w-2xl mx-auto mb-12 font-sans font-light leading-relaxed">
            A comprehensive botanical repository dedicated to the cultivation, 
            identification, and preservation of terrestrial flora.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-dark-accent text-dark-bg px-10 py-4 rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-dark-ink transition-all hover:translate-y-[-2px] shadow-2xl shadow-dark-accent/10">
              Start Tutorial
            </button>
            <button className="bg-white/5 border border-dark-border text-dark-ink px-10 py-4 rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-all">
              Species Hub
            </button>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-12 flex flex-col items-start gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-dark-ink/30 italic">Est. 2024</span>
        <div className="w-12 h-px bg-dark-border" />
      </motion.div>
    </section>
  );
}
