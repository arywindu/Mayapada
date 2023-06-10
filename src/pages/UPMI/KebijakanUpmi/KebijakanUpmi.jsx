import './KebijakanUpmi.css';

import React, { useEffect, useState } from 'react';

import Layout from '../../../Layout/Layout';
import Typhography from '../../../components/Typhography/Typhography';
import axios from 'axios';

const KebijakanUpmi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/spmi/1/kebijakan'
      );
      // console.log(response.data, 'res');
      setData(response.data.data);
    } catch (error) {}
  };
  return (
    <Layout>
      <div className="kebijakan-upmi-container">
        <Typhography type="title" text="Kebijkan SPMI" />
        {/* <Typhography
          type="normal"
          text="Dokumen tertulis Kebijakan SPMI STIKes Mayapada dimaksudkan sebagai :"
          style={{ marginTop: "24px" }}
        /> */}
        <div dangerouslySetInnerHTML={{ __html: data && data.kebijakan }}></div>
      </div>
    </Layout>
  );
};

export default KebijakanUpmi;
