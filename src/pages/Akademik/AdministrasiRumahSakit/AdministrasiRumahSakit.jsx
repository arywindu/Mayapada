import "./AdministrasiRumahSakit.css";
import Layout from "../../../Layout/Layout";
import React from "react";
import AdmImage from "../../../assets/images/AdmRumahSakit.png"
import AdmImage01 from "../../../assets/images/AdmImage01.png"

const Administrasi = () => {
  return (
    <Layout>
      <div className='filter-blue-adm'>
        <img src={AdmImage} width={'100%'}>
        </img>
        <div class="centered-adm">
          <h1 className="text-white">Program Studi S1 Administrasi Rumah Sakit</h1>
          <p className="text-white mt-4">Para lulusan Prodi S.1 Administrasi Rumah sakit memiliki kemampuan sebagai leader, administrator, educator, innovator dalam mengelola system administrasi RS, yang berperan dalam meningkatkan mutu pelayanan kesehatan berorientasi pada IPTEK dan tanggung jawab secara professional berdasarkan core values dari STIKes Mayapada; komitmen, integritas, professionalism, kepercayaan dan belas kasih.</p>
        </div>
      </div>

      <div class="container bg-color-adm">
        <div class="row mt-5 pt-5">
          <div class="col-md-6">
            <h2 className="text-blue">Visi</h2>
            <p style={{ textAlign: 'left' }}>Menghasilkan lulusan Sarjana Administrasi Rumah Sakit yang unggul dan berorientasi pada peningkatan mutu pelayanan kesehatan berdasarkan nilai komitmen, integritas, professional, berbelas kasih dan dapat dipercaya.</p>
            <h2 className="text-blue mt-5">Misi</h2>
            <ol style={{ textAlign: 'left' }}>
              <li className="mb-4">
                Menyelenggarakan program pendidikan Administrasi Rumah Sakit yang bermutu tinggi berorientasi pada mutu pelayanan kesehatan berbasis teknologi informasi;
              </li>
              <li className="mb-4">
                Meningkatkan penelitian dan pengabdian masyarakat yang inovativ dibidang administrasi rumah sakit;
              </li>
              <li className="mb-4">
                Mengembangkan networking dan kemitraan dengan lembaga dalam negeri dan luar negeri untuk meningkatkan kompetensi dan pendayagunaan lulusan;
              </li>
              <li className="mb-4">
                Melaksanakan semangat pendidikan berdasarkan nilai komitmen, integritas, professional, berbelas kasih dan dapat dipercaya.
              </li>
            </ol>
          </div>

          <div class="col-md-6">
            <img src={AdmImage01} width={'100%'} height={'80%'}>
            </img>
          </div>
        </div>
      </div>

      <div class="container mb-5">
        <div class="row gx-5 justify-content-center">

          <div class="col-md-6">
            <div class="card text-center">

              <div class="card-body">
                <h5 class="card-title text-blue">Kalender Akademik</h5>
                <p class="card-text">Periode: 2021/2022</p>
                <a href="#" class="btn btn-blue text-white">Semester Ganjil</a>
                &nbsp;&nbsp;&nbsp;
                <a href="#" class="btn btn-blue text-white">Semester Genap</a>
              </div>

            </div>
          </div>

          <div class="col-md-6">
            <div class="card text-center">

              <div class="card-body">
                <h5 class="card-title text-blue">Kalender Akademik</h5>
                <p class="card-text">Periode: 2021/2022</p>
                <a href="#" class="btn btn-blue text-white">Semester Ganjil</a>
                &nbsp;&nbsp;&nbsp;
                <a href="#" class="btn btn-blue text-white">Semester Genap</a>
              </div>

            </div>
          </div>

        </div>
      </div>

    </Layout>
  );
};

export default Administrasi;
