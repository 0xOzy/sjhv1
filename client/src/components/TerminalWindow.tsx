import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  children: ReactNode;
  className?: string;
  title?: string;
  showTime?: boolean;
}

export default function TerminalWindow({ 
  children, 
  className = "", 
  title = "terminal.sh",
  showTime = false
}: TerminalWindowProps) {
  const currentTime = new Date().toLocaleTimeString();
  
  return (
    <div className={cn("terminal-window border border-neon-blue/30 bg-cyberpunk-blue/70 rounded-lg overflow-hidden", className)}>
      <div className="terminal-header flex items-center justify-between bg-neon-blue/10 px-4 py-2 border-b border-neon-blue/30">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-error mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-warning mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-success mr-2"></div>
          <span className="text-xs font-mono text-foreground/70 ml-2">{title}</span>
        </div>
        {showTime && (
          <div className="text-xs font-mono text-foreground/70">
            <span>{currentTime}</span>
          </div>
        )}
      </div>
      <div className="p-6 font-mono text-sm overflow-auto">
        {children}
      </div>
    </div>
  );
}
