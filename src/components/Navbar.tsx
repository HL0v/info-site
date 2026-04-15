import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {name:'Home', href:'#'},
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        <div className="text-2xl font-headline font-bold tracking-tighter text-brand-blue">
          <a href='#'>InfoJr</a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button className="signature-gradient text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-tight hover:opacity-90 transition-opacity active:scale-95">
            Começar
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-600 hover:text-brand-blue"
                >
                  {link.name}
                </a>
              ))}
              <button className="signature-gradient text-white px-6 py-3 rounded-lg text-md font-bold tracking-tight w-full">
                Começar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
