import styled from '@emotion/styled';

export const SearchListContainer = styled.div`
  margin: 0 auto;
  width: 650px;
`;

export const SearchingList = styled.ul`
  margin: 16px 0 0 0;
  padding: 0;
`;
export const SearchingItem = styled.li`
  margin: 0;
  border-radius: 5px;
  /* padding: 10px 0 10px 40px; */
  list-style-type: none;

  > a {
    text-decoration: none;
  }
  :hover {
    > a {
      color: white;
    }

    background-color: blue;
  }
`;
export const SearchigItemText = styled.p`
  margin: 0;
  padding: 10px 0 10px 40px;
`;
