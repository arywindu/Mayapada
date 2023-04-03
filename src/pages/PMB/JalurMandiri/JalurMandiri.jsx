import "./JalurMandiri.css";

import Layout from "../../../Layout/Layout";
import React from "react";
import Typhography from "../../../components/Typhography/Typhography";

const JalurMandiri = () => {
  return (
    <Layout>
      <div className="jalur-mandiri-container">
        <Typhography type="title" text="Program Jalur Mandiri" />

        <div className="jalur-mandiri-progress">
          <div className="jalur-mandiri-progress-item">
            <img
              className="jalur-mandiri-progress-item-top"
              src="https://s3-alpha-sig.figma.com/img/0346/e9c7/2bbfef3100150f9bee403feafc29aa6d?Expires=1681084800&Signature=hsYsK4DPIeCG3~RyaPC0ESA1EnwPaJSL~7zFzhrYbCeznw2Zp6mnq5bLnoirZA-zNHlJ-Z1XA38VnArg8niqPp-B5PNT4o3HmVT6LLtqXWCpQfUelEithfH~SIyutoskhgY8q7kapzmPEIMGPfA8hdG3t4crsMDA3icgArLIO7AaXHNAHXIJtRW6jLXFGulB3qa5wz8LsA02m0siUOJOn-~l4f63nCa6eOthTgu92t3C0OoxTPO6yk5QsKiqTrnPN6k14lzAEd~U-uMXw4YjEFhEdKFCzDMYgKQ7kZxbEKUT7uODf2DCeYXaNXwMFd7eIGvjlYPf0dkPoZ3mrU6OoA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            />
            <div className="jalur-mandiri-progress-item-bottom">
              1. Mengikuti Tes Tertulis
            </div>
          </div>
          <div
            style={{
              width: "10%",
              height: "1px",
              borderBottom: "1px dashed #278BC8",
              marginBottom: "30px",
            }}
          />
          <div className="jalur-mandiri-progress-item">
            <img
              className="jalur-mandiri-progress-item-top"
              src="https://s3-alpha-sig.figma.com/img/c241/1962/2e945373e0a4d72a86664c53d0b5d7f2?Expires=1681084800&Signature=ZxrUP~LTgGrAKBgDNqAJP~I-D4cJC5311KR8k~XxIf4jTrDv-ksuDuePoB0L0McumYDE0J5jSc0UmWve9uuNdAR9XUcHJ4brlrsij13oTKIVNDtMVNtCIPObrWob8FfMqEeMK0tSKZ5N-8gau2YBLASwlhCQjLyS5Iln7qrO5aRwuGWd679DAOMfc4AMVR0DSBI-mI-0bN8UmmR8Bv93EuEgxZ-ScKmltNXWZB9kwgnZv1Q9n9rS5rxZ3bJa4rXZu-psVut3janGbikyAK6TpwlxHqPZ3tWzqgcSoEkmmo~-dgxymrxJ6LfAoWZVtvME5Vnjly7Z5a32X1AngV9C4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            />
            <div className="jalur-mandiri-progress-item-bottom">
              2. Interview & Psikotest
            </div>
          </div>
          <div
            style={{
              width: "10%",
              height: "1px",
              borderBottom: "1px dashed #278BC8",
              marginBottom: "30px",
            }}
          />
          <div className="jalur-mandiri-progress-item">
            <img
              className="jalur-mandiri-progress-item-top"
              src="https://s3-alpha-sig.figma.com/img/7975/52ce/36c454dfb03be1741783829e69b17a5b?Expires=1681084800&Signature=QBRgRpPTAuhCXKhGHOIEI2YvanqrRM5c6k9jeMJmP-HUouQ~RMBExjTTTZKZytGIRHNOJ~RQaTmpw27AYAkHQmo3TlnQhWfbSTxcPt2hDOnraoqCjSHy~bZpPRcmRoN5LHdO4X9-aYQ2wk0ut5MIiyCWxn~hYLiufUFJy~PsGQQNoZZxGgAhnwkEsCjo0qyFOT6YsGShgpvqB7GPM-ioDJXB8gRi0~~IYlxqYiiR7U5rM20NZvmQtscLop3G16V2D8JeFNNIZtziONq9DN7jZHW0kJL6OfULnS8wE~QxwD5N9JX0fN48JDRo120qtqjNCnlkKbtmx9DWXf5pAhwR7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            />
            <div className="jalur-mandiri-progress-item-bottom">
              3. Tes Kesehatan
            </div>
          </div>
        </div>

        <Typhography type="title" text="Persyaratan Beasiswa" />

        <div className="jalur-mandiri-persyaratan">
          <Typhography
            text="Berikut adalah persyaratan mengikuti Program Beasiswa Jalur Mandiri  :"
            size="18px"
          />

          <div className="jalur-mandiri-persyaratan-card">
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

export default JalurMandiri;
