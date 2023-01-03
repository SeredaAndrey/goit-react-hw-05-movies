import { Routes, Route } from 'react-router-dom';
import { Movies } from './movies/Movies';
import { Header } from './header/Header';
import Home from './home/Home';
import MovieDetails from './home/moviedetails/MovieDetails';
import { Cast } from './cast/Cast';
import { Reviews } from './reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}>
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
};
