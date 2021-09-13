import { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import '../components/HomePage/HomePage.scss';

import MoviesPage from '../components/MoviesPage/MoviesPages';
import { getSearchMovies } from '../services/moviesshelf-api';

export default function MoviesPageView() {
  const location = useLocation();
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search === '') {
      return;
    }
    if (search) {
      history.push({
        ...location,
        search: `?query=${search}`,
      });
    }
    getSearchMovies(search).then(response => {
      const fetchedMovies = response.data.results.map(movie => {
        return {
          movieId: movie.id,
          movieName: movie.title ?? movie.name,
        };
      });
      setMovies(prevState => [...prevState, ...fetchedMovies]);
    });
  }, [search]);

  useEffect(() => {
    if (location.search === '') {
      return;
    }
    const param = new URLSearchParams(location.search).get('query');
    setSearch(param);
  }, [location.search]);

  const onSearchHandle = query => {
    setSearch(query);
    setMovies([]);
  };

  return (
    <>
      <MoviesPage onSearch={onSearchHandle} />
      {movies && (
        <ul className="trend__movies-list">
          {movies.map(({ movieId, movieName }) => (
            <li key={movieId} className="trend__movies-item">
              <Link
                to={{
                  pathname: `/movies/${movieId}`,
                  state: { from: location },
                }}
                className="trend__movies-link"
              >
                {movieName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
