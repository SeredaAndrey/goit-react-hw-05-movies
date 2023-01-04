import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as API from '../api/API';

export default function Layout() {
  const [Articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  function fetchArticles() {
    fetch(`${API.BASE_URL}/trending/all/day?api_key=${API.API_KEY}`)
      .then(response => response.json())
      .then(response => {
        setArticles(response.results);
      })
      .catch(console.error());
  }
  if (!Articles) return null;

  return (
    <div>
      <ul>
        {Articles.map(({ id, name, title }) => {
          return (
            <NavLink key={id} to={`movies/${id}`}>
              <div>{name ? <p>{name}</p> : <p>{title}</p>}</div>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}
