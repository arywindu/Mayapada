import "./PenerimaanMahasiswaBaru.css";

import React, { useEffect, useState } from "react";

import Button from "../../../components/Button/Button";
import Layout from "../../../Layout/Layout";
import Typhography from "../../../components/Typhography/Typhography";
import axios from "axios";
import penerimaanMahasiswa from "../../../assets/images/penerimaan_mahasiswa.png";

const PenerimaanMahasiswa = () => {
  const [banner, setBanner] = useState(null);
  const [bannerImg, setBannerImg] = useState(null);
  const [title, setTitle] = useState(null);
  const [semesterKeperawatan, setsemesterKeperawatan] = useState(null);
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
      setsemesterKeperawatan({
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
  return (
    <Layout>
      <div className="penerimaan-mahasiswa-container">
        <div
          className="penerimaan-mahasiswa-header"
          style={{ backgroundImage: `url(${banner})` }}
        >
          {/* <img
            className="penerimaan-mahasiswa-header-img"
            src={penerimaanMahasiswa}
          /> */}
          <div className="penerimaan-mahasiswa-header-card">
            <div>
              <Typhography text={title} size="40px" fontWeight="600" />

              <Typhography text="Program Studi DIII Keperawatan" size="18px" />
              <Typhography
                text="Program Studi Administrasi Rumah Sakit"
                size="18px"
              />
            </div>
          </div>
        </div>

        <div className="penerimaan-mahasiswa-content">
          <div className="penerimaan-mahasiswa-content-row">
            <div
              className="penerimaan-mahasiswa-card"
              style={{
                backgroundImage: `url(
                    https://s3-alpha-sig.figma.com/img/886d/c8f0/6f7234ec9eec2720d909600050772baa?Expires=1681084800&Signature=KbOmaSUESrKlCgW67QVzOvbXcTCeFjbZh2I6ywf73wcMhGigvxJGdlwwHvL0geFIB9bAoPGm0zdEbJEKHY0gPOHRl-EJ3Fwcy2RHFei0HueOqdYA8U~rmuCH-i3FoEJ8gWwzZoZK0NLNlF25VLFBI1bJf5XgxNIJwqr3443ZfICivLisSZoTdYNwApoBaZ6UM4YKZTr9HQH9ymkx8QKIASxDq2XcXBeO1LonY8Lnw3ytZYXUxVJwnybBaSw1AtkvvaNdSkXhkXgrtkUwZHBC~99KVea9qKb-KQ0WEg3GYHu1bB85S26ENnjN84nhUU89nnEe4SvokBAXa~w7lllvwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4
                )`,
              }}
            >
              <div className="penerimaan-mahasiswa-card-content">
                <Typhography text="Program Jalur" size="24px" color="white" />
                <Typhography
                  text="Mandiri"
                  size="24px"
                  fontWeight="600"
                  color="white"
                />
                <Button
                  text="info lengkap"
                  type="btn-border"
                  borderColor="white"
                  style={{ marginTop: "12px" }}
                  onClick={(event) => (window.location.href = "/JalurMandiri")}
                />
              </div>
            </div>

            <div
              className="penerimaan-mahasiswa-card"
              style={{
                backgroundImage: `url(
                  ${penerimaanMahasiswa}
                )`,
              }}
            >
              <div className="penerimaan-mahasiswa-card-content">
                <Typhography text="Program Jalur" size="24px" color="white" />
                <Typhography
                  text="Beasiswa"
                  size="24px"
                  fontWeight="600"
                  color="white"
                />
                <Button
                  text="info lengkap"
                  type="btn-border"
                  borderColor="white"
                  style={{ marginTop: "12px" }}
                  onClick={(event) => (window.location.href = "/JalurBeasiswa")}
                />
              </div>
            </div>
          </div>

          <Typhography
            text="Biaya Prodi : Diploma III Keperawatan"
            size="37px"
            color="#278BC8"
          />
          <div className="penerimaan-mahasiswa-row">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>Semester I</td>
                  <td>{semesterKeperawatan && semesterKeperawatan.s1}</td>
                </tr>
                <tr>
                  <td>Semester II</td>
                  <td>{semesterKeperawatan && semesterKeperawatan.s2}</td>
                </tr>
                <tr>
                  <td>Semester III</td>
                  <td>{semesterKeperawatan && semesterKeperawatan.s3}</td>
                </tr>
              </tbody>
            </table>

            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>Semester IV</td>
                  <td>{semesterKeperawatan && semesterKeperawatan.s4}</td>
                </tr>
                <tr>
                  <td>Semester V</td>
                  <td>{semesterKeperawatan && semesterKeperawatan.s5}</td>
                </tr>
                <tr>
                  <td>Semester VI</td>
                  <td>{semesterKeperawatan && semesterKeperawatan.s6}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Typhography
            text="Biaya Prodi : S1 Administrasi Rumah Sakit"
            size="37px"
            color="#278BC8"
          />

          <div className="penerimaan-mahasiswa-row">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>Semester I</td>
                  <td>{semesterRs && semesterRs.s1}</td>
                </tr>
                <tr>
                  <td>Semester II</td>
                  <td>{semesterRs && semesterRs.s2}</td>
                </tr>
                <tr>
                  <td>Semester III</td>
                  <td>{semesterRs && semesterRs.s3}</td>
                </tr>
              </tbody>
            </table>

            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>Semester IV</td>
                  <td>{semesterRs && semesterRs.s4}</td>
                </tr>
                <tr>
                  <td>Semester V</td>
                  <td>{semesterRs && semesterRs.s5}</td>
                </tr>
                <tr>
                  <td>Semester VI</td>
                  <td>{semesterRs && semesterRs.s6}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PenerimaanMahasiswa;
