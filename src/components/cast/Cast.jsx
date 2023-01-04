/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../api/API';

export default function Cast() {
  const [Articles, setArticles] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchArticles();
  }, []);

  function fetchArticles() {
    fetch(
      `${API.BASE_URL}/movie/${params.movieId}/credits?api_key=${API.API_KEY}&language=en-US`
    )
      .then(response => response.json())
      .then(response => {
        setArticles(response.cast);
      })
      .catch(console.error());
  }
  if (!Articles) return null;

  console.log(Articles);

  return (
    <div>
      <ul>
        {Articles.map(({ name, character, id }) => {
          return (
            <li key={id}>
              <img src="" alt={name} width="100" />
              <p>name</p>
              <p>character</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
