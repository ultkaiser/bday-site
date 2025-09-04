import React from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Star className="w-6 h-6 animate-pulse" />
            <Heart className="w-8 h-8 animate-bounce" />
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Thank You for Making This Day Special
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Your presence and love make every birthday celebration truly magical. 
            Here's to another year of wonderful memories, laughter, and joy!
          </p>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-sm opacity-75">
            Made with <Heart className="w-4 h-4 inline mx-1 animate-pulse" /> for a very special birthday celebration
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;