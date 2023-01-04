import styled from '@emotion/styled';

export const MovieDetailsCommonContainer = styled.div`
  width: 650px;
  margin: 20px auto;
`;

export const MovieDetailsContainer = styled.div`
  display: flex;

  margin: 20px 0;
`;

export const MovieOverviewContainer = styled.div`
  margin: 0 0 0 50px;

  width: 300px;
`;

export const ButtonContainer = styled.div`
  margin: 20px 0 20px 0;
  padding: 0;

  > a {
    padding: 12px 30px;
    border-radius: 5px;
    text-decoration: none;

    color: black;

    text-transform: uppercase;
  }

  .active {
    background-color: blue;
    color: white;
  }
  :hover :not(.active) {
    color: blue;
  }
`;
