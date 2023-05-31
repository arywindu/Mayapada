import './PusatKarir.css';

import React, { useEffect, useState } from 'react';

import Layout from '../../Layout/Layout';
import Typhography from '../../components/Typhography/Typhography';
import axios from 'axios';

const PusatKarir = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/carrer/1'
      );
      console.log(response.data, 'res');
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="pusat-karir-container">
        <Typhography type="title" text={data && data.title} />
        <div
          dangerouslySetInnerHTML={{
            __html: data && data.text,
          }}
        ></div>
      </div>
    </Layout>
  );
};

export default PusatKarir;
