import "./Userbar.css";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Fragment } from "react";

function Userbar() {
  return (
    <div className="userbarContainer">
      <Fragment>
        <nav className="userbarWrapper">
          <ul className="userbarNav">
            <Link className="userbarLInks">
              Favorites
              <AiOutlineHeart className="userbarIcons" />
            </Link>
            <Link className="userbarLInks">
              <AiOutlineShoppingCart className="userbarIcons" />
            </Link>
            <Link to="/login" className="userbarLInks">
              <FaUserCircle className="userbarIcons" />
            </Link>
          </ul>
        </nav>
      </Fragment>
    </div>
  );
}

export default Userbar;
