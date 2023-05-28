import React, { useEffect, useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import LayoutAdmin from "../../../../Layout/LayoutAdmin";
import { async } from "q";
import axios from "axios";

const PenerimaanMahasiswaAdmin = () => {
  const token = localStorage.getItem("token");
  const [banner, setBanner] = useState(null);
  const [bannerImg, setBannerImg] = useState(null);
  const [title, setTitle] = useState(null);
  const [semesterKeperawatan, setSemesterKeperawatan] = useState(null);
  const [semesterRs, setSemesterRs] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://stikesmayapada.ac.id/api/PMB/1"
      );
      console.log(response.data, "res");
      const dataRes = response.data.data;
      setBanner(dataRes.banner_img);
      setTitle(dataRes.title_text);
      setSemesterKeperawatan({
        s1: dataRes.perawat_smt_1,
        s2: dataRes.perawat_smt_2,
        s3: dataRes.perawat_smt_3,
        s4: dataRes.perawat_smt_4,
        s5: dataRes.perawat_smt_5,
        s6: dataRes.perawat_smt_6,
      });
      setSemesterRs({
        s1: dataRes.rs_smt_1,
        s2: dataRes.rs_smt_2,
        s3: dataRes.rs_smt_3,
        s4: dataRes.rs_smt_4,
        s5: dataRes.rs_smt_5,
        s6: dataRes.rs_smt_6,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const saveData = async () => {
    try {
      let formData = new FormData();
      formData.append("bannerImg", bannerImg);
      formData.append("titleText", title);
      formData.append("perawatSmt1", semesterKeperawatan.s1);
      formData.append("perawatSmt2", semesterKeperawatan.s2);
      formData.append("perawatSmt3", semesterKeperawatan.s3);
      formData.append("perawatSmt4", semesterKeperawatan.s4);
      formData.append("perawatSmt5", semesterKeperawatan.s5);
      formData.append("perawatSmt6", semesterKeperawatan.s6);
      formData.append("rsSmt1", semesterRs.s1);
      formData.append("rsSmt2", semesterRs.s2);
      formData.append("rsSmt3", semesterRs.s3);
      formData.append("rsSmt4", semesterRs.s4);
      formData.append("rsSmt5", semesterRs.s5);
      formData.append("rsSmt6", semesterRs.s6);
      const response = await axios.post(
        "https://stikesmayapada.ac.id/api/PMB/1",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
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

  const handleBannerImg = (event) => {
    setBannerImg(event.target.files[0]);
  };
  return (
    <LayoutAdmin>
      <div>
        <div class="row mt-5 mb-5" style={{ margin: "3% 10% 10% 10%" }}>
          <h4>
            <span className="bg-primary text-white">
              Penerimaan Mahasiswa Baru
            </span>
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
                    onChange={handleBannerImg}
                  />
                </div>
                <div>{banner}</div>
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <h5>Biaya Diploma III Keperawatan</h5>
            <div class="mb-3 row">
              <div class="mb-3 row">
                <label for="" class="col-sm-2 col-form-label">
                  Semester I
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    value={semesterKeperawatan && semesterKeperawatan.s1}
                    onChange={(e) =>
                      setSemesterKeperawatan({
                        ...semesterKeperawatan,
                        s1: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="" class="col-sm-2 col-form-label">
                  Semester II
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    value={semesterKeperawatan && semesterKeperawatan.s2}
                    onChange={(e) =>
                      setSemesterKeperawatan({
                        ...semesterKeperawatan,
                        s2: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="" class="col-sm-2 col-form-label">
                  Semester III
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    value={semesterKeperawatan && semesterKeperawatan.s3}
                    onChange={(e) =>
                      setSemesterKeperawatan({
                        ...semesterKeperawatan,
                        s3: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="" class="col-sm-2 col-form-label">
                  Semester IV
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    value={semesterKeperawatan && semesterKeperawatan.s4}
                    onChange={(e) =>
                      setSemesterKeperawatan({
                        ...semesterKeperawatan,
                        s4: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="" class="col-sm-2 col-form-label">
                  Semester V
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    value={semesterKeperawatan && semesterKeperawatan.s5}
                    onChange={(e) =>
                      setSemesterKeperawatan({
                        ...semesterKeperawatan,
                        s5: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="" class="col-sm-2 col-form-label">
                  Semester VI
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    value={semesterKeperawatan && semesterKeperawatan.s6}
                    onChange={(e) =>
                      setSemesterKeperawatan({
                        ...semesterKeperawatan,
                        s6: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
            <h5>Biaya Diploma III Adm Rumah Sakit</h5>
            <div class="mb-3 row">
              <div class="mb-3 row">
                <label for="" class="col-sm-2 col-form-label">
                  Semester I
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    value={semesterRs && semesterRs.s1}
                    onChange={(e) =>
                      setSemesterRs({
                        ...semesterRs,
                        s1: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="" class="col-sm-2 col-form-label">
                  Semester II
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    value={semesterRs && semesterRs.s2}
                    onChange={(e) =>
                      setSemesterRs({
                        ...semesterRs,
                        s2: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="" class="col-sm-2 col-form-label">
                  Semester III
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    value={semesterRs && semesterRs.s3}
                    onChange={(e) =>
                      setSemesterRs({
                        ...semesterRs,
                        s3: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="" class="col-sm-2 col-form-label">
                  Semester IV
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    value={semesterRs && semesterRs.s4}
                    onChange={(e) =>
                      setSemesterRs({
                        ...semesterRs,
                        s4: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="" class="col-sm-2 col-form-label">
                  Semester V
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    value={semesterRs && semesterRs.s5}
                    onChange={(e) =>
                      setSemesterRs({
                        ...semesterRs,
                        s5: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="" class="col-sm-2 col-form-label">
                  Semester VI
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    value={semesterRs && semesterRs.s6}
                    onChange={(e) =>
                      setSemesterRs({
                        ...semesterRs,
                        s6: e.target.value,
                      })
                    }
                  />
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

export default PenerimaanMahasiswaAdmin;
