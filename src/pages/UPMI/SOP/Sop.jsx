import "./Sop.css";

import Layout from "../../../Layout/Layout";
import React from "react";
import Typhography from "../../../components/Typhography/Typhography";

const Sop = () => {
    return (
        <Layout>
            <div className="sop-container">
                <Typhography type="title" text="Standar Operasional Prosedur" />
                <Typhography
                    type="normal"
                    text="Standar Mutu SPMI"
                    style={{ marginTop: "24px" }}
                />
                <ol className="mt-3" style={{ textAlign: 'left' }}>
                    <li className="mb-4">
                        SOP Penyusunnan Visi dan Misi
                    </li>
                    <li className="mb-4">
                        SOP Sosialisasi Visi dan Misi
                    </li>
                    <li className="mb-4">
                        SOP Evaluasi Pemahaman Visi dan Misi
                    </li>
                    <li className="mb-4">
                        SOP Peninjauan Visi dan Misi
                    </li>
                    <li className="mb-4">
                        SOP Tata Kelola Prodi
                    </li>
                    <li className="mb-4">
                        SOP Rencana dan Program Kerjan
                    </li>
                    <li className="mb-4">
                        SOP Penyusunnan Rencana Anggaran
                    </li>
                    <li className="mb-4">
                        SOP Perencanaan Program Studi
                    </li>
                    <li className="mb-4">
                        SOP Penyusunan Renstra
                    </li>
                    <li className="mb-4">
                        SOP Penyusunnan Rencana Operasional
                    </li>
                    <li className="mb-4">
                        SOP Pengusulan Program dan Anggaran
                    </li>
                    <li className="mb-4">
                        SOP Pelaporan dan Program Kegiatan
                    </li>
                    <li className="mb-4">
                        SOP Perpanjangan Ijin Program Studi
                    </li>
                    <li className="mb-4">
                        SOP Pemilihan Senat Akademik
                    </li>
                    <li className="mb-4">
                        SOP Pemilihan Direktur
                    </li>
                    <li className="mb-4">
                        SOP Penetapan Simbol Kebesaran Akper
                    </li>
                    <li className="mb-4">
                        SOP Perencanaan Karir Dosen
                    </li>
                    <li className="mb-4">
                        SOP Surat Masuk
                    </li>
                    <li className="mb-4">
                        SOP Surat Keluar
                    </li>
                </ol>
            </div>
        </Layout >
    );
};

export default Sop;
