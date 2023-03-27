import { Route, Routes } from "react-router-dom";

import Administrasi from "./pages/Akademik/Administrasi/Administrasi";
import Home from "./pages/Home/Home";
import IkatanAlumni from "./pages/Alumni/IkatanAlumni/IkatanAlumni";
import Keperawatan from "./pages/Akademik/Keperawatan/Keperawatan";
import PusatKarir from "./pages/PusatKarir/PusatKarir";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Administrasi" element={<Administrasi />} />
      <Route path="/Keperawatan" element={<Keperawatan />} />
      <Route path="/PusatKarir" element={<PusatKarir />} />
      <Route path="/IkatanAlumni" element={<IkatanAlumni />} />
    </Routes>
  );
};
