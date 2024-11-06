import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import SearchComponent from '../components/SearchComponent';
import { GET_LOCATION } from '../queries/Queries';

const mocks = [
  {
    request: {
      query: GET_LOCATION,
      variables: { name: 'test' },
    },
    result: {
      data: {
        characters: {
          results: [
            {
              id: 1,
              location: {
                name: 'Test Location',
              },
            },
          ],
        },
      },
    },
  },
];

describe('SearchComponent', () => {
  it('renders the search input and button', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <SearchComponent />
      </MockedProvider>
    );

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('updates the name state when input value changes', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <SearchComponent />
      </MockedProvider>
    );

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(input.value).toBe('test');
  });
});
