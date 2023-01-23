import { NavLink } from 'react-router-dom';
import '../css/MainHeader.css';

const MainHeader = () => (
  <header className="header">
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/">
            BOOKS
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink activeClassName="active" to="/bookcategories">
            CATEGORIES
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainHeader;
