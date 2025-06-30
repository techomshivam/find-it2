import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchSection: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showFloorSelection, setShowFloorSelection] = useState(false);

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    const hostels = ['sarabhai', 'bhabha', 'bose', 'raman', 'sarojini', 'kasturba'];
    setShowFloorSelection(hostels.includes(location));
  };

  const popularSearches = ['iPhone', 'Wallet', 'Keys', 'Water Bottle', 'Earphones', 'Notebook'];

  return (
    <section id="search" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Search Lost Items</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Use our advanced search to find your lost belongings or browse recently found items.
          </p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-xl border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="md:col-span-2">
              <input 
                type="text" 
                placeholder="What did you lose? (e.g., iPhone, wallet, keys...)" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200">
                <option>Category</option>
                <option>Electronics</option>
                <option>Stationary</option>
                <option>Clothing</option>
                <option>Accessories</option>
                <option>Books</option>
                <option>Keys</option>
                <option>Water Bottles</option>
                <option>Bags</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <select 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                value={selectedLocation}
                onChange={(e) => handleLocationChange(e.target.value)}
              >
                <option value="">Select Location</option>
                <optgroup label="Buildings">
                  <option value="vedanta">Vedanta</option>
                  <option value="vishweshvarya">Vishweshvarya</option>
                  <option value="chanakya">Chanakya</option>
                  <option value="vishwakarma">Vishwakarma</option>
                  <option value="vivekananda">Vivekananda</option>
                  <option value="charak">Charak</option>
                  <option value="vastu">Vastu</option>
                </optgroup>
                <optgroup label="Boys Hostels">
                  <option value="sarabhai">Sarabhai Hostel</option>
                  <option value="bhabha">Bhabha Hostel</option>
                  <option value="bose">Bose Hostel</option>
                  <option value="raman">Raman Hostel</option>
                </optgroup>
                <optgroup label="Girls Hostels">
                  <option value="sarojini">Sarojini Hostel</option>
                  <option value="kasturba">Kasturba Hostel</option>
                </optgroup>
              </select>
            </div>
          </div>
          
          {showFloorSelection && (
            <div className="mb-6 animate-fade-in">
              <select className="w-full md:w-64 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200">
                <option value="">Select Floor</option>
                <option value="ground">Ground Floor</option>
                <option value="1">1st Floor</option>
                <option value="2">2nd Floor</option>
                <option value="3">3rd Floor</option>
                <option value="4">4th Floor</option>
              </select>
            </div>
          )}
          
          <div className="flex justify-center mb-6">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Search
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-gray-600 mr-2">Popular searches:</span>
            {popularSearches.map((search) => (
              <button 
                key={search}
                className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm hover:bg-cyan-200 transition-colors duration-200"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;