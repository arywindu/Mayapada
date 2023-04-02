import "./ManualSpmi.css";

import Layout from "../../../Layout/Layout";
import React from "react";
import Typhography from "../../../components/Typhography/Typhography";

const ManualSpmi = () => {
    return (
        <Layout>
            <div className="manual-spmi-container">
                <Typhography type="title" text="Manual SPMI" />
                <Typhography
                    type="normal"
                    text="Manual SPMI"
                    style={{ marginTop: "24px" }}
                />
                <ol className="mt-3" style={{ textAlign: 'left' }}>
                    <li className="mb-4">
                        Manual Penetapan Standar
                    </li>
                    <li className="mb-4">
                        Manual Pelaksanaan Standar
                    </li>
                    <li className="mb-4">
                        Manual SPMI Evaluasi Pelaksanaan Standar
                    </li>
                    <li className="mb-4">
                        Manual SPMI Pengendalian Standar
                    </li>
                    <li className="mb-4">
                        Manual Peningkatan atau Pengembangan Standar
                    </li>
                </ol>
            </div>
        </Layout>
    );
};

export default ManualSpmi;
