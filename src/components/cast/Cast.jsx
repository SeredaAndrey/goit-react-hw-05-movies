/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../api/API';
import {
  CastContainer,
  CastList,
  CastItem,
  CastTextB,
  CastTextP,
} from './Cast.styled';

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

  return (
    <CastContainer>
      <CastList>
        {Articles.map(({ name, profile_path, character, id }) => {
          return (
            <CastItem key={id}>
              {profile_path && (
                <img
                  src={`${API.IMAGE_BASE_URL}${profile_path}`}
                  alt={name}
                  width="100"
                />
              )}
              <CastTextB>name</CastTextB>
              <CastTextP>{name}</CastTextP>
              {character && <CastTextB>character</CastTextB>}
              {character && <CastTextP>{character}</CastTextP>}
            </CastItem>
          );
        })}
      </CastList>
    </CastContainer>
  );
}
