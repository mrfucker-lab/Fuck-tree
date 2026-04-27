import { motion, AnimatePresence } from 'motion/react';
import { Plant } from '../types';
import { X, Droplets, Sun, Sprout, AlertTriangle, CheckCircle2, ChevronRight, Thermometer, Box } from 'lucide-react';

interface PlantDetailsProps {
  plant: Plant | null;
  onClose: () => void;
}

export default function PlantDetails({ plant, onClose }: PlantDetailsProps) {
  if (!plant) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-dark-bg/80 backdrop-blur-2xl"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-dark-bg w-full max-w-6xl max-h-[90vh] rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/5"
        >
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 z-20 bg-white/5 hover:bg-white/10 text-dark-ink rounded-full p-3 backdrop-blur-md transition-colors border border-white/10"
          >
            <X size={20} />
          </button>

          {/* Sidebar Image */}
          <div className="w-full md:w-[45%] h-64 md:h-auto relative">
            <img 
              src={plant.image} 
              alt={plant.name} 
              className="w-full h-full object-cover grayscale-[30%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-r from-transparent to-dark-bg hidden md:block" />
            <div className="absolute bottom-12 left-12 text-dark-ink hidden md:block">
              <span className="pill bg-dark-accent text-dark-bg mb-6 inline-block">{plant.category}</span>
              <h2 className="text-6xl font-serif font-bold leading-tight mb-2">{plant.name}</h2>
              <p className="text-xl italic opacity-40 serif">{plant.scientificName}</p>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-grow p-8 md:p-16 overflow-y-auto custom-scrollbar">
            <div className="md:hidden mb-12">
              <span className="pill bg-dark-accent/20 text-dark-accent mb-6 inline-block">{plant.category}</span>
              <h2 className="text-4xl font-serif font-bold text-dark-ink leading-tight">{plant.name}</h2>
              <p className="text-lg italic text-dark-ink/40 serif">{plant.scientificName}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-16">
                {/* Description */}
                <section>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-dark-accent mb-6 flex items-center gap-3">
                    <Box size={14} /> Botanical Notes
                  </h4>
                  <p className="text-lg text-dark-ink/70 font-light leading-relaxed">
                    {plant.description}
                  </p>
                </section>

                {/* Growth Tutorial */}
                <section>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-dark-accent mb-8 flex items-center gap-3">
                    <Sprout size={14} /> Cultivation Cycle
                  </h4>
                  <div className="space-y-6">
                    {plant.tutorial.map((step, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-dark-accent flex items-center justify-center font-serif text-sm font-bold group-hover:bg-dark-accent group-hover:text-dark-bg transition-colors">
                          {index + 1}
                        </div>
                        <p className="text-dark-ink/60 font-light leading-relaxed pt-2">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-16">
                {/* Care Stats */}
                <section className="bg-white/5 p-10 rounded-[40px] border border-white/5 glass">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-dark-accent mb-8">Optimal Vitals</h4>
                  <div className="space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-dark-accent shadow-inner border border-white/5">
                        <Sun size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-dark-ink/30 tracking-widest mb-1">Exposure</p>
                        <p className="text-sm font-medium text-dark-ink">{plant.care.sunlight}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-dark-accent shadow-inner border border-white/5">
                        <Droplets size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-dark-ink/30 tracking-widest mb-1">Hydration</p>
                        <p className="text-sm font-medium text-dark-ink">{plant.care.water}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-dark-accent shadow-inner border border-white/5">
                        <Thermometer size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-dark-ink/30 tracking-widest mb-1">Threshold</p>
                        <p className="text-sm font-medium text-dark-ink">{plant.difficulty} • {plant.care.temperature}</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Safety & Warnings */}
                <section className={`p-10 rounded-[40px] border ${plant.safety === 'Safe' ? 'bg-dark-accent/5 border-dark-accent/20' : 'danger-zone'}`}>
                  <div className="flex items-center gap-3 mb-6">
                    {plant.safety === 'Safe' ? (
                      <>
                        <CheckCircle2 className="text-dark-accent" size={20} />
                        <h4 className="text-[10px] font-bold text-dark-accent uppercase tracking-[0.2em]">Verified Safe</h4>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="text-dark-danger" size={20} />
                        <h4 className="text-[10px] font-bold text-dark-danger uppercase tracking-[0.2em]">Critical Warning</h4>
                      </>
                    )}
                  </div>
                  <p className={`text-sm ${plant.safety === 'Safe' ? 'text-dark-accent' : 'text-dark-danger'} font-medium`}>
                    Classified: <span className="underline decoration-2 underline-offset-4 tracking-[0.1em]">{plant.safety}</span>.
                  </p>
                  {plant.warnings && (
                    <p className="mt-6 text-sm text-dark-ink/50 font-light leading-relaxed italic border-t border-white/5 pt-6">
                      "{plant.warnings}"
                    </p>
                  )}
                </section>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
