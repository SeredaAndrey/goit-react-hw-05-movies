import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ReviewsItem = styled.li`
  margin: 0;
  padding: 10px;

  list-style-type: none;

  border-radius: 4px;

  background-color: grey;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const ReviewAutor = styled.h3`
  margin: 0 0 20px 0;
  padding: 0;
`;
export const ReviewText = styled.p`
  margin: 0;
  padding: 0;
`;
