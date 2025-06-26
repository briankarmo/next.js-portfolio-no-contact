import React, { useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";

const GradientTech = ({ children }) => (
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">{children}</span>
);
const GradientKeyword = ({ children }) => (
  <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-white bg-clip-text text-transparent font-semibold">{children}</span>
);

const Home = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });

    // Prevent scroll on refresh
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    // Cleanup function
    return () => {
      window.history.scrollRestoration = 'auto';
    };
  }, []);

  const categories = [
    {
      title: <GradientTech>Development</GradientTech>,
      items: [
        <><GradientKeyword>Full-Stack</GradientKeyword> Web Development</>,
        <><GradientKeyword>Mobile-First</GradientKeyword> Responsive Design</>,
        <><GradientKeyword>Cross-Platform</GradientKeyword> Compatibility</>,
        <><GradientKeyword>Performance</GradientKeyword> Optimization</>
      ]
    },
    {
      title: <GradientTech>Technical</GradientTech>,
      items: [
        <><GradientKeyword>Modern Framework</GradientKeyword> Implementation</>,
        <><GradientTech>API</GradientTech> Integration & Development</>,
        <><GradientKeyword>Database</GradientKeyword> Architecture</>,
        <><GradientKeyword>Cloud Services</GradientKeyword> Management</>
      ]
    },
    {
      title: <GradientTech>Professional</GradientTech>,
      items: [
        <><GradientKeyword>Project Management</GradientKeyword></>,
        <><GradientKeyword>Technical Documentation</GradientKeyword></>,
        <><GradientKeyword>Team Collaboration</GradientKeyword></>,
        <><GradientKeyword>Problem-Solving</GradientKeyword></>
      ]
    }
  ];

  return (
    <motion.section 
      id="home" 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 50,
        damping: 15
      }}
      className="relative min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 flex flex-col items-start overflow-hidden pt-8 sm:pt-12 pb-0"
    >
      {/* Background Blur Effects */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 via-gray-900/95 to-black/90"></div>
        

        
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/80 via-gray-900/90 to-black/95"></div>
        
        {/* Ambient light effect */}
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gray-700/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gray-700/10 rounded-full blur-[120px]"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/95 via-gray-900/90 to-black/95 backdrop-blur-[1px]"></div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-2 sm:mt-4 mb-0">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="order-2 lg:order-1 flex-1 text-center lg:text-left"
          >
            <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="w-full backdrop-blur-sm bg-gray-900/30 p-3 sm:p-4 rounded-2xl"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-signature font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent whitespace-normal">
                  Brian
                </h1>
                <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-500 via-blue-500 to-white bg-clip-text text-transparent">
                  Full-Stack Software Engineer
                </h2>
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="order-1 lg:order-2 flex-1 flex justify-center items-center"
          >
            <div className="relative group image-container">
              {/* 3D Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 rounded-2xl transform transition-all duration-500 group-hover:scale-[1.02]"></div>
              
              {/* Subtle Border Gradient */}
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-gray-600/30 via-gray-500/20 to-gray-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image container */}
              <div className="relative block w-full max-w-md lg:max-w-lg">
                <img
                  src="/assets/heroimage.png"
                  alt="Hero"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-2xl transform transition duration-500 hover:scale-[1.02] relative z-10"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    // Fallback to alternative image if main one fails
                    if (e.target.src !== '/assets/heroImage.png') {
                      e.target.src = '/assets/heroImage.png';
                    }
                  }}
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'translateZ(0)',
                    WebkitTransform: 'translateZ(0)',
                    maxWidth: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px 0px -200px 0px" }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px 0px -150px 0px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="backdrop-blur-sm bg-gray-900/30 p-4 sm:p-6 rounded-2xl h-full flex flex-col"
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center">{category.title}</h3>
              <div className="flex-1 flex justify-center">
                <ul className="space-y-2 sm:space-y-3 w-full max-w-xs">
                  {category.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-10px 0px -50px 0px" }}
                      transition={{ 
                        duration: 0.4,
                        delay: (index * 0.2) + (itemIndex * 0.1),
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="flex items-start text-gray-300 text-sm sm:text-base lg:text-lg"
                    >
                      <span className="mr-3 flex-shrink-0 mt-1">
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full inline-block"></span>
                      </span>
                      <span className="leading-relaxed text-left flex-1">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px 0px -100px 0px" }}
          transition={{ 
            duration: 0.8,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-center mt-16 sm:mt-20"
        >
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group flex items-center text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 my-2 mx-auto rounded-md cursor-pointer capitalize font-medium w-fit hover:scale-105 duration-200 transition-all"
          >
            <GradientKeyword>View Portfolio</GradientKeyword>
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;