import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Music, ArrowRight } from 'lucide-react';

export default function ArtistCard({ artist }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/artist/${artist.id}`)}
      className="bg-white/10 backdrop-blur-lg rounded-xl p-6 flex items-center gap-6 cursor-pointer hover:bg-white/20 transition-all shadow-xl"
    >
      <div className="w-24 h-24 rounded-full overflow-hidden bg-purple-600 flex items-center justify-center flex-shrink-0">
        {artist.images && artist.images.length > 0 ? (
          <img src={artist.images[0].url} alt={artist.name} className="w-full h-full object-cover" />
        ) : (
          <Music className="w-12 h-12 text-white" />
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-2">{artist.name}</h3>
        <p className="text-purple-200">
          {artist.genres && artist.genres.length > 0 ? artist.genres.slice(0, 3).join(', ') : 'Artist'}
          {artist.followers && ` · ${(artist.followers.total / 1000000).toFixed(1)}M followers`}
        </p>
      </div>
      <div className="text-white">
        <ArrowRight className="w-6 h-6" />
      </div>
    </div>
  );
}