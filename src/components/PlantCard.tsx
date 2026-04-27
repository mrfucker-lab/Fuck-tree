import React from 'react';
import { motion } from 'motion/react';
import { Plant } from '../types';
import { ShieldCheck, ShieldAlert, Droplets, Sun, Thermometer } from 'lucide-react';

interface PlantCardProps {
  plant: Plant;
  onClick: (plant: Plant) => void;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant, onClick }) => {
  const isPoisonous = plant.safety !== 'Safe';
  const isHighlyToxic = plant.safety === 'Highly Toxic';
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`organic-card group cursor-pointer ${isPoisonous ? 'danger-zone' : ''}`}
      onClick={() => onClick(plant)}
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-dark-bg/80 to-transparent opacity-60" />
        <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
          <span className={`pill ${isPoisonous ? 'bg-dark-danger/20 text-[#FF8A8A]' : 'bg-dark-accent/20 text-dark-accent'}`}>
            {plant.safety}
          </span>
          <span className="pill bg-white/5 backdrop-blur-md text-dark-ink/50 border border-white/10">
            {plant.category}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-dark-accent mb-2">Species No. {plant.id.slice(0, 4)}</h3>
        <h2 className="serif text-3xl text-dark-ink mb-1">{plant.name}</h2>
        <p className="text-sm italic opacity-40 font-serif mb-6">{plant.scientificName}</p>
        
        <p className="text-sm text-dark-ink/60 line-clamp-2 mb-8 font-light leading-relaxed">{plant.description}</p>
        
        <div className="flex items-center justify-between pt-6 border-t border-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-dark-ink/30">
          <div className="flex items-center gap-2">
            <Sun size={12} className="text-dark-accent" />
            <span>{plant.care.sunlight.split(' ')[0]}</span>
          </div>
          <div className="flex items-center gap-2">
            <Droplets size={12} className="text-dark-accent" />
            <span>{plant.care.water.split(' ')[0]}</span>
          </div>
          <div className="flex items-center gap-2">
            <Thermometer size={12} className="text-dark-accent" />
            <span>{plant.difficulty}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlantCard;
