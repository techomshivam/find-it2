import React from 'react';
import { Search } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onLoginClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onLoginClick }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full p-2 shadow-lg">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <img 
                  src="/free-search-icon-2911-thumb.png" 
                  alt="Search Icon" 
                  className="w-6 h-6"
                />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              Find<span className="text-cyan-500">It</span>
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'search', label: 'Search' },
              { id: 'recent-posts', label: 'Recent Posts' },
              { id: 'report', label: 'Report' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-cyan-600'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={onLoginClick}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;