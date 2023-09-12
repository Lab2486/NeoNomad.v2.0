import "./LoginForm.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="loginFormContainer">
      <div className="loginFormWrapper">
        <header className="loginFromHeader">
          <img className="formLogo" src="/Brand.png" alt="logo" />
          <h2>Log in to Neo Nomad</h2>
        </header>
        <main className="loginFromMain">
          <div className="form">
            <p>Email</p>
            <input type="email" />
            <p>
              Password <Link>Forgot password?</Link>
            </p>
            <input type="password" />
            <button className="formBtn">
              Continue
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
            Login with Google
          </button>
        </footer>
      </div>
    </div>
  );
}

export default LoginForm;
