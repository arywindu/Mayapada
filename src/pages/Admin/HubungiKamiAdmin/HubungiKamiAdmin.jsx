import React, { useEffect, useState } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import LayoutAdmin from '../../../Layout/LayoutAdmin';
import { async } from 'q';
import axios from 'axios';

const HubungiKamiAdmin = () => {
  const token = localStorage.getItem('token');
  const [data, setData] = useState(null);
  const [contactWa, setContactWa] = useState(null);
  const [contackIg, setContactIg] = useState(null);
  const [contactFb, setContactFb] = useState(null);
  const [contactEmail, setContactEmail] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/contact/1'
      );
      // console.log(response.data, 'hub kami');
      const responseData = response.data.data;
      setContactWa(responseData.contact_wa);
      setContactIg(responseData.contact_ig);
      setContactFb(responseData.contact_fb);
      setContactEmail(responseData.contact_email);
      setData(responseData);
    } catch (error) {}
  };

  const saveData = async () => {
    try {
      const response = await axios.post(
        'https://api.stikesmayapada.ac.id/api/contact/1',
        {
          contactWa: contactWa,
          contactIg: contackIg,
          contactFb: contactFb,
          contactEmail: contactEmail,
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
      <div>
        <div class="row mt-5 mb-5" style={{ margin: '3% 10% 10% 10%' }}>
          <h4>
            <span className="bg-primary text-white">Hubungi Kami Admin</span>
          </h4>
          <div id="">
            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <div class="mb-3 row">
              <label for="" class="col-sm-2 col-form-label">
                WhatsApp No
              </label>
              <div class="col-sm-10">
                <input
                  type="number"
                  class="form-control"
                  id=""
                  value={contactWa}
                  onChange={(e) => setContactWa(e.target.value)}
                />
              </div>
            </div>

            <div class="mb-3 row">
              <label for="" class="col-sm-2 col-form-label">
                Instagram
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id=""
                  value={contackIg}
                  onChange={(e) => setContactIg(e.target.value)}
                />
              </div>
            </div>

            <div class="mb-3 row">
              <label for="" class="col-sm-2 col-form-label">
                Facebook
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id=""
                  value={contactFb}
                  onChange={(e) => setContactFb(e.target.value)}
                />
              </div>
            </div>

            <div class="mb-3 row">
              <label for="" class="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control"
                  id=""
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
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

export default HubungiKamiAdmin;
