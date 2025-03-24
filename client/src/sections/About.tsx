import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import TerminalWindow from "@/components/TerminalWindow";
import CyberpunkCard from "@/components/CyberpunkCard";

export default function About() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };
  
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-cyberpunk-blue">
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display inline-block">
            <BinaryText className="text-white">What is </BinaryText>
            <BinaryText className="text-neon-blue">Shojo?</BinaryText>
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto my-4"></div>
          <p className="text-foreground max-w-2xl mx-auto font-mono">
            More than just an AI Research Lab building AI that truly understands context
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
            variants={fadeInVariants}
          >
            <TerminalWindow title="about.shojo">
              <p className="text-neon-blue mb-2">$ <span className="text-foreground">info --about Shojo</span></p>
              <p className="text-foreground mb-4">
                <span className="text-neon-purple">Shojo</span> is more than just an <span className="text-neon-blue">AI Research Lab</span>. We build AI that truly understands context, beyond mere pattern recognition, developing agents that can analyze complex markets and scenarios.
              </p>
              <p className="text-neon-blue mb-2">$ <span className="text-foreground">cat our_approach.txt</span></p>
              <p className="text-foreground mb-1">// OUR APPROACH:</p>
              <ul className="list-disc list-inside mb-4 pl-4">
                <li className="mb-1"><span className="text-neon-blue">Cognitive AI:</span> AI models that adapt and interpret naturally, beyond statistical analysis</li>
                <li className="mb-1"><span className="text-neon-blue">Anonymous & Decentralized:</span> Utilizing DID (Decentralized Identity) for enhanced data security</li>
                <li className="mb-1"><span className="text-neon-blue">Solana-Based:</span> Leveraging Solana's speed and scalability for Shojo AI & its community</li>
                <li className="mb-1"><span className="text-neon-blue">Flexible & Open Community:</span> Anyone can create their own discussion community within Shojo</li>
              </ul>
              <p className="text-neon-blue mb-2">$ <span className="text-foreground">run founder_vision.sh</span></p>
              <p className="text-foreground mb-4">
                Developed by a team of AI researchers and crypto market analysts, Shojo 
                represents a fundamental new approach to AI development with a focus on 
                market intelligence. Our vision is to create an AI that can truly understand 
                financial markets while providing a secure, anonymous community platform.
              </p>
              <p className="text-neon-blue">$ <span className="cursor-blink text-foreground"></span></p>
            </TerminalWindow>
          </motion.div>

          <div className="flex flex-col space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={2}
              variants={fadeInVariants}
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
                      <BinaryText>Cognitive AI</BinaryText>
                    </h3>
                    <p className="text-foreground/80 font-mono text-sm">
                      AI models that adapt and interpret naturally, beyond statistical analysis
                    </p>
                  </div>
                </div>
              </CyberpunkCard>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={3}
              variants={fadeInVariants}
            >
              <CyberpunkCard className="p-6">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-neon-blue/20 rounded-lg mr-4 text-neon-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 font-display">
                      <BinaryText>Decentralized Identity</BinaryText>
                    </h3>
                    <p className="text-foreground/80 font-mono text-sm">
                      Utilizing DID for enhanced data security and user anonymity in our blockchain-based community
                    </p>
                  </div>
                </div>
              </CyberpunkCard>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={4}
              variants={fadeInVariants}
            >
              <CyberpunkCard className="p-6">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-neon-blue/20 rounded-lg mr-4 text-neon-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 font-display">
                      <BinaryText>Solana-Based Platform</BinaryText>
                    </h3>
                    <p className="text-foreground/80 font-mono text-sm">
                      Leveraging Solana's speed and scalability for Shojo AI & its community infrastructure
                    </p>
                  </div>
                </div>
              </CyberpunkCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
