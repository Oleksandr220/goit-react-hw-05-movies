import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovies } from '../../services/moviesshelf-api';

import './HomePage.scss';

export default function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchMovies().then(response => {
      const fetchedMovies = response.data.results.map(movie => movie);
      setMovies(fetchedMovies);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies && (
        <ul className="trend__movies-list">
          {movies.map(movie => (
            <li key={movie.id} className="trend__movies-item">
              <Link
                to={{
                  pathname: `/movies/${movie.id}}`,
                  state: { from: location },
                }}
                className="trend__movies-link"
              >
                {movie.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
