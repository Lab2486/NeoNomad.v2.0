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
      } catch (error) {
        if (error.status === 401) {
          Swal.fire({
            title: `Error`,
            text: `${error}`,
            icon: "error",
            confirmButtonText: "Cool",
          });
          console.log(error.response.data);
        }
        if (error.status === 500) {
          console.log(error.response.data);
        }
      }
    }
  };
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
        if (error.status === 400) {
          Swal.fire({
            title: `${data.status}`,
            text: `${data.message}`,
            icon: "error",
            confirmButtonText: "Okay",
          });
          console.log(error.response.data);
        }
        if (error.status === 500) {
          console.log(error.response.data);
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
  };
};
export default useForm;
