import { Link } from "react-router-dom";
import "./NavItem.css";
function NavItem({ item }) {
  return (
    <Link to={item.link}>
      <div className={`nav-item ${item.active}`}>
        <div className="nav--icon">{item.icon}</div>
        <p className="nav-item-title">{item.name}</p>
      </div>
    </Link>
  );
}

export default NavItem;
