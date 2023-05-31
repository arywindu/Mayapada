import React, { useEffect, useState } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import LayoutAdmin from '../../../../Layout/LayoutAdmin';
import { async } from 'q';
import axios from 'axios';

const TracerStudyAdmin = () => {
  const token = localStorage.getItem('token');
  const [data, setData] = useState(null);
  const [tracerStudyText, setTracerStudyText] = useState(null);
  const [tracerStudyImg, setTracerStudyImg] = useState(null);
  const [tracerStudyForm, setTracerStudyForm] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/alumni/tracer/1'
      );
      console.log(response.data, 'res');
      setData(response.data.data);
    } catch (error) {}
  };

  const saveData = async () => {
    try {
      let formData = new FormData();
      formData.append('id', 1);
      formData.append('tracerStudyText', tracerStudyText);
      formData.append('tracerStudyImg', tracerStudyImg);
      formData.append('tracerStudyForm', tracerStudyForm);
      const response = await axios.post(
        'https://api.stikesmayapada.ac.id/api/alumni/tracer',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response.status, 'test');
      getData();
      const { status } = response;
      if (status === 200) {
        alert(`Berhasil update data`);
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      console.log(error, 'error');
    }
  };

  const handleTracerImg = (event) => {
    setTracerStudyImg(event.target.files[0]);
  };

  const handleTracerPDF = (event) => {
    setTracerStudyForm(event.target.files[0]);
  };
  return (
    <LayoutAdmin>
      <div>
        <div class="row mt-5 mb-5" style={{ margin: '3% 10% 10% 10%' }}>
          <h4>
            <span className="bg-primary text-white">Tracer Study Admin</span>
          </h4>
          <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
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
                    onChange={handleTracerImg}
                  />
                </div>
                <div>{data && data.tracer_study_img}</div>
              </div>
            </div>

            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            {/* <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">
                                Title Text
                            </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control"
                                    id=""
                                />
                            </div>
                        </div> */}
            <div class="mb-3 row">
              <label for="" class="col-sm-2 col-form-label">
                Section Text
              </label>
              <div class="col-sm-10">
                <div class="input-group mb-3">
                  <div className="App">
                    <CKEditor
                      editor={ClassicEditor}
                      data={data && data.tracer_study_text}
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setTracerStudyText(data);
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
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Pdf File
              </label>
              <div class="col-sm-10">
                <div class="input-group mb-3">
                  <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile01"
                    onChange={handleTracerPDF}
                  />
                </div>
                <div>{data && data.tracer_study_form}</div>
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

export default TracerStudyAdmin;
