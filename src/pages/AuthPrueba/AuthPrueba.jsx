import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginBtn from "../../components/GoogleLogin/GoogleLogin";

function AuthPrueba() {
  return (
    <GoogleOAuthProvider clientId="561435971098-mv7biviceifopjq9q53gv18nja720svg.apps.googleusercontent.com">
      <div>
        <h1>Prueba de AUTH</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti
          blanditiis ipsam. Officiis asperiores accusamus, odit ex culpa soluta
          officia autem hic eum laudantium voluptates nisi commodi quidem
          repudiandae placeat consectetur quis. Error quia adipisci architecto
          ullam nostrum repellat animi atque, modi aperiam, id sit odit
          veritatis recusandae eaque beatae!
        </p>
        <GoogleLoginBtn />
      </div>
    </GoogleOAuthProvider>
  );
}

export default AuthPrueba;
