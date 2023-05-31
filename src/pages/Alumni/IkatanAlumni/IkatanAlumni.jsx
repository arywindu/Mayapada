import './IkatanAlumni.css';

import React, { useEffect, useState } from 'react';

import Button from '../../../components/Button/Button';
import Layout from '../../../Layout/Layout';
import Typhography from '../../../components/Typhography/Typhography';
import axios from 'axios';
import ikatanAlumni from '../../../assets/images/ikatan_alumni.jpeg';

const IkatanAlumni = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/alumni/ikatan/1'
      );
      console.log(response.data, 'res');
      setData(response.data.data);
    } catch (error) {}
  };
  return (
    <Layout>
      <div className="ikatan-alumni-container">
        <img
          className="ikatan-alumni-img"
          src={data && data.ikatan_alumni_img}
        />
        <div className="ikatan-alumni-content">
          <div className="ikatan-alumni-card">
            <Typhography type="title" text="Ikatan Alumni" />
            <div
              dangerouslySetInnerHTML={{
                __html: data && data.ikatan_alumni_text,
              }}
            ></div>
            <Button
              text="Download Form"
              style={{ marginTop: '24px' }}
              onClick={() =>
                window.open(`${data && data.ikatan_alumni_form}`, '_blank')
              }
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IkatanAlumni;
