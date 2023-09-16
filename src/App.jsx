import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Userbar from "./components/Userbar/Userbar";
import SignUp from "./pages/SignUp/SignUp";
import Sidebar2 from "./components/Sidebar2/Sidebar2";
import Header from "./components/Header/Header";
import Forgot from "./pages/Forgot/Forgot";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import ChangePass from "./pages/ChangePass/ChangePass";
import ItemList from "./components/ItemList/ItemList";
import AuthPrueba from "./pages/AuthPrueba/AuthPrueba";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar2 />
        {/* <Userbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpass" element={<Forgot />} />
          <Route path="/newpassword" element={<ChangePass />} />
          <Route path="/itemdetail" element={<ItemDetailPage />} />
          <Route path="/remeras" element={<ItemList />} />
          <Route path="/auth" element={<AuthPrueba />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
