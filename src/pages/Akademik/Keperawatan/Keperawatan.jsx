import './Keperawatan.css';
import Layout from '../../../Layout/Layout';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdmImage from '../../../assets/images/LandingKeperawatan.png';
import KepImage01 from '../../../assets/images/Keperawatan01.png';
import Typhography from '../../../components/Typhography/Typhography';
import MatkulImg1 from '../../../assets/images/matkul1.png';
import MatkulImg2 from '../../../assets/images/matkul2.png';
import MatkulImg3 from '../../../assets/images/matkul3.png';
import MatkulImg4 from '../../../assets/images/matkul4.png';
import MatkulImg5 from '../../../assets/images/matkul5.png';
import MatkulImg6 from '../../../assets/images/matkul6.png';

const dataArray = [
  {
    img: MatkulImg1,
    name: 'Keperawatan Medikal Bedah',
  },
  {
    img: MatkulImg2,
    name: 'Bahasa Inggris & Bahasa Jepang',
  },
  {
    img: MatkulImg3,
    name: 'Kewirausahaan',
  },
  {
    img: MatkulImg4,
    name: 'Keperawatan Gawat Darurat',
  },
  {
    img: MatkulImg5,
    name: 'Manajemen Keselamatan Pasien',
  },
  {
    img: MatkulImg6,
    name: 'Manajemen Keperawatan',
  },
];

const Keperawatan = () => {
  const token = localStorage.getItem('token');
  const [data, setData] = useState(null);
  const [jadwal, setJadwal] = useState(null);
  const [kuliah, setKuliah] = useState(null);
  const [dataFotoKuliah, setDataFotoKuliah] = useState(null);
  const [selectedJadwal, setSelectedJadwal] = useState({});
  const [banner, setBanner] = useState(null);
  const [textBanner, setTextBanner] = useState(null);
  const [imgVisiMisi, setImgVisiMisi] = useState(null);
  const [textMisi, setTextMisi] = useState(null);
  const [textVisi, setTextVisi] = useState(null);
  const [textKurikulum, setTextKurikulum] = useState(null);
  const [titleMataKuliah, setTitleMataKuliah] = useState(null);
  const [fotoMataKuliah, setFotoMataKuliah] = useState(null);
  const [fileKuliah, setFileKuliah] = useState(null);
  const [titleText, setTitletext] = useState([]);

  useEffect(() => {
    getData();
    getJadwal();
    getKuliah();
    getFotoKuliah();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/akademik-keperawatan/1'
      );
      const responseData = response.data;
      // console.log(responseData);
      setBanner(responseData.banner_image);
      setTextBanner(responseData.text_banner);
      setImgVisiMisi(responseData.image_visi_misi);
      setTextVisi(responseData.text_visi);
      setTextMisi(responseData.text_misi);
      setTextKurikulum(responseData.text_kurikulum);
      setTitleMataKuliah(responseData.title_mata_kuliah);
      setData(responseData);
    } catch (error) { }
  };
  const getJadwal = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/akademik-keperawatan/files/all?selectBy=KURIKULUM '
      );
      const responseData = response.data;
      const images = responseData.map((item) => item.file_path);
      setSelectedJadwal(images);
      setJadwal(responseData);
    } catch (error) { }
  };
  const getKuliah = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/akademik-keperawatan/files/all?selectBy=JADWAL'
      );
      const responseData = response.data;
      const images = responseData.map((item) => item.file_path);
      setFileKuliah(images);
      setKuliah(responseData);
    } catch (error) { }
  };

  const getFotoKuliah = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/akademik-keperawatan/images/all'
      );
      const responseData = response.data;
      const images = responseData.map((item) => item.image);
      const descriptions = responseData.map((item) => item.description);

      setFotoMataKuliah(images);
      setTitletext(descriptions);

      setDataFotoKuliah(responseData);
    } catch (error) { }
  };
  return (
    <Layout>
      <div>
        <img className='image-banner-keperawatan' src={banner}></img>
        <div class="centered-keperawatan">
          <h1 className="text-white pt-5 mt-5">Program Studi DIII Keperawatan</h1>
          <p className="text-white mt-4">{data && data.text_banner}</p>
        </div>
      </div>
      <div class="container bg-color-adm">
        <div class="row mt-5 pt-5">
          <div class="col-md-6">
            <img src={imgVisiMisi} width={'100%'} height={'100%'}></img>
          </div>

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
        </div>
      </div>

      <div className="bg-section-keperawatan">
        <div className="centered-keperawatan-section">
          <div className="container mt-5 pt-5">
            <h1 className="text-blue mt-5 pt-5">Kurikulum DIII Keperawatan</h1>
            <div
              style={{ textAlign: 'left' }}
              dangerouslySetInnerHTML={{ __html: data && data.text_kurikulum }}
            ></div>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <div className="keperawatan-story-container bg-keperawatan-color">
          <Typhography
            type="title"
            text="Mata Kuliah yang Ditawarkan"
            style={{ alignSelf: 'center' }}
          />
          <div className="container">
            <div className="keperawatan-story-card">
              {dataFotoKuliah &&
                dataFotoKuliah.map((item) => (
                  <div className="card-wrapper">
                    <img className="card-img" src={item.image} />
                    <div className="card-content">
                      <Typhography
                        type="normal"
                        text={item.description}
                        size="16px"
                        fontWeight="600"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div class="container mt-5 pt-5 mb-5 text-center">
          <Typhography
            type="title"
            text="Kurikulum DIII Keperawatan"
            style={{ alignSelf: 'center' }}
          />
          <div class="row justify-content-center">
            {jadwal &&
              jadwal.map((item, index) => (
                <React.Fragment key={index}>
                  <div class="col-lg-3 col-md-6 pt-4 mt-2">
                    <button
                      type="button"
                      class="btn btn-blue btn-lg"
                      onClick={() => window.open(item.file_path, '_blank')}
                    >
                      <i class="icon-download">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      Semester {index + 1}
                    </button>
                  </div>
                </React.Fragment>
              ))}
          </div>
        </div>

        <div class="container mt-5 pt-5 text-center">
          <Typhography
            type="title"
            text="Jadwal Perkuliahan DIII Keperawatan"
            style={{ alignSelf: 'center' }}
          />
          <div class="row justify-content-center">
            {kuliah &&
              kuliah.map((item, index) => (
                <React.Fragment key={index}>
                  <div class="col-lg-3 col-md-6 pt-4 mt-2">
                    <button
                      type="button"
                      class="btn btn-blue btn-lg"
                      onClick={() => window.open(item.file_path, '_blank')}
                    >
                      <i class="icon-download">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      Semester {index + 1}
                    </button>
                  </div>
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Keperawatan;
