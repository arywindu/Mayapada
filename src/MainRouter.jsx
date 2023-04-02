import { Route, Routes } from "react-router-dom";

import Administrasi from "./pages/Akademik/Administrasi/Administrasi";
import AlumniStory from "./pages/Alumni/AlumniStory/AlumniStory";
import Home from "./pages/Home/Home";
import IkatanAlumni from "./pages/Alumni/IkatanAlumni/IkatanAlumni";
import JalurBeasiswa from "./pages/PMB/JalurBeasiswa/JalurBeasiswa";
import JalurMandiri from "./pages/PMB/JalurMandiri/JalurMandiri";
import Keperawatan from "./pages/Akademik/Keperawatan/Keperawatan";
import PenerimaanMahasiswa from "./pages/PMB/PenerimaanMahasiswa/PenerimaanMahasiswa";
import PusatKarir from "./pages/PusatKarir/PusatKarir";
import TracerStudy from "./pages/Alumni/TracerStudy/TracerStudy";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Administrasi" element={<Administrasi />} />
      <Route path="/Keperawatan" element={<Keperawatan />} />
      <Route path="/PusatKarir" element={<PusatKarir />} />
      <Route path="/IkatanAlumni" element={<IkatanAlumni />} />
      <Route path="/TracerStudy" element={<TracerStudy />} />
      <Route path="/AlumniStory" element={<AlumniStory />} />
      <Route path="/PenerimaanMahasiswa" element={<PenerimaanMahasiswa />} />
      <Route path="/JalurMandiri" element={<JalurMandiri />} />
      <Route path="/JalurBeasiswa" element={<JalurBeasiswa />} />
    </Routes>
  );
};
