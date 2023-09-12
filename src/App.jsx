import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Userbar from "./components/Userbar/Userbar";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        {/* <Userbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
