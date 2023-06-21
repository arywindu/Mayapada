import "./HubungiKami.css";

import React, { useEffect, useRef, useState } from "react";

import Button from "../../components/Button/Button";
import EmailIcon from "../../assets/icons/email-hub.svg";
import FbIcon from "../../assets/icons/faHub.svg";
import IgIcon from "../../assets/icons/igHub.svg";
import Layout from "../../Layout/Layout";
import Typhography from "../../components/Typhography/Typhography";
import WaIcon from "../../assets/icons/waHub.svg";
import axios from "axios";
import emailjs from "@emailjs/browser";
import hubKami from "../../assets/images/hubkami.jpeg";
import imgHubKami from "../../assets/images/hubungiKamiImg.png";

const HubungiKami = () => {
  const [data, setData] = useState(null);
  const isMobile =
    window.matchMedia("(max-width: 768px)").matches ||
    window.matchMedia("(max-width: 1024px)").matches;
  useEffect(() => {
    getData();
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0ibqfht",
        "template_86p6xkb",
        form.current,
        "Kfbkw_OeDHDfE8fgp"
      )
      .then(
        (result) => {
          alert(`Berhasil Terkirim`);
          console.log(result.text);
          // console.log("send");
        },
        (error) => {
          alert(`Gagal terkirim`);
          console.log(error.text);
          // console.log("gagal");
        }
      );
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://api.stikesmayapada.ac.id/api/contact/1"
      );
      // console.log(response.data, 'hub kami');
      const responseData = response.data.data;
      setData(responseData);
    } catch (error) {}
  };
  return (
    <Layout>
      <div className="bg-hub">
        <div
          class="hubungi-kami-container"
          style={{
            height: "100%",
            backgroundImage: `url(${hubKami})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.600) 51.5%)",
            }}
          >
            {isMobile ? (
              <div>
                <div class="top-info">
                  <h2 style={{ fontSize: "20px" }}>
                    Mayapada Hospital Jakarta Selatan
                  </h2>
                  <h4 style={{ fontSize: "16px" }}>(Tower 2 Lantai 8)</h4>
                  <p className="mt-4" style={{ fontSize: "14px" }}>
                    Jl. Lebak Bulus 1, Kav. 29, Jakarta Selatan.
                  </p>
                  <h4 className="mt-5" style={{ fontSize: "14px" }}>
                    Hubungi Kami:
                  </h4>
                  <table class="table table-borderless">
                    <tbody>
                      <tr>
                        <td>
                          <img src={WaIcon}></img>
                          &nbsp;{" "}
                          <span style={{ fontSize: "14px" }}>Whatsapp</span>
                        </td>
                        <td style={{ fontSize: "14px" }}>
                          : {data && data.contact_wa}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={IgIcon}></img>
                          &nbsp;{" "}
                          <span style={{ fontSize: "14px" }}>Instagram</span>
                        </td>
                        <td style={{ fontSize: "14px" }}>
                          : {data && data.contact_ig}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={FbIcon}></img>
                          &nbsp;{" "}
                          <span style={{ fontSize: "14px" }}>Facebook</span>
                        </td>
                        <td style={{ fontSize: "14px" }}>
                          : {data && data.contact_fb}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={EmailIcon}></img>
                          &nbsp; <span style={{ fontSize: "14px" }}>Email</span>
                        </td>
                        <td style={{ fontSize: "14px" }}>
                          : {data && data.contact_email}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <div className='blurring'></div> */}
                <img src={imgHubKami} className="img-bg"></img>
                {/* <div class="row mb-5"> */}

                {/* </div> */}
              </div>
            ) : (
              <div
                class="row mt-5 mb-5"
                style={{
                  margin: "3% 10% 10% 10%",
                }}
              >
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
            )}
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <div className="form-hub">
              <Typhography
                type="normal"
                text="Hubungi Kami"
                size="32px"
                color="white"
              />
              <div className="form-row">
                {/* <Email> */}
                <div
                  style={{ display: "flex", flex: 1, flexDirection: "column" }}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="user_name"
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Handphone"
                    name="user_phone"
                    required
                  />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="user_email"
                    required
                  />
                  {isMobile ? (
                    <>
                      <textarea
                        type="text"
                        className="form-control"
                        rows="5"
                        placeholder="Message"
                        name="user_message"
                        required
                      />
                      <div
                        style={{
                          flex: 1,
                          alignSelf: "flex-end",
                          alignContent: "flex-end",
                        }}
                      >
                        <input
                          className="btn-style"
                          text="Send"
                          borderColor="white"
                          style={{ marginTop: "12px", width: "100%" }}
                          type="submit"
                          value="send"
                        />
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                {isMobile ? (
                  ""
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      flexDirection: "column",
                    }}
                  >
                    <textarea
                      type="text"
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                      name="user_message"
                      required
                    />
                    <div
                      style={{
                        flex: 1,
                        alignSelf: "flex-end",
                        alignContent: "flex-end",
                      }}
                    >
                      <input
                        className="btn-style"
                        text="Send"
                        borderColor="white"
                        style={{ marginTop: "12px", width: "100%" }}
                        type="submit"
                        value="send"
                      />
                    </div>
                  </div>
                )}
                {/* </form> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default HubungiKami;
