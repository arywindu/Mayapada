import { Route, Routes } from "react-router-dom";

import AdministrasiRumahSakit from "./pages/Akademik/AdministrasiRumahSakit/AdministrasiRumahSakit";
import AlumniStory from "./pages/Alumni/AlumniStory/AlumniStory";
import Home from "./pages/Home/Home";
import IkatanAlumni from "./pages/Alumni/IkatanAlumni/IkatanAlumni";
import JalurBeasiswa from "./pages/PMB/JalurBeasiswa/JalurBeasiswa";
import JalurMandiri from "./pages/PMB/JalurMandiri/JalurMandiri";
import Keperawatan from "./pages/Akademik/Keperawatan/Keperawatan";
import KebijakanUpmi from "./pages/UPMI/KebijakanUpmi/KebijakanUpmi";
import ManualSpmi from "./pages/UPMI/ManualSpmi/ManualSpmi";
import StandarSpmi from "./pages/UPMI/StandarSPMI/StandarSPMI";
import SOP from "./pages/UPMI/SOP/Sop";
import PenerimaanMahasiswa from "./pages/PMB/PenerimaanMahasiswa/PenerimaanMahasiswa";
import PusatKarir from "./pages/PusatKarir/PusatKarir";
import SaranaDanPrasarana from "./pages/Fasilitas/SaranaDanPrasarana/SaranaDanPrasarana"
import GalleryKegiatan from "./pages/Fasilitas/GalleryKegiatan/GalleryKegiatan"
import TracerStudy from "./pages/Alumni/TracerStudy/TracerStudy";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AdministrasiRumahSakit" element={<AdministrasiRumahSakit />} />
      <Route path="/Keperawatan" element={<Keperawatan />} />
      <Route path="/KebijakanUpmi" element={<KebijakanUpmi />} />
      <Route path="/ManualSpmi" element={<ManualSpmi />} />
      <Route path="/SOP" element={<SOP />} />
      <Route path="/StandarSpmi" element={<StandarSpmi />} />
      <Route path="/PusatKarir" element={<PusatKarir />} />
      <Route path="/IkatanAlumni" element={<IkatanAlumni />} />
      <Route path="/TracerStudy" element={<TracerStudy />} />
      <Route path="/AlumniStory" element={<AlumniStory />} />
      <Route path="/PenerimaanMahasiswa" element={<PenerimaanMahasiswa />} />
      <Route path="/JalurMandiri" element={<JalurMandiri />} />
      <Route path="/JalurBeasiswa" element={<JalurBeasiswa />} />
      <Route path="/SaranaDanPrasarana" element={<SaranaDanPrasarana />} />
      <Route path="/GalleryKegiatan" element={<GalleryKegiatan />} />
    </Routes>
  );
};
