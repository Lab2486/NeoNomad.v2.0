import "./LoginForm.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";
import GoogleLoginBtn from "../GoogleLogin/GoogleLogin";
import { GoogleOAuthProvider } from "@react-oauth/google";

function LoginForm() {
  const initialData = {
    email: "",
    password: "",
  };

  const onValidate = (form) => {
    const errors = {};

    let regexEmail = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/);

    if (!form.email.trim()) {
      errors.email = 'El campo "Email" no debe ser vacio.';
    } else if (!regexEmail.test(form.email)) {
      errors.email = 'El campo "Correo" contiene un formato no valido.';
    }

    if (!form.password.trim()) {
      errors.password = "El campo contraseña está vacío";
    } else if (form.password.length < 8) {
      errors.password = "La contraseña debe tener al menos 8 caracteres";
    }

    return errors;
  };

  const { form, errors, handleChange, handleSubmit, handleLogin } = useForm(
    initialData,
    onValidate
  );

  return (
    <GoogleOAuthProvider clientId="561435971098-mv7biviceifopjq9q53gv18nja720svg.apps.googleusercontent.com">
      <div className="loginFormContainer">
        <div className="loginFormWrapper">
          <header className="loginFromHeader">
            <img className="formLogo" src="/Brand.png" alt="logo" />
            <h2>Log in to Neo Nomad</h2>
          </header>
          <main className="loginFromMain">
            <form onSubmit={handleLogin} className="form">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="alert alert-danger p-1 " role="alert">
                  {errors.email}
                </div>
              )}
              <label className=" passwordtext">
                Password{" "}
                <Link className="forgotLink" to="/forgotpass">
                  Forgot your password?
                </Link>
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="alert alert-danger p-1 " role="alert">
                  {errors.password}
                </div>
              )}
              <button className="formBtn">
                Continue
                <AiOutlineArrowRight />
              </button>
            </form>
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
