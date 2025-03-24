import { useState } from "react";
import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import CyberpunkCard from "@/components/CyberpunkCard";
import TerminalWindow from "@/components/TerminalWindow";

export default function Token() {
  const [copyStatus, setCopyStatus] = useState("");
  const contractAddress = "Coming Soon"; // Example Solana contract address

  const handleCopy = () => {
    navigator.clipboard
      .writeText(contractAddress)
      .then(() => {
        setCopyStatus("Copied!");
        setTimeout(() => setCopyStatus(""), 2000);
      })
      .catch(() => {
        setCopyStatus("Failed to copy");
        setTimeout(() => setCopyStatus(""), 2000);
      });
  };

  return (
    <section id="token" className="py-20 relative bg-cyberpunk-black">
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            <BinaryText className="text-white">$SHOJO </BinaryText>
            <BinaryText className="text-neon-blue">Token</BinaryText>
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto my-4"></div>
          <p className="text-foreground max-w-2xl mx-auto font-mono">
            The native utility token powering the Shojo ecosystem on Solana
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <TerminalWindow title="token_details.sol" showTime>
              <p className="text-neon-blue mb-2">
                $ <span className="text-foreground">shojo --token-info</span>
              </p>
              <p className="text-foreground mb-4">
                Fetching $SHOJO token information...
              </p>
              <p className="text-success mb-4">
                Connection established to Solana network.
              </p>

              <div className="mb-6">
                <p className="text-foreground mb-2">// TOKEN OVERVIEW</p>
                <p className="mb-1">
                  <span className="text-neon-purple">Token Name:</span>
                  <span className="text-foreground">SHOJO</span>
                </p>
                <p className="mb-1">
                  <span className="text-neon-purple">Token Symbol:</span>
                  <span className="text-foreground">$SHOJO</span>
                </p>
                <p className="mb-1">
                  <span className="text-neon-purple">Network:</span>
                  <span className="text-foreground">Solana</span>
                </p>
                
              </div>

              <div className="mb-6">
                <p className="text-foreground mb-2">// TOKENOMICS</p>
                <p className="mb-1">
                  <span className="text-neon-purple">Total Supply:</span>
                  <span className="text-foreground">1,000,000,000 SHOJO</span>
                </p>
                <p className="mb-1">
                  <span className="text-neon-purple">
                    Liquidity Pool (LP) :
                  </span>
                  <span className="text-foreground">
                    {" "}
                    Auto Add & Lock with Pump.fun
                  </span>
                </p>

                <p className="mb-1">
                  <span className="text-neon-purple">Tax:</span>
                  <span className="text-foreground">0%</span>
                </p>
                <p className="mb-1">
                  <span className="text-neon-purple">Presale Token:</span>
                  <span className="text-foreground">No</span>
                </p>
                <p className="mb-1">
                  <span className="text-neon-purple">Development Fund:</span>
                  <span className="text-foreground">10%</span>
                </p>
                <p className="mb-1">
                  <span className="text-neon-purple">Ecosystem Growth:</span>
                  <span className="text-foreground">5%</span>
                </p>
              </div>

              <div className="mb-6">
                <p className="text-foreground mb-2">// CONTRACT ADDRESS</p>
                <div className="flex items-center justify-between bg-cyberpunk-black/70 p-2 rounded border border-neon-blue/30 mb-2 font-mono text-sm overflow-hidden">
                  <span className="text-foreground truncate">
                    {contractAddress}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="ml-2 text-neon-blue hover:text-white whitespace-nowrap"
                  >
                    {copyStatus || "Copy"}
                  </button>
                </div>
                <p className="text-xs text-foreground/70">
                  Verify on Solana Explorer before interacting with the contract
                </p>
              </div>

              <p className="text-neon-blue mt-6">
                $ <span className="cursor-blink text-foreground"></span>
              </p>
            </TerminalWindow>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="col-span-2"
            >
              <CyberpunkCard className="p-6">
                <h3 className="text-xl font-bold mb-4 font-display text-white">
                  <BinaryText>Token Utility</BinaryText>
                </h3>
                <ul className="space-y-3 font-mono text-sm text-foreground/80">
                  <li className="flex items-start">
                    <span className="text-neon-blue mr-2">›</span>
                    <span>
                      Access to premium features in Shojo AI Agent for advanced
                      market analysis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-blue mr-2">›</span>
                    <span>
                      Create and manage private chat rooms in the community
                      platform
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-blue mr-2">›</span>
                    <span>
                      Governance rights for voting on protocol upgrades and
                      development direction
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-blue mr-2">›</span>
                    <span>
                      Staking rewards for providing liquidity and network
                      security
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-blue mr-2">›</span>
                    <span>
                      Pay for API access and integration services for developers
                    </span>
                  </li>
                </ul>
              </CyberpunkCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <CyberpunkCard className="p-4 h-full">
                <h4 className="text-md font-bold mb-3 font-display text-white">
                  <BinaryText>Acquisition</BinaryText>
                </h4>
                <ul className="space-y-2 font-mono text-xs text-foreground/80">
                  <li className="flex items-start">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>Available on Solana DEXs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>Early adopter rewards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>Contribution rewards</span>
                  </li>
                </ul>
                <div className="mt-3 text-right">
                  <span className="text-xs font-mono text-neon-blue">
                    COMING SOON
                  </span>
                </div>
              </CyberpunkCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <CyberpunkCard className="p-4 h-full">
                <h4 className="text-md font-bold mb-3 font-display text-white">
                  <BinaryText>Token Security</BinaryText>
                </h4>
                <ul className="space-y-2 font-mono text-xs text-foreground/80">
                  <li className="flex items-start">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>Multi-sig governance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>Security audits completed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>Time-locked contracts</span>
                  </li>
                </ul>
                <div className="mt-3 text-right">
                  <span className="text-xs font-mono text-neon-blue">
                    VERIFIED
                  </span>
                </div>
              </CyberpunkCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
