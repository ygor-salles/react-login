import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/homepage";
import { Login } from "../pages/login";
import { Profile } from "../pages/profile";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pagina-inicial" element={<Homepage />} />

        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};
