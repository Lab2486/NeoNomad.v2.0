import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="registerPageCont">
      <section className="formCont">
        <RegisterForm />
      </section>
    </div>
  );
}

export default SignUp;
