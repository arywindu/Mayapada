import "./PenerimaanMahasiswaBaru.css";

import Button from "../../../components/Button/Button";
import Layout from "../../../Layout/Layout";
import React from "react";
import Typhography from "../../../components/Typhography/Typhography";
import penerimaanMahasiswa from "../../../assets/images/penerimaan_mahasiswa.png";

const PenerimaanMahasiswa = () => {
  return (
    <Layout>
      <div className="penerimaan-mahasiswa-container">
        <div className="penerimaan-mahasiswa-header">
          {/* <img
            className="penerimaan-mahasiswa-header-img"
            src={penerimaanMahasiswa}
          /> */}
          <div className="penerimaan-mahasiswa-header-card">
            <div>
              <Typhography
                text="Penerimaan Mahasiswa Baru Tahun Akademik 2023-2024"
                size="40px"
                fontWeight="600"
              />

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
                  <td>Rp 11.000.000</td>
                </tr>
                <tr>
                  <td>Semester II</td>
                  <td>Rp 7.200.000</td>
                </tr>
                <tr>
                  <td>Semester III</td>
                  <td>Rp 18.000.000</td>
                </tr>
              </tbody>
            </table>

            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>Semester IV</td>
                  <td>Rp 7.500.000</td>
                </tr>
                <tr>
                  <td>Semester V</td>
                  <td>Rp 9.500.000</td>
                </tr>
                <tr>
                  <td>Semester VI</td>
                  <td>Rp 10.550.000</td>
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
                  <td></td>
                </tr>
                <tr>
                  <td>Semester II</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Semester II</td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>Semester IV</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Semester V</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Semester VI</td>
                  <td></td>
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
