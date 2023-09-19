import "./ResetPassForm.css";
import useForm from "../../hooks/useForm";

function ResetPassForm() {
  const initialData = {
    password: "",
    newPassword: "",
  };
  const onValidate = (form) => {
    const errors = {};

    if (!form.password.trim()) {
      errors.password = "El campo contraseña está vacío";
    } else if (form.password.length < 8) {
      errors.password = "La contraseña debe tener al menos 8 caracteres";
    }
    if (form.newPassword != form.password) {
      errors.newPassword = "Las contraseñas no coinciden";
    }
    return errors;
  };

  const { form, errors, handleChange, handleSubmit } = useForm(
    initialData,
    onValidate
  );
  return (
    <div className="resetFormContainer">
      <div className="resetFormWrapper">
        <header className="resetFromHeader">
          <img className="formLogo" src="/Brand.png" alt="logo" />
          <h2>Reset Password</h2>
        </header>
        <main className="resetFromMain">
          <form className="resetForm" onSubmit={handleSubmit}>
            <label>NewPassword</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="alert alert-danger p-1 " role="alert">
                {errors.password}
              </div>
            )}

            <label>Repeat password</label>
            <input
              type="password"
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
            />
            {errors.newPassword && (
              <div className="alert alert-danger p-1 " role="alert">
                {errors.newPassword}
              </div>
            )}

            <button className="formBtn">Reset Password</button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default ResetPassForm;
