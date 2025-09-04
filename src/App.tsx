import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PhotoGallery from './components/PhotoGallery';
import Wishes from './components/Wishes';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <div id="hero">
          <Hero />
        </div>
        
        <div id="gallery">
          <PhotoGallery />
        </div>
        
        <div id="wishes">
          <Wishes />
        </div>
        
        <div id="timeline">
          <Timeline />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;