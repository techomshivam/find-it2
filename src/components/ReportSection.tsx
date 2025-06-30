import React, { useState } from 'react';
import { Search, CheckCircle, Camera, Upload } from 'lucide-react';

const ReportSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'lost' | 'found'>('lost');

  const categories = [
    'Electronics', 'Stationary', 'Clothing', 'Accessories', 
    'Books', 'Keys', 'Water Bottles', 'Bags', 'Other'
  ];

  const locations = {
    buildings: ['Vedanta', 'Vishweshvarya', 'Chanakya', 'Vishwakarma', 'Vivekananda', 'Charak', 'Vastu'],
    boysHostels: ['Sarabhai Hostel', 'Bhabha Hostel', 'Bose Hostel', 'Raman Hostel'],
    girlsHostels: ['Sarojini Hostel', 'Kasturba Hostel']
  };

  return (
    <section id="report" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Report Lost or Found Item</h2>
          <p className="text-xl text-gray-600">
            Help others by reporting items you've found, or let us know what you've lost.
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('lost')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'lost'
                  ? 'bg-red-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Search className="w-5 h-5 inline mr-2" />
              Report Lost Item
            </button>
            <button
              onClick={() => setActiveTab('found')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'found'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <CheckCircle className="w-5 h-5 inline mr-2" />
              Report Found Item
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Item Name *
                </label>
                <input 
                  type="text" 
                  placeholder={activeTab === 'lost' ? "What did you lose?" : "What did you find?"} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200" required>
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category} value={category.toLowerCase()}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {activeTab === 'lost' ? 'Last Seen Location' : 'Found Location'} *
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200" required>
                <option value="">Select Location</option>
                <optgroup label="Buildings">
                  {locations.buildings.map((building) => (
                    <option key={building} value={building.toLowerCase()}>
                      {building}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Boys Hostels">
                  {locations.boysHostels.map((hostel) => (
                    <option key={hostel} value={hostel.toLowerCase()}>
                      {hostel}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Girls Hostels">
                  {locations.girlsHostels.map((hostel) => (
                    <option key={hostel} value={hostel.toLowerCase()}>
                      {hostel}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea 
                placeholder="Describe your item in detail (color, brand, distinctive features, etc.)" 
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
            
            {activeTab === 'found' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-cyan-500 transition-colors duration-200 cursor-pointer">
                  <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Click to upload photo</p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                  <input type="file" className="hidden" accept="image/*" />
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your full name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number *
                </label>
                <input 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg ${
                activeTab === 'lost'
                  ? 'bg-gradient-to-r from-red-500 to-pink-600'
                  : 'bg-gradient-to-r from-green-500 to-teal-600'
              }`}
            >
              {activeTab === 'lost' ? 'Report Lost Item' : 'Report Found Item'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReportSection;