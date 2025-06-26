import React from 'react';
import { motion } from 'framer-motion';

const StickyGlowingLogo = () => {
  return (
    <motion.div
      className="fixed bottom-0 w-full z-40 pointer-events-none flex justify-center items-end"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative flex justify-center items-center mb-2">
        {/* Logo - with proper spacing and mobile responsiveness */}
        <img 
          src="/assets/bkinclogo.png"
          alt="BKINC Logo Sticky" 
          width="112"
          height="112"
          className="w-28 h-auto"
        />
      </div>
    </motion.div>
  );
};

export default StickyGlowingLogo; 