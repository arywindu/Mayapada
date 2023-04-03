import "./ProgramJalurBeasiswa.css";

import Button from "../../../components/Button/Button";
import Layout from "../../../Layout/Layout";
import React from "react";
import Typhography from "../../../components/Typhography/Typhography";

const ProgramJalurBeasiswa = () => {
  return (
    <Layout>
      <div className="pjb-container">
        <Typhography type="title" text="Halaman Registrasi Mahasiswa Baru" />

        <div className="form-wrapper">
          <div className="form-row">
            <div className="col">
              <label>Program Kelas* :</label>
              <input
                type="text"
                className="form-control"
                placeholder="--Pilih Program Kelas--"
              />
            </div>
            <div className="col">
              <label>Jenis Kelamin* :</label>
              <input
                type="text"
                className="form-control"
                placeholder="--Pilih Jenis Kelamin--"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label>Nama Lengkap* :</label>
              <input
                type="text"
                className="form-control"
                placeholder="contoh: Putri"
              />
            </div>
            <div className="col">
              <label>Pilih Agama* :</label>
              <input
                type="text"
                className="form-control"
                placeholder="--Pilih Agama--"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label>Tempat Lahir* :</label>
              <input
                type="text"
                className="form-control"
                placeholder="contoh: Jakarta"
              />
            </div>
            <div className="col">
              <label>Berat Badan (dalam KG)* :</label>
              <input
                type="number"
                className="form-control"
                placeholder="contoh: 55"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label>Tanggal Lahir* :</label>
              <input
                type="text"
                className="form-control"
                placeholder="contoh: 2023-03-15"
              />
            </div>
            <div className="col">
              <label>Tinggi Badan (dalam CM)* :</label>
              <input
                type="number"
                className="form-control"
                placeholder="contoh: 170"
              />
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: "1px",
              borderBottom: "1px solid #A8A9AA",
              margin: "5% 0",
            }}
          />

          <div className="form-row">
            <div className="col">
              <label>Nama Orang Tua/Wali* :</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col">
              <label>Nomor KTP* :</label>
              <input type="number" className="form-control" />
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label>Alamat Lengkap* :</label>
              <textarea type="text" className="form-control" rows="5" />
            </div>
            <div className="col">
              <div className="col">
                <label>Nomor Telepon/Handphone* :</label>
                <input type="number" className="form-control" />
              </div>
              <div className="col" style={{ marginTop: "20px" }}>
                <label>Nomor Induk Siswa Nasional (NISN)* :</label>
                <input type="number" className="form-control" />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label>Provinsi* :</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col">
              <label>Alamat Email* :</label>
              <input type="email" className="form-control" />
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label>Provinsi* :</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col">
              <label>Alamat Email* :</label>
              <input type="email" className="form-control" />
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label>Kota/Kabupaten* :</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col">
              <label>Asal Sekolah * :</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label>Kode Pos* :</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col">
              <label>Alamat Sekolah Asal* :</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>

        <div className="pjb-btn-row">
          <Button text="Daftar" />
          <Button
            text="Hapus"
            style={{ backgroundColor: "#494949", marginLeft: "20px" }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProgramJalurBeasiswa;
