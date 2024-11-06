import React, { useState } from 'react';
import axios from 'axios';

const SearchComponent = () => {
  const [name, setName] = useState('');
  const [searches, setSearches] = useState(() => {
    const saved = localStorage.getItem('searches');
    return saved ? JSON.parse(saved) : [];
  });
  const [location, setLocation] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const handleSearch = async () => {
    if (name) {
      try {
        const response = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.6584dedf570db28244e7ac72ecd52099&q=${name}&format=json`);
        const locationName = response.data[0]?.display_name || 'Location not found';
        setLocation(locationName);

        setSearches((prev) => {
          const updated = [...prev, name];
          localStorage.setItem('searches', JSON.stringify(updated));
          return updated;
        });
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    }
  };

  const handleUpdate = () => {
    if (editIndex !== null && name) {
      const updatedSearches = [...searches];
      updatedSearches[editIndex] = name;
      setSearches(updatedSearches);
      localStorage.setItem('searches', JSON.stringify(updatedSearches));
      setEditIndex(null);
      setName('');
    }
  };

  const handleEdit = (index) => {
    setName(searches[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedSearches = searches.filter((_, i) => i !== index);
    setSearches(updatedSearches);
    localStorage.setItem('searches', JSON.stringify(updatedSearches));
  };

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {editIndex !== null ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleSearch}>Search</button>
      )}
      {location && <p>Location: {location}</p>}
      <ul>
        {searches.map((search, index) => (
          <li key={index}>
            {search}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
