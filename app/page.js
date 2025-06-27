'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import About from "../src/components/About";
import TechStack from "../src/components/TechStack";
import Home from "../src/components/Home";
import NavBar from "../src/components/NavBar";
import Portfolio from "../src/components/Portfolio";

import GlowingLogo from "../src/components/GlowingLogo";
import StickyGlowingLogo from "../src/components/StickyGlowingLogo";
import { AnimationProvider, pageTransition } from "../src/context/AnimationContext";

export default function HomePage() {
  const [logoActive, setLogoActive] = useState(false);

  const toggleLogo = () => {
    setLogoActive(!logoActive);
  };
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
          
          {/* Subtle grid pattern for depth */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          
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
          <section id="about">
            <motion.div
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <About />
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
                    className="relative flex justify-center items-center cursor-pointer"
                    onClick={toggleLogo}
                  >
                    {/* 3D Liquid container outer shell */}
                    <div className={`absolute inset-[-8px] rounded-full backdrop-blur-sm transition-all duration-500 aspect-square ${
                      logoActive 
                        ? 'bg-gradient-to-br from-blue-300/20 via-blue-800/40 to-blue-950/60 shadow-[inset_0_2px_8px_rgba(0,0,0,0.3),inset_0_-2px_8px_rgba(255,255,255,0.1),0_0_30px_rgba(255,255,255,0.3)]' 
                        : 'bg-gradient-to-br from-blue-400/15 via-blue-800/30 to-blue-950/50 shadow-[inset_0_2px_6px_rgba(0,0,0,0.2),inset_0_-2px_6px_rgba(255,255,255,0.05)] hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.3),inset_0_-2px_8px_rgba(255,255,255,0.1),0_0_20px_rgba(255,255,255,0.2)]'
                    }`}></div>
                    
                    {/* Liquid depth layer */}
                    <div className={`absolute inset-[-6px] rounded-full transition-all duration-500 aspect-square ${
                      logoActive 
                        ? 'shadow-[inset_0_3px_6px_rgba(0,0,0,0.4)]' 
                        : 'shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]'
                    }`} style={{
                      background: logoActive 
                        ? 'radial-gradient(circle at center, rgba(37, 99, 235, 0.3) 0%, rgba(30, 64, 175, 0.4) 50%, rgba(23, 37, 84, 0.5) 100%)'
                        : 'radial-gradient(circle at center, rgba(29, 78, 216, 0.2) 0%, rgba(30, 64, 175, 0.3) 50%, rgba(23, 37, 84, 0.4) 100%)'
                    }}></div>
                    
                    {/* Top highlight - light reflection on liquid surface */}
                    <div className={`absolute inset-[-8px] rounded-full transition-all duration-500 ${
                      logoActive 
                        ? 'bg-gradient-to-b from-white/25 via-transparent to-transparent opacity-100' 
                        : 'bg-gradient-to-b from-white/15 via-transparent to-transparent opacity-70 hover:opacity-90 hover:from-white/20'
                    }`} style={{
                      clipPath: 'circle(100% at 50% 25%)'
                    }}></div>
                    
                    {/* Container rim/border */}
                    <div className={`absolute inset-[-8px] rounded-full border-2 transition-all duration-500 aspect-square ${
                      logoActive 
                        ? 'border-blue-400/60 shadow-[0_0_15px_rgba(59,130,246,0.4)]' 
                        : 'border-blue-600/40 hover:border-blue-500/50 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)]'
                    }`}></div>
                    
                    {/* Bottom depth shadow */}
                    <div className={`absolute inset-[-8px] rounded-full transition-all duration-500 ${
                      logoActive 
                        ? 'bg-gradient-to-t from-blue-950/40 via-transparent to-transparent opacity-100' 
                        : 'bg-gradient-to-t from-blue-950/30 via-transparent to-transparent opacity-80 hover:opacity-90'
                    }`} style={{
                      clipPath: 'circle(100% at 50% 75%)'
                    }}></div>
                    
                    {/* Logo */}
                    <Image 
                      src="/assets/bkinclogo.png"
                      alt="BKINC Logo" 
                      width={128}
                      height={128}
                      className={`w-32 h-auto relative z-10 transition-all duration-300 ${
                        logoActive 
                          ? 'scale-105 brightness-110' 
                          : 'hover:scale-105'
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