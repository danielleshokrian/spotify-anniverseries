import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ArtistCard from '../ArtistCard';

const mockArtist = {
  id: '123',
  name: 'Taylor Swift',
  genres: ['pop', 'country'],
  followers: { total: 90000000 },
  images: [{ url: 'https://example.com/image.jpg' }]
};

describe('ArtistCard', () => {
  it('renders artist name', () => {
    render(
      <BrowserRouter>
        <ArtistCard artist={mockArtist} />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Taylor Swift')).toBeInTheDocument();
  });

  it('displays follower count in millions', () => {
    render(
      <BrowserRouter>
        <ArtistCard artist={mockArtist} />
      </BrowserRouter>
    );
    
    expect(screen.getByText(/90.0M followers/i)).toBeInTheDocument();
  });

  it('shows genres', () => {
    render(
      <BrowserRouter>
        <ArtistCard artist={mockArtist} />
      </BrowserRouter>
    );
    
    expect(screen.getByText(/pop • country/i)).toBeInTheDocument();
  });

  it('renders image when available', () => {
    render(
      <BrowserRouter>
        <ArtistCard artist={mockArtist} />
      </BrowserRouter>
    );
    
    const img = screen.getByAltText('Taylor Swift');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg');
  });
});