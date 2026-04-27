import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Trees as TreesIcon, House, Flower2, ShieldAlert, ChevronDown, Leaf } from 'lucide-react';
import { plants } from './data';
import { Plant, PlantCategory, SafetyStatus } from './types';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PlantCard from './components/PlantCard';
import PlantDetails from './components/PlantDetails';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<PlantCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [safetyFilter, setSafetyFilter] = useState<SafetyStatus | 'All'>('All');
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  const filteredPlants = useMemo(() => {
    return plants.filter((plant) => {
      const matchCategory = selectedCategory === 'All' || plant.category === selectedCategory;
      const matchSafety = safetyFilter === 'All' || plant.safety === safetyFilter;
      const matchSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSafety && matchSearch;
    });
  }, [selectedCategory, safetyFilter, searchQuery]);

  const categories: { label: PlantCategory | 'All'; icon: any }[] = [
    { label: 'All', icon: Leaf },
    { label: 'Trees', icon: TreesIcon },
    { label: 'Indoor', icon: House },
    { label: 'Shrubs', icon: Leaf },
    { label: 'Flowers', icon: Flower2 },
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-dark-ink">
      <Navigation />
      
      <main>
        <Hero />

        {/* Browser Section */}
        <section id="guide" className="max-w-7xl mx-auto px-12 py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div className="max-w-xl">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-dark-accent mb-6 italic">Registry Exploration</h4>
              <h2 className="text-5xl md:text-6xl font-bold text-dark-ink mb-6 leading-tight">
                The Botanical <span className="italic font-serif accent-text text-dark-accent">Registry</span>
              </h2>
              <p className="text-dark-ink/50 text-xl font-light leading-relaxed">
                Explore our curated collection of terrestrial species. Filter by classification or safety index to narrow your search.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto pb-2">
              <div className="relative group min-w-[320px]">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-dark-ink/30 group-focus-within:text-dark-accent transition-colors" size={16} />
                <input 
                  type="text" 
                  placeholder="Search Archive..." 
                  className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-dark-accent focus:border-dark-accent text-sm transition-all tracking-wider font-light"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-6 mb-20">
            <div className="flex glass p-1 rounded-2xl border border-white/5 shadow-2xl">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => setSelectedCategory(cat.label)}
                  className={`flex items-center gap-3 px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all whitespace-nowrap ${
                    selectedCategory === cat.label 
                      ? 'bg-dark-accent text-dark-bg transition-shadow' 
                      : 'text-dark-ink/40 hover:text-dark-ink hover:bg-white/5'
                  }`}
                >
                  <cat.icon size={14} />
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 glass p-1 rounded-2xl border border-white/5 shadow-2xl">
              <Filter size={14} className="text-dark-accent mx-4" />
              {(['All', 'Safe', 'Toxic', 'Highly Toxic'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setSafetyFilter(status)}
                  className={`px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
                    safetyFilter === status 
                      ? status === 'All' ? 'bg-dark-ink text-dark-bg' : status === 'Safe' ? 'bg-dark-accent text-dark-bg' : 'bg-dark-danger text-dark-ink'
                      : 'text-dark-ink/30 hover:text-dark-ink'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Plant Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredPlants.map((plant) => (
                <PlantCard 
                  key={plant.id} 
                  plant={plant} 
                  onClick={setSelectedPlant} 
                />
              ))}
            </AnimatePresence>
          </div>

          {filteredPlants.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-40 text-center glass rounded-[40px] border-dashed border-2 border-white/5"
            >
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10 shadow-inner">
                <Search size={32} className="text-dark-accent/20" />
              </div>
              <h3 className="serif text-3xl text-dark-ink mb-3 tracking-tight">Archive Empty</h3>
              <p className="text-dark-ink/40 max-w-sm mx-auto font-light leading-relaxed">
                No documented species match your specific search criteria. Please adjust filters or try a different keyword.
              </p>
            </motion.div>
          )}
        </section>

        {/* Educational Content Section */}
        <section className="bg-white/5 py-40 overflow-hidden relative border-y border-white/5 glass">
          <div className="max-w-7xl mx-auto px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="pill bg-dark-accent/10 text-dark-accent border border-dark-accent/20 mb-8 inline-block italic">Our Ethos</span>
                <h3 className="text-6xl font-serif font-bold mb-10 leading-[1.1] text-dark-ink">Preserving Knowledge, <br /> <span className="italic accent-text text-dark-accent">One Leaf</span> at a Time.</h3>
                <p className="text-dark-ink/50 text-xl font-light leading-relaxed mb-12">
                  Arboris was founded on the principle that understanding our natural world is the first step toward long-term preservation. 
                  We provide professional-grade documentation to aid botanical enthusiasts in their pursuit of knowledge.
                </p>
                <div className="grid grid-cols-2 gap-12">
                  <div className="border-l border-white/10 pl-8">
                    <h4 className="text-4xl font-serif text-dark-ink mb-2">9,402</h4>
                    <p className="text-dark-accent text-[10px] uppercase font-bold tracking-[0.2em] opacity-60">Verified Species</p>
                  </div>
                  <div className="border-l border-white/10 pl-8">
                    <h4 className="text-4xl font-serif text-dark-ink mb-2">185</h4>
                    <p className="text-dark-accent text-[10px] uppercase font-bold tracking-[0.2em] opacity-60">Global Institutes</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square"
              >
                <div className="absolute inset-0 border border-dark-accent/30 rounded-[120px] rotate-6 translate-x-4 translate-y-4" />
                <img 
                  src="https://images.unsplash.com/photo-1530260626688-048279320445?auto=format&fit=crop&q=80&w=1000" 
                  alt="Botanical Nurturing" 
                  className="w-full h-full object-cover rounded-[120px] shadow-2xl relative z-10 grayscale-[40%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-12 -right-12 glass p-12 rounded-[60px] shadow-2xl z-20 w-80">
                  <ShieldAlert size={40} className="text-dark-danger mb-6" />
                  <p className="text-dark-ink font-serif text-2xl font-bold leading-tight">Vigilance in <br /> Selection.</p>
                  <p className="text-dark-ink/50 text-xs mt-3 uppercase tracking-widest font-medium">Core Security Protocol</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="glass border-t border-white/5 pt-32 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-6 rounded-full border border-dark-accent flex items-center justify-center">
                  <div className="w-0.5 h-3 bg-dark-accent" />
                </div>
                <span className="font-serif text-2xl font-bold tracking-tighter uppercase">Arboris.</span>
              </div>
              <p className="text-dark-ink/40 max-w-sm font-light leading-relaxed mb-10 italic">
                The premier authoritative body for terrestrial botanical documentation and safety research.
              </p>
              <div className="flex gap-6">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 hover:border-dark-accent/30 hover:bg-dark-accent/5 hover:text-dark-accent transition-all flex items-center justify-center cursor-pointer text-dark-ink/20">
                    <Leaf size={18} />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-dark-accent mb-8 uppercase text-[10px] tracking-[0.3em]">Archive</h5>
              <ul className="space-y-5 text-xs font-bold uppercase tracking-[0.15em] text-dark-ink/40">
                <li><a href="#" className="hover:text-dark-accent transition-colors">Species Index</a></li>
                <li><a href="#" className="hover:text-dark-accent transition-colors">Safety Protocols</a></li>
                <li><a href="#" className="hover:text-dark-accent transition-colors">Germination</a></li>
                <li><a href="#" className="hover:text-dark-accent transition-colors">Publications</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-dark-accent mb-8 uppercase text-[10px] tracking-[0.3em]">Foundation</h5>
              <ul className="space-y-5 text-xs font-bold uppercase tracking-[0.15em] text-dark-ink/40">
                <li><a href="#" className="hover:text-dark-accent transition-colors">Research Unit</a></li>
                <li><a href="#" className="hover:text-dark-accent transition-colors">Archives</a></li>
                <li><a href="#" className="hover:text-dark-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-bold text-dark-ink/20 uppercase tracking-[0.3em]">
              © 2024 ARBORIS BOTANICAL INSTITUTE / ALL DATA VERIFIED
            </p>
            <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-dark-ink/20 italic">
              LAT: 45.523062 / LONG: -122.676482
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-dark-accent/5 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
      </footer>

      <PlantDetails 
        plant={selectedPlant} 
        onClose={() => setSelectedPlant(null)} 
      />
    </div>
  );
}
