import { useState } from 'react';
import { useEffect } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f386c1d26e91200f4f9e093549893cf8';

export default function Home() {
  const [Articles, setArticles] = useState([]);

  useEffect(() => fetchArticles(), []);

  function fetchArticles() {
    fetch(`${BASE_URL}trending/all/day?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(response => {
        setArticles(response.results);
        console.log(response.results);
      })
      .catch(console.error());
  }

  return (
    <div>
      <ul>
        {Articles.map(() => {
          return <li></li>;
        })}
      </ul>
    </div>
  );
}
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
// API_KEY = 'f386c1d26e91200f4f9e093549893cf8';
