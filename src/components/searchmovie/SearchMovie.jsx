/* eslint-disable react-hooks/exhaustive-deps */
import SearchForm from 'components/searchform/SearchForm';
import { useState, useEffect } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import * as API from '../api/API';
import {
  SearchListContainer,
  SearchingList,
  SearchingItem,
  SearchigItemText,
} from './SearchMovie.styled';

export default function SearchMovie() {
  const [Articles, setArticles] = useState([]);
  const location = useLocation();
  const [serchParams, setSearchParams] = useSearchParams();
  const filter = serchParams.get('filter') ?? '';

  useEffect(() => {
    filter && fetchArticles();
  }, [filter]);

  const handleFormSubmit = searchVal => {
    setSearchParams(searchVal !== '' ? { filter: searchVal } : {});
  };

  function fetchArticles() {
    fetch(`${API.BASE_URL}/search/movie?api_key=${API.API_KEY}&query=${filter}`)
      .then(response => response.json())
      .then(response => {
        setArticles(response.results);
      })
      .catch(console.error());
  }
  return (
    <div>
      <SearchForm onSubmit={handleFormSubmit} />
      {Articles.length > 0 && (
        <SearchListContainer>
          <SearchingList>
            {Articles.map(({ id, name, title }) => {
              return (
                <SearchingItem key={id}>
                  <NavLink to={`../../movies/${id}`} state={{ from: location }}>
                    {name ? (
                      <SearchigItemText>{name}</SearchigItemText>
                    ) : (
                      <SearchigItemText>{title}</SearchigItemText>
                    )}
                  </NavLink>
                </SearchingItem>
              );
            })}
          </SearchingList>
        </SearchListContainer>
      )}
    </div>
  );
}
