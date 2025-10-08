import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {
  it('renders search input and button', () => {
    render(<SearchBar onSearch={() => {}} />);
    
    const input = screen.getByPlaceholderText(/search for an artist/i);
    const button = screen.getByRole('button');
    
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('calls onSearch when form is submitted', () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} />);
    
    const input = screen.getByPlaceholderText(/search for an artist/i);
    const button = screen.getByRole('button');
    
    fireEvent.change(input, { target: { value: 'Taylor Swift' } });
    fireEvent.click(button);
    
    expect(mockOnSearch).toHaveBeenCalledWith('Taylor Swift');
  });

  it('does not call onSearch with empty query', () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(mockOnSearch).not.toHaveBeenCalled();
  });
});