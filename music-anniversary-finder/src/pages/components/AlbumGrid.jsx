import React from 'react';
import { Disc3 } from 'lucide-react';
import AlbumCard from './AlbumCard';
import EmptyState from './EmptyState';

export default function AlbumGrid({ albums, filterEnabled }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <Disc3 className="w-8 h-8" />
          {filterEnabled ? 'Anniversary Albums' : 'All Albums'} ({albums.length})
        </h2>
      </div>

      {albums.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
}