import React, { useEffect, useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import LayoutAdmin from "../../../../Layout/LayoutAdmin";
import { async } from "q";
import axios from "axios";

const ProgramJalurBeasiswaAdmin = () => {
  const token = localStorage.getItem("token");
  const [content, setContent] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://stikesmayapada.ac.id/api/PMB/beasiswa/1"
      );
      console.log(response.data, "res");
      const dataRes = response.data.data;
      setContent(dataRes.konten);
    } catch (error) {
      console.log(error);
    }
  };

  const saveData = async () => {
    try {
      const response = await axios.post(
        "https://stikesmayapada.ac.id/api/PMB/beasiswa/1",
        {
          konten: content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.status, "test");
      getData();
      const { status } = response;
      if (status === 200) {
        alert(`Berhasil update data`);
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
      console.log(error, "error");
    }
  };

  return (
    <LayoutAdmin>
      <div>
        <div class="row mt-5 mb-5" style={{ margin: "3% 10% 10% 10%" }}>
          <h4>
            <span className="bg-primary text-white">Jalur Beasiswa Admin</span>
          </h4>
          <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
          <div id="SectionBanner">
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

export default ProgramJalurBeasiswaAdmin;
