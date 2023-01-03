import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Movies } from './movies/Movies';
import { Header } from './header/Header';
import Home from './home/Home';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <Header />
      {/* <nav> */}
      {/* <StyledLink to="/">Home</StyledLink> */}
      {/* <StyledLink to="/movies">Movies</StyledLink> */}
      {/* </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
};
