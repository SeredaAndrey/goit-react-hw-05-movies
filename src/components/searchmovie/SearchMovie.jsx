/* eslint-disable react-hooks/exhaustive-deps */
import SearchForm from 'components/searchform/SearchForm';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as API from '../api/API';
import {
  SearchListContainer,
  SearchingList,
  SearchingItem,
  SearchigItemText,
} from './SearchMovie.styled';

export default function SearchMovie() {
  const [searchValue, setSearchValue] = useState('');
  const [Articles, setArticles] = useState([]);

  useEffect(() => {
    searchValue && fetchArticles();
  }, [searchValue]);

  const handleFormSubmit = searchVal => {
    setSearchValue(searchVal);
  };

  function fetchArticles() {
    fetch(
      `${API.BASE_URL}/search/movie?api_key=${API.API_KEY}&query=${searchValue}`
    )
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
                  <NavLink to={`../../movies/${id}`}>
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
