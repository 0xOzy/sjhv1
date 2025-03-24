import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import ShojoLogo from "@/components/ShojoLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#", comingSoon: true },
        { name: "API References", href: "#", comingSoon: true },
        { name: "Developer Hub", href: "#", comingSoon: true },
        { name: "Tutorials", href: "#", comingSoon: true },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about-us" },
        { name: "Careers", href: "#", comingSoon: true },
        { name: "Press Kit", href: "#", comingSoon: true },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Security", href: "/security" },
        { name: "Compliance", href: "/compliance" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "X (Twitter)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      ),
      href: "https://x.com/ShojoLabs",
    },
    {
      name: "GitHub",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
      href: "https://github.com/ShojoCo",
    },
    {
      name: "Telegram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      href: "https://t.me/ShojoLabs",
    },
  ];

  return (
    <footer className="py-12 bg-cyberpunk-black relative">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <ShojoLogo />
            <p className="text-foreground/70 font-mono text-sm mb-4 mt-2">
              The future of stability and speed in decentralized AI and Community protocols.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-neon-blue transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 className="text-white font-display font-bold mb-4">
                <BinaryText>{section.title}</BinaryText>
              </h4>
              <ul className="space-y-2 font-mono text-sm">
                {section.links.map((link: any, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-foreground/70 hover:text-neon-blue transition-colors"
                    >
                      {link.name}
                      {link.comingSoon && (
                        <span className="ml-2 text-xs text-neon-blue/70">
                          (Coming Soon)
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-foreground/10 mt-12 pt-8 text-center">
          <p className="text-foreground/50 font-mono text-xs">
            &copy; {currentYear} Shojo Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
