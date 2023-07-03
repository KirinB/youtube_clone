import "./NavItemHidden.css";
import { Link } from "react-router-dom";
function NavItemHidden({ item }) {
  return (
    <Link to={item.link}>
      <div className="NavItemHidden">
        {item.icon}
        <div className="textNavItemHidden">{item.name}</div>
      </div>
    </Link>
  );
}

export default NavItemHidden;
