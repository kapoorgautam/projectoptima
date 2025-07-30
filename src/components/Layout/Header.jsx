import React, { useState, useEffect } from 'react';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube,
} from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { icon: Facebook, href: '#facebook', name: 'Facebook' },
    { icon: Instagram, href: '#instagram', name: 'Instagram' },
    { icon: Twitter, href: '#twitter', name: 'Twitter' },
    { icon: Linkedin, href: '#linkedin', name: 'LinkedIn' },
    { icon: Youtube, href: '#youtube', name: 'YouTube' }
  ];

  return (
  <header
  className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'backdrop-blur-md bg-white/30 shadow-lg'
      : 'bg-transparent'
  } text-gray-800 py-3 md:py-4`}
>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="bg-gray-900 rounded-full px-6 py-3 flex justify-between items-center text-white relative">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              OptimPhysio Care
            </h1>
          </div>

          {/* Navigation and Social Links for Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-sm lg:text-base hover:text-gray-300 transition-colors">Home</a>
              <a href="/about" className="text-sm lg:text-base hover:text-gray-300 transition-colors">About</a>
              <a href="/treatment" className="text-sm lg:text-base hover:text-gray-300 transition-colors">Treatments</a>
              <a href="/contact" className="text-sm lg:text-base hover:text-gray-300 transition-colors">Contact</a>
              <a href="/team" className="text-sm lg:text-base hover:text-gray-300 transition-colors">Teams</a>
              <a href="/media" className="text-sm lg:text-base hover:text-gray-300 transition-colors">Our Media</a>
            </div>
            {/* Social Links */}
            <div className="flex items-center space-x-2 ml-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-500 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
            <button className="ml-4 bg-teal-500 hover:bg-teal-600 text-white text-sm px-4 py-2 rounded-full transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-14 right-4 bg-gray-900 rounded-lg shadow-lg w-48 py-4 px-6 z-50">
            <a href="/" className="block text-white hover:text-gray-300 py-2 text-sm">Home</a>
            <a href="/about" className="block text-white hover:text-gray-300 py-2 text-sm">About</a>
            <a href="/treatment" className="block text-white hover:text-gray-300 py-2 text-sm">Treatments</a>
            <a href="/contact" className="block text-white hover:text-gray-300 py-2 text-sm">Contact</a>
            <a href="/team" className="block text-white hover:text-gray-300 py-2 text-sm">Teams</a>
            <a href="/media" className="block text-white hover:text-gray-300 py-2 text-sm">Our Media</a>
            <div className="flex space-x-2 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-500 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
            <button className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white text-sm px-4 py-2 rounded-full transition-colors">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;