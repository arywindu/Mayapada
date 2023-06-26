import './ProgramJalurBeasiswa.css';

import React, { useState } from 'react';

import Button from '../../../components/Button/Button';
import Layout from '../../../Layout/Layout';
import Typhography from '../../../components/Typhography/Typhography';
import axios from 'axios';

const ProgramJalurBeasiswa = () => {
  const [data, setData] = useState({
    programStudi: '',
    programKelas: '',
    namaLengkap: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: '',
    pilihAgama: '',
    beratBadan: '',
    tinggiBadan: '',
    namaOrtu: '',
    alamat: '',
    provinsi: '',
    kota: '',
    kodePos: '',
    ktp: '',
    noHp: '',
    nisn: '',
    email: '',
    asalSekolah: '',
    alamatAsalSekolah: '',
  });


  function resetData() {
    window.location.reload(false);
  }


  const saveData = async () => {

    if (data.programStudi === '' ||
      data.programKelas === '' ||
      data.namaLengkap === '' ||
      data.tempatLahir === '' ||
      data.tanggalLahir === '' ||
      data.jenisKelamin === '' ||
      data.pilihAgama === '' ||
      data.beratBadan === '' ||
      data.tinggiBadan === '' ||
      data.namaOrtu === '' ||
      data.alamat === '' ||
      data.provinsi === '' ||
      data.kota === '' ||
      data.kodePos === '' ||
      data.ktp === '' ||
      data.noHp === '' ||
      data.nisn === '' ||
      data.email === '' ||
      data.asalSekolah === '' ||
      data.alamatAsalSekolah === '') {
      alert(`Semua Form harus di isi`);
    } else {
      try {
        const response = await axios.post(
          'https://api.stikesmayapada.ac.id/api/form/register',
          {
            programStudi: data.programStudi,
            programKelas: data.programKelas,
            namaLengkap: data.namaLengkap,
            tempatLahir: data.tempatLahir,
            tanggalLahir: data.tanggalLahir,
            jenisKelamin: data.jenisKelamin,
            pilihAgama: data.pilihAgama,
            beratBadan: data.beratBadan,
            tinggiBadan: data.tinggiBadan,
            namaOrtu: data.namaOrtu,
            alamat: data.alamat,
            provinsi: data.provinsi,
            kota: data.kota,
            kodePos: data.kodePos,
            ktp: data.ktp,
            noHp: data.noHp,
            nisn: data.nisn,
            email: data.email,
            asalSekolah: data.asalSekolah,
            alamatAsalSekolah: data.alamatAsalSekolah,
          }
        );
        // console.log(response.status, 'test');
        const { status } = response;
        if (status === 200 || status === 201) {
          window.location.href = '/RegistrasiBerhasil';
        }
      } catch (error) {
        alert(`${error.response.data.message}`);
        // console.log(error, 'error');
      }
    }
  };
  return (
    <Layout>
      <div className="pjb-container" style={{ overflowY: 'hidden' }}>
        <Typhography type="title" text="Halaman Registrasi Mahasiswa Baru" />

        <div className="form-wrapper">

          <div className="form-row">
            <div className="col">
              <label>Program Studi* :</label>
              <select
                className="form-control"
                placeholder="--Pilih Program Studi--"
                value={data && data.programStudi}
                onChange={(e) =>
                  setData({ ...data, programStudi: e.target.value })
                }
              >
                <option value="" disabled selected>
                  --Pilih Program Kelas--
                </option>
                <option value="D3 Keperawatan">D3 Keperawatan</option>
                <option value="S1 Administrasi Rumah Sakit">S1 Administrasi Rumah Sakit</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label>Program Kelas* :</label>
              {data.programStudi === 'S1 Administrasi Rumah Sakit' ?
                <select
                  className="form-control"
                  placeholder="--Pilih Program Kelas--"
                  value={data && data.programKelas}
                  onChange={(e) =>
                    setData({ ...data, programKelas: e.target.value })
                  }
                >
                  <option value="" disabled selected>
                    --Pilih Program Kelas--
                  </option>
                  <option value="Kelas Reguler">Kelas REGULER</option>
                </select>
                :
                <select
                  className="form-control"
                  placeholder="--Pilih Program Kelas--"
                  value={data && data.programKelas}
                  onChange={(e) =>
                    setData({ ...data, programKelas: e.target.value })
                  }
                >
                  <option value="" disabled selected>
                    --Pilih Program Kelas--
                  </option>
                  <option value="Kelas Reguler">Kelas REGULER</option>
                  <option value="Kelas Reguler">Kelas KARYAWAN</option>
                </select>
              }
            </div>
            <div className="col">
              <label>Jenis Kelamin* :</label>
              <select
                className="form-control"
                placeholder="--Pilih Jenis Kelamin--"
                onChange={(e) =>
                  setData({ ...data, jenisKelamin: e.target.value })
                }
              >
                <option value="" disabled selected>
                  --Pilih Jenis Kelamin--
                </option>
                <option value="Laki Laki">Laki Laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label>Nama Lengkap* :</label>
              <input
                type="text"
                className="form-control"
                placeholder="contoh: Putri"
                value={data && data.namaLengkap}
                onChange={(e) =>
                  setData({ ...data, namaLengkap: e.target.value })
                }
              />
            </div>
            <div className="col">
              <label>Pilih Agama* :</label>
              <select
                className="form-control"
                placeholder="--Pilih Agama--"
                onChange={(e) =>
                  setData({ ...data, pilihAgama: e.target.value })
                }
              >
                <option value="" disabled selected>
                  Pilih Agama* :
                </option>
                <option value="Islam">Islam</option>
                <option value="Kristen">Kristen</option>
                <option value="Katolik">Katolik</option>
                <option value="Hindu">Hindu</option>
                <option value="Budha">Budha</option>
                <option value="Konghucu">Konghucu</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label>Tempat Lahir* :</label>
              <input
                type="text"
                className="form-control"
                placeholder="contoh: Jakarta"
                value={data && data.tempatLahir}
                onChange={(e) =>
                  setData({ ...data, tempatLahir: e.target.value })
                }
              />
            </div>
            <div className="col">
              <label>Berat Badan (dalam KG)* :</label>
              <input
                type="number"
                className="form-control"
                placeholder="contoh: 55"
                value={data && data.beratBadan}
                onChange={(e) =>
                  setData({ ...data, beratBadan: e.target.value })
                }
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
                value={data && data.tanggalLahir}
                onChange={(e) =>
                  setData({ ...data, tanggalLahir: e.target.value })
                }
              />
            </div>
            <div className="col">
              <label>Tinggi Badan (dalam CM)* :</label>
              <input
                type="number"
                className="form-control"
                placeholder="contoh: 170"
                value={data && data.tinggiBadan}
                onChange={(e) =>
                  setData({ ...data, tinggiBadan: e.target.value })
                }
              />
            </div>
          </div>

          <div
            style={{
              width: '100%',
              height: '1px',
              borderBottom: '1px solid #A8A9AA',
              margin: '5% 0',
            }}
          />

          <div className="form-row">
            <div className="col">
              <label>Nama Orang Tua/Wali* :</label>
              <input
                type="text"
                className="form-control"
                value={data && data.namaOrtu}
                onChange={(e) => setData({ ...data, namaOrtu: e.target.value })}
              />
            </div>
            <div className="col">
              <label>Nomor KTP* :</label>
              <input
                type="number"
                className="form-control"
                value={data && data.ktp}
                onChange={(e) => setData({ ...data, ktp: e.target.value })}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label>Alamat Lengkap* :</label>
              <textarea
                type="text"
                className="form-control"
                rows="5"
                value={data && data.alamat}
                onChange={(e) => setData({ ...data, alamat: e.target.value })}
              />
            </div>
            <div className="col">
              <div className="col">
                <label>Nomor Telepon/Handphone* :</label>
                <input
                  type="number"
                  className="form-control"
                  value={data && data.noHp}
                  onChange={(e) => setData({ ...data, noHp: e.target.value })}
                />
              </div>
              <div className="col" style={{ marginTop: '20px' }}>
                <label>Nomor Induk Siswa Nasional (NISN)* :</label>
                <input
                  type="number"
                  className="form-control"
                  value={data && data.nisn}
                  onChange={(e) => setData({ ...data, nisn: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label>Provinsi* :</label>
              <input
                type="text"
                className="form-control"
                value={data && data.provinsi}
                onChange={(e) => setData({ ...data, provinsi: e.target.value })}
              />
            </div>
            <div className="col">
              <label>Alamat Email* :</label>
              <input
                type="email"
                className="form-control"
                value={data && data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label>Kota/Kabupaten* :</label>
              <input
                type="text"
                className="form-control"
                value={data && data.kota}
                onChange={(e) => setData({ ...data, kota: e.target.value })}
              />
            </div>
            <div className="col">
              <label>Asal Sekolah * :</label>
              <input
                type="text"
                className="form-control"
                value={data && data.asalSekolah}
                onChange={(e) =>
                  setData({ ...data, asalSekolah: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label>Kode Pos* :</label>
              <input
                type="text"
                className="form-control"
                value={data && data.kodePos}
                onChange={(e) => setData({ ...data, kodePos: e.target.value })}
              />
            </div>
            <div className="col">
              <label>Alamat Sekolah Asal* :</label>
              <input
                type="text"
                className="form-control"
                value={data && data.alamatAsalSekolah}
                onChange={(e) =>
                  setData({ ...data, alamatAsalSekolah: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        <div className="pjb-btn-row">
          <Button text="Daftar" onClick={saveData} />
          <Button
            text="Hapus"
            style={{ backgroundColor: '#494949', marginLeft: '20px' }}
            onClick={resetData}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProgramJalurBeasiswa;
