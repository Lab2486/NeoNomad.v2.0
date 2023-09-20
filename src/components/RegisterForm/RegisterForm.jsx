import "./RegisterForm.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import GoogleLoginBtn from "../GoogleLogin/GoogleLogin";
import { GoogleOAuthProvider } from "@react-oauth/google";

function RegisterForm() {
  const initialData = {
    name: "",
    email: "",
    password: "",
  };

  const onValidate = (form) => {
    const errors = {};
    let regexName = new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/);
    let regexEmail = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/);

    if (!form.name.trim()) {
      errors.name = 'El campo "Name" no debe ser vacio.';
    } else if (!regexName.test(form.name)) {
      errors.name = 'El campo "Name" solo acepta letras y espacios.';
    }

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

  const { form, errors, handleChange, handleSubmit, handleRegister } = useForm(
    initialData,
    onValidate
  );

  return (
    <GoogleOAuthProvider clientId="561435971098-mv7biviceifopjq9q53gv18nja720svg.apps.googleusercontent.com">
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
            <form className="form" onSubmit={handleRegister}>
              <label>Name</label>
              <input
                type="text"
                // required
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && (
                <div className="alert alert-danger p-1 " role="alert">
                  {errors.name}
                </div>
              )}

              <label>Email</label>
              <input
                type="email"
                //required
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="alert alert-danger p-1 " role="alert">
                  {errors.email}
                </div>
              )}

              <label>Password</label>
              <input
                type="password"
                // required
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
                Create Account
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

export default RegisterForm;
