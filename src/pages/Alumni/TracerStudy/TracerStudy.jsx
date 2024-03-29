import './TracerStudy.css';

import React, { useEffect, useState } from 'react';

import Button from '../../../components/Button/Button';
import Layout from '../../../Layout/Layout';
import Typhography from '../../../components/Typhography/Typhography';
import axios from 'axios';
import tracerStudy from '../../../assets/images/tracer_study.jpeg';

const TracerStudy = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/alumni/tracer/1'
      );
      // console.log(response.data, 'res');
      setData(response.data.data);
    } catch (error) { }
  };
  return (
    <Layout>
      <div className="tracer-study-container">
        <img className="tracer-study-img" src={data && data.tracer_study_img} />
        <div className="tracer-study-content">
          <div className="tracer-study-card">
            <Typhography type="title" text="Tracer Study" style={{ marginBottom: "10px", alignSelf: 'left' }} />
            <div
              className="ikatan-alumni-text"
              dangerouslySetInnerHTML={{
                __html: data && data.tracer_study_text,
              }}
            ></div>
            <Button
              text="Download Form"
              style={{ marginTop: '24px' }}
              onClick={() =>
                window.open(`${data && data.tracer_study_form}`, '_blank')
              }
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TracerStudy;
