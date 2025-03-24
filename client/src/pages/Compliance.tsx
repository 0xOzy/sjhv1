import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import TerminalWindow from "@/components/TerminalWindow";
import CyberpunkCard from "@/components/CyberpunkCard";
import NavBar from "@/components/NavBar";
import Footer from "@/sections/Footer";
import BinaryBackground from "@/components/BinaryBackground";

export default function Compliance() {
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
              <BinaryText className="text-white">Regulatory </BinaryText>
              <BinaryText className="text-neon-blue">Compliance</BinaryText>
            </h1>
            <div className="w-24 h-1 bg-neon-blue mx-auto my-4"></div>
            <p className="text-foreground max-w-2xl mx-auto font-mono">
              How Shojo AI Research Lab upholds ethical standards and adheres to global AI regulatory frameworks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <TerminalWindow title="compliance_overview.sh" showTime>
                <p className="text-neon-blue mb-2">$ <span className="text-foreground">shojo --ai-ethics-compliance</span></p>
                <p className="text-foreground mb-4">Loading Shojo AI Research Lab compliance framework information...</p>
                <p className="text-success mb-4">Compliance report generated successfully.</p>
                
                <div className="mb-6">
                  <p className="text-foreground mb-2">// REGULATORY COMPLIANCE OVERVIEW</p>
                  <p className="mb-3">
                    The Shojo AI Research Lab is designed with ethics and compliance at its core, ensuring adherence to global AI regulatory standards and ethical guidelines. Our research framework incorporates responsible AI principles, data privacy safeguards, and transparent reporting mechanisms to maintain the highest standards of scientific and ethical integrity.
                  </p>
                </div>
                
                <div className="mb-6">
                  <p className="text-foreground mb-2">// AI ETHICS AND COMPLIANCE STANDARDS</p>
                  <table className="w-full border-collapse text-sm mb-3">
                    <thead>
                      <tr>
                        <th className="text-left py-2 text-neon-purple">Standard</th>
                        <th className="text-left py-2 text-neon-purple">Status</th>
                        <th className="text-left py-2 text-neon-purple">Last Audit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-foreground/20">
                        <td className="py-2">ISO 27001 (Information Security)</td>
                        <td className="py-2 text-success">Certified</td>
                        <td className="py-2">Q1 2025</td>
                      </tr>
                      <tr className="border-t border-foreground/20">
                        <td className="py-2">EU AI Act Compliance</td>
                        <td className="py-2 text-success">Full Compliance</td>
                        <td className="py-2">Q1 2025</td>
                      </tr>
                      <tr className="border-t border-foreground/20">
                        <td className="py-2">GDPR (EU Data Protection)</td>
                        <td className="py-2 text-success">Compliant</td>
                        <td className="py-2">Q4 2024</td>
                      </tr>
                      <tr className="border-t border-foreground/20">
                        <td className="py-2">IEEE 7000 (AI Ethics)</td>
                        <td className="py-2 text-success">Certified</td>
                        <td className="py-2">Q4 2024</td>
                      </tr>
                      <tr className="border-t border-foreground/20">
                        <td className="py-2">HIPAA (Healthcare AI Applications)</td>
                        <td className="py-2 text-success">Compliant</td>
                        <td className="py-2">Q1 2025</td>
                      </tr>
                      <tr className="border-t border-foreground/20">
                        <td className="py-2">NIST AI Risk Management Framework</td>
                        <td className="py-2 text-success">Implemented</td>
                        <td className="py-2">Q1 2025</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mb-6">
                  <p className="text-foreground mb-2">// AI ETHICS FRAMEWORK</p>
                  <p className="mb-1">Shojo AI Research Lab's ethical approach is built on five core principles:</p>
                  <ul className="list-disc list-inside pl-4 space-y-1 mb-3">
                    <li><span className="text-neon-purple">Responsible AI Development:</span> All research undergoes ethical review before, during, and after completion</li>
                    <li><span className="text-neon-purple">Data Privacy & Sovereignty:</span> Strict controls over data usage with transparent opt-in policies</li>
                    <li><span className="text-neon-purple">Bias Detection & Mitigation:</span> Continuous monitoring and correction of algorithmic biases</li>
                    <li><span className="text-neon-purple">Human-Centered Design:</span> AI systems designed to augment human capabilities, not replace human judgment</li>
                    <li><span className="text-neon-purple">Transparent Reporting:</span> Regular public disclosures of research impacts and ethical considerations</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-foreground mb-2">// ONGOING AI RESEARCH GOVERNANCE</p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>Independent ethics board review of all research initiatives</li>
                    <li>Quarterly third-party AI safety and security audits</li>
                    <li>Continuous monitoring of global AI regulatory developments</li>
                    <li>Advanced model risk assessment and limitation frameworks</li>
                    <li>Regular ethics and compliance training for all research staff</li>
                    <li>Active participation in global AI ethics and safety working groups</li>
                  </ul>
                </div>
                
                <p className="text-neon-blue mt-6">$ <span className="cursor-blink text-foreground"></span></p>
              </TerminalWindow>
            </motion.div>

            <div className="space-y-6 lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CyberpunkCard className="p-6">
                  <h3 className="text-xl font-bold mb-3 font-display text-white">
                    <BinaryText>AI Ethics Resources</BinaryText>
                  </h3>
                  <ul className="space-y-3 text-foreground/80 font-mono text-sm">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Certification Documents
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Ethics Board Reports
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Research Whitepapers
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Model Cards & Documentation
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Transparency Reports
                    </li>
                  </ul>
                </CyberpunkCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <CyberpunkCard className="p-6">
                  <h3 className="text-xl font-bold mb-3 font-display text-white">
                    <BinaryText>Ethics & Compliance Team</BinaryText>
                  </h3>
                  <p className="text-foreground/80 font-mono text-sm mb-4">
                    For specific AI ethics inquiries, compliance questions, or to request detailed documentation about our ethical frameworks, please contact our dedicated team.
                  </p>
                  <p className="text-neon-blue font-mono text-sm">ethics@shojo.ai</p>
                </CyberpunkCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <CyberpunkCard className="p-6">
                  <h3 className="text-xl font-bold mb-3 font-display text-white">
                    <BinaryText>Responsible AI Reporting</BinaryText>
                  </h3>
                  <p className="text-foreground/80 font-mono text-sm mb-4">
                    If you identify potential AI safety concerns, ethics issues, or have suggestions for improving our research governance, we encourage you to report them through our secure channel.
                  </p>
                  <div className="bg-neon-blue/10 p-3 rounded border border-neon-blue/30">
                    <p className="text-foreground/80 font-mono text-xs">
                      All reports are confidential and help us improve our AI safety and ethics frameworks. We offer a reporting bounty program for significant findings.
                    </p>
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