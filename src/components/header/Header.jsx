import { Link } from 'react-router-dom';
const navItem = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];
export const Header = () => {
  return (
    <div>
      {navItem.map(({ href, text }) => (
        <Link to={href} key={href}>
          {text}
        </Link>
      ))}
    </div>
  );
};
