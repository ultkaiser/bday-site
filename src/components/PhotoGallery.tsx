import React, { useState } from 'react';
import { X, Heart } from 'lucide-react';

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Using beautiful stock photos from Pexels
  const photos = [
    'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=500',
    'https://images.pexels.com/photos/1857158/pexels-photo-1857158.jpeg?auto=compress&cs=tinysrgb&w=500',
    'https://images.pexels.com/photos/1729798/pexels-photo-1729798.jpeg?auto=compress&cs=tinysrgb&w=500',
    'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=500',
    'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=500',
    'https://images.pexels.com/photos/2072119/pexels-photo-2072119.jpeg?auto=compress&cs=tinysrgb&w=500',
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Beautiful Memories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of precious moments and joyful celebrations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo}
                alt={`Memory ${index + 1}`}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <Heart className="w-6 h-6 text-white animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged photo */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors duration-200"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedPhoto}
                alt="Enlarged memory"
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;