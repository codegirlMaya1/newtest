import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import SearchComponent from '../../components/SearchComponent';

// Mock axios
jest.mock('axios');

describe('SearchComponent', () => {
  it('renders the search input and button', () => {
    render(<SearchComponent />);

    // Check if the input and button are rendered
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('updates the name state when input value changes', () => {
    render(<SearchComponent />);

    // Simulate user typing in the input
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test' } });

    // Check if the input value is updated
    expect(input.value).toBe('test');
  });

  it('displays the location when search is successful', async () => {
    // Mock axios.get to return a successful response
    axios.get.mockResolvedValue({ data: [{ display_name: 'Test Location' }] });

    render(<SearchComponent />);

    // Simulate user typing in the input and clicking the search button
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    // Wait for the location to be displayed
    await waitFor(() => {
      expect(screen.getByText('Location: Test Location')).toBeInTheDocument();
    });
  });
});
