import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import AdminDashboard from "./pages/Admin/Dashboard/HomeAdmin";
import AdministrasiRumahSakit from "./pages/Akademik/AdministrasiRumahSakit/AdministrasiRumahSakit";
import AlumniStory from "./pages/Alumni/AlumniStory/AlumniStory";
import GalleryKegiatan from "./pages/Fasilitas/GalleryKegiatan/GalleryKegiatan";
import Home from "./pages/Home/Home";
import HubungiKami from "./pages/HubungiKami/HubungiKami";
import IkatanAlumni from "./pages/Alumni/IkatanAlumni/IkatanAlumni";
import JalurBeasiswa from "./pages/PMB/JalurBeasiswa/JalurBeasiswa";
import JalurMandiri from "./pages/PMB/JalurMandiri/JalurMandiri";
import KebijakanUpmi from "./pages/UPMI/KebijakanUpmi/KebijakanUpmi";
import KebijakanUpmiAdmin from "./pages/Admin/UPMIAdmin/KebijakanUpmiAdmin/KebijakanUpmiAdmin";
import Keperawatan from "./pages/Akademik/Keperawatan/Keperawatan";
import KeperawatanAdmin from "./pages/Admin/KeperawatanAdmin/KeperawatanAdmin";
import LoginPage from "./pages/LoginPage/LoginPage";
import ManualSpmi from "./pages/UPMI/ManualSpmi/ManualSpmi";
import ManualSpmiAdmin from "./pages/Admin/UPMIAdmin/ManualSpmiAdmin/ManualSpmiAdmin";
import PenerimaanMahasiswaBaru from "./pages/PMB/PenerimaanMahasiswaBaru/PenerimaanMahasiswaBaru";
import ProgramJalurBeasiswa from "./pages/PMB/ProgramJalurBeasiswa/ProgramJalurBeasiswa";
import PusatKarir from "./pages/PusatKarir/PusatKarir";
import PusatKarirAdmin from "./pages/Admin/PusatKarirAdmin/PusatKarirAdmin";
import RegistrasiBerhasil from "./pages/PMB/RegistrasiBerhasil/RegistrasiBerhasil";
import SOP from "./pages/UPMI/SOP/Sop";
import SaranaDanPrasarana from "./pages/Fasilitas/SaranaDanPrasarana/SaranaDanPrasarana";
import SopAdmin from "./pages/Admin/UPMIAdmin/SopAdmin/SopAdmin";
import StandarSpmi from "./pages/UPMI/StandarSPMI/StandarSPMI";
import StandarSpmiAdmin from "./pages/Admin/UPMIAdmin/StandarSpmiAdmin/StandarSpmiAdmin";
import TracerStudy from "./pages/Alumni/TracerStudy/TracerStudy";
import axios from "axios";

const Authenticate = () => {
  return (
    <Routes>
      <Route path="/HomeAdmin" element={<AdminDashboard />} />
      <Route path="/KeperawatanAdmin" element={<KeperawatanAdmin />} />
      <Route path="/SopAdmin" element={<SopAdmin />} />
      <Route path="/KebijakanUpmiAdmin" element={<KebijakanUpmiAdmin />} />
      <Route path="/ManualSpmiAdmin" element={<ManualSpmiAdmin />} />
      <Route path="/StandarSpmiAdmin" element={<StandarSpmiAdmin />} />
      <Route path="/PusatKarirAdmin" element={<PusatKarirAdmin />} />
    </Routes>
  );
};
const Unauthenticate = (props) => {
  const { handleLogin } = props;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/AdministrasiRumahSakit"
        element={<AdministrasiRumahSakit />}
      />
      <Route path="/Keperawatan" element={<Keperawatan />} />
      <Route path="/KebijakanUpmi" element={<KebijakanUpmi />} />
      <Route path="/ManualSpmi" element={<ManualSpmi />} />
      <Route path="/SOP" element={<SOP />} />
      <Route path="/StandarSpmi" element={<StandarSpmi />} />
      <Route path="/PusatKarir" element={<PusatKarir />} />
      <Route path="/IkatanAlumni" element={<IkatanAlumni />} />
      <Route path="/TracerStudy" element={<TracerStudy />} />
      <Route path="/AlumniStory" element={<AlumniStory />} />
      <Route
        path="/PenerimaanMahasiswaBaru"
        element={<PenerimaanMahasiswaBaru />}
      />
      <Route path="/JalurMandiri" element={<JalurMandiri />} />
      <Route path="/JalurBeasiswa" element={<JalurBeasiswa />} />
      <Route path="/SaranaDanPrasarana" element={<SaranaDanPrasarana />} />
      <Route path="/GalleryKegiatan" element={<GalleryKegiatan />} />
      <Route path="/PJB" element={<ProgramJalurBeasiswa />} />
      <Route path="/RegistrasiBerhasil" element={<RegistrasiBerhasil />} />
      <Route path="/HubungiKami" element={<HubungiKami />} />

      <Route
        path="/LoginPage"
        element={<LoginPage handleLogin={handleLogin} />}
      />
    </Routes>
  );
};

export const MainRouter = () => {
  const token = localStorage.getItem("token");

  let navigate = useNavigate();

  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          username,
          password,
        }
      );
      console.log(response);
      const { data } = response;
      const { success, token } = data;
      if (success) {
        localStorage.setItem("token", token);
        setIsAuthenticate(true);
        navigate("/HomeAdmin");
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      console.log(error, "error");
    }
  };

  const handleLogout = () => {
    setIsAuthenticate(false);
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    setIsAuthenticate(token ? true : false);
  }, [token]);

  return isAuthenticate ? (
    <Authenticate />
  ) : (
    <Unauthenticate handleLogin={handleLogin} />
  );
};
