import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='nav'>
      <Link to='/' className='site-title'>
        <h1>cycle tracker </h1>
      </Link>
      <ul className='navLinks'>
        <li>
          <Link to='/history'>History</Link>
        </li>
        <li>
          <Link to='/symptoms'>Symptoms </Link>
        </li>
        <li>
          <Link to='/fertility'>Fertility </Link>
        </li>
        <li>
          <Link to='/fitness'>Fitness </Link>
        </li>
        <li>
          <Link to='/sleep'>Sleep </Link>
        </li>
        <li>
          <Link to='/health'>Health </Link>
        </li>
        <li>
          <Link to='/journal'>Journal </Link>
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
