import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import TerminalWindow from "@/components/TerminalWindow";
import NavBar from "@/components/NavBar";
import Footer from "@/sections/Footer";
import BinaryBackground from "@/components/BinaryBackground";

export default function PrivacyPolicy() {
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
              <BinaryText className="text-white">Privacy </BinaryText>
              <BinaryText className="text-neon-blue">Policy</BinaryText>
            </h1>
            <div className="w-24 h-1 bg-neon-blue mx-auto my-4"></div>
            <p className="text-foreground max-w-2xl mx-auto font-mono">
              How we protect your privacy and data as part of our AI Research Lab &amp; Community Platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TerminalWindow title="privacy_policy.sh" showTime>
              <p className="text-neon-blue mb-2">$ <span className="text-foreground">cat privacy_policy.md</span></p>
              
              <div className="space-y-6 text-foreground font-mono">
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">1. Introduction</h2>
                  <p>Shojo ("we", "our", or "us") is committed to protecting the privacy of our users. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our AI research platform, community discussions, and market intelligence services.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">2. Information We Collect</h2>
                  <p className="mb-1">We collect the following types of information:</p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li><span className="text-neon-purple">Platform Usage Data:</span> Information about how you interact with our AI research tools and community platform</li>
                    <li><span className="text-neon-purple">Technical Information:</span> Device information, IP addresses (anonymized), and system configuration</li>
                    <li><span className="text-neon-purple">User-Provided Information:</span> Any data you voluntarily share in community discussions or research contributions</li>
                    <li><span className="text-neon-purple">Pseudonymous Identifiers:</span> Blockchain wallet addresses used for secure community participation</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">3. How We Use Your Information</h2>
                  <p className="mb-1">We use collected information for the following purposes:</p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>To provide, maintain, and improve our AI research tools and community platform</li>
                    <li>To develop and refine market intelligence algorithms and prediction models</li>
                    <li>To enable pseudonymous participation in community discussions</li>
                    <li>To detect and prevent security threats or platform misuse</li>
                    <li>To optimize our AI-driven systems for better market analysis accuracy</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">4. Data Security & Privacy</h2>
                  <p>We implement end-to-end encryption, zero-knowledge proofs, and advanced security measures to protect your data and ensure pseudonymous participation. Our platform's architecture uses decentralized identity (DID) technology and blockchain-based verification to maintain user privacy while enabling secure collaboration.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">5. AI Research & Market Analysis</h2>
                  <p>Our AI research models analyze market data to identify patterns and generate insights. All market analyses are provided for informational purposes only and should not be considered financial advice. While we strive for accuracy in our algorithms, we cannot guarantee specific market outcomes. User contribution to our research data is anonymized and aggregated.</p>
                  
                  <h2 className="text-xl text-neon-blue mb-2 mt-6">6. Data Retention</h2>
                  <p>We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. Community contributions may be archived for historical research purposes, but will remain pseudonymous with no linkage to personal identifiers.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">7. Your Rights</h2>
                  <p className="mb-1">Depending on your jurisdiction, you may have the following rights:</p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>Access and receive a copy of your pseudonymous data</li>
                    <li>Rectify inaccurate or incomplete information</li>
                    <li>Request deletion of your data from our systems</li>
                    <li>Withdraw from research participation at any time</li>
                    <li>Opt out of certain data processing activities</li>
                    <li>Request data portability where applicable</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">8. Changes to This Policy</h2>
                  <p>We may update this Privacy Policy periodically to reflect changes in our practices, AI research methodology, or for operational, legal, or regulatory reasons. We will notify community members of any material changes through our platform and communication channels.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">9. Contact Us</h2>
                  <p>If you have questions or concerns about this Privacy Policy, our AI research methods, or data practices, please contact our Privacy Team at <span className="text-neon-blue">privacy@shojo.ai</span> or through our secure communication channels on the platform.</p>
                </div>
                
                <div>
                  <p className="text-foreground/70">Last Updated: March 24, 2025</p>
                </div>
              </div>
              
              <p className="text-neon-blue mt-6">$ <span className="cursor-blink text-foreground"></span></p>
            </TerminalWindow>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
}