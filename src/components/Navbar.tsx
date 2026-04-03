import { useState } from "react";
import { Home, Mail, User, FolderOpen, Menu, X } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/about", label: "About", icon: User },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-white/20 dark:border-gray-700/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-900 dark:text-gray-100 hover:bg-white/20 dark:hover:bg-gray-800/30 transition-colors duration-200 font-medium"
                >
                  <IconComponent size={20} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-900 dark:text-gray-100 hover:bg-white/20 dark:hover:bg-gray-800/30 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg text-gray-900 dark:text-gray-100 hover:bg-white/20 dark:hover:bg-gray-800/30 transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent size={20} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
