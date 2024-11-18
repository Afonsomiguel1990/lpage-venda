import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold">
            Venda na Garagem
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#featured" className="hover:text-red-600 transition-colors">Móveis</a>
            <a href="#about" className="hover:text-red-600 transition-colors">Sobre</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">Contacto</a>
            <a href="tel:961689904" className="btn btn-primary flex items-center gap-2">
              <Phone size={18} />
              <span>961 689 904</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#featured"
                className="block px-3 py-2 hover:text-red-600"
                onClick={() => setIsOpen(false)}
              >
                Móveis
              </a>
              <a
                href="#about"
                className="block px-3 py-2 hover:text-red-600"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 hover:text-red-600"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
              <a
                href="tel:961689904"
                className="block px-3 py-2 text-red-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <Phone size={18} />
                  <span>961 689 904</span>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}