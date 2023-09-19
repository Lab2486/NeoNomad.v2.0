import { useState } from "react";
import axios from "axios";
const useForm = (initialData, onValidate) => {
  const [form, setForm] = useState(initialData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const err = onValidate(form);
    setErrors(err);
    console.log(Object.keys(err).length);
    if (Object.keys(err).length === 0) {
      axios
        .post(
          "http://localhost:3001/auth/signup",
          {
            body: JSON.stringify(form),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
      console.log("ENVIANDO FORM");
    }
  };

  return { form, errors, handleChange, handleSubmit };
};
export default useForm;
