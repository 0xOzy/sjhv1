import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import NeonButton from "@/components/NeonButton";
// Import SVG as a URL
import animeCharacterSvg from "@/assets/anime-character-new.svg";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-cyberpunk-black">
      {/* Overlay for binary background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyberpunk-black via-cyberpunk-blue/40 to-cyberpunk-black z-0"></div>
      
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-neon-blue text-xl mb-2 font-mono">// INTRODUCING</h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display text-white">
              <div className="w-full inline-block" style={{ maxWidth: "100%", overflow: "hidden" }}>
                <BinaryText className="inline-block">Shojo:</BinaryText>
              </div>
              <div className="mt-2 w-full" style={{ maxWidth: "100%", overflow: "hidden" }}>
                <BinaryText className="block text-neon-blue whitespace-normal break-words">
                  The future of intelligence and secure AI collaboration.
                </BinaryText>
              </div>
            </h1>
            <p className="text-foreground mb-8 text-lg font-mono leading-relaxed">
              Shojo is an AI Research Lab & Community developing Shojo AI Agent, an AI system powered by 
              Cognitive Intelligence, capable of analyzing crypto markets, financial sectors, and various domains 
              in a flexible, natural, and intelligent manner. Shojo also provides a chat room-based community platform, 
              enabling structured discussions with customizable access settings while ensuring user anonymity.
            </p>
            <div className="flex flex-wrap gap-4">
              <NeonButton href="#get-started" primary comingSoon>
                Get Started
              </NeonButton>
              <NeonButton href="#about">
                Learn More
              </NeonButton>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 relative animate-float"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Anime character image */}
            <div className="rounded-lg shadow-neon-purple overflow-hidden relative">
              {/* Using SVG image from assets directory */}
              <img 
                src={animeCharacterSvg} 
                alt="Shojo Anime Character" 
                className="w-full h-auto"
              />
              
              {/* Futuristic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyberpunk-blue/70 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-cyberpunk-black/70 backdrop-blur-sm border border-neon-blue/30 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-neon-blue font-mono text-xs">SHOJO.AI</span>
                    <h3 className="text-white font-display">AI Protocol v2.04</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-neon-blue font-mono text-sm">
                      ONLINE<span className="cursor-blink">|</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
