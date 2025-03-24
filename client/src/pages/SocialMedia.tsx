import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import TerminalWindow from "@/components/TerminalWindow";
import CyberpunkCard from "@/components/CyberpunkCard";
import NavBar from "@/components/NavBar";
import Footer from "@/sections/Footer";
import BinaryBackground from "@/components/BinaryBackground";

// Import the SVG images
import shojoAiPromo from "@/assets/social_media/shojo_ai_promo.svg";
import shojoChatCommunity from "@/assets/social_media/shojo_chat_community.svg";
import shojoAiMeme from "@/assets/social_media/shojo_ai_meme.svg";
import shojoCryptoMeme from "@/assets/social_media/shojo_crypto_meme.svg";

export default function SocialMedia() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BinaryBackground />
      <NavBar />
      
      <section className="py-20 relative bg-cyberpunk-black min-h-screen">
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              <BinaryText className="text-white">Social Media </BinaryText>
              <BinaryText className="text-neon-blue">Assets</BinaryText>
            </h1>
            <div className="w-24 h-1 bg-neon-blue mx-auto my-4"></div>
            <p className="text-foreground max-w-2xl mx-auto">
              Promotional images and memes for Shojo AI and the Chat Community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-16">
            {/* Promotional Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <TerminalWindow title="shojo_ai_promo.svg">
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-neon-blue mb-2">Shojo AI Promotional Image</h2>
                  <p className="text-foreground mb-4">Perfect for Twitter/X posts about the Shojo AI Research Lab</p>
                </div>
                <div className="bg-cyberpunk-black/50 border border-neon-blue/20 rounded-lg p-4 overflow-hidden">
                  <img src={shojoAiPromo} alt="Shojo AI Promotional Image" className="w-full h-auto rounded" />
                </div>
              </TerminalWindow>
            </motion.div>

            {/* Chat Community Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <TerminalWindow title="shojo_chat_community.svg">
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-neon-blue mb-2">Shojo Chat Community Image</h2>
                  <p className="text-foreground mb-4">Highlighting the community aspects and upcoming events</p>
                </div>
                <div className="bg-cyberpunk-black/50 border border-neon-blue/20 rounded-lg p-4 overflow-hidden">
                  <img src={shojoChatCommunity} alt="Shojo Chat Community Image" className="w-full h-auto rounded" />
                </div>
              </TerminalWindow>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Meme 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <CyberpunkCard className="p-6">
                  <h3 className="text-xl font-bold mb-4 font-display text-white">
                    <BinaryText>Anime AI Meme</BinaryText>
                  </h3>
                  <div className="bg-cyberpunk-black/50 border border-neon-blue/20 rounded-lg p-4 overflow-hidden">
                    <img src={shojoAiMeme} alt="Shojo AI Meme" className="w-full h-auto rounded" />
                  </div>
                  <p className="text-foreground mt-4 text-sm">
                    When traditional AI meets anime aesthetics...
                  </p>
                </CyberpunkCard>
              </motion.div>

              {/* Meme 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <CyberpunkCard className="p-6">
                  <h3 className="text-xl font-bold mb-4 font-display text-white">
                    <BinaryText>Crypto Meme</BinaryText>
                  </h3>
                  <div className="bg-cyberpunk-black/50 border border-neon-blue/20 rounded-lg p-4 overflow-hidden">
                    <img src={shojoCryptoMeme} alt="Shojo Crypto Meme" className="w-full h-auto rounded" />
                  </div>
                  <p className="text-foreground mt-4 text-sm">
                    When you ask Shojo AI for crypto advice...
                  </p>
                </CyberpunkCard>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center"
            >
              <p className="text-foreground max-w-2xl mx-auto">
                These images are designed for social media promotion of the Shojo AI Research Lab and Community.
                They maintain the cyberpunk aesthetic while conveying key information about the project.
              </p>
              <div className="flex justify-center mt-8">
                <a 
                  href="https://github.com/ShojoCo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-neon-blue text-neon-blue rounded-md hover:bg-neon-blue/10 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Visit our GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
}