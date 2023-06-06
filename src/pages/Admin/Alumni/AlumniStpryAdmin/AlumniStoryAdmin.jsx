import React, { useEffect, useState } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import LayoutAdmin from '../../../../Layout/LayoutAdmin';
import Popup from 'reactjs-popup';
import { async } from 'q';
import axios from 'axios';

const AlumniStoryAdmin = () => {
  const token = localStorage.getItem('token');
  const [data, setData] = useState(null);
  const [openFirst, setOpenFirst] = useState(false);
  const [edit, setEdit] = useState(false);
  const [alumniStoryName, setAlumniStoryName] = useState(null);
  const [alumniStoryHistory, setAlumniStoryHistory] = useState(null);
  const [alumniStoryImg, setAlumniStoryImg] = useState(null);

  const closeModalFirst = () => {
    setOpenFirst(false);
    setAlumniStoryHistory(null);
    setAlumniStoryImg(null);
    setAlumniStoryName(null);
    setEdit(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/alumni/story/alumni'
      );
      // console.log(response.data, 'res');
      setData(response.data.data);
    } catch (error) { }
  };

  const saveData = async () => {
    try {
      let formData = new FormData();
      formData.append('ikatanAlumniText', '');
      formData.append('alumniStoryName', alumniStoryName);
      formData.append('alumniStoryHistory', alumniStoryHistory);
      formData.append('alumniStoryImg', alumniStoryImg);
      const response = await axios.post(
        'https://api.stikesmayapada.ac.id/api/alumni/story',
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
        closeModalFirst();
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      // console.log(error, 'error');
    }
  };

  const handleAlumniImg = (event) => {
    setAlumniStoryImg(event.target.files[0]);
  };

  return (
    <LayoutAdmin>
      <div>
        <div class="row mt-5 mb-5" style={{ margin: '3% 10% 10% 10%' }}>
          <h4>
            <span className="bg-primary text-white">Alumni Story Admin</span>
          </h4>
          <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
          <div id="SectionBanner">
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
                  <th scope="col">Name</th>
                  <th scope="col">Story</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((item) => (
                    <tr
                    // onClick={() => {
                    //   setOpenFirst(true);
                    //   setPendidikanDesc(item.card_description);
                    //   setPendidikanId(item.id);
                    //   setEdit(true);
                    // }}
                    >
                      <td>
                        <img
                          src={item.alumni_story_img}
                          className="mx-auto"
                          width={'30%'}
                        />
                      </td>
                      <td>{item.alumni_story_name}</td>
                      <td>{item.alumni_story_history}</td>
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
                      Image
                    </label>
                    <div class="col-sm-10">
                      <div class="input-group mb-3">
                        <input
                          type="file"
                          class="form-control"
                          id="inputGroupFile01"
                          onChange={handleAlumniImg}
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class="col-sm-2 col-form-label">
                        Name
                      </label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          id=""
                          value={alumniStoryName}
                          onChange={(e) => setAlumniStoryName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class="col-sm-2 col-form-label">
                        Description
                      </label>
                      <div class="col-sm-10">
                        <textarea
                          type="text"
                          class="form-control"
                          id=""
                          rows="10"
                          value={alumniStoryHistory}
                          onChange={(e) =>
                            setAlumniStoryHistory(e.target.value)
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
                    onClick={saveData}
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

            {/* <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Photo Mahasiswa
              </label>
              <div class="col-sm-6">
                <div class="input-group mb-3">
                  <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile01"
                  />
                </div>
              </div>
              <div class="col-sm-4">
                <button class="btn btn-success mt-2" type="submit" onClick={""}>
                  Save
                </button>
              </div>
            </div> */}

            {/* <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr> */}
            {/* <div class="mb-3 row">
                            <label for="" class="col-sm-2 col-form-label">
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

            {/* <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <div class="mb-3 row">
              <label for="" class="col-sm-2 col-form-label">
                Isi Konten
              </label>
              <div class="col-sm-10">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="10"
                ></textarea>
              </div>
            </div>

            <button class="btn btn-primary mt-2" type="submit" onClick={""}>
              Add More
            </button> */}

            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default AlumniStoryAdmin;
