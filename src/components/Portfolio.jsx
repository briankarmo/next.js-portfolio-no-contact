import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaFileAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Motion Wrapper Component
const MotionWrapper = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ 
      y: 50,
      opacity: 0,
      scale: 0.95
    }}
    whileInView={{ 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: delay
      }
    }}
    viewport={{ 
      once: true,
      amount: 0.1,
      margin: "-50px"
    }}
    className="w-full"
  >
    {children}
  </motion.div>
);

const projects = [
  {
    id: 1,
    src: "/assets/portfolio/boston.png",
    demo: "https://www.bostoninnovations.org/company",
    title: "Boston Innovations",
    description: "SEO-Optimized Portfolio Site with Next.js & Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
  },
  {
    id: 2,
    src: "/assets/portfolio/shutter.png",
    demo: "https://shutterguide.io/",
    title: "ShutterGuide.IO",
    description: "Photography platform with Next.js, Firebase auth, and Stripe secure payment.",
    tags: ["Next.js", "Firebase", "Stripe"],
  },
  {
    id: 3,
    src: "/assets/portfolio/shopify.png",
    demo: "https://zazadepotmi.myshopify.com/",
    title: "Bespoke Shopify Liquid Development",
    description: "Custom Shopify eCommerce store with bespoke Liquid theme development and advanced functionality.",
    tags: ["Shopify", "Liquid", "eCommerce", "Custom Theme"],
  },
  {
    id: 4,
    src: "/assets/portfolio/ModernApp.png",
    demo: "https://bk-inc-modern-app.netlify.app/",
    title: "Modern Business App",
    description: "Responsive business application showcasing modern UI/UX principles.",
    tags: ["React", "Tailwind CSS", "UI/UX"],
  },
  {
    id: 5,
    src: "/assets/portfolio/Apple.png",
    demo: "https://bkinc525.netlify.app/",
    title: "iPhone Landing Page",
    description: "Interactive product showcase featuring Three.js 3D modeling.",
    tags: ["Three.js", "3D", "Animation"]
  },
  {
    id: 6,
    src: "/assets/portfolio/weather.png",
    demo: "https://bkinc-weather.netlify.app/",
    title: "Weather Tracker",
    description: "Real-time weather application using OpenWeatherMap API.",
    tags: ["API", "React", "Real-time"],
  },
  {
    id: 7,
    src: "/assets/portfolio/three.png",
    demo: "https://brian-3js-3d.netlify.app/",
    title: "3D Portfolio",
    description: "Interactive 3D portfolio built with Three.js.",
    tags: ["Three.js", "3D", "Interactive"],
  },
  {
    id: 8,
    src: "/assets/portfolio/bkinctube.png",
    demo: "https://bkcodetube.netlify.app/",
    title: "BK Code Tube",
    description: "Video platform utilizing React Router and YouTube API integration.",
    tags: ["React Router", "YouTube API", "Video"],
  },
];

const ProjectCard = ({ src, demo, title, description, tags, index }) => (
  <MotionWrapper delay={index * 0.1}>
    <div className="relative group">
      {/* Background gradient with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 rounded-2xl transform transition-all duration-500 group-hover:scale-[1.02]"></div>
      
      {/* Border gradient */}
      <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-gray-600/30 via-gray-500/20 to-gray-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content container */}
      <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-900/95 to-black/90 rounded-2xl p-6 backdrop-blur-sm">
        {/* Image container with 3D effect */}
        <div className="relative image-container mb-3 aspect-[16/9] w-full overflow-hidden rounded-xl">
          <Image
            src={src}
            alt={title}
            width={400}
            height={225}
            className="absolute inset-0 w-full h-full object-contain transform transition duration-500 group-hover:scale-[1.02]"
            style={{ objectPosition: 'center top' }}
          />
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 text-sm">
          {description}
        </p>

        {/* Animated skill tags above the button */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-gray-800/80 to-gray-900/80 border border-gray-700/50 text-gray-300"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Title with gradient text */}
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>

        {/* Demo link with gradient border */}
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-4 py-2 rounded-lg
                   bg-gradient-to-r from-gray-800/80 to-gray-900/80
                   border border-gray-700/50
                   text-gray-300 hover:text-white
                   transition-all duration-300
                   hover:from-gray-700/80 hover:to-gray-800/80
                   hover:border-gray-600/50
                   hover:shadow-[0_0_15px_rgba(0,0,0,0.3)]"
        >
          View Demo
        </a>
      </div>
    </div>
  </MotionWrapper>
);

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });

    // Prevent horizontal scroll on mobile
    const preventHorizontalScroll = (e) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        const startX = touch.clientX;
        const startY = touch.clientY;
        
        const handleTouchMove = (e) => {
          const touch = e.touches[0];
          const deltaX = touch.clientX - startX;
          const deltaY = touch.clientY - startY;
          
          // If horizontal movement is greater than vertical, prevent default
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            e.preventDefault();
          }
        };
        
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', () => {
          document.removeEventListener('touchmove', handleTouchMove);
        }, { once: true });
      }
    };
    
    document.addEventListener('touchstart', preventHorizontalScroll, { passive: false });
    
    return () => {
      document.removeEventListener('touchstart', preventHorizontalScroll);
    };
  }, []);

  return (
    <section
      name="portfolio"
      className="relative w-full min-h-screen bg-gradient-to-b from-gray-800 to-black py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden"
    >
      {/* Background Blur Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-cyan-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/95 to-black/95 backdrop-blur-[1px]"></div>

      <div className="relative max-w-screen-2xl mx-auto">
        <div 
          className="text-center mb-16 backdrop-blur-sm bg-gray-900/30 p-6 rounded-2xl
                     border border-gray-700/30"
          data-aos="fade-down"
        >
          <h1 className="text-4xl font-bold inline-block text-white border-b-4 border-cyan-500">
            Portfolio
          </h1>
          <p 
            className="text-gray-100 mt-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            A showcase of my recent work and projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
