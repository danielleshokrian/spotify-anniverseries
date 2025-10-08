import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AlbumCard from '../AlbumCard';

const mockAlbum = {
  id: '456',
  name: '1989',
  release_date: '2014-10-27',
  images: [{ url: 'https://example.com/album.jpg' }]
};

const mockAnniversaryAlbum = {
  ...mockAlbum,
  anniversaryYears: 10
};

describe('AlbumCard', () => {
  it('renders album name', () => {
    render(<AlbumCard album={mockAlbum} />);
    expect(screen.getByText('1989')).toBeInTheDocument();
  });

  it('displays release year', () => {
    render(<AlbumCard album={mockAlbum} />);
    expect(screen.getByText('2014')).toBeInTheDocument();
  });

  it('shows anniversary badge when anniversaryYears exists', () => {
    render(<AlbumCard album={mockAnniversaryAlbum} />);
    expect(screen.getByText(/10 Year Anniversary/i)).toBeInTheDocument();
  });

  it('does not show anniversary badge when anniversaryYears is missing', () => {
    render(<AlbumCard album={mockAlbum} />);
    expect(screen.queryByText(/Year Anniversary/i)).not.toBeInTheDocument();
  });

  it('renders album artwork', () => {
    render(<AlbumCard album={mockAlbum} />);
    const img = screen.getByAltText('1989');
    expect(img).toHaveAttribute('src', 'https://example.com/album.jpg');
  });
});