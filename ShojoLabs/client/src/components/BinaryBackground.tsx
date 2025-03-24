import { useEffect, useRef } from "react";
import { randomBinary, getRandomArbitrary } from "@/lib/utils";

interface BinaryString {
  content: string;
  x: number;
  y: number;
  opacity: number;
  duration: number;
  id: number;
}

export default function BinaryBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const stringsRef = useRef<BinaryString[]>([]);
  const lastTimeRef = useRef<number>(0);
  const idCounterRef = useRef<number>(0);
  
  // Create a new binary string
  const createBinaryString = () => {
    const id = idCounterRef.current++;
    const length = Math.floor(getRandomArbitrary(10, 30));
    const content = randomBinary(length);
    const x = getRandomArbitrary(0, 100);
    const y = -100;
    const opacity = getRandomArbitrary(0.05, 0.2);
    const duration = getRandomArbitrary(5, 20);
    
    return { content, x, y, opacity, duration, id };
  };
  
  // Initialize the binary strings
  useEffect(() => {
    const initialStrings: BinaryString[] = [];
    for (let i = 0; i < 50; i++) {
      initialStrings.push(createBinaryString());
    }
    stringsRef.current = initialStrings;
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);
  
  // Animation loop
  useEffect(() => {
    const animate = (time: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }
      
      const deltaTime = time - lastTimeRef.current;
      lastTimeRef.current = time;
      
      // Update string positions
      stringsRef.current = stringsRef.current.map(string => {
        const speed = 100 / string.duration; // pixels per second
        const newY = string.y + (speed * deltaTime) / 1000;
        return { ...string, y: newY };
      });
      
      // Remove strings that are off-screen
      stringsRef.current = stringsRef.current.filter(string => string.y < window.innerHeight);
      
      // Add new strings occasionally
      if (Math.random() < 0.05) {
        stringsRef.current.push(createBinaryString());
      }
      
      // Render the strings
      renderStrings();
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    const renderStrings = () => {
      if (!containerRef.current) return;
      
      // Clear the container
      containerRef.current.innerHTML = '';
      
      // Add each string as a div
      stringsRef.current.forEach(string => {
        const stringElement = document.createElement('div');
        stringElement.className = 'text-neon-blue font-mono text-xs absolute';
        stringElement.style.left = `${string.x}%`;
        stringElement.style.top = `${string.y}px`;
        stringElement.style.opacity = `${string.opacity}`;
        stringElement.textContent = string.content;
        
        containerRef.current?.appendChild(stringElement);
      });
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
