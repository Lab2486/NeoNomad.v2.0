import "./LoginForm.css";
import { AiOutlineArrowRight } from "react-icons/ai";

import { Link } from "react-router-dom";
import GoogleLoginBtn from "../GoogleLogin/GoogleLogin";
import { GoogleOAuthProvider } from "@react-oauth/google";

function LoginForm() {
  return (
    <GoogleOAuthProvider clientId="561435971098-mv7biviceifopjq9q53gv18nja720svg.apps.googleusercontent.com">
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
              <p className=" passwordtext">
                Password{" "}
                <Link className="forgotLink" to="/forgotpass">
                  Forgot your password?
                </Link>
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
            <GoogleLoginBtn />
          </footer>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default LoginForm;
