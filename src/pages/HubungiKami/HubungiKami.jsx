import "./HubungiKami.css";

import React, { useEffect, useState } from "react";

import Button from "../../components/Button/Button";
import EmailIcon from "../../assets/icons/email-hub.svg";
import FbIcon from "../../assets/icons/faHub.svg";
import IgIcon from "../../assets/icons/igHub.svg";
import Layout from "../../Layout/Layout";
import Typhography from "../../components/Typhography/Typhography";
import WaIcon from "../../assets/icons/waHub.svg";
import axios from "axios";
import imgHubKami from "../../assets/images/hubungiKamiImg.png";

const HubungiKami = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://stikesmayapada.ac.id/api/contact/1"
      );
      console.log(response.data, "hub kami");
      const responseData = response.data.data;
      setData(responseData);
    } catch (error) {}
  };
  return (
    <Layout>
      <div className="bg-hub">
        <div class="hubungi-kami-container">
          <div class="row mt-5 mb-5" style={{ margin: "3% 10% 10% 10%" }}>
            <div class="col-md-5">
              <img src={imgHubKami}></img>
            </div>

            <div class="col-md-7 mt-5 pt-5">
              <h2>Mayapada Hospital Jakarta Selatan</h2>
              <h4>(Tower 2 Lantai 8)</h4>
              <p className="mt-4">
                Jl. Lebak Bulus 1, Kav. 29, Jakarta Selatan.
              </p>
              <h4 className="mt-5">Hubungi Kami:</h4>
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td>
                      <img src={WaIcon}></img>
                      &nbsp; Whatsapp
                    </td>
                    <td>: {data && data.contact_wa}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={IgIcon}></img>
                      &nbsp; Instagram
                    </td>
                    <td>: {data && data.contact_ig}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={FbIcon}></img>
                      &nbsp; Facebook
                    </td>
                    <td>: {data && data.contact_fb}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={EmailIcon}></img>
                      &nbsp; Email
                    </td>
                    <td>: {data && data.contact_email}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="form-hub">
            <Typhography
              type="normal"
              text="Hubungi Kami"
              size="32px"
              color="white"
            />
            <div className="form-row">
              <div
                style={{ display: "flex", flex: 1, flexDirection: "column" }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Handphone"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div
                style={{ display: "flex", flex: 1, flexDirection: "column" }}
              >
                <textarea
                  type="text"
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                />
                <div
                  style={{
                    flex: 1,
                    alignSelf: "flex-end",
                    alignContent: "flex-end",
                  }}
                >
                  <Button
                    text="Send"
                    borderColor="white"
                    style={{ marginTop: "12px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HubungiKami;
