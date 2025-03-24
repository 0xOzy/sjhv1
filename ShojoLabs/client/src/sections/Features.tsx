import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import CyberpunkCard from "@/components/CyberpunkCard";

export default function Features() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  // Feature data
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Market Analysis AI",
      description: "Analyzes crypto sentiment, market trends, and other financial sectors with cognitive intelligence capabilities to provide deeper insights than conventional statistical models.",
      stat: "MODEL VERSION: ",
      statValue: "COGNITIVE v1.3",
      statColor: "text-success"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Crypto Intelligence",
      description: "Provides real-time insights on new tokens, blockchain trends, and recommendation entry, TP/SL prices with advanced pattern recognition and market modeling algorithms.",
      stat: "ACCURACY: ",
      statValue: "94.2%",
      statColor: "text-success"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Themed Chat Rooms",
      description: "Each room in the Shojo community platform is dedicated to a specific discussion topic, enabling focused conversations and efficient information exchange about crypto markets and projects.",
      stat: "ACTIVE ROOMS: ",
      statValue: "78+",
      statColor: "text-success"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Custom Private Rooms",
      description: "Users can create private rooms with restricted access, perfect for project teams, investment groups, or specialized research communities focusing on specific crypto assets.",
      stat: "PRIVACY LEVEL: ",
      statValue: "E2E Encrypted",
      statColor: "text-success"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13-12a17.926 17.926 0 001.87 8M9 6l3 1m0 0l3-1m-3 1v7.5M9 18l3-1m0 0l3 1m-3-1v-7.5" />
        </svg>
      ),
      title: "Full Anonymity",
      description: "No KYC, no identity verification, ensuring fully anonymous discussions through DID (Decentralized Identity) and blockchain-based access control for maximum privacy.",
      stat: "USER VERIFICATION: ",
      statValue: "DID Only",
      statColor: "text-success"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Integrated with AI",
      description: "Discussions can receive real-time insights from Shojo AI Agent, providing market analysis, trend detection, and investment advice directly within conversation threads.",
      stat: "RESPONSE TIME: ",
      statValue: "<500ms",
      statColor: "text-success"
    }
  ];
  
  return (
    <section id="features" className="py-20 relative bg-cyberpunk-black">
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            <BinaryText className="text-white">Core </BinaryText>
            <BinaryText className="text-neon-blue">Features</BinaryText>
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto my-4"></div>
          <p className="text-foreground max-w-2xl mx-auto font-mono">
            Key features of Shojo AI Agent and Chat Community Platform
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <CyberpunkCard className="p-6 h-full flex flex-col">
                <div className="text-neon-blue mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 font-display text-white">
                  <BinaryText>{feature.title}</BinaryText>
                </h3>
                <p className="text-foreground/80 font-mono text-sm flex-grow">
                  {feature.description}
                </p>
                <div className="pt-4 mt-auto">
                  <span className="text-xs font-mono text-neon-blue">
                    {feature.stat}<span className={feature.statColor}>{feature.statValue}</span>
                  </span>
                </div>
              </CyberpunkCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
