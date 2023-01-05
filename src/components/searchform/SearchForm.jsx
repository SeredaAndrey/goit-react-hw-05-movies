import { useState } from 'react';
import { SearchFormContainer } from './SearchForm.styled';

export default function SearchForm({ onSubmit }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValueChange = event => {
    setSearchValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchValue.trim() === '') {
      alert('input search request');
    }
    onSubmit(searchValue);
    setSearchValue('');
  };

  return (
    <SearchFormContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search movies"
          onChange={handleSearchValueChange}
          value={searchValue}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </SearchFormContainer>
  );
}
