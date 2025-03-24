import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import TerminalWindow from "@/components/TerminalWindow";
import CyberpunkCard from "@/components/CyberpunkCard";
import NavBar from "@/components/NavBar";
import Footer from "@/sections/Footer";
import alexAvatar from "@/assets/team-alex.svg";
import miaAvatar from "@/assets/team-mia.svg";
import rayAvatar from "@/assets/team-ray.svg";

export default function AboutUs() {
  return (
    <div className="bg-cyberpunk-black min-h-screen">
      <NavBar />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <BinaryText>About Shojo</BinaryText>
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto font-mono">
            An AI Research Lab &amp; Crypto Community Platform focused on market intelligence and secure discussions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CyberpunkCard className="h-full">
              <h2 className="text-2xl font-display mb-4 text-neon-blue">Our Mission</h2>
              <div className="space-y-4 font-mono">
                <p>
                  Shojo was founded with a clear mission: to create an AI research lab focused on developing intelligent crypto market 
                  analysis tools and a secure, anonymous blockchain-based community platform.
                </p>
                <p>
                  We believe in a future where AI-powered market intelligence is accessible to everyone through a secure, decentralized 
                  platform that maintains the core values of privacy, transparency, and community ownership.
                </p>
              </div>
            </CyberpunkCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CyberpunkCard className="h-full">
              <h2 className="text-2xl font-display mb-4 text-neon-blue">Our Vision</h2>
              <div className="space-y-4 font-mono">
                <p>
                  We envision a world where sophisticated AI market analysis and secure community discussions are accessible to everyone.
                  Our goal is to create a platform that bridges the gap between cutting-edge AI technology and crypto market participants.
                </p>
                <p>
                  Through innovation and dedication to quality, we aim to establish Shojo as the premier platform for crypto intelligence
                  and secure community collaboration - one that values both analytical accuracy and user privacy.
                </p>
              </div>
            </CyberpunkCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <TerminalWindow title="Our Values" className="w-full">
            <div className="space-y-6">
              <div>
                <h3 className="text-neon-blue font-mono text-lg">$ ./value --intelligence</h3>
                <p className="text-foreground/80 pl-4 border-l border-neon-blue/30 mt-2">
                  Intelligence is at our core. We constantly push the boundaries of what's possible in AI market analysis,
                  exploring cognitive models to process market data and extract meaningful insights.
                </p>
              </div>
              
              <div>
                <h3 className="text-neon-blue font-mono text-lg">$ ./value --privacy</h3>
                <p className="text-foreground/80 pl-4 border-l border-neon-blue/30 mt-2">
                  We believe user privacy is non-negotiable. Our platform is designed with decentralized identity (DID) 
                  and end-to-end encryption to ensure anonymous and secure participation in our community.
                </p>
              </div>
              
              <div>
                <h3 className="text-neon-blue font-mono text-lg">$ ./value --accuracy</h3>
                <p className="text-foreground/80 pl-4 border-l border-neon-blue/30 mt-2">
                  Accuracy in our AI research and market analysis is fundamental to building trust. Our algorithms are continuously 
                  refined to provide the most reliable signals and insights in a transparent, verifiable way.
                </p>
              </div>
              
              <div>
                <h3 className="text-neon-blue font-mono text-lg">$ ./value --community</h3>
                <p className="text-foreground/80 pl-4 border-l border-neon-blue/30 mt-2">
                  We're building for and with our community. Members can participate pseudonymously in research discussions,
                  contribute to intelligence databases, and share alpha insights through secure channels.
                </p>
              </div>
            </div>
          </TerminalWindow>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-cyberpunk-black via-neon-blue/20 to-cyberpunk-black p-8 rounded-lg border border-neon-blue/30">
            <h2 className="text-2xl font-display mb-6 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-cyberpunk-black/50 rounded-full border-2 border-neon-blue/50 flex items-center justify-center overflow-hidden">
                  <img src={alexAvatar} alt="Alex Satoshi" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-white font-display">Svz404</h3>
                <p className="text-foreground/70 font-mono text-sm">Founder & Research Director</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-cyberpunk-black/50 rounded-full border-2 border-purple-400/50 flex items-center justify-center overflow-hidden">
                  <img src={miaAvatar} alt="Mia Kusanagi" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-white font-display">Mia Kusanagi</h3>
                <p className="text-foreground/70 font-mono text-sm">AI Research Lead</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-cyberpunk-black/50 rounded-full border-2 border-neon-blue/50 flex items-center justify-center overflow-hidden">
                  <img src={rayAvatar} alt="Ray Takemoto" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-white font-display">Jacobuc</h3>
                <p className="text-foreground/70 font-mono text-sm">Cryptography & Privacy Lead</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}