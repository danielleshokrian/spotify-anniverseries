import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArtistHeader from './components/ArtistHeader';
import AnniversaryFilter from './components/AnniversaryFilter';
import AlbumGrid from './components/AlbumGrid';
import LoadingSpinner from './components/LoadingSpinner';
import { getArtist, getArtistAlbums } from '../services/spotifyApi';

export default function ArtistPage() {
  const { artistId } = useParams();
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [filterEnabled, setFilterEnabled] = useState(false);
  const [targetYear, setTargetYear] = useState(new Date().getFullYear());
  const [increment, setIncrement] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const [artistData, albumsData] = await Promise.all([
          getArtist(artistId),
          getArtistAlbums(artistId)
        ]);
        
        setArtist(artistData);
        setAlbums(albumsData);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching artist data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [artistId]);

  const filterAnniversaryAlbums = (albums) => {
    if (!filterEnabled) return albums;

    return albums.filter(album => {
      const releaseYear = new Date(album.release_date).getFullYear();
      const yearDifference = targetYear - releaseYear;
      return yearDifference > 0 && yearDifference % increment === 0;
    }).map(album => ({
      ...album,
      anniversaryYears: targetYear - new Date(album.release_date).getFullYear()
    }));
  };

  const displayedAlbums = filterAnniversaryAlbums(albums);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner message="Loading artist..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-500/20 backdrop-blur-lg border border-red-500/50 rounded-xl p-8 text-center max-w-2xl mx-auto">
          <p className="text-red-200 text-xl">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {artist && <ArtistHeader artist={artist} />}
      
      <AnniversaryFilter
        filterEnabled={filterEnabled}
        setFilterEnabled={setFilterEnabled}
        targetYear={targetYear}
        setTargetYear={setTargetYear}
        increment={increment}
        setIncrement={setIncrement}
      />

      <AlbumGrid 
        albums={displayedAlbums} 
        filterEnabled={filterEnabled}
      />
    </div>
  );
}