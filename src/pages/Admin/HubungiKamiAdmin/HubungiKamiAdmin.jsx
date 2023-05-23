import React, { useEffect, useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import LayoutAdmin from "../../../Layout/LayoutAdmin";
import { async } from "q";
import axios from "axios";

const HubungiKamiAdmin = () => {
    return (
        <LayoutAdmin>
            <div>
                <div class="row mt-5 mb-5" style={{ margin: "3% 10% 10% 10%" }}>
                    <h4><span className="bg-primary text-white">Hubungi Kami Admin</span></h4>
                    <div id="">
                        <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
                        <div class="mb-3 row">
                            <label for="" class="col-sm-2 col-form-label">
                                WhatsApp No
                            </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control"
                                    id=""
                                />
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label for="" class="col-sm-2 col-form-label">
                                Instagram
                            </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control"
                                    id=""
                                />
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label for="" class="col-sm-2 col-form-label">
                                Facebook
                            </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control"
                                    id=""
                                />
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label for="" class="col-sm-2 col-form-label">
                                Email
                            </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control"
                                    id=""
                                />
                            </div>
                        </div>


                        <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
                        <button
                            class="btn btn-success mt-2"
                            type="submit"
                            onClick={''}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default HubungiKamiAdmin;
