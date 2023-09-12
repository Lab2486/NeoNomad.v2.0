import "./RegisterForm.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <div className="registerFormContainer">
      <div className="registerFormWrapper">
        <header className="registerFromHeader">
          <img className="formLogo" src="/Brand.png" alt="logo" />
          <h2>Create a Neo Nomad account</h2>
          <h3>
            Already have an account?{" "}
            <Link className="linkRegister" to="/login">
              Log In
            </Link>
          </h3>
        </header>
        <main className="registerFromMain">
          <div className="form">
            <p>Name</p>
            <input type="text" required />
            <p>Email</p>
            <input type="email" required />
            <p>Password</p>
            <input type="password" required />
            <button className="formBtn">
              Create Account
              <AiOutlineArrowRight />
            </button>
          </div>
        </main>
        <div className="or">
          <div className="linesOr"></div>
          <p>OR</p>
          <div className="linesOr"></div>
        </div>
        <footer className="loginFromFooter">
          <button className="formBtnGoogle">
            <FcGoogle />
            Sign Up with Google
          </button>
        </footer>
      </div>
    </div>
  );
}

export default RegisterForm;
