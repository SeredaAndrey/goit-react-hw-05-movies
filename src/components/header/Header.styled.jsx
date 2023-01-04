import styled from '@emotion/styled';

export const HeaderNav = styled.header`
  display: flex;

  align-items: center;

  height: 80px;
  padding-left: 20px;

  margin: 0;

  background-color: grey;
`;

export const HeaderNavList = styled.ul`
  display: flex;

  margin: 0;
  padding: 0;

  align-items: center;
`;

export const HeaderNavItem = styled.li`
  > a {
    padding: 12px 30px;
    border-radius: 5px;
    text-decoration: none;
  }

  display: block;

  margin: 0;
  padding: 0;

  list-style-type: none;

  :not(:last-child) {
    margin-right: 20px;
  }
  .active {
    background-color: blue;
    color: white;
  }
  :hover :not(.active) {
    color: blue;
  }
`;
