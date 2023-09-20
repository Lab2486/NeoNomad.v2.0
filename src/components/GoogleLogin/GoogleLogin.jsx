import { useGoogleLogin } from "@react-oauth/google";
import "./GoogleLogin.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function GoogleLoginBtn() {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      // Convertir el objeto 'tokenResponse' a una cadena de texto
      var tokenString = JSON.stringify(tokenResponse);

      // Guardar la cadena de texto en localStorage
      localStorage.setItem("token", tokenString);

      console.log(tokenResponse);

      navigate("/");
    },
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
