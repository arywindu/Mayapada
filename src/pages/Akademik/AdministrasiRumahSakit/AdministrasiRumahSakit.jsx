import './AdministrasiRumahSakit.css';
import Layout from '../../../Layout/Layout';
import AdmImage from '../../../assets/images/AdmRumahSakit.png';
import AdmImage01 from '../../../assets/images/AdmImage01.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Administrasi = () => {
  const token = localStorage.getItem('token');
  const [data, setData] = useState(null);
  const [banner, setBanner] = useState(null);
  const [textBanner, setTextBanner] = useState(null);
  const [imgVisiMisi, setImgVisiMisi] = useState(null);
  const [textVisi, setTextVisi] = useState(null);
  const [textMisi, setTextMisi] = useState(null);
  const [tahunAkademik, setTahunAkademik] = useState(null);
  const [fileGanjilAkademik, setFileGanjilAkademik] = useState(null);
  const [fileGenapAkademik, setFileGenapAkademik] = useState(null);
  const [periodeAkademik, setPeriodeAkademik] = useState(null);
  const [fileGanjilPeriode, setFileGanjilPeriode] = useState(null);
  const [fileGenapPeriode, setFileGenapPeriode] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/administrasi-rumah-sakit/1'
      );
      const responseData = response.data;
      setBanner(responseData.banner_image);
      setTextBanner(responseData.text_banner);
      setImgVisiMisi(responseData.image_visi_misi);
      setTextVisi(responseData.text_visi);
      setTextMisi(responseData.text_misi);
      setTahunAkademik(responseData.periode_tahun_akademik);
      setFileGanjilAkademik(responseData.file_akademik_ganjil);
      setFileGenapAkademik(responseData.file_akademik_genap);
      setPeriodeAkademik(responseData.jadwal_perkuliahan_periode);
      setFileGanjilPeriode(responseData.file_jadwal_ganjil);
      setFileGenapPeriode(responseData.file_jadwal_genap);
      setData(responseData);
    } catch (error) { }
  };
  return (
    <Layout>
      <div className="filter-blue-adm">
        <img className='image-adm-rs' src={banner}></img>
        <div class="centered-adm mt-5">
          <h1 className="text-white mt-5">
            Program Studi S1 Administrasi Rumah Sakit
          </h1>
          <p className="text-white mt-4">{textBanner}</p>
        </div>
      </div>

      <div className='bg-color-adm'>
        <div class="container" >
          <div class="row mt-5 pt-5">
            <div class="col-md-6">
              <h2 className="text-blue">Visi</h2>
              <div
                style={{ textAlign: 'left' }}
                dangerouslySetInnerHTML={{ __html: data && data.text_visi }}
              ></div>
              <h2 className="text-blue mt-5">Misi</h2>
              <div
                style={{ textAlign: 'left' }}
                dangerouslySetInnerHTML={{ __html: data && data.text_misi }}
              ></div>
            </div>

            <div class="col-md-6">
              <img src={imgVisiMisi} width={'95%'} height={'95%'}></img>
            </div>
          </div>
        </div>
      </div>

      <div class="container mb-5 mt-5 pt-5">
        <div class="row text-center">
          <div class="col-md-6 col-sm-12 pb-5">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title text-blue">Kalender Akademik</h5>
                <p class="card-text">Periode: {tahunAkademik}</p>
                <a
                  href={fileGanjilAkademik}
                  class="btn btn-blue text-white"
                  target="_blank"
                >
                  Semester Ganjil
                </a>
                &nbsp;&nbsp;&nbsp;
                <a
                  href={fileGenapAkademik}
                  class="btn btn-blue text-white"
                  target="_blank"
                >
                  Semester Genap
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-sm-12 pb-5">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title text-blue">Jadwal Perkuliahan</h5>
                <p class="card-text">Periode: {periodeAkademik}</p>
                <a
                  href={fileGanjilPeriode}
                  class="btn btn-blue text-white"
                  target="_blank"
                >
                  Semester Ganjil
                </a>
                &nbsp;&nbsp;&nbsp;
                <a
                  href={fileGenapPeriode}
                  class="btn btn-blue text-white"
                  target="_blank"
                >
                  Semester Genap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  );
};

export default Administrasi;
