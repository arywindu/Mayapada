import React, { useEffect, useState } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import LayoutAdmin from '../../../../Layout/LayoutAdmin';
import Popup from 'reactjs-popup';
import { async } from 'q';
import axios from 'axios';

const SaranaDanPrasaranaAdmin = () => {
  const token = localStorage.getItem('token');
  const [dataPendidikan, setDataPendidikan] = useState(null);
  const [dataUmum, setDataUmum] = useState(null);
  const [edit, setEdit] = useState(false);
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [pendidikanId, setPendidikanId] = useState(null);
  const [pendidikanImg, setPendidikanImg] = useState(null);
  const [pendidikanDesc, setPendidikanDesc] = useState(null);

  const [umumId, setUmumId] = useState(null);
  const [umumImg, setUmumImg] = useState(null);
  const [umumDesc, setUmumDesc] = useState(null);

  const closeModalFirst = () => {
    setOpenFirst(false);
    setPendidikanDesc(null);
    setPendidikanImg(null);
    setPendidikanId(null);
    setEdit(false);
  };
  const closeModalSecond = () => {
    setOpenSecond(false);
    setPendidikanDesc(null);
    setPendidikanImg(null);
    setPendidikanId(null);
    setEdit(false);
  };

  useEffect(() => {
    getDataPendidikan();
  }, []);

  useEffect(() => {
    getDataUmum();
  }, []);

  const getDataPendidikan = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/sarana-prasarana/1/images'
      );
      console.log(response.data, 'res');
      setDataPendidikan(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataUmum = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/sarana-prasarana/2/images'
      );
      console.log(response.data, 'res');
      setDataUmum(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const saveDataPendidikan = async () => {
    if (edit) {
      try {
        let formData = new FormData();
        formData.append('type', 'FASILITAS_PENDIDIKAN');
        if (pendidikanImg !== null && pendidikanImg !== undefined) {
          formData.append('card_image', pendidikanImg);
        }
        formData.append('card_description', pendidikanDesc);
        formData.append('status', 1);
        const response = await axios.put(
          `https://api.stikesmayapada.ac.id/api/sarana-prasarana/images/${pendidikanId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        console.log(response.status, 'test');

        const { status } = response;
        if (status === 200 || status === 201) {
          alert(`Berhasil update data`);
          getDataPendidikan();
          setPendidikanDesc(null);
          setPendidikanImg(null);
          setPendidikanId(null);
          setOpenFirst(false);
          setEdit(false);
        }
      } catch (error) {
        alert(`${error.response.data.message}`);
        console.log(error, 'error');
      }
    } else {
      try {
        let formData = new FormData();
        formData.append('type', 'FASILITAS_PENDIDIKAN');
        formData.append('card_image', pendidikanImg);
        formData.append('card_description', pendidikanDesc);
        formData.append('status', 1);
        const response = await axios.post(
          'https://api.stikesmayapada.ac.id/api/sarana-prasarana/1/images',
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        console.log(response.status, 'test');

        const { status } = response;
        if (status === 200 || status === 201) {
          alert(`Berhasil update data`);
          getDataPendidikan();
          setPendidikanDesc(null);
          setPendidikanImg(null);
          setPendidikanId(null);
          setOpenFirst(false);
          setEdit(false);
        }
      } catch (error) {
        alert(`${error.response.data.message}`);
        console.log(error, 'error');
      }
    }
  };

  const handlePendidikanImg = (event) => {
    setPendidikanImg(event.target.files[0]);
  };

  const saveDataUmum = async () => {
    if (edit) {
      try {
        let formData = new FormData();
        formData.append('type', 'FASILITAS_UMUM');
        if (umumImg !== null && umumImg !== undefined) {
          formData.append('card_image', umumImg);
        }
        formData.append('card_description', umumDesc);
        formData.append('status', 1);
        const response = await axios.put(
          `https://api.stikesmayapada.ac.id/api/sarana-prasarana/images/${umumId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        console.log(response.status, 'test');

        const { status } = response;
        if (status === 200 || status === 201) {
          alert(`Berhasil update data`);
          getDataUmum();
          setUmumDesc(null);
          setUmumImg(null);
          setUmumId(null);
          setOpenSecond(false);
          setEdit(false);
        }
      } catch (error) {
        alert(`${error.response.data.message}`);
        console.log(error, 'error');
      }
    } else {
      try {
        let formData = new FormData();
        formData.append('type', 'FASILITAS_UMUM');
        formData.append('card_image', umumImg);
        formData.append('card_description', umumDesc);
        formData.append('status', 1);
        const response = await axios.post(
          'https://api.stikesmayapada.ac.id/api/sarana-prasarana/2/images',
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        console.log(response.status, 'test');

        const { status } = response;
        if (status === 200 || status === 201) {
          alert(`Berhasil update data`);
          getDataUmum();
          setUmumDesc(null);
          setUmumImg(null);
          setUmumId(null);
          setOpenSecond(false);
          setEdit(false);
        }
      } catch (error) {
        alert(`${error.response.data.message}`);
        console.log(error, 'error');
      }
    }
  };

  const handleUmumImg = (event) => {
    setUmumImg(event.target.files[0]);
  };

  return (
    <LayoutAdmin>
      <div>
        <div class="row mt-5 mb-5" style={{ margin: '3% 10% 10% 10%' }}>
          <h4>
            <span className="bg-primary text-white">
              Sarana Dan Prasarana Admin
            </span>
          </h4>
          <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>

          <div>Image fasilitas Pendidikan</div>
          <button
            class="btn btn-primary"
            type="submit"
            onClick={() => setOpenFirst(true)}
          >
            Add More
          </button>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
              </tr>
            </thead>
            <tbody>
              {dataPendidikan &&
                dataPendidikan.map((item) => (
                  <tr
                    onClick={() => {
                      setOpenFirst(true);
                      setPendidikanDesc(item.card_description);
                      setPendidikanId(item.id);
                      setEdit(true);
                    }}
                  >
                    <td>
                      <img
                        src={item.card_image}
                        className="mx-auto"
                        width={'30%'}
                      />
                    </td>
                    <td>{item.card_description}</td>
                  </tr>
                ))}
            </tbody>
          </table>

          <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>

          <div>Image fasilitas Umum</div>
          <button
            class="btn btn-primary"
            type="submit"
            onClick={() => setOpenSecond(true)}
          >
            Add More
          </button>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
              </tr>
            </thead>
            <tbody>
              {dataUmum &&
                dataUmum.map((item) => (
                  <tr
                    onClick={() => {
                      setOpenSecond(true);
                      setUmumDesc(item.card_description);
                      setUmumId(item.id);
                      setEdit(true);
                    }}
                  >
                    <td>
                      <img
                        src={item.card_image}
                        className="mx-auto"
                        width={'30%'}
                      />
                    </td>
                    <td>{item.card_description}</td>
                  </tr>
                ))}
            </tbody>
          </table>

          <Popup
            open={openFirst}
            closeOnDocumentClick
            onClose={closeModalFirst}
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
                  width: '70%',
                  padding: '30px',
                  borderRadius: '10px',
                }}
              >
                <div class="mb-3 row">
                  <label for="staticEmail" class="col-sm-2 col-form-label">
                    Image fasilitas Pendidikan
                  </label>
                  <div class="col-sm-10">
                    <div class="input-group mb-3">
                      <input
                        type="file"
                        class="form-control"
                        id="inputGroupFile01"
                        onChange={handlePendidikanImg}
                      />
                    </div>
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
                        value={pendidikanDesc}
                        onChange={(e) => setPendidikanDesc(e.target.value)}
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
                  onClick={saveDataPendidikan}
                >
                  {edit ? 'Edit' : 'Add More'}
                </button>
                {edit && (
                  <button
                    class="btn btn-danger mt-2"
                    type="submit"
                    style={{ marginLeft: '20px' }}
                    onClick={closeModalFirst}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </Popup>

          <Popup
            open={openSecond}
            closeOnDocumentClick
            onClose={closeModalSecond}
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
                  width: '70%',
                  padding: '30px',
                  borderRadius: '10px',
                }}
              >
                <div class="mb-3 row">
                  <label for="staticEmail" class="col-sm-2 col-form-label">
                    Image fasilitas Umum
                  </label>
                  <div class="col-sm-10">
                    <div class="input-group mb-3">
                      <input
                        type="file"
                        class="form-control"
                        id="inputGroupFile01"
                        onChange={handleUmumImg}
                      />
                    </div>
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
                        value={umumDesc}
                        onChange={(e) => setUmumDesc(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <button
                  class="btn btn-secondary mt-2"
                  type="submit"
                  onClick={closeModalSecond}
                >
                  Cancel
                </button>
                <button
                  class="btn btn-primary mt-2"
                  type="submit"
                  style={{ marginLeft: '20px' }}
                  onClick={saveDataUmum}
                >
                  {edit ? 'Edit' : 'Add More'}
                </button>
                {edit && (
                  <button
                    class="btn btn-danger mt-2"
                    type="submit"
                    style={{ marginLeft: '20px' }}
                    onClick={closeModalSecond}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </Popup>

          {/* <div id="">
            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Image fasilitas Pendidikan
              </label>
              <div class="col-sm-10">
                <div class="input-group mb-3">
                  <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile01"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="" class="col-sm-2 col-form-label">
                  Title Text
                </label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="" />
                </div>
              </div>
            </div>

            <button class="btn btn-primary mt-2" type="submit" onClick={""}>
              Add More
            </button>

            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>

            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Image fasilitas Umum
              </label>
              <div class="col-sm-10">
                <div class="input-group mb-3">
                  <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile01"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="" class="col-sm-2 col-form-label">
                  Title Text
                </label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="" />
                </div>
              </div>
            </div>

            <button class="btn btn-primary mt-2" type="submit" onClick={""}>
              Add More
            </button>

            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <button class="btn btn-success mt-2" type="submit" onClick={""}>
              Save
            </button>
          </div> */}
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default SaranaDanPrasaranaAdmin;
