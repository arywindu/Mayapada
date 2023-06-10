import React, { useEffect, useState } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import LayoutAdmin from '../../../../Layout/LayoutAdmin';
import { async } from 'q';
import axios from 'axios';

const ProgramJalurMandiriAdmin = () => {
  const token = localStorage.getItem('token');
  const [data, setData] = useState(null);
  const [img1, setImg1] = useState(null);
  const [text1, setText1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [text2, setText2] = useState(null);
  const [img3, setImg3] = useState(null);
  const [text3, setText3] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/PMB/mandiri/1'
      );
      // console.log(response.data, 'res');
      const dataRes = response.data.data;
      setText1(dataRes.text_1);
      setText2(dataRes.text_2);
      setText3(dataRes.text_3);
      setContent(dataRes.konten);
      setData(dataRes);
    } catch (error) {
      // console.log(error);
    }
  };

  const saveData = async () => {
    try {
      let formData = new FormData();
      formData.append('img1', img1 ? img1 : data.img_1);
      formData.append('text1', text1);
      formData.append('img2', img2 ? img2 : data.img_2);
      formData.append('text2', text2);
      formData.append('img3', img3 ? img3 : data.img_3);
      formData.append('text3', text3);
      formData.append('konten', content);
      const response = await axios.post(
        'https://api.stikesmayapada.ac.id/api/PMB/mandiri/1',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      // console.log(response.status, 'test');
      getData();
      const { status } = response;
      if (status === 200) {
        alert(`Berhasil update data`);
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      // console.log(error, 'error');
    }
  };

  const handleImg1 = (event) => {
    setImg1(event.target.files[0]);
  };

  const handleImg2 = (event) => {
    setImg2(event.target.files[0]);
  };

  const handleImg3 = (event) => {
    setImg3(event.target.files[0]);
  };
  return (
    <LayoutAdmin>
      <div>
        <div class="row mt-5 mb-5" style={{ margin: '3% 10% 10% 10%' }}>
          <h4>
            <span className="bg-primary text-white">Jalur Mandiri Admin</span>
          </h4>
          <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
          <div id="SectionBanner">
            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Photo
              </label>
              <div class="col-sm-10">
                <div class="input-group mb-3">
                  <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile01"
                    onChange={handleImg1}
                  />
                </div>
                <div>{data && data.img_1}</div>
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
                  value={text1}
                  onChange={(e) => setText1(e.target.value)}
                />
              </div>
            </div>
            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Photo
              </label>
              <div class="col-sm-10">
                <div class="input-group mb-3">
                  <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile01"
                    onChange={handleImg2}
                  />
                </div>
                <div>{data && data.img_2}</div>
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
                  value={text2}
                  onChange={(e) => setText2(e.target.value)}
                />
              </div>
            </div>
            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Photo
              </label>
              <div class="col-sm-10">
                <div class="input-group mb-3">
                  <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile01"
                    onChange={handleImg3}
                  />
                </div>
                <div>{data && data.img_3}</div>
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
                  value={text3}
                  onChange={(e) => setText3(e.target.value)}
                />
              </div>
            </div>

            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <div class="mb-3 row">
              <label for="" class="col-sm-2 col-form-label">
                Isi Konten
              </label>
              <div class="col-sm-10">
                <CKEditor
                  editor={ClassicEditor}
                  data={content}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setContent(data);
                  }}
                  onBlur={(event, editor) => {}}
                  onFocus={(event, editor) => {}}
                />
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
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default ProgramJalurMandiriAdmin;
