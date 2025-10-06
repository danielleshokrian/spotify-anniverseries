import React from 'react';
import { Calendar, Music } from 'lucide-react';

export default function AlbumCard({ album }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
      <div className="aspect-square bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
        {album.images && album.images.length > 0 ? (
          <img
            src={album.images[0].url}
            alt={album.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <Music className="w-16 h-16 text-white" />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-white mb-2 line-clamp-2">{album.name}</h3>
        <p className="text-sm text-purple-200 mb-1">
          {new Date(album.release_date).getFullYear()}
        </p>
        {album.label && (
          <p className="text-xs text-purple-300 mb-2">{album.label}</p>
        )}
        {album.anniversaryYears && (
          <div className="mt-3 pt-3 border-t border-white/20">
            <span className="inline-flex items-center gap-1 bg-yellow-500/90 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
              <Calendar className="w-3 h-3" />
              {album.anniversaryYears} Year Anniversary
            </span>
          </div>
        )}
      </div>
    </div>
  );
}