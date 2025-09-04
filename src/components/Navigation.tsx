import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
            <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Birthday Celebration
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'Memories', id: 'gallery' },
              { label: 'Wishes', id: 'wishes' },
              { label: 'Timeline', id: 'timeline' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 hover:scale-105 transform"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl">
            <div className="px-6 py-4 space-y-4">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'Memories', id: 'gallery' },
                { label: 'Wishes', id: 'wishes' },
                { label: 'Timeline', id: 'timeline' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-700 hover:text-pink-600 font-medium py-2 hover:bg-pink-50 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;