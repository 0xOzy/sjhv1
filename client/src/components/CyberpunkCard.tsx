import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CyberpunkCardProps {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export default function CyberpunkCard({ 
  children, 
  className = "", 
  glowOnHover = true 
}: CyberpunkCardProps) {
  return (
    <motion.div
      className={cn(
        "cyberpunk-card border border-neon-blue/30 bg-gradient-to-br from-cyberpunk-blue/80 to-cyberpunk-black/90 rounded-lg transition-all duration-300",
        className
      )}
      whileHover={glowOnHover ? { 
        y: -5, 
        boxShadow: "0 0 20px rgba(0, 240, 255, 0.6)",
        borderColor: "rgba(0, 240, 255, 0.8)"
      } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
