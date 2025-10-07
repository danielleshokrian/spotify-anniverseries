import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Music, ArrowRight, Disc } from 'lucide-react';

export default function ArtistCard({ artist }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/artist/${artist.id}`)}
      className="group bg-gradient-to-r from-gray-900 to-black border-2 border-pink-500/30 hover:border-cyan-500 rounded-xl p-6 flex items-center gap-6 cursor-pointer transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-pink-500/30 hover:scale-[1.02]"
    >
      {/* Vinyl record style avatar */}
      <div className="relative w-24 h-24 rounded-full flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full blur group-hover:blur-md transition-all"></div>
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-black bg-gray-900 flex items-center justify-center">
          {artist.images && artist.images.length > 0 ? (
            <img src={artist.images[0].url} alt={artist.name} className="w-full h-full object-cover" />
          ) : (
            <Disc className="w-12 h-12 text-pink-500" />
          )}
        </div>
      </div>
      
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
          {artist.name}
        </h3>
        <p className="text-gray-400 text-sm">
          {artist.genres && artist.genres.length > 0 ? artist.genres.slice(0, 3).join(' • ') : 'Artist'}
          {artist.followers && ` • ${(artist.followers.total / 1000000).toFixed(1)}M followers`}
        </p>
      </div>
      
      <div className="text-cyan-500 group-hover:text-pink-500 transition-colors group-hover:translate-x-2 duration-300">
        <ArrowRight className="w-6 h-6" />
      </div>
    </div>
  );
}