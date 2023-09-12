import "./ForgotPassForm.css";
import { AiOutlineArrowRight } from "react-icons/ai";

function ForgotPassForm() {
  return (
    <div className="forgotFormContainer">
      <div className="forgotFormWrapper">
        <header className="forgotFromHeader">
          <img className="formLogo" src="/Brand.png" alt="logo" />
          <h2>Reset password</h2>
          <p>
            Include the email address associated with your account and we’ll
            send you an email with instructions to reset your password.
          </p>
        </header>
        <main className="forgotFromMain">
          <div className="forgotForm">
            <p>Email</p>
            <input type="email" />

            <button className="formBtn">Send Reset Instructions</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ForgotPassForm;
