import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for an artist..."
          className="w-full px-6 py-4 pr-12 text-lg rounded-full bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-purple-400 shadow-xl text-gray-900"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}