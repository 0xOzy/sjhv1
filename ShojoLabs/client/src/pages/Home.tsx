import { useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import BinaryBackground from "@/components/BinaryBackground";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Features from "@/sections/Features";
import Stats from "@/sections/Stats";
import Roadmap from "@/sections/Roadmap";
import Token from "@/sections/Token";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";

export default function Home() {
  // Smooth scroll for hash navigation
  useEffect(() => {
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const link = target as HTMLAnchorElement;
        const href = link.getAttribute('href');
        
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Offset for fixed header
              behavior: 'smooth'
            });
            
            // Update URL without page reload
            window.history.pushState(null, '', href);
          }
        }
      }
    };
    
    document.addEventListener('click', handleHashLinkClick);
    return () => document.removeEventListener('click', handleHashLinkClick);
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BinaryBackground />
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Stats />
      <Roadmap />
      <Token />
      <CTA />
      <Footer />
    </motion.div>
  );
}
