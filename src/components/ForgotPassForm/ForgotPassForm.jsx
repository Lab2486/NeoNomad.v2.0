import { Link } from "react-router-dom";
import "./ForgotPassForm.css";
import useForm from "../../hooks/useForm";

function ForgotPassForm() {
  const initialData = {
    email: "",
  };
 
  const onValidate = (form) => {
    const errors = {};

    let regexEmail = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/);

    if (!form.email.trim()) {
      errors.email = 'El campo "Email" no debe ser vacio.';
    } else if (!regexEmail.test(form.email)) {
      errors.email = 'El campo "Correo" contiene un formato no valido.';
    }

    return errors;
  };
  const { form, errors, handleChange, handleSubmit, handleForgotPass } =
    useForm(initialData, onValidate);

  return (
    <div className="forgotFormContainer">
      <div className="forgotFormWrapper">
        <header className="forgotFromHeader">
          <img className="formLogo" src="/Brand.png" alt="logo" />
          <h2>Add your email to recive confirmation of password reset</h2>
        </header>
        <main className="forgotFromMain">
          <form onSubmit={handleForgotPass} className="forgotForm">
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
            <button className="formBtn">Send Reset Instructions</button>
            <Link to="/resetpassword">Create new password</Link>
          </form>
        </main>
      </div>
    </div>
  );
}

export default ForgotPassForm;
