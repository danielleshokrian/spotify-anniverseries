// Spotify API Configuration
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

let accessToken = null;
let tokenExpiry = null;

// Get Access Token using Client Credentials Flow
async function getAccessToken() {
  // Return cached token if still valid
  if (accessToken && tokenExpiry && Date.now() < tokenExpiry) {
    return accessToken;
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    },
    body: 'grant_type=client_credentials'
  });

  if (!response.ok) {
    throw new Error('Failed to authenticate with Spotify');
  }

  const data = await response.json();
  accessToken = data.access_token;
  tokenExpiry = Date.now() + (data.expires_in * 1000);
  
  return accessToken;
}

// Search for artists
export async function searchArtists(query) {
  try {
    const token = await getAccessToken();
    
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=artist&limit=10`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to search artists');
    }

    const data = await response.json();
    return data.artists.items;
  } catch (error) {
    console.error('Error searching artists:', error);
    throw new Error('Failed to search artists. Please try again.');
  }
}

// Get artist details
export async function getArtist(artistId) {
  try {
    const token = await getAccessToken();
    
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch artist');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching artist:', error);
    throw new Error('Failed to load artist details. Please try again.');
  }
}

// Get artist albums
export async function getArtistAlbums(artistId) {
  try {
    const token = await getAccessToken();
    
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US&limit=50`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch albums');
    }

    const data = await response.json();
    
    // Remove duplicates (same album, different markets)
    const uniqueAlbums = [];
    const albumNames = new Set();
    
    for (const album of data.items) {
      const normalizedName = album.name.toLowerCase();
      if (!albumNames.has(normalizedName)) {
        albumNames.add(normalizedName);
        uniqueAlbums.push({
          ...album,
          label: album.label || 'Unknown Label'
        });
      }
    }

    return uniqueAlbums;
  } catch (error) {
    console.error('Error fetching artist albums:', error);
    throw new Error('Failed to load artist albums. Please try again.');
  }
}