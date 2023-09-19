import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headerContainer">
      <div className="header">
        <Link to="/" className="headerBrand">
          Neo Nomad
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/forgotpass">ForgotPass</Link>
        <Link to="/resetpassword">ResetPass</Link>
        <Link></Link>
        <Link></Link>
      </div>
    </div>
  );
}

export default Header;
