import './KeperawatanAdmin.css';
import LayoutAdmin from '../../../../Layout/LayoutAdmin';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const HomeAdmin = () => {
  const token = localStorage.getItem('token');
  const [data, setData] = useState(null);
  const [jadwal, setJadwal] = useState(null);
  const [kuliah, setKuliah] = useState(null);
  const [selectedJadwal, setSelectedJadwal] = useState({});
  const [banner, setBanner] = useState(null);
  const [textBanner, setTextBanner] = useState(null);
  const [imgVisiMisi, setImgVisiMisi] = useState(null);
  const [textVisiMisi, setTextVisiMisi] = useState(null);
  const [textKurikulum, setTextKurikulum] = useState(null);
  const [titleMataKuliah, setTitleMataKuliah] = useState(null);
  const [fotoMataKuliah, setFotoMataKuliah] = useState(null);
  const [titleText, setTitletext] = useState(null);

  useEffect(() => {
    getData();
    getJadwal();
    getKuliah();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://stikesmayapada.ac.id/api/akademik-keperawatan/1'
      );
      const responseData = response.data;
      setBanner(responseData.banner_image);
      setTextBanner(responseData.text_banner);
      setImgVisiMisi(responseData.image_visi_misi);
      setTextVisiMisi(responseData.text_visi_misi);
      setTextKurikulum(responseData.text_kurikulum);
      setTitleMataKuliah(responseData.title_mata_kuliah);
      setFotoMataKuliah(responseData.photo_mata_kuliah);
      setTitletext(responseData.title_text);
      setData(responseData);
    } catch (error) {}
  };
  const getJadwal = async () => {
    try {
      const response = await axios.get(
        'https://stikesmayapada.ac.id/api/akademik-keperawatan/files/all?selectBy=KURIKULUM '
      );
      const responseData = response.data;

      setJadwal(responseData);
    } catch (error) {}
  };
  const getKuliah = async () => {
    try {
      const response = await axios.get(
        'https://stikesmayapada.ac.id/api/akademik-keperawatan/files/all?selectBy=JADWAL'
      );
      const responseData = response.data;

      setKuliah(responseData);
    } catch (error) {}
  };
  const handleJadwalChange = (event, itemId) => {
    const selectedFile = event.target.files[0];
    setSelectedJadwal((prevSelectedFiles) => ({
      ...prevSelectedFiles,
      [itemId]: selectedFile,
    }));
  };
  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    setBanner(file);
  };
  const handleImgVisiMisiChange = (event) => {
    const file = event.target.files[0];
    setImgVisiMisi(file);
  };
  const handleFotoMataKuliahChange = (event) => {
    const file = event.target.files[0];
    setFotoMataKuliah(file);
  };
  return (
    <LayoutAdmin>
      <div class="Home-Admin-Keperawatan">
        <div class="row mt-5 mb-5" style={{ margin: '3% 10% 10% 10%' }}>
          <h4>
            <span className="bg-primary text-white">Keperawatan Admin</span>
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
                Text Visi Misi
              </label>
              <div class="col-sm-10">
                <div class="input-group mb-3">
                  <div className="App">
                    <CKEditor
                      editor={ClassicEditor}
                      data={data && data.text_visi_misi}
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setTextVisiMisi(data);
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
              <label for="" class="col-sm-2 col-form-label">
                Text Kurikulum
              </label>
              <div class="col-sm-10">
                <div class="input-group mb-3">
                  <div className="App">
                    <CKEditor
                      editor={ClassicEditor}
                      data={data && data.text_kurikulum}
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setTextKurikulum(data);
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
                Title Mata Kuliah{' '}
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="InputText1"
                  value={titleMataKuliah}
                  onChange={(e) => setTitleMataKuliah(e.target.value)}
                />
              </div>
            </div>

            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <div id="SectionBanner">
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Photo Mata Kuliah
                </label>
                <div class="col-sm-10">
                  <div class="input-group mb-3">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile01"
                      onChange={handleFotoMataKuliahChange}
                    />
                  </div>
                  {data && data.photo_mata_kuliah && (
                    <div class="mb-2">
                      <a
                        href={data.photo_mata_kuliah}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link to Visi Misi Image
                      </a>
                    </div>
                  )}
                </div>
                <div class="mb-3 row">
                  <label for="" class="col-sm-2 col-form-label">
                    Title Text
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id=""
                      value={titleText}
                      onChange={(e) => setTitletext(e.target.value)}
                    />
                    <button
                      class="btn btn-success mt-2 mr-10"
                      type="submit"
                      onClick={''}
                      style={{ width: '150px' }}
                    >
                      Save
                    </button>
                  </div>
                  <div class="mb-2 row">
                    <label for="" class="col-sm-2 col-form-label">
                      {''}
                    </label>
                  </div>
                </div>
              </div>
              <button class="btn btn-primary mt-2" type="submit" onClick={''}>
                Add More
              </button>
              <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Jadwal Kurikulum DIII Keperawatan
                </label>
                {jadwal &&
                  jadwal.map((item) => (
                    <div class="col-sm-10">
                      <div class="input-group mb-3">
                        <input
                          type="file"
                          class="form-control"
                          id={`inputGroupFile${item.id}`}
                          onChange={(event) =>
                            handleJadwalChange(event, item.id)
                          }
                        />
                      </div>
                      {item.file_path && (
                        <div>
                          <a
                            href={item.file_path}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Link to Jadwal Kurikulum
                          </a>
                        </div>
                      )}
                      <div class="col-sm-4">
                        <button
                          class="btn btn-success mt-2"
                          type="submit"
                          onClick={''}
                          style={{ width: '150px' }}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
              <button class="btn btn-primary mt-2" type="submit" onClick={''}>
                Add More
              </button>
              <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Jadwal perkuliahan DIII Keperawatan
                </label>
                {kuliah &&
                  kuliah.map((item) => (
                    <div class="col-sm-10">
                      <div class="input-group mb-3">
                        <input
                          type="file"
                          class="form-control"
                          id="inputGroupFile01"
                        />
                      </div>
                      {item.file_path && (
                        <div>
                          <a
                            href={item.file_path}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Link to Jadwal Kurikulum
                          </a>
                        </div>
                      )}
                      <div class="col-sm-4">
                        <button
                          class="btn btn-success mt-2"
                          type="submit"
                          onClick={''}
                          style={{ width: '150px' }}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
              <button class="btn btn-primary mt-2" type="submit" onClick={''}>
                Add More
              </button>
              <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
              <button class="btn btn-success mt-2" type="submit">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default HomeAdmin;
