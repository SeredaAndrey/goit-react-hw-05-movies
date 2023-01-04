import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as API from '../api/API';
import {
  LayoutContainer,
  TrendingTitle,
  TrendingList,
  TrendingItem,
  TrendingText,
} from './Layout.styled';

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
    <LayoutContainer>
      <TrendingTitle>Trending today</TrendingTitle>
      <TrendingList>
        {Articles.map(({ id, name, title }) => {
          return (
            <TrendingItem key={id}>
              <NavLink to={`movies/${id}`}>
                {name ? (
                  <TrendingText>{name}</TrendingText>
                ) : (
                  <TrendingText>{title}</TrendingText>
                )}
              </NavLink>
            </TrendingItem>
          );
        })}
      </TrendingList>
    </LayoutContainer>
  );
}
