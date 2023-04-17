import Home from "./pages/home";
import Login from "./pages/login";
import Suplementos from "./pages/home/components/suplementos";
import Acessorios from "./pages/home/components/acessorios";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Navigate to={"/home"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/suplementos" element={<Suplementos />} />
          <Route path="/acessorios" element={<Acessorios />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
