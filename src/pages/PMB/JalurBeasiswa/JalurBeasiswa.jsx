import "./JalurBeasiswa.css";

import Layout from "../../../Layout/Layout";
import React from "react";
import Typhography from "../../../components/Typhography/Typhography";

const JalurBeasiswa = () => {
  return (
    <Layout>
      <div className="jalur-beasiswa-container">
        <Typhography type="title" text="Program Jalur Mandiri" />

        <div className="jalur-beasiswa-type-row">
          <div className="jalur-beasiswa-type">
            <Typhography
              text="Jalur Prestasi Akademi"
              size="24px"
              fontWeight="600"
              color="#000000"
            />

            <Typhography
              text="(Peluang beasiswa 50%)"
              size="20px"
              fontWeight="400"
              color="#278BC8"
            />

            <Typhography
              text="Peserta dengan nilai semester 1 s/d 6 rata-rata ≥80 bebas test tulis, dan berhak mengikuti test wawancara."
              size="20px"
              fontWeight="400"
              color="#525252"
              style={{ marginTop: "20px" }}
            />
          </div>

          <div className="jalur-beasiswa-type">
            <Typhography
              text="Jalur Beasiswa & Tes Tertulis"
              size="24px"
              fontWeight="600"
              color="#000000"
            />

            <Typhography
              text="(Peluang beasiswa 30%, 40%, 60%, 80%, 90%)"
              size="20px"
              fontWeight="400"
              color="#278BC8"
            />

            <Typhography
              text="Akper Antariksa menyediakan berbagai jenis beasiswa."
              size="20px"
              fontWeight="400"
              color="#525252"
              style={{ marginTop: "20px" }}
            />
          </div>
        </div>

        <Typhography type="title" text="Persyaratan Beasiswa" />

        <div className="jalur-beasiswa-persyaratan">
          <Typhography
            text="Berikut adalah persyaratan mengikuti Program Beasiswa Jalur Mandiri  :"
            size="18px"
          />

          <div className="jalur-beasiswa-persyaratan-card">
            <ol>
              <li>Lulusan SMA / SMK / SPK / Paket C.</li>
              <li>Membawa Fotocopy Legalisir Ijazah (2 lembar).</li>
              <li>Fotocopy Rapot Semester 1-6 (1 Lembar).</li>
              <li>Membawa Fotocopy KTP & KK (masing-masing 1 lembar).</li>
              <li>
                Membawa Pas Photo Berwarna 3x4 & 4x6 (masing-masing 2 lembar).
              </li>
              <li>
                Mengisi Formulir Pendaftaran (Biaya formulir Rp. 175.000).
              </li>
              <li>
                Mengikuti Tes Tertulis (Bahasa Indonesia, MTK, Bahasa Inggris
                dan IPA).
              </li>
              <li>
                Melampirkan Hasil Tes Kesehatan yang Sesuai dengan Ketentuan
                Kampus.
              </li>
              <li>Tes Psikotes dan Wawancara.</li>
              <li>
                <div>Tinggi badan.</div>
                <ol type="a">
                  <li>Perempuan : 150 cm</li>
                  <li>Laki-laki : 155 cm</li>
                </ol>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JalurBeasiswa;
