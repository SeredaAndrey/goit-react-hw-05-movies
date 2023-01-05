import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import Header from './header/Header';
import Movies from './movies/Movies';
import Home from './home/Home';
// import MovieDetails from './moviedetails/MovieDetails';
// import Cast from './cast/Cast';
// import Reviews from './reviews/Reviews';
// import SearchMovie from './searchmovie/SearchMovie';
// const Movies = lazy(() => import('./movies/Movies'));
// const Home = lazy(() => import('./layout/Home'));
const MovieDetails = lazy(() => import('./moviedetails/MovieDetails'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));
const SearchMovie = lazy(() => import('./searchmovie/SearchMovie'));

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Movies />}>
          <Route path="/movies" element={<SearchMovie />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
