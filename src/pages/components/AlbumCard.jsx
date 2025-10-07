import React from 'react';
import { Calendar, Disc } from 'lucide-react';

export default function AlbumCard({ album }) {
  return (
    <div className="group bg-black border-2 border-gray-800 hover:border-pink-500 rounded-xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-pink-500/30 hover:scale-105">
      {/* Vinyl record style album art */}
      <div className="relative aspect-square bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 group-hover:opacity-100 opacity-0 transition-opacity"></div>
        {album.images && album.images.length > 0 ? (
          <img
            src={album.images[0].url}
            alt={album.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <Disc className="w-16 h-16 text-pink-500 animate-spin" style={{animationDuration: '3s'}} />
        )}
        
        {/* Vinyl shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      
      <div className="p-4 bg-gradient-to-b from-gray-900 to-black">
        <h3 className="font-bold text-white mb-2 line-clamp-2 group-hover:text-pink-400 transition-colors">
          {album.name}
        </h3>
        <p className="text-sm text-gray-400 mb-1 font-mono">
          {new Date(album.release_date).getFullYear()}
        </p>
        {album.anniversaryYears && (
          <div className="mt-3 pt-3 border-t border-gray-800">
            <span className="inline-flex items-center gap-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              <Calendar className="w-3 h-3" />
              {album.anniversaryYears} Year Anniversary
            </span>
          </div>
        )}
      </div>
    </div>
  );
}