'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import TechStack from "../src/components/TechStack";
import Home from "../src/components/Home";
import NavBar from "../src/components/NavBar";
import Portfolio from "../src/components/Portfolio";
import GlowingLogo from "../src/components/GlowingLogo";
import StickyGlowingLogo from "../src/components/StickyGlowingLogo";
import { AnimationProvider, pageTransition } from "../src/context/AnimationContext";
// import bkinclogo from "../public/assets/bkinclogo.png";

export default function HomePage() {
  const [isMainLogoActive, setIsMainLogoActive] = useState(false);
  return (
    <AnimationProvider>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          ease: [0.22, 1, 0.36, 1],
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900"
      >
        {/* Enhanced 3D Background Effects */}
        <div className="absolute inset-0">
          {/* Main gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 via-gray-900/95 to-black/90"></div>
          

          
          {/* Radial gradient for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/80 via-gray-900/90 to-black/95"></div>
          
          {/* Ambient light effect */}
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gray-700/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gray-700/10 rounded-full blur-[120px]"></div>
          
          {/* Subtle noise texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20"></div>
        </div>

        <NavBar />
        <GlowingLogo />
        <main className="relative">
          <section id="home">
            <motion.div
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Home />
            </motion.div>
          </section>

          <section id="techstack">
            <motion.div
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <TechStack />
            </motion.div>
          </section>
          <section id="logo" className="relative w-full py-16 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center">
                {/* BK Inc Logo */}
                <motion.div
                  className="relative group flex justify-center items-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div 
                    className="relative group flex justify-center items-center cursor-pointer"
                    onClick={() => setIsMainLogoActive(!isMainLogoActive)}
                  >
                    {/* Clean circular background */}
                    <div className="relative w-32 h-32 rounded-full">
                      {/* Soft background circle */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-black/80 shadow-lg backdrop-blur-sm"></div>
                      
                      {/* Single clean border */}
                      <div className="absolute inset-0 rounded-full border border-gray-600/30"></div>
                      
                      {/* Soft inner glow */}
                      <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-gray-700/20 to-transparent"></div>
                      
                      {/* Active state lighting - contained within circle */}
                      <div className={`absolute inset-0 rounded-full transition-all duration-500 overflow-hidden ${
                        isMainLogoActive 
                          ? 'border border-gray-400/50' 
                          : ''
                      }`}>
                        {/* Linear gradient grey when active */}
                        <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                          isMainLogoActive 
                            ? 'bg-gradient-to-br from-gray-300/20 via-gray-400/15 to-gray-600/10' 
                            : ''
                        }`}></div>
                      </div>
                      
                      {/* Hover state */}
                      <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        !isMainLogoActive 
                          ? 'group-hover:bg-gradient-to-br group-hover:from-gray-700/15 group-hover:to-transparent' 
                          : ''
                      }`}></div>
                    </div>
                    
                    {/* Logo - positioned absolutely to stay centered */}
                    <Image 
                      src="/assets/bkinclogo.png"
                      alt="BKINC Logo" 
                      width={112}
                      height={112}
                      className={`absolute w-28 h-auto z-10 transition-all duration-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                        isMainLogoActive 
                          ? 'brightness-130 contrast-115 drop-shadow-[0_0_15px_rgba(156,163,175,0.5)]' 
                          : 'brightness-100 contrast-105 group-hover:brightness-110 group-hover:contrast-108'
                      }`}
                    />
                  </div>
                </motion.div>
                
                {/* Tagline */}
                <p className="text-gray-400 text-xs sm:text-sm md:text-base text-center font-light tracking-wider">
                  Crafting Digital Excellence
                </p>
              </div>
            </div>
          </section>
          <section id="portfolio">
            <motion.div
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Portfolio />
            </motion.div>
                    </section>
          <StickyGlowingLogo />
        </main>
      </motion.div>
    </AnimationProvider>
  );
} 