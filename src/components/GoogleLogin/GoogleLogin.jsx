import { GoogleLogin } from "@react-oauth/google";

function GoogleLoginBtn() {
  return (
    <div>
      <GoogleLogin
        shape="rectangle"
        width="400"
        useOneTap
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      ;
    </div>
  );
}

export default GoogleLoginBtn;
