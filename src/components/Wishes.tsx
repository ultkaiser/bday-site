import React, { useState } from 'react';
import { MessageCircle, Heart, Star } from 'lucide-react';
import { wishesStore } from '../utils/wishesStore';

const Wishes: React.FC = () => {
  const [wishes, setWishes] = useState(wishesStore.getAllWishes());

  const [newWish, setNewWish] = useState({ name: '', message: '' });

  const handleSubmitWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (newWish.name && newWish.message) {
      wishesStore.addWish(newWish.name, newWish.message);
      setWishes(wishesStore.getAllWishes());
      setNewWish({ name: '', message: '' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Birthday Wishes
          </h2>
          <p className="text-xl text-gray-600">
            Share your love and birthday wishes
          </p>
        </div>

        {/* Add New Wish Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            <MessageCircle className="w-6 h-6 inline mr-2 text-purple-500" />
            Leave a Birthday Message
          </h3>
          
          <form onSubmit={handleSubmitWish} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your name"
                value={newWish.name}
                onChange={(e) => setNewWish({ ...newWish, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
              />
            </div>
            <div>
              <textarea
                placeholder="Write your birthday message here..."
                value={newWish.message}
                onChange={(e) => setNewWish({ ...newWish, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Heart className="w-5 h-5 inline mr-2" />
              Send Birthday Love
            </button>
          </form>
        </div>

        {/* Wishes Display */}
        <div className="space-y-6">
          {wishes.map((wish) => (
            <div
              key={wish.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white group-hover:animate-spin" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-800 text-lg">{wish.name}</h4>
                    <span className="text-sm text-gray-500">{wish.timestamp}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{wish.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishes;