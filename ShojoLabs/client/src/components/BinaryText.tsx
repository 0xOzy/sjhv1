import { useState, useRef, useCallback, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { randomBinary } from "@/lib/utils";

interface BinaryTextProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  changeToComingSoon?: boolean;
  triggerOnLoad?: boolean;
}

export default function BinaryText({ 
  children, 
  className = "", 
  duration = 300,
  changeToComingSoon = false,
  triggerOnLoad = false
}: BinaryTextProps) {
  const [displayText, setDisplayText] = useState<ReactNode>(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasChangedToComingSoon, setHasChangedToComingSoon] = useState(false);
  const originalTextRef = useRef<ReactNode>(children);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const textContent = typeof children === 'string' 
    ? children 
    : String(children);
  
  const animateText = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    originalTextRef.current = children;
    
    // Make sure binary text has the exact same length as original
    const binaryLength = textContent.length;
    let binary = randomBinary(binaryLength);
    
    // Truncate binary text if it's longer than original text
    if (binary.length > binaryLength) {
      binary = binary.substring(0, binaryLength);
    }
    
    // Pad binary text if it's shorter than original text
    while (binary.length < binaryLength) {
      binary += "0";
    }
    
    setDisplayText(binary);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      if (changeToComingSoon && !hasChangedToComingSoon) {
        setDisplayText("Coming Soon");
        setHasChangedToComingSoon(true);
      } else {
        setDisplayText(originalTextRef.current);
      }
      setIsAnimating(false);
    }, duration);
  }, [children, duration, isAnimating, textContent, changeToComingSoon, hasChangedToComingSoon]);
  
  // If triggerOnLoad is true, animate on component mount
  useEffect(() => {
    if (triggerOnLoad) {
      animateText();
    }
  }, [triggerOnLoad, animateText]);
  
  return (
    <motion.span
      className={`${className} inline-block overflow-hidden whitespace-normal break-words`}
      onMouseEnter={changeToComingSoon && hasChangedToComingSoon ? undefined : animateText}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      style={{ 
        width: isAnimating ? '100%' : 'auto',
        maxWidth: '100%'
      }}
    >
      {displayText}
    </motion.span>
  );
}
