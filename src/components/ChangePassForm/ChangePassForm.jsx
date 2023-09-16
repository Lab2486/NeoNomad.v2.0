import "./ChangePassForm.css";

function ChangePassForm() {
  return (
    <div className="newPassFormContainer">
      <div className="newPassFormWrapper">
        <header className="newPassFromHeader">
          <img className="formLogo" src="/Brand.png" alt="logo" />
          <h2>Add new password</h2>
          <p>This will be your new password, try not to forget it</p>
        </header>
        <main className="newPassFromMain">
          <div className="newPassForm">
            <p>New Password</p>
            <input type="password" />
            <p>Repeat Password</p>
            <input type="password" />
            <button className="formBtn">Change password</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ChangePassForm;
