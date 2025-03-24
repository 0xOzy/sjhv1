import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import BinaryText from "./BinaryText";

interface NeonButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  primary?: boolean;
  onClick?: () => void;
  comingSoon?: boolean;
}

export default function NeonButton({ 
  children, 
  className = "", 
  href,
  primary = false,
  onClick,
  comingSoon = false
}: NeonButtonProps) {
  const buttonContent = (
    <motion.span
      className={cn(
        "neon-button relative overflow-hidden inline-block px-6 py-3 rounded font-mono transition-all duration-300",
        primary 
          ? "bg-neon-blue/20 text-neon-blue border border-neon-blue/50 hover:bg-neon-blue/30" 
          : "bg-transparent border border-foreground/30 text-foreground hover:border-foreground/70",
        className
      )}
      whileHover={{ 
        y: -2,
        boxShadow: primary ? "0 0 20px rgba(0, 240, 255, 0.8)" : "none"
      }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <span className="relative z-10">
        <BinaryText changeToComingSoon={comingSoon} triggerOnLoad={false}>
          {children}
        </BinaryText>
      </span>
      {primary && (
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"
          initial={{ left: "-100%" }}
          whileHover={{ left: "100%" }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.span>
  );

  if (href) {
    return <a href={href}>{buttonContent}</a>;
  }
  
  return buttonContent;
}
