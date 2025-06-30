import React from 'react';
import { Search, PlusCircle, Heart } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* University Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/WhatsApp Image 2025-06-30 at 13.19.40_afd01219.jpg')`,
        }}
      />
      
      {/* Lighter Overlay to show more of the campus */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-cyan-50/75 to-blue-50/70 backdrop-blur-[0.5px]" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Animated Search Icon */}
        <div className="mb-8 animate-bounce">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="w-full h-full bg-white/95 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300 border border-white/50">
              <img 
                src="/free-search-icon-2911-thumb.png" 
                alt="Search Icon" 
                className="w-20 h-20"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute top-4 -left-4 w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 animate-fade-in drop-shadow-lg">
          Lost Something?<br />
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
            Find It Here!
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-800 max-w-3xl mx-auto animate-fade-in-delay drop-shadow-md">
          Our campus-wide lost and found system helps students and staff reconnect with their belongings quickly and securely.
        </p>
        
        {/* How it Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          {[
            { icon: Search, title: 'Search', description: 'Look for your lost item in our database', color: 'from-cyan-500 to-blue-500' },
            { icon: PlusCircle, title: 'Report', description: 'Report lost or found items easily', color: 'from-green-500 to-emerald-500' },
            { icon: Heart, title: 'Reunite', description: 'Get back your precious belongings', color: 'from-pink-500 to-rose-500' }
          ].map((item, index) => (
            <div key={item.title} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${item.color} rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 drop-shadow-md">{item.title}</h3>
              <p className="text-gray-800 drop-shadow-sm">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button 
            onClick={() => scrollToSection('search')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg shadow-lg"
          >
            Search Lost Items
          </button>
          <button 
            onClick={() => scrollToSection('report')}
            className="border-2 border-cyan-500 text-cyan-700 px-8 py-4 rounded-full font-semibold hover:bg-white/90 backdrop-blur-sm transition-all duration-300 text-lg bg-white/80 shadow-lg"
          >
            Report Found Item
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;