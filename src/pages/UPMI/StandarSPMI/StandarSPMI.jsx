import './StandarSPMI.css';

import React, { useEffect, useState } from 'react';

import Layout from '../../../Layout/Layout';
import Typhography from '../../../components/Typhography/Typhography';
import axios from 'axios';

const StandarSpmi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/spmi/1/standar'
      );
      // console.log(response.data, 'res');
      setData(response.data.data);
    } catch (error) {}
  };
  return (
    <Layout>
      <div className="standar-spmi-container">
        <Typhography type="title" text="Standar SPMI" />
        {/* <Typhography
          type="normal"
          text="Standar Mutu SPMI"
          style={{ marginTop: "24px" }}
        /> */}
        <div dangerouslySetInnerHTML={{ __html: data && data.standar }}></div>
      </div>
    </Layout>
  );
};

export default StandarSpmi;
