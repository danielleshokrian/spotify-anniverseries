import React, { useState } from 'react';
import { Music, Disc } from 'lucide-react';
import SearchBar from './components/SearchBar';
import ArtistCard from './components/ArtistCard';
import LoadingSpinner from './components/LoadingSpinner';
import { searchArtists } from '../services/spotifyApi';

export default function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const results = await searchArtists(query);
      setSearchResults(results);
    } catch (err) {
      setError(err.message);
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6 relative">
          {/* Vinyl record icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="relative bg-black border-4 border-pink-500 p-6 rounded-full shadow-2xl">
              <Disc className="w-16 h-16 text-pink-500 animate-spin" style={{animationDuration: '3s'}} />
            </div>
          </div>
        </div>
        
        <h1 className="text-7xl font-bold text-white mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg">
            VINYL
          </span>
          <br />
          <span className="text-white text-5xl">Anniversary Finder</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 font-light tracking-wide">
          Spin through music history • Celebrate milestone albums
        </p>
        
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Error Message */}
      {error && (
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-red-900/30 backdrop-blur-lg border-2 border-red-500 rounded-xl p-4 text-center shadow-lg">
            <p className="text-red-300 font-medium">{error}</p>
          </div>
        </div>
      )}

      {/* Loading */}
      {loading && <LoadingSpinner message="Searching..." />}

      {/* Search Results */}
      {searchResults.length > 0 && !loading && (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Disc className="w-8 h-8 text-pink-500" />
            Search Results
          </h2>
          <div className="grid gap-4">
            {searchResults.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}