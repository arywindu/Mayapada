import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import axios from 'axios';

const Layout = (props) => {
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/homepage/1'
      );
      // console.log(response.data.data, 'res');
      setLogo(response.data.data.logo_image);
    } catch (error) {}
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header logo={logo} />
      <div
        style={{
          flex: 1,
        }}
      >
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
