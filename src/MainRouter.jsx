import { Route, Routes } from "react-router-dom";

import Administrasi from "./pages/Akademik/Administrasi/Administrasi";
import Home from "./pages/Home/Home";
import Keperawatan from "./pages/Akademik/Keperawatan/Keperawatan";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Administrasi" element={<Administrasi />} />
      <Route path="/Keperawatan" element={<Keperawatan />} />
    </Routes>
  );
};
