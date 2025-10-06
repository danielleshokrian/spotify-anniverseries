import React, { useState } from 'react';
import { Music } from 'lucide-react';
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
        <div className="flex justify-center mb-6">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-full">
            <Music className="w-16 h-16 text-white" />
          </div>
        </div>
        <h1 className="text-6xl font-bold text-white mb-4">
          Music Anniversary Finder
        </h1>
        <p className="text-xl text-purple-200 mb-8">
          Discover album anniversaries and celebrate music milestones
        </p>
        
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Error Message */}
      {error && (
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-red-500/20 backdrop-blur-lg border border-red-500/50 rounded-xl p-4 text-center">
            <p className="text-red-200">{error}</p>
          </div>
        </div>
      )}

      {/* Loading */}
      {loading && <LoadingSpinner message="Searching..." />}

      {/* Search Results */}
      {searchResults.length > 0 && !loading && (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Search Results</h2>
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