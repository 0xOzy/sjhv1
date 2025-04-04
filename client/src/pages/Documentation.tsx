import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import TerminalWindow from "@/components/TerminalWindow";
import CyberpunkCard from "@/components/CyberpunkCard";
import NavBar from "@/components/NavBar";
import Footer from "@/sections/Footer";
import BinaryBackground from "@/components/BinaryBackground";

export default function Documentation() {
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
              <BinaryText className="text-white">Developer </BinaryText>
              <BinaryText className="text-neon-blue">Documentation</BinaryText>
            </h1>
            <div className="w-24 h-1 bg-neon-blue mx-auto my-4"></div>
            <p className="text-foreground max-w-2xl mx-auto font-mono">
              Comprehensive guides and API references for building with Shojo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Documentation Categories */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <CyberpunkCard className="p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 font-display text-white">
                  <BinaryText>Documentation</BinaryText>
                </h3>
                <ul className="space-y-4 text-foreground/80 font-mono text-sm">
                  <li className="group">
                    <a href="#" className="flex items-center text-neon-blue">
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        ▶
                      </span>
                      Getting Started
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="flex items-center hover:text-neon-blue transition-colors"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        ▶
                      </span>
                      Core Concepts
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="flex items-center hover:text-neon-blue transition-colors"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        ▶
                      </span>
                      API Reference
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="flex items-center hover:text-neon-blue transition-colors"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        ▶
                      </span>
                      SDKs & Libraries
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="flex items-center hover:text-neon-blue transition-colors"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        ▶
                      </span>
                      Tutorials
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="flex items-center hover:text-neon-blue transition-colors"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        ▶
                      </span>
                      Examples
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="flex items-center hover:text-neon-blue transition-colors"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        ▶
                      </span>
                      Best Practices
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="flex items-center hover:text-neon-blue transition-colors"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        ▶
                      </span>
                      FAQ
                    </a>
                  </li>
                </ul>
              </CyberpunkCard>
            </motion.div>

            {/* Main Content Area */}
            <div className="lg:col-span-3 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-display text-white mb-4">
                    <BinaryText>Getting Started with Shojo</BinaryText>
                  </h2>
                  <p className="text-foreground font-mono mb-4">
                    Welcome to the Shojo developer documentation. This guide
                    will help you get up and running with the Shojo protocol
                    quickly. Follow these steps to begin building decentralized
                    applications with unmatched speed and stability.
                  </p>
                </div>

                <TerminalWindow title="installation.sh">
                  <p className="text-neon-blue mb-2">
                    ${" "}
                    <span className="text-foreground">
                      npm install @shojo/client
                    </span>
                  </p>
                  <p className="text-green-400 mb-4">
                    Successfully installed Shojo client v2.0.4
                  </p>
                  <p className="text-neon-blue mb-2">
                    $ <span className="text-foreground">cat quickstart.js</span>
                  </p>
                  <pre className="text-foreground text-sm bg-cyberpunk-black/50 p-4 rounded border border-neon-blue/30 overflow-x-auto mb-4">
                    {`import { ShojoClient } from '@shojo/client';

// Initialize the client
const shojo = new ShojoClient({
  apiKey: 'YOUR_API_KEY',
  network: 'mainnet' // or 'testnet'
});

// Connect to the network
await shojo.connect();

// Send a transaction
const transaction = await shojo.createTransaction({
  recipient: '0x1234...5678',
  amount: 10,
  data: 'Hello, Shojo!'
});

// Sign and submit the transaction
const result = await shojo.submitTransaction(transaction);
console.log('Transaction complete:', result.id);`}
                  </pre>
                  <p className="text-neon-blue">
                    $ <span className="cursor-blink text-foreground"></span>
                  </p>
                </TerminalWindow>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4 font-display text-white">
                  <BinaryText>Core Features</BinaryText>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <CyberpunkCard className="p-4">
                    <h4 className="text-lg font-display text-white mb-2">
                      <BinaryText>High-Performance Processing</BinaryText>
                    </h4>
                    <p className="text-foreground/80 font-mono text-sm">
                      Process up to 100,000 transactions per second with
                      near-zero latency using our optimized protocol.
                    </p>
                  </CyberpunkCard>

                  <CyberpunkCard className="p-4">
                    <h4 className="text-lg font-display text-white mb-2">
                      <BinaryText>Advanced SDKs</BinaryText>
                    </h4>
                    <p className="text-foreground/80 font-mono text-sm">
                      Available for JavaScript, Python, Rust, Go, and Java with
                      comprehensive type definitions.
                    </p>
                  </CyberpunkCard>

                  <CyberpunkCard className="p-4">
                    <h4 className="text-lg font-display text-white mb-2">
                      <BinaryText>Intelligent Scaling</BinaryText>
                    </h4>
                    <p className="text-foreground/80 font-mono text-sm">
                      Our AI-driven scaling engine automatically adjusts
                      resource allocation based on your application's needs.
                    </p>
                  </CyberpunkCard>

                  <CyberpunkCard className="p-4">
                    <h4 className="text-lg font-display text-white mb-2">
                      <BinaryText>Reliable Security</BinaryText>
                    </h4>
                    <p className="text-foreground/80 font-mono text-sm">
                      Quantum-resistant encryption with real-time threat
                      monitoring for uncompromised security.
                    </p>
                  </CyberpunkCard>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4 font-display text-white">
                  <BinaryText>API Reference</BinaryText>
                </h3>

                <TerminalWindow title="api_reference.sh">
                  <p className="text-neon-blue mb-2">
                    ${" "}
                    <span className="text-foreground">
                      shojo --api-endpoints --format=table
                    </span>
                  </p>
                  <div className="mb-4 overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-foreground/20">
                          <th className="py-2 px-4 text-left text-neon-purple">
                            Endpoint
                          </th>
                          <th className="py-2 px-4 text-left text-neon-purple">
                            Method
                          </th>
                          <th className="py-2 px-4 text-left text-neon-purple">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-foreground/10">
                          <td className="py-2 px-4 text-neon-blue">
                            /v2/transactions
                          </td>
                          <td className="py-2 px-4">POST</td>
                          <td className="py-2 px-4">
                            Create a new transaction
                          </td>
                        </tr>
                        <tr className="border-b border-foreground/10">
                          <td className="py-2 px-4 text-neon-blue">
                            /v2/transactions/:id
                          </td>
                          <td className="py-2 px-4">GET</td>
                          <td className="py-2 px-4">
                            Retrieve transaction details
                          </td>
                        </tr>
                        <tr className="border-b border-foreground/10">
                          <td className="py-2 px-4 text-neon-blue">
                            /v2/accounts
                          </td>
                          <td className="py-2 px-4">POST</td>
                          <td className="py-2 px-4">Create a new account</td>
                        </tr>
                        <tr className="border-b border-foreground/10">
                          <td className="py-2 px-4 text-neon-blue">
                            /v2/accounts/:id
                          </td>
                          <td className="py-2 px-4">GET</td>
                          <td className="py-2 px-4">Get account information</td>
                        </tr>
                        <tr className="border-b border-foreground/10">
                          <td className="py-2 px-4 text-neon-blue">
                            /v2/network/status
                          </td>
                          <td className="py-2 px-4">GET</td>
                          <td className="py-2 px-4">Check network status</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-foreground text-sm">
                    For full API documentation, including request and response
                    schemas, check the{" "}
                    <span className="text-neon-blue">API Reference</span>{" "}
                    section.
                  </p>
                  <p className="text-neon-blue mt-4">
                    $ <span className="cursor-blink text-foreground"></span>
                  </p>
                </TerminalWindow>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-xl font-bold font-display text-white">
                      <BinaryText>Need Help?</BinaryText>
                    </h3>
                    <p className="text-foreground/80 font-mono text-sm mt-2">
                      Join our developer community for support and
                      collaboration.
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/ShojoCo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-neon-blue transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                    <a
                      href="https://t.me/ShojoAI"
                      className="text-foreground/80 hover:text-neon-blue transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </a>
                    <a
                      href="https://x.com/ShojoLabs"
                      className="text-foreground/80 hover:text-neon-blue transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
