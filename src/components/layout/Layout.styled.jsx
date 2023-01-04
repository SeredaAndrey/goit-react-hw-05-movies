import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
  margin: 0 auto;
  width: 650px;
`;
export const TrendingTitle = styled.h2`
  margin: 16px 0 0 30px;
`;
export const TrendingList = styled.ul`
  margin: 16px 0 0 0;
  padding: 0;
`;
export const TrendingItem = styled.li`
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
export const TrendingText = styled.p`
  margin: 0;
  padding: 10px 0 10px 40px;
`;
