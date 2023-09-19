import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const useForm = (initialData, onValidate) => {
  const [form, setForm] = useState(initialData);
  const [errors, setErrors] = useState({});

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

      // axios
      //   .post("https://nomad-api-drtc.onrender.com/auth/local/signUp", form)
      //   .then((response) => console.log(response.data))
      //   .catch((error) => console.log(error));
      // console.log("ENVIANDO FORM");
    }
  };

  return { form, errors, handleChange, handleSubmit };
};
export default useForm;
