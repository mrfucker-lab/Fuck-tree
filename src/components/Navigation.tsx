import { motion } from 'motion/react';
import { Leaf, Info, ShieldAlert, BookOpen } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-12 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-full border-2 border-dark-accent flex items-center justify-center">
            <div className="w-1 h-4 bg-dark-accent rounded-full"></div>
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight uppercase">Arboris</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: 'Tutorials', icon: BookOpen },
            { name: 'Safety Index', icon: ShieldAlert },
            { name: 'Species Hub', icon: Info },
          ].map((item, i) => (
            <motion.a
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              href={`#${item.name.toLowerCase().replace(' ', '-')}`}
              className="text-[10px] uppercase font-bold tracking-[0.2em] text-dark-ink/70 hover:text-dark-accent transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="px-6 py-2 border border-dark-border rounded-full text-[10px] uppercase tracking-widest font-bold cursor-pointer hover:bg-white/5 transition-colors"
        >
          Search Archive
        </motion.div>
      </div>
    </nav>
  );
}
