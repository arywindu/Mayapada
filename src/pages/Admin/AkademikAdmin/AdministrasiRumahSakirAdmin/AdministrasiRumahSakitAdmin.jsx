import LayoutAdmin from '../../../../Layout/LayoutAdmin';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
const AdministrasiRumahSakitAdmin = () => {
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
    } catch (error) {}
  };

  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    setBanner(file);
  };
  const handleFileGanjilAkademikChange = (event) => {
    const file = event.target.files[0];
    setFileGanjilAkademik(file);
  };
  const handleFileGenapAkademikChange = (event) => {
    const file = event.target.files[0];
    setFileGenapAkademik(file);
  };
  const handleFileGanjilPeriodeChange = (event) => {
    const file = event.target.files[0];
    setFileGanjilPeriode(file);
  };
  const handleFileGenapPeriodeChange = (event) => {
    const file = event.target.files[0];
    setFileGenapPeriode(file);
  };
  const handleImgVisiMisiChange = (event) => {
    const file = event.target.files[0];
    setImgVisiMisi(file);
  };

  const updateAdministrasi = async () => {
    try {
      let formData = new FormData();
      formData.append('banner_image', banner);
      formData.append('text_banner', textBanner);
      formData.append('image_visi_misi', imgVisiMisi);
      formData.append('text_visi', textVisi);
      formData.append('text_misi', textMisi);
      formData.append('file_akademik_ganjil', fileGanjilAkademik);
      formData.append('file_akademik_genap', fileGenapAkademik);
      formData.append('periode_tahun_akademik', tahunAkademik);
      formData.append('jadwal_perkuliahan_periode', periodeAkademik);
      formData.append('file_jadwal_ganjil', fileGanjilPeriode);
      formData.append('file_jadwal_genap', fileGenapPeriode);

      const response = await axios.put(
        `https://api.stikesmayapada.ac.id/api/administrasi-rumah-sakit/1`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      getData();
      const { status } = response;
      if (status === 200) {
        alert(`Berhasil edit data administrasi rumah sakit`);
        getData();
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      //   // console.log(error, 'error');
    }
  };
  return (
    <LayoutAdmin>
      <div class="Home-Admin-Keperawatan">
        <div class="row mt-5 mb-5" style={{ margin: '3% 10% 10% 10%' }}>
          <h4>
            <span className="bg-primary text-white">
              Administrasi Rumah Sakit Admin
            </span>
          </h4>
          <hr class="bg-danger border-2 border-top border-dark mt-1 mb-4"></hr>
          <div id="SectionBanner">
            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Banner Image
              </label>
              <div class="col-sm-10">
                <div class="input-group mb-3">
                  <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile01"
                    onChange={handleBannerChange}
                  />
                </div>
                {data && data.banner_image && (
                  <div>
                    <a
                      href={data.banner_image}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link to Banner Image
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Text Banner
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="InputText1"
                  value={textBanner}
                  onChange={(e) => setTextBanner(e.target.value)}
                />
              </div>
            </div>
            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <div class="mb-3 row">
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Image Visi Misi
                </label>
                <div class="col-sm-10">
                  <div class="input-group mb-3">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile01"
                      onChange={handleImgVisiMisiChange}
                    />
                  </div>
                  {data && data.image_visi_misi && (
                    <div>
                      <a
                        href={data.image_visi_misi}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link to Visi Misi Image
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <label for="" class="col-sm-2 col-form-label">
                Section Visi
              </label>
              <div class="col-sm-10">
                <div class="input-group mb-3">
                  <div className="App">
                    <CKEditor
                      editor={ClassicEditor}
                      data={data && data.text_visi ? data.text_visi : ''}
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setTextVisi(data);
                      }}
                      onBlur={(event, editor) => {}}
                      onFocus={(event, editor) => {}}
                    />
                  </div>
                </div>
              </div>
              <label for="" class="col-sm-2 col-form-label">
                Section Misi
              </label>
              <div class="col-sm-10">
                <div class="input-group mb-3">
                  <div className="App">
                    <CKEditor
                      editor={ClassicEditor}
                      data={data && data.text_misi ? data.text_misi : ''}
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setTextMisi(data);
                      }}
                      onBlur={(event, editor) => {}}
                      onFocus={(event, editor) => {}}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Tahun Kalender Akademik Periode
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="InputText1"
                  value={tahunAkademik}
                  onChange={(e) => setTahunAkademik(e.target.value)}
                />
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  File Semester Ganjil
                </label>
                <div class="col-sm-10">
                  <div class="input-group mb-3">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile01"
                      onChange={handleFileGanjilAkademikChange}
                    />
                  </div>
                  {data && data.file_akademik_ganjil && (
                    <div>
                      <a
                        href={data.file_akademik_ganjil}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link to Akademik Ganjil File
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  File Semester Genap
                </label>
                <div class="col-sm-10">
                  <div class="input-group mb-3">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile01"
                      onChange={handleFileGenapAkademikChange}
                    />
                  </div>
                  {data && data.file_akademik_genap && (
                    <div>
                      <a
                        href={data.file_akademik_genap}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link to Akademik Genap File
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label mb-4">
                Jadwal Perkuliahaan Periode
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="InputText1"
                  value={periodeAkademik}
                  onChange={(e) => setPeriodeAkademik(e.target.value)}
                />
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  File Semester Ganjil
                </label>
                <div class="col-sm-10">
                  <div class="input-group mb-3">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile01"
                      onChange={handleFileGanjilPeriodeChange}
                    />
                  </div>
                  {data && data.file_jadwal_ganjil && (
                    <div>
                      <a
                        href={data.file_jadwal_ganjil}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link to Periode Akademik Ganjil File
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  File Semester Genap
                </label>
                <div class="col-sm-10">
                  <div class="input-group mb-3">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile01"
                      onChange={handleFileGenapPeriodeChange}
                    />
                  </div>
                  {data && data.file_jadwal_genap && (
                    <div>
                      <a
                        href={data.file_jadwal_genap}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link to Periode Akademik Genap File
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <button
              class="btn btn-success mt-2"
              type="submit"
              onClick={updateAdministrasi}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default AdministrasiRumahSakitAdmin;
