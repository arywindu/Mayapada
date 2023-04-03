import "./RegistrasiBerhasil.css";

import Layout from "../../../Layout/Layout";
import React from "react";
import Typhography from "../../../components/Typhography/Typhography";
import successLogo from "../../../assets/images/clarity_success-standard-solid.svg";

const RegistrasiBerhasil = () => {
  return (
    <Layout>
      <div className="registrasi-container">
        <img
          className="registrasi-img"
          src={successLogo}
          style={{ alignSelf: "center" }}
        />

        <Typhography
          text="Registrasi Berhasil"
          size="40px"
          fontWeight="700"
          color="#282828"
          style={{ marginTop: "30px", textAlign: "center" }}
        />

        <Typhography
          text="Selamat, Pendaftaran mahasiswa baru berhasil. SIlakan lakukan pembayaran biaya pendaftaran melalui teller bank atau transfer ke rekening bank antariksa."
          size="24px"
          fontWeight="400"
          color="#282828"
          style={{ marginTop: "30px", textAlign: "center" }}
        />

        <div className="registrasi-card">
          <table>
            <tbody>
              <tr style={{ lineHeight: "4rem" }}>
                <td>
                  <Typhography
                    text="Nama Bank"
                    size="24px"
                    fontWeight="500"
                    color="#000000"
                  />
                </td>
                <td>
                  <Typhography
                    text=":"
                    size="24px"
                    fontWeight="500"
                    color="#000000"
                    style={{ width: "25px" }}
                  />
                </td>
                <td>
                  <Typhography
                    text="Bank Mayapada"
                    size="24px"
                    fontWeight="500"
                    color="#000000"
                  />
                </td>
              </tr>
              <tr style={{ lineHeight: "4rem" }}>
                <td>
                  <Typhography
                    text="Atas Nama"
                    size="24px"
                    fontWeight="500"
                    color="#000000"
                  />
                </td>
                <td>
                  <Typhography
                    text=":"
                    size="24px"
                    fontWeight="500"
                    color="#000000"
                    style={{ width: "25px" }}
                  />
                </td>
                <td>
                  <Typhography
                    text="YAYASAN MITRA ANTARIKSA"
                    size="24px"
                    fontWeight="500"
                    color="#000000"
                  />
                </td>
              </tr>
              <tr style={{ lineHeight: "4rem" }}>
                <td>
                  <Typhography
                    text="Nomor Rekening"
                    size="24px"
                    fontWeight="500"
                    color="#000000"
                  />
                </td>
                <td>
                  <Typhography
                    text=":"
                    size="24px"
                    fontWeight="500"
                    color="#000000"
                    style={{ width: "25px" }}
                  />
                </td>
                <td>
                  <Typhography
                    text="820-30-00001-2"
                    size="24px"
                    fontWeight="500"
                    color="#000000"
                  />
                </td>
              </tr>
              <tr style={{ lineHeight: "4rem" }}>
                <td>
                  <Typhography
                    text="Biaya Pendaftaran"
                    size="24px"
                    fontWeight="500"
                    color="#000000"
                  />
                </td>
                <td>
                  <Typhography
                    text=":"
                    size="24px"
                    fontWeight="500"
                    color="#000000"
                    style={{ width: "25px" }}
                  />
                </td>
                <td>
                  <Typhography
                    text="Rp. 175.000"
                    size="24px"
                    fontWeight="500"
                    color="#000000"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          style={{
            width: "100%",
            height: "1px",
            borderBottom: "1px solid #A8A9AA",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typhography
            text="Harap melakukan konfirmasi pembayaran dengan membawa bukti transfer dan juga persyaratan pada saat daftar ulang di kampus Stikes Mayapada."
            size="18px"
            fontWeight="400"
            color="#000000"
            style={{ marginTop: "10%" }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "5% 0",
            }}
          >
            <div>
              <Typhography
                text="Berkas persyaratan kelas REGULER"
                size="20px"
                fontWeight="600"
                color="#000000"
                style={{ marginBottom: "14px" }}
              />

              <li>Pas Foto Berwarna 4x6 (1 Lembar)</li>
              <li>Fotokopi KTP (1 Lembar) Fotocopy</li>
              <li>Ijazah SMA/SMK (1 Lembar) Fotocopy</li>
              <li>Kartu Keluarga (1 Lembar) Fotocopy</li>
              <li>Rapor Semester 5-6 (1 Lembar)</li>
            </div>

            <div>
              <Typhography
                text="Berkas persyaratan kelas KARYAWAN"
                size="20px"
                fontWeight="600"
                color="#000000"
                style={{ marginBottom: "14px" }}
              />

              <li>Pas Foto Berwarna 4x6 (1 Lembar)</li>
              <li>Fotokopi KTP (1 Lembar) Fotocopy</li>
              <li>Ijazah SMA/SMK (1 Lembar) Fotocopy</li>
              <li>Kartu Keluarga (1 Lembar) Fotocopy</li>
              <li>Rapor Semester 5-6 (1 Lembar)</li>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegistrasiBerhasil;
