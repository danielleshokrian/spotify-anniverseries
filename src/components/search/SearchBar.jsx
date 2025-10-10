import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for an artist..."
            className="w-full px-6 py-4 pr-14 text-lg rounded-full bg-gray-900 text-white border-2 border-pink-500 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(255,0,255,0.5)] transition-all shadow-xl placeholder-gray-500"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-3 rounded-full transition-all shadow-lg hover:shadow-pink-500/50 hover:scale-110"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </form>
  );
}