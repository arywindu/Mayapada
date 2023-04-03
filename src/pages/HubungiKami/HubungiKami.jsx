import "./HubungiKami.css";

import Layout from "../../Layout/Layout";
import React from "react";
import imgHubKami from "../../assets/images/hubungiKamiImg.png"
import WaIcon from "../../assets/icons/wa-hub.svg"
import FbIcon from "../../assets/icons/fa-hub.svg"
import IgIcon from "../../assets/icons/ig-hub.svg"
import EmailIcon from "../../assets/icons/email-hub.svg"

const HubungiKami = () => {
    return (
        <Layout>
            <div className="bg-hub">
                <div class="container">
                    <div class="row mt-5 mb-5">

                        <div class="col-md-5">
                            <img src={imgHubKami}></img>
                        </div>

                        <div class="col-md-7 mt-5 pt-5">
                            <h2>Mayapada Hospital Jakarta Selatan</h2>
                            <h4>(Tower 2 Lantai 8)</h4>
                            <p className="mt-4">Jl. Lebak Bulus 1, Kav. 29, Jakarta Selatan. </p>
                            <h4 className="mt-5">Hubungi Kami:</h4>
                            <table class="table table-borderless">
                                <tbody>
                                    <tr>

                                        <td><img src={WaIcon}></img>
                                            &nbsp; Whatsapp</td>
                                        <td>:  081907397674</td>

                                    </tr>
                                    <tr>

                                        <td><img src={IgIcon}></img>
                                            &nbsp; Instagram</td>
                                        <td>:  @mayapadaacademy</td>

                                    </tr>
                                    <tr>

                                        <td><img src={FbIcon}></img>
                                            &nbsp; Facebook</td>
                                        <td>:  @mayapadacampus</td>

                                    </tr>
                                    <tr>

                                        <td><img src={EmailIcon}></img>
                                            &nbsp; Email</td>
                                        <td>:  Info.antariksa.ac.id</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HubungiKami;
