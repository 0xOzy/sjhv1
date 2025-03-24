import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import TerminalWindow from "@/components/TerminalWindow";
import NavBar from "@/components/NavBar";
import Footer from "@/sections/Footer";
import BinaryBackground from "@/components/BinaryBackground";

export default function TermsOfService() {
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
              <BinaryText className="text-white">Terms of </BinaryText>
              <BinaryText className="text-neon-blue">Service</BinaryText>
            </h1>
            <div className="w-24 h-1 bg-neon-blue mx-auto my-4"></div>
            <p className="text-foreground max-w-2xl mx-auto font-mono">
              The rules and guidelines governing your use of the Shojo AI Research Lab &amp; Community Platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TerminalWindow title="terms_of_service.sh" showTime>
              <p className="text-neon-blue mb-2">$ <span className="text-foreground">cat terms_of_service.md</span></p>
              
              <div className="space-y-6 text-foreground font-mono">
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">1. Acceptance of Terms</h2>
                  <p>By accessing or using the Shojo AI Research Lab & Community Platform and related services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform or services.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">2. Service Description</h2>
                  <p>Shojo is an AI Research Lab and Community Platform focused on crypto market intelligence and secure community discussions. Our services include AI-powered market analysis tools, pseudonymous community forums, and research collaboration opportunities.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">3. User Responsibilities</h2>
                  <p className="mb-1">As a user of the Shojo platform, you agree to:</p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>Use the platform in compliance with all applicable laws and regulations</li>
                    <li>Maintain the security of your cryptographic keys and account credentials</li>
                    <li>Not attempt to disrupt or compromise the integrity of the platform or community</li>
                    <li>Not use our AI research tools for illegal, harmful, or unauthorized purposes</li>
                    <li>Not misrepresent market information or manipulate community discussions</li>
                    <li>Respect the pseudonymity and privacy of other community members</li>
                    <li>Acknowledge that market analysis tools are for informational purposes only</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">4. Intellectual Property & Research</h2>
                  <p>All content, code, AI models, and materials associated with Shojo are protected by intellectual property rights and belong to Shojo AI Research Lab or its licensors. While we encourage community participation in research, you may not copy, modify, distribute, or create derivative works of our AI models and analysis tools without explicit permission.</p>
                  <p className="mt-2">Community-contributed market insights and discussions remain the intellectual property of their contributors, though by sharing them on our platform, you grant us a non-exclusive license to use such contributions for research purposes.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">5. Market Analysis & Financial Disclaimer</h2>
                  <p>The AI market analysis, predictions, and insights provided through our platform are for informational purposes only and do not constitute financial advice. Crypto markets are volatile and unpredictable. You should always conduct your own research and consult with qualified financial advisors before making investment decisions.</p>
                  
                  <h2 className="text-xl text-neon-blue mb-2 mt-6">6. Limitation of Liability</h2>
                  <p>To the maximum extent permitted by law, Shojo AI Research Lab and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our platform, including but not limited to financial losses resulting from reliance on market analysis or participation in community discussions.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">7. Service Modifications</h2>
                  <p>We reserve the right to modify, suspend, or discontinue any aspect of the Shojo platform at any time, with or without notice. This includes changes to our AI research algorithms, market analysis methodologies, community features, or platform availability.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">8. Termination</h2>
                  <p>We may terminate or suspend your access to the Shojo platform immediately, without prior notice, for conduct that we believe violates these Terms of Service, such as spreading misinformation, harassment of community members, or attempting to manipulate market discussions. We reserve the right to remove any user from our platform at our sole discretion.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">9. Governing Law</h2>
                  <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Shojo AI Research Lab is registered, without regard to its conflict of law provisions. Any disputes related to your use of our platform or AI research tools shall be resolved in the courts of that jurisdiction.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">10. Changes to Terms</h2>
                  <p>We may update these Terms of Service periodically to reflect changes in our AI research methodologies, platform features, or legal requirements. We will notify community members of any material changes through our platform and communication channels. Your continued use of the Shojo platform after such modifications constitutes your acceptance of the updated terms.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">11. Contact</h2>
                  <p>If you have questions about these Terms, our research methods, or platform policies, please contact our legal team at <span className="text-neon-blue">legal@shojo.ai</span> or through our secure communication channels on the platform.</p>
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