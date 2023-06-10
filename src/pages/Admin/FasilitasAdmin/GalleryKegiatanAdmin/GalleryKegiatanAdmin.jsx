import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import LayoutAdmin from '../../../../Layout/LayoutAdmin';
import { async } from 'q';
import axios from 'axios';
import './GalleryKegiatanAdmin.css';

const GalleryKegiatanAdmin = () => {
  const token = localStorage.getItem('token');
  const [data, setData] = useState(null);
  const [category, setCategory] = useState(null);
  const [imgKegiatan, setImgKegiatan] = useState(null);
  const [imgOrientasi, setImgOrientasi] = useState(false);
  const [imgWisuda, setImgWisuda] = useState({});
  const [openFirst, setOpenFirst] = useState(false);
  const [dataImgKegiatan, setDataImgKegiatan] = useState(null);
  const [dataImgOrientasi, setDataImgOrientasi] = useState(null);
  const [dataImgWisuda, setDataImgWisuda] = useState(null);

  useEffect(() => {
    getData();
    getDataKegiatan();
    getDataOrientasi();
    getDataWisuda();
  }, []);

  const closeModalFirst = () => {
    setOpenFirst(false);
    setImgKegiatan(null);
    setImgOrientasi(null);
    setImgWisuda(null);
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/galery-kegiatan/1'
      );
      const responseData = response.data.images;
      setData(responseData);
    } catch (error) {}
  };
  const getDataKegiatan = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/galery-kegiatan/1/images?selectBy=KEGIATAN_MAHASISWA '
      );
      const responseData = response.data;
      // console.log(responseData, 'pantek');
      setDataImgKegiatan(responseData);
    } catch (error) {}
  };
  const getDataOrientasi = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/galery-kegiatan/1/images?selectBy=ORIENTASI_MAHASISWA'
      );
      const responseData = response.data;
      setDataImgOrientasi(responseData);
    } catch (error) {}
  };
  const getDataWisuda = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/galery-kegiatan/1/images?selectBy=WISUDA'
      );
      const responseData = response.data;
      setDataImgWisuda(responseData);
    } catch (error) {}
  };

  const saveDataImgKegiatan = async () => {
    try {
      let formData = new FormData();
      formData.append('type', 'KEGIATAN_MAHASISWA');
      formData.append('card_image', imgKegiatan);
      const response = await axios.post(
        'https://api.stikesmayapada.ac.id/api/galery-kegiatan/1/images',
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
        alert(`Berhasil tambah foto kegiatan`);
        setOpenFirst(false);
        getDataKegiatan();
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      // console.log(error, 'error');
    }
  };
  const saveDataImgOrientasi = async () => {
    try {
      let formData = new FormData();
      formData.append('type', 'ORIENTASI_MAHASISWA');
      formData.append('card_image', imgOrientasi);
      const response = await axios.post(
        'https://api.stikesmayapada.ac.id/api/galery-kegiatan/1/images',
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
        alert(`Berhasil tambah foto kegiatan orientasi `);
        setOpenFirst(false);
        getDataOrientasi();
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      // console.log(error, 'error');
    }
  };
  const saveDataImgWisuda = async () => {
    try {
      let formData = new FormData();
      formData.append('type', 'WISUDA');
      formData.append('card_image', imgWisuda);
      const response = await axios.post(
        'https://api.stikesmayapada.ac.id/api/galery-kegiatan/1/images',
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
        alert(`Berhasil tambah foto kegiatan wisuda `);
        setOpenFirst(false);
        getDataWisuda();
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      // console.log(error, 'error');
    }
  };

  const updateDataImgKegiatan = async (index) => {
    try {
      const file = imgKegiatan[index];
      const itemId = data[index].id;
      let formData = new FormData();
      formData.append('type', 'KEGIATAN_MAHASISWA');
      formData.append('card_image', file);
      const response = await axios.put(
        `https://api.stikesmayapada.ac.id/api/galery-kegiatan/images/${itemId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const { status } = response;
      if (status === 200) {
        alert(`Berhasil update foto kegiatan`);
        setOpenFirst(false);
        getDataKegiatan();
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      // console.log(error, 'error');
    }
  };
  const updateDataImgOrientasi = async (index) => {
    try {
      const file = imgOrientasi[index];
      const itemId = data[index].id;
      let formData = new FormData();
      formData.append('type', 'ORIENTASI_MAHASISWA');
      formData.append('card_image', file);
      const response = await axios.put(
        `https://api.stikesmayapada.ac.id/api/galery-kegiatan/images/${itemId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const { status } = response;
      if (status === 200) {
        alert(`Berhasil update foto orientasi`);
        setOpenFirst(false);
        getDataOrientasi();
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      // console.log(error, 'error');
    }
  };
  const updateDataImgWisuda = async (index) => {
    try {
      const file = imgWisuda[index];
      const itemId = data[index].id;
      let formData = new FormData();
      formData.append('type', 'WISUDA');
      formData.append('card_image', file);
      const response = await axios.put(
        `https://api.stikesmayapada.ac.id/api/galery-kegiatan/images/${itemId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const { status } = response;
      if (status === 200) {
        alert(`Berhasil update foto wisuda`);
        setOpenFirst(false);
        getDataWisuda();
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      // console.log(error, 'error');
    }
  };

  const handleKegiatanChange = (event, index) => {
    const selectedFile = event.target.files[0];
    setImgKegiatan((prevFotoMataKuliah) => {
      const updatedFotoMataKuliah = Array.isArray(prevFotoMataKuliah)
        ? [...prevFotoMataKuliah]
        : [];
      updatedFotoMataKuliah[index] = selectedFile;
      return updatedFotoMataKuliah;
    });
  };

  const handleKegiatanChanges = (event) => {
    const selectedFile = event.target.files[0];
    setImgKegiatan(selectedFile);
  };
  const handleOrientasiChange = (event, index) => {
    const selectedFile = event.target.files[0];
    setImgOrientasi((prevFotoMataKuliah) => {
      const updatedFotoMataKuliah = Array.isArray(prevFotoMataKuliah)
        ? [...prevFotoMataKuliah]
        : [];
      updatedFotoMataKuliah[index] = selectedFile;
      return updatedFotoMataKuliah;
    });
  };
  const handleOrientasiChanges = (event) => {
    const selectedFile = event.target.files[0];
    setImgOrientasi(selectedFile);
  };
  const handleWisudaChange = (event, index) => {
    const selectedFile = event.target.files[0];
    setImgWisuda((prevFotoMataKuliah) => {
      const updatedFotoMataKuliah = Array.isArray(prevFotoMataKuliah)
        ? [...prevFotoMataKuliah]
        : [];
      updatedFotoMataKuliah[index] = selectedFile;
      return updatedFotoMataKuliah;
    });
  };
  const handleWisudaChanges = (event) => {
    const selectedFile = event.target.files[0];
    setImgWisuda(selectedFile);
  };

  return (
    <LayoutAdmin>
      <div>
        <div class="row mt-5 mb-5" style={{ margin: '3% 10% 10% 10%' }}>
          <h4>
            <span className="bg-primary text-white">
              Gallery Kegiatan Admin
            </span>
          </h4>
          <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
          <div id="">
            <div class="mb-3 row">
              {dataImgKegiatan &&
                dataImgKegiatan.map((item, index) => (
                  <>
                    <label for="staticEmail" class="col-sm-2 col-form-label">
                      Image Kegiatan Mahasiswa
                    </label>
                    <div class="col-sm-10">
                      <div class="input-group mb-3">
                        <input
                          type="file"
                          class="form-control"
                          id={`inputGroupFile${item.id}`}
                          onChange={(event) =>
                            handleKegiatanChange(event, index)
                          }
                        />
                      </div>
                      {item && item.card_image && item.card_image[index] && (
                        <div>
                          <a
                            href={item.card_image}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Link to Image Kegiatan Mahasiswa
                          </a>
                        </div>
                      )}
                      <div class="col-sm-4">
                        <button
                          class="btn btn-info mt-2 mb-4"
                          type="submit"
                          onClick={() => updateDataImgKegiatan(index)}
                          style={{ width: '150px', color: 'white' }}
                        >
                          Update
                        </button>
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
                setCategory('kegiatan');
              }}
            >
              Add More
            </button>

            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>

            <div class="mb-3 row">
              {dataImgOrientasi &&
                dataImgOrientasi.map((item, index) => (
                  <>
                    <label for="staticEmail" class="col-sm-2 col-form-label">
                      Image Orientasi Mahasiswa baru
                    </label>
                    <div class="col-sm-10">
                      <div class="input-group mb-3">
                        <input
                          type="file"
                          class="form-control"
                          id={`inputGroupFile${item.id}`}
                          onChange={(event) =>
                            handleOrientasiChange(event, index)
                          }
                        />
                      </div>
                      {item && item.card_image && item.card_image[index] && (
                        <div>
                          <a
                            href={item.card_image}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Link to Image Orientasi Mahasiswa
                          </a>
                        </div>
                      )}
                      <div class="col-sm-4">
                        <button
                          class="btn btn-info mt-2 mb-4"
                          type="submit"
                          onClick={() => updateDataImgOrientasi(index)}
                          style={{ width: '150px', color: 'white' }}
                        >
                          Update
                        </button>
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
                setCategory('orientasi');
              }}
            >
              Add More
            </button>

            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>

            <div class="mb-3 row">
              {dataImgWisuda &&
                dataImgWisuda.map((item, index) => (
                  <>
                    <label for="staticEmail" class="col-sm-2 col-form-label">
                      Image Wisuda
                    </label>
                    <div class="col-sm-10">
                      <div class="input-group mb-3">
                        <input
                          type="file"
                          class="form-control"
                          id={`inputGroupFile${item.id}`}
                          onChange={(event) => handleWisudaChange(event, index)}
                        />
                      </div>
                      {item && item.card_image && item.card_image[index] && (
                        <div>
                          <a
                            href={item.card_image}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Link to Image Wisuda Mahasiswa
                          </a>
                        </div>
                      )}
                      <div class="col-sm-4">
                        <button
                          class="btn btn-info mt-2 mb-4"
                          type="submit"
                          onClick={() => updateDataImgWisuda(index)}
                          style={{ width: '150px', color: 'white' }}
                        >
                          Update
                        </button>
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
                setCategory('wisuda');
              }}
            >
              Add More
            </button>

            {/* <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>

            <button class="btn btn-success mt-2" type="submit" onClick={''}>
              Save
            </button> */}
          </div>
        </div>
        <Popup open={openFirst} closeOnDocumentClick onClose={closeModalFirst}>
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
                  {category === 'kegiatan'
                    ? 'Image Kegiatan Mahasiswa '
                    : category === 'orientasi'
                    ? 'Image Orientasi Mahasiswa baru'
                    : 'Image Wisuda'}
                </label>
                <div class="col-sm-10">
                  <div class="input-group mb-3">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile01"
                      onChange={
                        category === 'kegiatan'
                          ? handleKegiatanChanges
                          : category === 'orientasi'
                          ? handleOrientasiChanges
                          : handleWisudaChanges
                      }
                    />
                  </div>
                </div>
              </div>

              <button
                class="btn btn-secondary mt-2"
                type="submit"
                onClick={closeModalFirst}
              >
                Cancel
              </button>
              <button
                class="btn btn-primary mt-2"
                type="submit"
                style={{ marginLeft: '20px' }}
                onClick={
                  category === 'kegiatan'
                    ? saveDataImgKegiatan
                    : category === 'orientasi'
                    ? saveDataImgOrientasi
                    : saveDataImgWisuda
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

export default GalleryKegiatanAdmin;
