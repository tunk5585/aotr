import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface RisingBlockProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  intensity?: 'subtle' | 'medium' | 'divine';
}

const RisingBlock: React.FC<RisingBlockProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  intensity = 'medium'
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  // Интенсивность эффектов в зависимости от параметра
  const effects = {
    subtle: {
      rise: -15,
      glow: '0 8px 25px rgba(255, 255, 255, 0.15), 0 4px 10px rgba(255, 255, 255, 0.1)',
      blur: 2,
      scale: 1.01
    },
    medium: {
      rise: -30,
      glow: '0 15px 40px rgba(255, 255, 255, 0.2), 0 8px 20px rgba(255, 255, 255, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.1)',
      blur: 4,
      scale: 1.02
    },
    divine: {
      rise: -45,
      glow: '0 25px 60px rgba(255, 255, 255, 0.3), 0 15px 30px rgba(255, 255, 255, 0.2), 0 5px 15px rgba(255, 255, 255, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
      blur: 6,
      scale: 1.03
    }
  };

  const currentEffect = effects[intensity];

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
        filter: `blur(${currentEffect.blur}px)`,
        scale: 0.95
      }}
      animate={inView ? {
        opacity: 1,
        y: currentEffect.rise,
        filter: 'blur(0px)',
        scale: currentEffect.scale
      } : {}}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
        opacity: { duration: 0.8 },
        y: { duration: 1.2, ease: [0.25, 0.4, 0.25, 1] },
        filter: { duration: 0.8 },
        scale: { duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }
      }}
      style={{
        boxShadow: inView ? currentEffect.glow : 'none',
        transition: 'box-shadow 1.2s cubic-bezier(0.25, 0.4, 0.25, 1)'
      }}
      className={`relative ${className}`}
    >
      {/* Дополнительный слой свечения для божественного эффекта */}
      {intensity === 'divine' && inView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: delay + 0.5 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
            filter: 'blur(20px)',
            transform: 'scale(1.5)'
          }}
        />
      )}
      
      {/* Контент */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Утонченный ореол для всех интенсивностей */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.6, scale: 1.2 } : {}}
        transition={{ 
          duration: 2, 
          delay: delay + 0.3,
          ease: [0.25, 0.4, 0.25, 1]
        }}
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.05) 0%, transparent 60%)',
          filter: 'blur(30px)'
        }}
      />
    </motion.div>
  );
};

export default RisingBlock; 