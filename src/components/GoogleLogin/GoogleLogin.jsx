import { useGoogleLogin } from "@react-oauth/google";
import "./GoogleLogin.css";
import { FcGoogle } from "react-icons/fc";

function GoogleLoginBtn() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    flow: "auth-code",
  });
  return (
    <>
      <button className="googleBtn" onClick={() => login()}>
        <FcGoogle />
        Acceder con Google
      </button>
    </>
  );
}

export default GoogleLoginBtn;
