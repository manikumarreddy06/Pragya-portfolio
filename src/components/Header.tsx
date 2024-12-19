import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { title: 'Home', href: '#home' },
    { title: 'Research', href: '#research' },
    { title: 'Achievements', href: '#achievements' },
    { title: 'Publications', href: '#publications' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-[#1A365D] font-bold text-xl">PRAGYA PALLAVI</a>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-[#1A365D] hover:text-[#4A90A0] transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block text-[#1A365D] hover:text-[#4A90A0] py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;