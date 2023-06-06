import './SopAdmin.css';

import React, { useEffect, useState } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import LayoutAdmin from '../../../../Layout/LayoutAdmin';
import axios from 'axios';

const SopAdmin = () => {
  const token = localStorage.getItem('token');
  const [data, setData] = useState(null);
  const [sop, setSOP] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/spmi/1/sop'
      );
      // console.log(response.data, 'res');
      setData(response.data.data);
    } catch (error) {
      // console.log(error);
    }
  };

  const saveData = async () => {
    try {
      const response = await axios.put(
        'https://api.stikesmayapada.ac.id/api/spmi/1',
        {
          sop: sop,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
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
  return (
    <LayoutAdmin>
      <div class="Home-Admin-Keperawatan">
        <div class="row mt-5 mb-5" style={{ margin: '3% 10% 10% 10%' }}>
          <h4>
            <span className="bg-primary text-white">SOP Admin</span>
          </h4>
          <hr class="bg-danger border-2 border-top border-dark mt-1 mb-4"></hr>
          <div class="mb-3 row">
            <label for="" class="col-sm-2 col-form-label">
              Title
            </label>
            <div class="col-sm-10">
              <div class="mb-3 row">
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="InputText1" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <div class="mb-3 row">
              <label for="" class="col-sm-2 col-form-label">
                Text
              </label>
              <div class="col-sm-10">
                <div class="input-group mb-3">
                  <div className="App">
                    <CKEditor
                      editor={ClassicEditor}
                      data={data && data.sop}
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setSOP(data);
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
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default SopAdmin;
