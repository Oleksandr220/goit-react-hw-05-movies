import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from './components/Container/Container';
import Appbar from './components/AppBar/AppBar';
import HomePage from './components/HomePage/HomePage';
import MovieDetails from './views/MovieDetails';
import MoviesPageView from './views/MoviesPageView';

function App() {
  return (
    <Container>
      <Appbar />
      <Suspense fallback={<h3>Loading</h3>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPageView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetails />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
