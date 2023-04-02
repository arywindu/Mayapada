import "./KebijakanUpmi.css";

import Layout from "../../../Layout/Layout";
import React from "react";
import Typhography from "../../../components/Typhography/Typhography";

const KebijakanUpmi = () => {
    return (
        <Layout>
            <div className="kebijakan-upmi-container">
                <Typhography type="title" text="Kebijkan SPMI" />
                <Typhography
                    type="normal"
                    text="Dokumen tertulis Kebijakan SPMI STIKes Mayapada dimaksudkan sebagai :"
                    style={{ marginTop: "24px" }}
                />
                <ol className="mt-3" style={{ textAlign: 'left' }}>
                    <li className="mb-4">
                        Sarana untuk mengkomunikasikan tentang SPMI yang berlaku di lingkungan STIKes kepada seluruh pemangku kepentingan.
                    </li>
                    <li className="mb-4">
                        Memberi landasan dan arah dalam penetapan manual, standar, dan prosedur dalam SPMI.
                    </li>
                    <li className="mb-4">
                        Memberi landasan dan arah dalam pelaksanaan dan peningkatan mutu SPMI.
                    </li>
                    <li className="mb-4">
                        Sebagai bukti otentik bahwa STIKes Mayapada telah memiliki dan melaksanakan SPMI sebagaimana diwajibkan menurut peraturan perundang-undangan.
                    </li>
                </ol>
            </div>
        </Layout>
    );
};

export default KebijakanUpmi;
