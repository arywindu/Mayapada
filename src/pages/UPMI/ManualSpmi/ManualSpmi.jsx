import './ManualSpmi.css';

import React, { useEffect, useState } from 'react';

import Layout from '../../../Layout/Layout';
import Typhography from '../../../components/Typhography/Typhography';
import axios from 'axios';

const ManualSpmi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/spmi/1/manual'
      );
      // console.log(response.data, 'res');
      setData(response.data.data);
    } catch (error) {}
  };
  return (
    <Layout>
      <div className="manual-spmi-container">
        <Typhography type="title" text="Manual SPMI" />
        {/* <Typhography
          type="normal"
          text="Manual SPMI"
          style={{ marginTop: "24px" }}
        /> */}
        <div dangerouslySetInnerHTML={{ __html: data && data.manual }}></div>
      </div>
    </Layout>
  );
};

export default ManualSpmi;
