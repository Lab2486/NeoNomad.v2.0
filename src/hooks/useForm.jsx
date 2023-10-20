import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const useForm = (initialData, onValidate) => {
  const [form, setForm] = useState(initialData);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = onValidate(form);
    setErrors(err);
    console.log(Object.keys(err).length);
    console.log(form);
    if (Object.keys(err).length === 0) {
      try {
        const { data } = await axios.post(
          "https://nomad-api-drtc.onrender.com/auth/local/signUp",
          form
        );

        Swal.fire({
          title: `Bienvenid@ ${form.name}`,
          text: `${data.message}`,
          icon: "success",
          confirmButtonText: "Cool",
        });
      } catch (error) {
        if (error.status === 400) {
          console.log(error.response.data);
        }
        if (error.status === 500) {
          console.log(error.response.data);
        }
      }
    }
  };

  //REGISTRO------------------------------------V

  const handleRegister = async (e) => {
    e.preventDefault();
    const err = onValidate(form);
    setErrors(err);
    console.log(Object.keys(err).length);
    console.log(form);
    if (Object.keys(err).length === 0) {
      try {
        const { data } = await axios.post(
          "https://nomad-api-drtc.onrender.com/auth/local/signUp",
          form
        );

        Swal.fire({
          title: `Bienvenid@ ${form.name}`,
          text: `${data.message}`,
          icon: "success",
          confirmButtonText: "Cool",
        });
        let dataString = JSON.stringify(data);
        console.log(dataString);

        localStorage.setItem("userData", dataString);
      } catch (error) {
        if (error.status === 400) {
          Swal.fire({
            title: `Error`,
            text: `${error}`,
            icon: "error",
            confirmButtonText: "Okey",
          });
          console.log(error.response.data);
        }
        if (error.status === 401) {
          Swal.fire({
            title: `Error`,
            text: `${error}`,
            icon: "error",
            confirmButtonText: "Okey",
          });
          console.log(error.response.data);
        }
        if (error.status === 500) {
          console.log(error.response.data);
        }
      }
    }
  };

  //LOGIN------------------------------V
  const handleLogin = async (e) => {
    e.preventDefault();
    const err = onValidate(form);
    setErrors(err);
    console.log(Object.keys(err).length);
    console.log(form);
    if (Object.keys(err).length === 0) {
      try {
        const { data } = await axios.post(
          "https://nomad-api-drtc.onrender.com/auth/local/signIn",
          form
        );
        console.log(data);

        Swal.fire({
          title: `Iniciaste sesion`,
          icon: "success",
          confirmButtonText: "Ir al inicio",
        });
        let auth = data.authorization;
        localStorage.setItem("authorization", auth);
        console.log(auth);
        navigate("/");
      } catch (error) {
        console.log(error);

        if (error.response.status === 401) {
          Swal.fire({
            title: `${error.response.data.error}`,
            text: `Verifica que los datos ingresados sean correctos`,
            icon: "error",
            confirmButtonText: "Okay",
          });
          console.log(error.response.data.error);
        }
        if (error.response.status === 400) {
          Swal.fire({
            title: `${error.response.data.error}`,
            text: `Verifica que los datos ingresados sean correctos`,
            icon: "error",
            confirmButtonText: "Okay",
          });
          console.log("ERROR 400");
        }

        if (error.response.status === 500) {
          console.log(error.response.data);
        }
      }
    }
  };

  //FORGOT PASSWORD----------------------V
  const handleForgotPass = async (e) => {
    e.preventDefault();
    const err = onValidate(form);
    setErrors(err);
    console.log(Object.keys(err).length);
    console.log(form.email);

    if (Object.keys(err).length === 0) {
      try {
        const { data } = await axios.get(
          "https://nomad-api-drtc.onrender.com/auth/send/resetPassword",
          form.email
        );
        console.log(data);
      } catch (error) {
        console.log(error);
        console.log("CONSOLE DE FORM------------>", form.email);
        if (error.response.status === 400) {
          Swal.fire({
            title: `Error`,
            text: `${error.response.data.errors.email}`,
            icon: "error",
            confirmButtonText: "Okay",
          });
        }
        if (error.status === 500) {
          console.log(data.errors);
        }
      }
    }
  };

  return {
    form,
    errors,
    handleChange,
    handleSubmit,
    handleRegister,
    handleLogin,
    handleForgotPass,
  };
};
export default useForm;
