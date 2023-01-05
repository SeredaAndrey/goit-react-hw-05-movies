/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import * as API from '../api/API';
import {
  MovieDetailsCommonContainer,
  MovieDetailsContainer,
  MovieOverviewContainer,
  ButtonContainer,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const params = useParams();
  const [Articles, setArticles] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchArticles();
  }, []);

  function fetchArticles() {
    fetch(`${API.BASE_URL}/movie/${params.movieId}?api_key=${API.API_KEY}`)
      .then(response => response.json())
      .then(response => {
        setArticles(response);
      })
      .catch(console.error());
  }
  if (Articles.success === false)
    return (
      <MovieDetailsCommonContainer>
        <NavLink to="/">go back</NavLink>
        <MovieDetailsContainer>
          <div>We don`t have any details for this movie</div>
        </MovieDetailsContainer>
      </MovieDetailsCommonContainer>
    );

  const { original_title, poster_path, overview, vote_average, genres } =
    Articles;

  const backLinkHref = location.state?.from ?? '/';

  return (
    <MovieDetailsCommonContainer>
      <NavLink to={backLinkHref}>go back</NavLink>
      <MovieDetailsContainer>
        <img
          src={`${API.IMAGE_BASE_URL}${poster_path}`}
          alt={original_title}
          width="300"
        />
        <MovieOverviewContainer>
          <h2>{original_title}</h2>
          <p>User score {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres &&
            genres.map(({ name }) => {
              return name + ' ';
            })}
        </MovieOverviewContainer>
      </MovieDetailsContainer>
      <h3>Additional information</h3>
      <ButtonContainer>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </ButtonContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </MovieDetailsCommonContainer>
  );
}
