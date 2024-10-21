import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <ul className="list-links">
      <li>
        <NavLink to="/">Movies</NavLink>
      </li>
      <li>
        <NavLink to="/">Wishlist</NavLink>
      </li>
      <li>
        <NavLink to="/">Reviews</NavLink>
      </li>
    </ul>
  );
};

export default AppNav;
