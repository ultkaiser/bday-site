import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Gift } from 'lucide-react';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
}

const Hero: React.FC = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [showMessage, setShowMessage] = useState(false);
  
  const birthdayDate = new Date('2025-09-09');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Generate confetti pieces
    const pieces: ConfettiPiece[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 4 + Math.random() * 3,
      color: ['#FF6B6B', '#FFD93D', '#FF8CC8', '#8B5FBF', '#4ECDC4', '#95E1D3'][Math.floor(Math.random() * 6)],
      size: 8 + Math.random() * 8,
    }));
    setConfetti(pieces);

    // Show message after a delay
    setTimeout(() => setShowMessage(true), 1000);

    // Countdown timer
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = birthdayDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 via-indigo-50 to-cyan-100 flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-300/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-300/30 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-300/30 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-cyan-300/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
      </div>

      {/* Animated Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute opacity-80"
          style={{
            left: `${piece.left}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            animation: `fall ${piece.duration}s ${piece.delay}s infinite linear`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
          }}
        />
      ))}
      
      {/* Main Content */}
      <div className="text-center z-10 px-4 max-w-5xl mx-auto">
        {/* Main Birthday Message */}
        <div className={`mb-12 transform transition-all duration-1000 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-6">
            <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-spin" style={{ animationDuration: '4s' }} />
          </div>
          
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent mb-6 leading-tight">
            Happy Birthday!
          </h1>
          
          <div className="relative">
            <p className="text-2xl md:text-4xl text-gray-700 mb-8 font-light leading-relaxed">
              Today we celebrate my girl who's truly
              <span className="block text-3xl md:text-5xl font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mt-2">
                Extraordinary ✨
              </span>
            </p>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className={`mb-12 transform transition-all duration-1000 delay-500 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
            Countdown to the Big Day
          </h3>
          <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-medium mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`transform transition-all duration-1000 delay-1000 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('wishes')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-pink-600 hover:to-purple-700 group"
            >
              <Heart className="w-5 h-5 inline mr-2 group-hover:animate-pulse" />
              Share Birthday Love
            </button>
            
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/90 backdrop-blur-sm text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-purple-200 hover:border-purple-400 group"
            >
              <Gift className="w-5 h-5 inline mr-2 group-hover:animate-bounce" />
              View Memories
            </button>
          </div>
          
          <p className="text-gray-500 mt-8 text-lg">
            Scroll down to explore the celebration
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;