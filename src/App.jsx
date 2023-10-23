import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Sidebar2 from "./components/Sidebar2/Sidebar2";
import Header from "./components/Header/Header";
import Forgot from "./pages/Forgot/Forgot";

import ItemList from "./components/ItemList/ItemList";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import Profile from "./pages/Profile/Profile";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const token = localStorage.getItem("token");
const authorization = localStorage.getItem("authorization");

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={token || authorization ? <Profile /> : <Login />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpass" element={<Forgot />} />
          <Route path="product/:id" element={<ItemDetailContainer />} />
          <Route path="/remeras" element={<ItemList />} />
          <Route path="/resetpassword" element={<ResetPasswordPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
