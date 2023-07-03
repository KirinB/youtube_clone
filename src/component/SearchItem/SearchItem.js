import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchItem.css";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

function SearchItem({ item }) {
  return (
    <li>
      <div className="wrapper-search-item">
        <div className="title-search-item">
          <FontAwesomeIcon
            className="icon-title-item"
            icon={faClockRotateLeft}
          />
          <span> {item} </span>
        </div>
        <a href="./" className="delete-btn-search">
          Xóa
        </a>
      </div>
    </li>
  );
}

export default SearchItem;
