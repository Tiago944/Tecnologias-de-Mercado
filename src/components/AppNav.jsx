import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <ul className="list-links">
      <li>
        <NavLink to="/movies">Movies</NavLink>
      </li>
      <li>
        <NavLink to="/wishlist">Wishlist</NavLink>
      </li>
      <li>
        <NavLink to="/reviews">Reviews</NavLink>
      </li>
    </ul>
  );
};

export default AppNav;
