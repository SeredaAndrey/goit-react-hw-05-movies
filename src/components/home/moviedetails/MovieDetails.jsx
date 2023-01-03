/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import * as API from '../../api/API';

export default function MovieDetails() {
  const params = useParams();
  const [Articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  function fetchArticles() {
    fetch(
      `${API.BASE_URL}movie/${params.movieId}?api_key=${API.API_KEY}&append_to_response=videos,images`
    )
      .then(response => response.json())
      .then(response => {
        setArticles(response);
      })
      .catch(console.error());
  }
  if (!Articles) return null;
  const { original_title, overview, vote_average, genres } = Articles;
  return (
    <div>
      <img src="" alt={original_title} />
      <h2>{original_title}</h2>
      <p>User score {vote_average * 10}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres &&
        genres.map(({ name }) => {
          return name + ' ';
        })}
      <h3>Additional information</h3>
      <Outlet />
    </div>
  );
}
