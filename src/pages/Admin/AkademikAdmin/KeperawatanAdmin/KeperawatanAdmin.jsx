import './KeperawatanAdmin.css';
import LayoutAdmin from '../../../../Layout/LayoutAdmin';
import './KeperawatanAdmin.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
const HomeAdmin = () => {
  const token = localStorage.getItem('token');
  const [data, setData] = useState(null);
  const [jadwal, setJadwal] = useState(null);
  const [kuliah, setKuliah] = useState(null);
  const [dataFotoKuliah, setDataFotoKuliah] = useState(null);
  const [category, setCategory] = useState(null);
  const [openFirst, setOpenFirst] = useState(false);
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

  const closeModalFirst = () => {
    setOpenFirst(false);
    setTitletext([]);
    setFotoMataKuliah(null);
  };

  const closeModalFirsts = () => {
    setOpenFirst(false);
    setSelectedJadwal(null);
    setFileKuliah(null);
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/akademik-keperawatan/1'
      );
      const responseData = response.data;
      setBanner(responseData.banner_image);
      setTextBanner(responseData.text_banner);
      setImgVisiMisi(responseData.image_visi_misi);
      setTextVisi(responseData.text_visi);
      setTextMisi(responseData.text_misi);
      setTextKurikulum(responseData.text_kurikulum);
      setTitleMataKuliah(responseData.title_mata_kuliah);
      setData(responseData);
    } catch (error) {}
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
    } catch (error) {}
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
    } catch (error) {}
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
    } catch (error) {}
  };

  const saveDataFotoKuliah = async () => {
    try {
      let formData = new FormData();
      formData.append('image', fotoMataKuliah);
      formData.append('description', titleText);
      const response = await axios.post(
        'https://api.stikesmayapada.ac.id/api/akademik-keperawatan/images',
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
      if (status === 201) {
        alert(`Berhasil tambah foto mata kuliah`);
        setOpenFirst(false);
        getFotoKuliah();
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  };
  const saveFileKurikulum = async () => {
    try {
      let formData = new FormData();
      formData.append('file_path', selectedJadwal);
      formData.append('type', 'KURIKULUM');
      const response = await axios.post(
        'https://api.stikesmayapada.ac.id/api/akademik-keperawatan/files',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      const { status } = response;
      if (status === 201) {
        alert(`Berhasil tambah foto mata kuliah`);
        setOpenFirst(false);
        getJadwal();
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  };
  const saveFileJadwal = async () => {
    try {
      let formData = new FormData();
      formData.append('file_path', fileKuliah);
      formData.append('type', 'JADWAL');
      const response = await axios.post(
        'https://api.stikesmayapada.ac.id/api/akademik-keperawatan/files',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      const { status } = response;
      if (status === 201) {
        alert(`Berhasil tambah foto mata kuliah`);
        setOpenFirst(false);
        getKuliah();
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      // // console.log(error, 'error');
    }
  };

  const updateDataKeperawatan = async () => {
    try {
      let formData = new FormData();
      formData.append('banner_image', banner);
      formData.append('text_banner', textBanner);
      formData.append('image_visi_misi', imgVisiMisi);
      formData.append('text_visi', textMisi);
      formData.append('text_misi', textVisi);
      formData.append('text_kurikulum', textKurikulum);
      formData.append('title_mata_kuliah', titleMataKuliah);

      const response = await axios.put(
        `https://api.stikesmayapada.ac.id/api/akademik-keperawatan/1`,
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
        alert(`Berhasil edit data keperawatan`);
        setOpenFirst(false);
        getData();
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      //  // console.log(error, 'error');
    }
  };

  const updateDataFotoKuliah = async (index) => {
    try {
      const file = fotoMataKuliah[index];
      const description = titleText[index];
      const itemId = dataFotoKuliah[index].id;
      let formData = new FormData();
      formData.append('image', file);
      formData.append('description', description);
      const response = await axios.put(
        `https://api.stikesmayapada.ac.id/api/akademik-keperawatan/images/${itemId}`,
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
      if (status === 201) {
        alert(`Berhasil edit foto mata kuliah`);
        setOpenFirst(false);
        getFotoKuliah();
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      // // console.log(error, 'error');
    }
  };
  const updateFileKuliah = async (index) => {
    try {
      const file = fileKuliah[index];
      const itemId = kuliah[index].id;
      let formData = new FormData();
      formData.append('file_path', file);
      formData.append('type', 'JADWAL');
      const response = await axios.put(
        `https://api.stikesmayapada.ac.id/api/akademik-keperawatan/files/${itemId}`,
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
      if (status === 201) {
        alert(`Berhasil edit Jadwal perkuliahan DIII Keperawatan`);
        setOpenFirst(false);
        getKuliah();
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      // console.log(error, 'error');
    }
  };
  const updateKurikulumKuliah = async (index) => {
    try {
      const file = selectedJadwal[index];
      const itemId = jadwal[index].id;
      let formData = new FormData();
      formData.append('file_path', file);
      formData.append('type', 'KURIKULUM ');
      const response = await axios.put(
        `https://api.stikesmayapada.ac.id/api/akademik-keperawatan/files/${itemId}`,
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
      if (status === 201) {
        alert(`Berhasil edit Jadwal Kurikulum DIII Keperawatan`);
        setOpenFirst(false);
        getJadwal();
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      // console.log(error, 'error');
    }
  };

  const handleJadwalChange = (event, index) => {
    const selectedFile = event.target.files[0];
    setSelectedJadwal((prevFotoMataKuliah) => {
      const updatedFotoMataKuliah = [...prevFotoMataKuliah];
      updatedFotoMataKuliah[index] = selectedFile;
      return updatedFotoMataKuliah;
    });
  };
  const handleJadwalChanges = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedJadwal(selectedFile);
  };
  const handleFileKuliahChange = (event, index) => {
    const selectedFile = event.target.files[0];
    setFileKuliah((prevFotoMataKuliah) => {
      const updatedFotoMataKuliah = [...prevFotoMataKuliah];
      updatedFotoMataKuliah[index] = selectedFile;
      return updatedFotoMataKuliah;
    });
  };
  const handleFileKuliahChanges = (event) => {
    const selectedFile = event.target.files[0];
    setFileKuliah(selectedFile);
  };
  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    setBanner(file);
  };
  const handleImgVisiMisiChange = (event) => {
    const file = event.target.files[0];
    setImgVisiMisi(file);
  };
  const handleFotoMataKuliahChange = (event, index) => {
    const file = event.target.files[0];
    setFotoMataKuliah((prevFotoMataKuliah) => {
      const updatedFotoMataKuliah = [...prevFotoMataKuliah];
      updatedFotoMataKuliah[index] = file;
      return updatedFotoMataKuliah;
    });
  };
  const handleFotoMataKuliahChanges = (event) => {
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
                Text Visi
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
                Text Misi
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
                {dataFotoKuliah &&
                  dataFotoKuliah.map((item, index) => (
                    <>
                      <label for="staticEmail" class="col-sm-2 col-form-label">
                        Photo Mata Kuliah
                      </label>
                      <div class="col-sm-10">
                        <div class="input-group mb-3">
                          <input
                            type="file"
                            class="form-control"
                            id={`inputGroupFile${item.id}`}
                            onChange={(event) =>
                              handleFotoMataKuliahChange(event, index)
                            }
                          />
                        </div>
                        {item && item.image && item.image[index] && (
                          <div class="mb-2">
                            <a
                              href={item.image}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Link to Photo Mata Kuliah Image
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
                            value={titleText[index]}
                            onChange={(e) => {
                              const updatedTitleText = [...titleText];
                              updatedTitleText[index] = e.target.value;
                              setTitletext(updatedTitleText);
                            }}
                          />
                          <button
                            class="btn btn-info mt-2 mr-10"
                            type="submit"
                            style={{ width: '150px', color: 'white' }}
                            onClick={() => updateDataFotoKuliah(index)}
                          >
                            Update
                          </button>
                        </div>
                        <div class="mb-2 row">
                          <label for="" class="col-sm-2 col-form-label">
                            {''}
                          </label>
                        </div>
                      </div>
                    </>
                  ))}
              </div>
              <button
                class="btn btn-primary mt-2"
                type="submit"
                onClick={() => {
                  setOpenFirst(true);
                  setCategory('Mata Kuliah');
                }}
              >
                Add More
              </button>
              <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
              <div class="mb-3 row">
                {jadwal &&
                  jadwal.map((item, index) => (
                    <>
                      <label for="staticEmail" class="col-sm-2 col-form-label">
                        Jadwal Kurikulum DIII Keperawatan
                      </label>
                      <div class="col-sm-10">
                        <div class="input-group mb-3">
                          <input
                            type="file"
                            class="form-control"
                            id={`inputGroupFile${item.id}`}
                            onChange={(event) =>
                              handleJadwalChange(event, index)
                            }
                          />
                        </div>
                        {item && item.file_path && item.file_path[index] && (
                          <div>
                            <a
                              href={item.file_path}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Link to Jadwal Kurikulum DIII Keperawatan
                            </a>
                          </div>
                        )}
                        <div class="col-sm-4">
                          <button
                            class="btn btn-info mt-2 mb-3"
                            type="submit"
                            onClick={() => updateKurikulumKuliah(index)}
                            style={{ width: '150px', color: 'white' }}
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </>
                  ))}
              </div>
              {jadwal && jadwal.length < 15 && (
                <button
                  class="btn btn-primary mt-2"
                  type="submit"
                  onClick={() => {
                    setOpenFirst(true);
                    setCategory('Kurikulum');
                  }}
                >
                  Add More
                </button>
              )}
              <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
              <div class="mb-3 row">
                {kuliah &&
                  kuliah.map((item, index) => (
                    <>
                      <label for="staticEmail" class="col-sm-2 col-form-label">
                        Jadwal perkuliahan DIII Keperawatan
                      </label>
                      <div class="col-sm-10">
                        <div class="input-group mb-3">
                          <input
                            type="file"
                            class="form-control"
                            id={`inputGroupFile${item.id}`}
                            onChange={(event) =>
                              handleFileKuliahChange(event, index)
                            }
                          />
                        </div>
                        {item && item.file_path && item.file_path[index] && (
                          <div>
                            <a
                              href={item.file_path}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Link to Jadwal Perkuliahan DIII Keperawatan
                            </a>
                          </div>
                        )}
                        <div class="col-sm-4">
                          <button
                            class="btn btn-info mt-2 mb-4"
                            type="submit"
                            onClick={() => updateFileKuliah(index)}
                            style={{ width: '150px', color: 'white' }}
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </>
                  ))}
              </div>
              {kuliah && kuliah.length < 15 && (
                <button
                  class="btn btn-primary mt-2"
                  type="submit"
                  onClick={() => {
                    setOpenFirst(true);
                    setCategory('Kuliah');
                  }}
                >
                  Add More
                </button>
              )}
              <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
              <button
                class="btn btn-success mt-2"
                type="submit"
                onClick={updateDataKeperawatan}
              >
                Save
              </button>
            </div>
          </div>
        </div>

        <Popup
          open={openFirst}
          closeOnDocumentClick
          onClose={
            category === 'Mata Kuliah' ? closeModalFirst : closeModalFirsts
          }
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                width: '100%',
                padding: '30px',
                borderRadius: '10px',
                zIndex: 9999,
              }}
            >
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  {category === 'Mata Kuliah'
                    ? 'Photo Mata Kuliah'
                    : category === 'Kurikulum'
                    ? 'Jadwal Kurikulum DIII Keperawatan'
                    : 'Jadwal perkuliahan DIII Keperawatan'}
                </label>
                <div class="col-sm-10">
                  <div class="input-group mb-3">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile01"
                      onChange={
                        category === 'Mata Kuliah'
                          ? handleFotoMataKuliahChanges
                          : category === 'Kurikulum'
                          ? handleJadwalChanges
                          : handleFileKuliahChanges
                      }
                    />
                  </div>
                </div>
                {category === 'Mata Kuliah' ? (
                  <div class="mb-3 row">
                    <label for="" class="col-sm-2 col-form-label">
                      Title Text
                    </label>
                    <div class="col-sm-10">
                      <textarea
                        type="text"
                        class="form-control"
                        id=""
                        rows="10"
                        onChange={(e) => setTitletext(e.target.value)}
                      />
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>

              <button
                class="btn btn-secondary mt-2"
                type="submit"
                onClick={
                  category === 'Mata Kuliah'
                    ? closeModalFirst
                    : closeModalFirsts
                }
              >
                Cancel
              </button>
              <button
                class="btn btn-primary mt-2"
                type="submit"
                style={{ marginLeft: '20px' }}
                onClick={
                  category === 'Mata Kuliah'
                    ? saveDataFotoKuliah
                    : category === 'Kurikulum'
                    ? saveFileKurikulum
                    : saveFileJadwal
                }
              >
                Save
              </button>
            </div>
          </div>
        </Popup>
        {openFirst && <div className="black-shadow-overlay" />}
      </div>
    </LayoutAdmin>
  );
};

export default HomeAdmin;
