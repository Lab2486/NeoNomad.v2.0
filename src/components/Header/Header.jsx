import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headerContainer">
      <div className="header">
        <Link to="/" className="headerBrand">
          Neo Nomad
        </Link>
      </div>
    </div>
  );
}

export default Header;
