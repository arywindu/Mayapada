import "./StandarSPMI.css";

import Layout from "../../../Layout/Layout";
import React from "react";
import Typhography from "../../../components/Typhography/Typhography";

const StandarSpmi = () => {
    return (
        <Layout>
            <div className="standar-spmi-container">
                <Typhography type="title" text="Standar SPMI" />
                <Typhography
                    type="normal"
                    text="Standar Mutu SPMI"
                    style={{ marginTop: "24px" }}
                />
                <ol className="mt-3" style={{ textAlign: 'left' }}>
                    <li className="mb-4">
                        Standar Kompetensi Lulusan Akper Antariksa
                    </li>
                    <li className="mb-4">
                        Standar Isi Pembelajaran Akper Antariksa
                    </li>
                    <li className="mb-4">
                        Standar Proses Pembelajaran Akper Antariksa
                    </li>
                    <li className="mb-4">
                        Standar Dosen dan Kependidikan Akper Antariksa
                    </li>
                    <li className="mb-4">
                        Standar Sarana dan Prasarana Akper Antarika
                    </li>
                    <li className="mb-4">
                        Standar Pengelolaan Pembelajaran
                    </li>
                    <li className="mb-4">
                        Standar Pembiayaan Pembelajaran
                    </li>
                    <li className="mb-4">
                        Standar Isi Penelitian Akper Antarika
                    </li>
                    <li className="mb-4">
                        Standar Hasil Penelitian
                    </li>
                    <li className="mb-4">
                        Standar Proses Penelitian
                    </li>
                    <li className="mb-4">
                        Standar Penilaian Penelitian
                    </li>
                    <li className="mb-4">
                        Standar Peneliti
                    </li>
                    <li className="mb-4">
                        Standar Sarana dan Prasana
                    </li>
                    <li className="mb-4">
                        Standar Pengelolaan Penelitian
                    </li>
                    <li className="mb-4">
                        Standar Pembiayaan Penelitian
                    </li>
                    <li className="mb-4">
                        Standar Hasil Pengabdian Masyarakat
                    </li>
                    <li className="mb-4">
                        Standar Isi Pengabdian Masyarakat
                    </li>
                    <li className="mb-4">
                        Standar Proses Pengabdian Masyarakat
                    </li>
                    <li className="mb-4">
                        Standar Penilaian Pengabdian Masyarakat
                    </li>
                    <li className="mb-4">
                        Standar Pelaksanaan Pengabdian Masyarakat
                    </li>
                    <li className="mb-4">
                        Standar Sarana dan Prasarana Pengabdian Masyarakat
                    </li>
                    <li className="mb-4">
                        Standar Pengelolaan Pengabdian Masyarakat
                    </li>
                    <li className="mb-4">
                        Standar Pendanaan dan Pembiayaan Pengabdian Masyarakat
                    </li>
                    <li className="mb-4">
                        Standar Identitas Perguruan Tinggi
                    </li>
                </ol>
            </div>
        </Layout>
    );
};

export default StandarSpmi;
