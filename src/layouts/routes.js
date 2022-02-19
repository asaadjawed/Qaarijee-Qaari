import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import AdminDash from "../views/AdminDash";
const Layouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adminDash" element={<AdminDash />} />
    </Routes>
  );
};

export default Layouts;
