import "./RegisterForm.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import validation from "../../context/formContext";
import { useState } from "react";
import axios from "axios";

function RegisterForm() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
  };

  // const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      name: "Jose",
      email: "eljose11@jose.com",
      password: "jose1234",
    };
    axios
      .post("http://localhost:3001/auth/signup", user)
      .then((respuesta) => {
        console.log(respuesta.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // try {
    //   console.log("PERRO");
    // } catch (error) {
    //   console.log(error);
    // }
  };

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
            <input onChange={handleChange} type="text" required />
            {errors.name ? <p>{errors.name}</p> : ""}
            <p>Email</p>
            <input onChange={handleChange} type="email" required />
            <p>Password</p>
            <input onChange={handleChange} type="password" required />
            <button className="formBtn" onClick={handleSubmit}>
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
