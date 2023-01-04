import styled from '@emotion/styled';

export const CastContainer = styled.div`
  //   width: 650px;
`;

export const CastList = styled.ul`
  display: grid;
  width: 650px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  margin: -10px;
  padding: 0;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10px;
  padding: 10px;

  height: 250px;
  width: 180px;

  list-style-type: none;

  border-radius: 4px;

  background-color: grey;
`;

export const CastTextB = styled.b`
  margin: 2px 0;
  padding: 0px;
  text-align: center;
`;
export const CastTextP = styled.p`
  margin: 2px 0;
  padding: 0px;
  text-align: center;
`;
