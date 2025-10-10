import React from 'react';
import { Music } from 'lucide-react';

export default function ArtistHeader({ artist }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 shadow-2xl">
      <div className="flex items-center gap-8">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-purple-600 flex items-center justify-center flex-shrink-0">
          {artist.images && artist.images.length > 0 ? (
            <img src={artist.images[0].url} alt={artist.name} className="w-full h-full object-cover" />
          ) : (
            <Music className="w-16 h-16 text-white" />
          )}
        </div>
        <div>
          <h1 className="text-5xl font-bold text-white mb-3">{artist.name}</h1>
          <p className="text-xl text-purple-200">
            {artist.genres && artist.genres.length > 0 ? artist.genres.slice(0, 3).join(', ') : 'Artist'}
            {artist.followers && ` · ${(artist.followers.total / 1000000).toFixed(1)}M followers`}
          </p>
        </div>
      </div>
    </div>
  );
}