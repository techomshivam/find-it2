import React from 'react';
import { Smartphone, Wallet, Key, Headphones, Book, Watch } from 'lucide-react';

const RecentPosts: React.FC = () => {
  const recentItems = [
    {
      id: 1,
      icon: Smartphone,
      title: 'iPhone 13 Pro',
      location: 'Chanakya Building, 2nd floor',
      timeAgo: '2 days ago',
      gradient: 'from-blue-500 to-purple-600',
      status: 'found'
    },
    {
      id: 2,
      icon: Wallet,
      title: 'Brown Leather Wallet',
      location: 'Sarabhai Hostel, Floor 3',
      timeAgo: '1 day ago',
      gradient: 'from-amber-500 to-orange-600',
      status: 'found'
    },
    {
      id: 3,
      icon: Key,
      title: 'Set of Keys',
      location: 'Vishweshvarya Building',
      timeAgo: '3 hours ago',
      gradient: 'from-yellow-400 to-orange-500',
      status: 'found'
    },
    {
      id: 4,
      icon: Headphones,
      title: 'AirPods Pro',
      location: 'Library, 1st floor',
      timeAgo: '5 hours ago',
      gradient: 'from-green-500 to-teal-600',
      status: 'lost'
    },
    {
      id: 5,
      icon: Book,
      title: 'Engineering Textbook',
      location: 'Vivekananda Building',
      timeAgo: '1 day ago',
      gradient: 'from-indigo-500 to-purple-600',
      status: 'found'
    },
    {
      id: 6,
      icon: Watch,
      title: 'Smart Watch',
      location: 'Sports Complex',
      timeAgo: '6 hours ago',
      gradient: 'from-pink-500 to-rose-600',
      status: 'lost'
    }
  ];

  return (
    <section id="recent-posts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Posts</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Latest lost and found items reported by our campus community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentItems.map((item, index) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}>
                <item.icon className="w-16 h-16 text-white" />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  item.status === 'found' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {item.status.toUpperCase()}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                  {item.location}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{item.timeAgo}</span>
                  <button className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                    item.status === 'found'
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}>
                    {item.status === 'found' ? 'Claim' : 'Contact'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;