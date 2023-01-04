import { NavLink } from 'react-router-dom';

import { HeaderNav, HeaderNavList, HeaderNavItem } from './Header.styled';

const navItem = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const Header = () => {
  return (
    <HeaderNav>
      <HeaderNavList>
        {navItem.map(({ href, text }) => (
          <HeaderNavItem>
            <NavLink to={href} key={href}>
              {text}
            </NavLink>
          </HeaderNavItem>
        ))}
      </HeaderNavList>
    </HeaderNav>
  );
};
