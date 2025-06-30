import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import ReportSection from './components/ReportSection';
import RecentPosts from './components/RecentPosts';
import LoginModal from './components/LoginModal';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'search', 'recent-posts', 'report'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        activeSection={activeSection}
        onLoginClick={() => setIsLoginModalOpen(true)}
      />
      <HeroSection />
      <SearchSection />
      <RecentPosts />
      <ReportSection />
      
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
}

export default App;