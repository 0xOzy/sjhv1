import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import TerminalWindow from "@/components/TerminalWindow";
import NavBar from "@/components/NavBar";
import Footer from "@/sections/Footer";
import BinaryBackground from "@/components/BinaryBackground";
import CyberpunkCard from "@/components/CyberpunkCard";

export default function Security() {
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              <BinaryText className="text-white">Security </BinaryText>
              <BinaryText className="text-neon-blue">Measures</BinaryText>
            </h1>
            <div className="w-24 h-1 bg-neon-blue mx-auto my-4"></div>
            <p className="text-foreground max-w-2xl mx-auto font-mono">
              How we protect the Shojo AI Research Lab platform and your data with advanced security measures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <TerminalWindow title="security_overview.sh" showTime>
                <p className="text-neon-blue mb-2">$ <span className="text-foreground">shojo --research-platform-security</span></p>
                <p className="text-foreground mb-4">Loading Shojo AI Research Lab security architecture details...</p>
                <p className="text-success mb-4">Security overview initialized.</p>
                
                <div className="mb-6">
                  <p className="text-foreground mb-2">// CORE SECURITY ARCHITECTURE</p>
                  <p className="mb-1">
                    <span className="text-neon-purple">Encryption Standard:</span> 
                    <span className="text-foreground">Military-grade quantum-resistant encryption</span>
                  </p>
                  <p className="mb-1">
                    <span className="text-neon-purple">Authentication:</span> 
                    <span className="text-foreground">Multi-factor with biometric options</span>
                  </p>
                  <p className="mb-1">
                    <span className="text-neon-purple">Network Security:</span> 
                    <span className="text-foreground">Distributed architecture with no single point of failure</span>
                  </p>
                  <p className="mb-1">
                    <span className="text-neon-purple">Threat Monitoring:</span> 
                    <span className="text-foreground">AI-powered 24/7 real-time analytics</span>
                  </p>
                </div>
                
                <div className="mb-6">
                  <p className="text-foreground mb-2">// KEY SECURITY FEATURES</p>
                  <p className="mb-1">
                    <span className="text-neon-purple">Self-Healing System:</span> 
                    <span className="text-foreground">Automatic detection and repair of security vulnerabilities in research infrastructure</span>
                  </p>
                  <p className="mb-1">
                    <span className="text-neon-purple">Adaptive Defense:</span> 
                    <span className="text-foreground">AI-based pattern recognition that evolves to counter new threats to research data</span>
                  </p>
                  <p className="mb-1">
                    <span className="text-neon-purple">Secure Compute Layer:</span> 
                    <span className="text-foreground">All AI models run in isolated environments with access controls</span>
                  </p>
                  <p className="mb-1">
                    <span className="text-neon-purple">Zero-Knowledge Processing:</span> 
                    <span className="text-foreground">Training on sensitive data without exposing individual records</span>
                  </p>
                </div>
                
                <div className="mb-6">
                  <p className="text-foreground mb-2">// COMPLIANCE & AUDITING</p>
                  <p className="mb-1">
                    <span className="text-neon-purple">Security Audits:</span> 
                    <span className="text-foreground">Regular third-party penetration testing and code audits</span>
                  </p>
                  <p className="mb-1">
                    <span className="text-neon-purple">Compliance Framework:</span> 
                    <span className="text-foreground">ISO 27001, SOC 2, GDPR, HIPAA, and AI Ethics standards compliant</span>
                  </p>
                  <p className="mb-1">
                    <span className="text-neon-purple">Research Ethics Oversight:</span> 
                    <span className="text-foreground">Independent ethics committee reviews all research activities</span>
                  </p>
                  <p className="mb-1">
                    <span className="text-neon-purple">Bug Bounty Program:</span> 
                    <span className="text-foreground">Active rewards for responsible disclosure of security vulnerabilities</span>
                  </p>
                </div>
                
                <p className="text-neon-blue mt-6">$ <span className="cursor-blink text-foreground"></span></p>
              </TerminalWindow>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CyberpunkCard className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="p-2 bg-neon-blue/20 rounded-lg mr-4 text-neon-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 font-display">
                        <BinaryText>AI-Powered Threat Detection</BinaryText>
                      </h3>
                      <p className="text-foreground/80 font-mono text-sm">
                        Our advanced neural networks monitor research platform activities in real-time, identifying and neutralizing potential security threats before they can impact sensitive AI experiments or data.
                      </p>
                    </div>
                  </div>
                </CyberpunkCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <CyberpunkCard className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="p-2 bg-neon-blue/20 rounded-lg mr-4 text-neon-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 font-display">
                        <BinaryText>Quantum-Resistant Encryption</BinaryText>
                      </h3>
                      <p className="text-foreground/80 font-mono text-sm">
                        Future-proof security using post-quantum cryptographic algorithms to protect our research data, AI models, and intellectual property from both current and next-generation computational threats.
                      </p>
                    </div>
                  </div>
                </CyberpunkCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <CyberpunkCard className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="p-2 bg-neon-blue/20 rounded-lg mr-4 text-neon-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 font-display">
                        <BinaryText>Secure Multi-Node Architecture</BinaryText>
                      </h3>
                      <p className="text-foreground/80 font-mono text-sm">
                        Our distributed research computing infrastructure ensures redundancy and security isn't dependent on a single point of control, protecting AI experiments and models from targeted attacks.
                      </p>
                    </div>
                  </div>
                </CyberpunkCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <CyberpunkCard className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="p-2 bg-neon-blue/20 rounded-lg mr-4 text-neon-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 font-display">
                        <BinaryText>AI-Driven Security Evolution</BinaryText>
                      </h3>
                      <p className="text-foreground/80 font-mono text-sm">
                        Our self-evolving security protocols use AI to continuously learn from global threat patterns and automatically deploy countermeasures without disrupting ongoing research or experiments.
                      </p>
                    </div>
                  </div>
                </CyberpunkCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
}