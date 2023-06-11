import './HomeAdmin.css';

import React, { useEffect, useState } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import LayoutAdmin from '../../../Layout/LayoutAdmin';
import Popup from 'reactjs-popup';
import { async } from 'q';
import axios from 'axios';

const HomeAdmin = () => {
  const token = localStorage.getItem('token');
  const [data, setData] = useState(null);
  const [dataBanner, setDataBanner] = useState(null);
  const [textVisi, setTextVisi] = useState(null);
  const [textMisi, setTextMisi] = useState(null);
  const [tujuan, setTujuan] = useState(null);
  const [landasanHukum, setLandasanHukum] = useState(null);
  const [strukturOrganisasi, setStrukturOrganisasi] = useState(null);
  const [logoImage, setLogoImage] = useState(null);
  const [bannerImg, setBannerImg] = useState(null);
  const [textBanner, setTextBanner] = useState(null);
  const [btnBanner1, setBtnBanner1] = useState(null);
  const [btnBanner2, setBtnBanner2] = useState(null);
  const [showBtn1, setShowBtn1] = useState(false);
  const [showBtn2, setShowBtn2] = useState(false);
  const [openBanner, setOpenBanner] = useState(false);
  const [edit, setEdit] = useState(false);
  const [bannerId, setBannerId] = useState(null);
  const [headline, setHeadline] = useState(null);
  const [category, setCategory] = useState(null);
  const [indexing, setIndexing] = useState(null);

  useEffect(() => {
    getData();
    getDataBanner();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/homepage/1'
      );
      // console.log(response.data, "res");
      setData(response.data.data);
    } catch (error) { }
  };

  const getDataBanner = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/homepage/1/banner'
      );
      // console.log(response.data, "res");
      setDataBanner(response.data.data);
    } catch (error) { }
  };

  const saveData = async () => {
    try {
      // console.log(logoImage, "<<<<<<<<<<<<<<<,,");
      let formData = new FormData();
      formData.append('status', 1);
      formData.append('logoImage', logoImage);
      formData.append('textVisi', textVisi);
      formData.append('textMisi', textMisi);
      formData.append('tujuan', tujuan);
      formData.append('landasanHukum', landasanHukum);
      formData.append('strukturOrganisasi', strukturOrganisasi);
      const response = await axios.put(
        'https://api.stikesmayapada.ac.id/api/homepage/1',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      // console.log(response.status, "test");
      getData();
      const { status } = response;
      if (status === 200) {
        alert(`Berhasil update data`);
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      // console.log(error, "error");
    }
  };

  const saveDataBanner = async () => {
    try {
      let formData = new FormData();
      formData.append('homePageId', 1);
      formData.append('bannerImage', bannerImg);
      formData.append('headline', headline);
      formData.append('bannerText', textBanner);
      formData.append('button1', btnBanner1);
      formData.append('button2', btnBanner2);
      formData.append('button1Show', showBtn1 ? 1 : 0);
      formData.append('button2Show', showBtn2 ? 1 : 0);
      const response = await axios.post(
        'https://api.stikesmayapada.ac.id/api/homepage/1/banner',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      // console.log(response.status, "test");
      getData();
      getDataBanner();
      const { status } = response;
      if (status === 200 || status === 201) {
        alert(`Berhasil update data`);
        closeModalBanner();
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      // console.log(error, "error");
    }
  };

  const editDataBanner = async () => {
    try {
      // console.log(bannerImg);
      // console.log(indexing);
      let formData = new FormData();
      formData.append('homePageId', 1);
      formData.append(
        'bannerImage',
        bannerImg === null ? null : bannerImg[indexing]
      );
      formData.append('headline', headline);
      formData.append('bannerText', textBanner);
      formData.append('button1', btnBanner1);
      formData.append('button2', btnBanner2);
      formData.append('button1Show', showBtn1 ? 1 : 0);
      formData.append('button2Show', showBtn2 ? 1 : 0);
      const response = await axios.put(
        `https://api.stikesmayapada.ac.id/api/homepage/1/banner/${bannerId}`,
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
        alert(`Berhasil update data`);
        closeModalBanner();
        getData();
        getDataBanner();
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      // console.log(error, "error");
    }
  };

  const deleteBanner = async () => {
    try {
      const response = await axios.delete(
        `https://api.stikesmayapada.ac.id/api/homepage/1/banner/${bannerId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      // console.log(response.status, "test");
      getData();
      getDataBanner();
      const { status } = response;
      if (status === 200 || status === 201 || status === 204) {
        alert(`Berhasil delete data`);
        closeModalBanner();
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      // console.log(error, "error");
    }
  };

  const handleLogo = (event) => {
    // console.log(event.target.files[0], "logo");
    setLogoImage(event.target.files[0]);
  };
  const handleLogos = (event, index) => {
    const selectedFile = event.target.files[0];
    setLogoImage((prevFotoMataKuliah) => {
      const updatedFotoMataKuliah = Array.isArray(prevFotoMataKuliah)
        ? [...prevFotoMataKuliah]
        : [];
      updatedFotoMataKuliah[index] = selectedFile;
      return updatedFotoMataKuliah;
    });
  };

  const handleBanner = (event) => {
    setBannerImg(event.target.files[0]);
  };
  const handleBanners = (event, index) => {
    const selectedFile = event.target.files[0];
    setBannerImg((prevFotoMataKuliah) => {
      const updatedFotoMataKuliah = Array.isArray(prevFotoMataKuliah)
        ? [...prevFotoMataKuliah]
        : [];
      updatedFotoMataKuliah[index] = selectedFile;
      return updatedFotoMataKuliah;
    });
  };

  const closeModalBanner = () => {
    setOpenBanner(false);
    setEdit(false);
    setBannerImg(null);
    setBtnBanner1(null);
    setBtnBanner2(null);
    setShowBtn1(false);
    setShowBtn2(false);
    setTextBanner(null);
    setHeadline(null);
  };

  return (
    <LayoutAdmin>
      <div class="Home-Admin">
        <div class="row mt-5 mb-5" style={{ margin: '3% 10% 10% 10%' }}>
          <h4>
            <span className="bg-primary text-white">Home Admin</span>
          </h4>
          <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
          <div>Banner</div>
          <button
            class="btn btn-primary"
            type="submit"
            style={{ margin: '20px 0' }}
            onClick={() => {
              setOpenBanner(true);
              setCategory('add');
            }}
          >
            Add More
          </button>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Banner Text</th>
              </tr>
            </thead>
            <tbody>
              {dataBanner &&
                dataBanner.map((item, index) => (
                  <tr
                    onClick={() => {
                      setOpenBanner(true);
                      setBtnBanner1(
                        item.button_1 === 'null' ? '' : item.button_1
                      );
                      setBtnBanner2(
                        item.button_2 === 'null' ? '' : item.button_2
                      );
                      setShowBtn1(item.button_1_show === 1 ? true : false);
                      setShowBtn2(item.button_2_show === 1 ? true : false);
                      setTextBanner(
                        item.banner_text === 'null' ? '' : item.banner_text
                      );
                      setHeadline(
                        item.headline === 'null' ? '' : item.headline
                      );
                      setBannerId(item.id);
                      setIndexing(index);
                      const arrBanner = [];
                      dataBanner.map((item) => {
                        arrBanner.push(item.banner_image);
                      });
                      setBannerImg(arrBanner);
                      setEdit(true);
                    }}
                  >
                    <td>
                      <img
                        src={item.banner_image}
                        className="mx-auto"
                        width={'15%'}
                      />
                    </td>
                    <td>{item.banner_text}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Logo Image
            </label>
            <div class="col-sm-10">
              <div class="input-group mb-3">
                <input
                  type="file"
                  class="form-control"
                  id="inputGroupFile01"
                  onChange={handleLogo}
                />
              </div>
              <div>{data && data.logo_image}</div>
            </div>
          </div>
          {/* <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr> */}
          <div id="SectionBanner">
            {/* <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Banner Image
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
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Text Banner
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Button 1
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                />
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Show Button 1
                  </label>
                </div>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Button 2
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                />
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Show Button 2
                  </label>
                </div>
                <button class="btn btn-primary mt-2" type="submit">
                  Add More Banner
                </button>
              </div>
            </div> */}
            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <div class="mb-3 row">
              <label for="" class="col-sm-2 col-form-label">
                Section Visi
              </label>
              <div class="col-sm-10">
                <div class="input-group mb-3">
                  <div className="App">
                    <CKEditor
                      config={{
                        removePlugins: ["EasyImage", "ImageUpload", "MediaEmbed"]
                      }}
                      editor={ClassicEditor}
                      data={data && data.text_visi}
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setTextVisi(data);
                      }}
                      onBlur={(event, editor) => { }}
                      onFocus={(event, editor) => { }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <div class="mb-3 row">
              <label for="" class="col-sm-2 col-form-label">
                Section Misi
              </label>
              <div class="col-sm-10">
                <div class="input-group mb-3">
                  <div className="App">
                    <CKEditor
                      config={{
                        removePlugins: ["EasyImage", "ImageUpload", "MediaEmbed"]
                      }}
                      editor={ClassicEditor}
                      data={data && data.text_misi}
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setTextMisi(data);
                      }}
                      onBlur={(event, editor) => { }}
                      onFocus={(event, editor) => { }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <div class="mb-3 row">
              <label for="" class="col-sm-2 col-form-label">
                Section Tujuan
              </label>
              <div class="col-sm-10">
                <div class="input-group mb-3">
                  <div className="App">
                    <CKEditor
                      config={{
                        removePlugins: ["EasyImage", "ImageUpload", "MediaEmbed"]
                      }}
                      editor={ClassicEditor}
                      data={data && data.tujuan}
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setTujuan(data);
                      }}
                      onBlur={(event, editor) => { }}
                      onFocus={(event, editor) => { }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <div class="mb-3 row">
              <label for="" class="col-sm-2 col-form-label">
                Section Landasan Hukum
              </label>
              <div class="col-sm-10">
                <div class="input-group mb-3">
                  <div className="App">
                    <CKEditor
                      config={{
                        removePlugins: ["EasyImage", "ImageUpload", "MediaEmbed"]
                      }}
                      editor={ClassicEditor}
                      data={data && data.landasan_hukum}
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setLandasanHukum(data);
                      }}
                      onBlur={(event, editor) => { }}
                      onFocus={(event, editor) => { }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <div class="mb-3 row">
              <label for="" class="col-sm-2 col-form-label">
                Section Struktur Organisasi
              </label>
              <div class="col-sm-10">
                <div class="input-group mb-3">
                  <div className="App">
                    <CKEditor
                      config={{
                        removePlugins: ["EasyImage", "ImageUpload", "MediaEmbed"]
                      }}
                      editor={ClassicEditor}
                      data={data && data.struktur_organisasi}
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setStrukturOrganisasi(data);
                      }}
                      onBlur={(event, editor) => { }}
                      onFocus={(event, editor) => { }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <button
              class="btn btn-success mt-2"
              type="submit"
              onClick={saveData}
            >
              Save
            </button>
          </div>

          <Popup
            open={openBanner}
            closeOnDocumentClick
            onClose={closeModalBanner}
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
                    Banner Image
                  </label>
                  <div class="col-sm-10">
                    <div class="input-group mb-3">
                      <input
                        type="file"
                        class="form-control"
                        id={`inputGroupFile${bannerId}`}
                        onChange={(event) => {
                          if (category === 'add') {
                            handleBanner(event);
                          } else {
                            handleBanners(event, indexing);
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-2 col-form-label">
                    Headline
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      value={headline}
                      onChange={(e) => setHeadline(e.target.value)}
                    />
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
                      value={textBanner}
                      onChange={(e) => setTextBanner(e.target.value)}
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-2 col-form-label">
                    Button 1
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      value={btnBanner1}
                      onChange={(e) => setBtnBanner1(e.target.value)}
                    />
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                        checked={showBtn1}
                        onChange={() => setShowBtn1((prev) => !prev)}
                      />
                      <label class="form-check-label" for="defaultCheck1">
                        Show Button 1
                      </label>
                    </div>
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="" class="col-sm-2 col-form-label">
                    Link 1
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      value={btnBanner1}
                      onChange={(e) => setBtnBanner1(e.target.value)}
                    />
                    <div class="form-check"></div>
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-2 col-form-label">
                    Button 2
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      value={btnBanner2}
                      onChange={(e) => setBtnBanner2(e.target.value)}
                    />
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                        checked={showBtn2}
                        onChange={() => setShowBtn2((prev) => !prev)}
                      />
                      <label class="form-check-label" for="defaultCheck1">
                        Show Button 2
                      </label>
                    </div>
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-2 col-form-label">
                    Link 2
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      value={btnBanner1}
                      onChange={(e) => setBtnBanner1(e.target.value)}
                    />
                    <div class="form-check"></div>
                  </div>
                </div>

                <button
                  class="btn btn-secondary mt-2"
                  type="submit"
                  onClick={closeModalBanner}
                >
                  Cancel
                </button>
                <button
                  class="btn btn-primary mt-2"
                  type="submit"
                  style={{ marginLeft: '20px' }}
                  onClick={edit ? editDataBanner : saveDataBanner}
                >
                  {edit ? 'Edit' : 'Add More'}
                </button>
                {edit && (
                  <button
                    class="btn btn-danger mt-2"
                    type="submit"
                    style={{ marginLeft: '20px' }}
                    onClick={deleteBanner}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </Popup>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default HomeAdmin;
