/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../api/API';
import {
  ReviewsList,
  ReviewsItem,
  ReviewAutor,
  ReviewText,
} from './Reviews.styled';

export default function Reviews() {
  const [Articles, setArticles] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchArticles();
  }, []);

  function fetchArticles() {
    fetch(
      `${API.BASE_URL}/movie/${params.movieId}/reviews?api_key=${API.API_KEY}&language=en-US`
    )
      .then(response => response.json())
      .then(response => {
        setArticles(response.results);
      })
      .catch(console.error());
  }
  if (Articles.length > 0) {
    return (
      <div>
        <ReviewsList>
          {Articles.map(({ id, author, content }) => {
            return (
              <ReviewsItem key={id}>
                <ReviewAutor>{author}</ReviewAutor>
                <ReviewText>{content}</ReviewText>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      </div>
    );
  } else {
    return <div>We don`t have any reviews for this movie</div>;
  }
}
