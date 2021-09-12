import { useState } from 'react';
import PropTypes from 'prop-types';

import './MoviesPage.css';

export default function MoviesPage({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleChange = event => {
    setSearch(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Проп который передается форме для вызова при сабмите
    onSearch(search);
    reset();
  };

  const reset = () => {
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="add movie"
      />
      <button type="submit">Search</button>
    </form>
  );
}

MoviesPage.propTypes = {
  onSearch: PropTypes.func,
};
