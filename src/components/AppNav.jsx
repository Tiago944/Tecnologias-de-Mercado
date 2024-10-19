import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">Explore</NavLink>
      </li>
      <li>
        <NavLink to="/">Wishlist</NavLink>
      </li>
    </ul>
  );
};

export default AppNav;
