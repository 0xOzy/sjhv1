import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import BinaryText from "./BinaryText";
import NeonButton from "./NeonButton";
import ShojoLogo from "./ShojoLogo";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === "/";
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <motion.nav 
      className={`sticky top-0 z-50 backdrop-blur-md border-b border-neon-blue/30 transition-all duration-300 ${
        isScrolled ? "bg-cyberpunk-black/80" : "bg-cyberpunk-black/50"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <ShojoLogo />
            </a>
          </div>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {!isHomePage && (
              <a href="/" className="font-mono text-white hover:text-neon-blue transition-colors">
                <BinaryText>Home</BinaryText>
              </a>
            )}
            {isHomePage ? (
              <>
                <a href="#about" className="font-mono text-white hover:text-neon-blue transition-colors">
                  <BinaryText>About</BinaryText>
                </a>
                <a href="#features" className="font-mono text-white hover:text-neon-blue transition-colors">
                  <BinaryText>Features</BinaryText>
                </a>
                <a href="#stats" className="font-mono text-white hover:text-neon-blue transition-colors">
                  <BinaryText>Stats</BinaryText>
                </a>
                <a href="#roadmap" className="font-mono text-white hover:text-neon-blue transition-colors">
                  <BinaryText>Roadmap</BinaryText>
                </a>
                <a href="#token" className="font-mono text-white hover:text-neon-blue transition-colors">
                  <BinaryText>Token</BinaryText>
                </a>
              </>
            ) : (
              <>
                <a href="/about-us" className="font-mono text-white hover:text-neon-blue transition-colors">
                  <BinaryText>About Us</BinaryText>
                </a>
              </>
            )}
          </div>
          
          {/* CTA Button */}
          <NeonButton href={isHomePage ? "#get-started" : "/#get-started"} primary className="hidden md:inline-block">
            Get Started
          </NeonButton>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-cyberpunk-black/95 backdrop-blur-md border-b border-neon-blue/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {!isHomePage && (
                  <a 
                    href="/" 
                    className="font-mono text-white hover:text-neon-blue transition-colors py-2"
                    onClick={closeMobileMenu}
                  >
                    <BinaryText>Home</BinaryText>
                  </a>
                )}
                {isHomePage ? (
                  <>
                    <a 
                      href="#about" 
                      className="font-mono text-white hover:text-neon-blue transition-colors py-2"
                      onClick={closeMobileMenu}
                    >
                      <BinaryText>About</BinaryText>
                    </a>
                    <a 
                      href="#features" 
                      className="font-mono text-white hover:text-neon-blue transition-colors py-2"
                      onClick={closeMobileMenu}
                    >
                      <BinaryText>Features</BinaryText>
                    </a>
                    <a 
                      href="#stats" 
                      className="font-mono text-white hover:text-neon-blue transition-colors py-2"
                      onClick={closeMobileMenu}
                    >
                      <BinaryText>Stats</BinaryText>
                    </a>
                    <a 
                      href="#roadmap" 
                      className="font-mono text-white hover:text-neon-blue transition-colors py-2"
                      onClick={closeMobileMenu}
                    >
                      <BinaryText>Roadmap</BinaryText>
                    </a>
                    <a 
                      href="#token" 
                      className="font-mono text-white hover:text-neon-blue transition-colors py-2"
                      onClick={closeMobileMenu}
                    >
                      <BinaryText>Token</BinaryText>
                    </a>
                  </>
                ) : (
                  <>
                    <a 
                      href="/about-us" 
                      className="font-mono text-white hover:text-neon-blue transition-colors py-2"
                      onClick={closeMobileMenu}
                    >
                      <BinaryText>About Us</BinaryText>
                    </a>
                  </>
                )}
                <NeonButton 
                  href={isHomePage ? "#get-started" : "/#get-started"} 
                  primary 
                  className="w-full text-center mt-4"
                  onClick={closeMobileMenu}
                >
                  Get Started
                </NeonButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
