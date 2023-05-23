import React, { useEffect, useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import LayoutAdmin from "../../../../Layout/LayoutAdmin";
import { async } from "q";
import axios from "axios";

const SaranaDanPrasaranaAdmin = () => {
    return (
        <LayoutAdmin>
            <div>
                <div class="row mt-5 mb-5" style={{ margin: "3% 10% 10% 10%" }}>
                    <h4><span className="bg-primary text-white">Sarana Dan Prasarana Admin</span></h4>
                    <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
                    <div id="">
                        <div class="mb-3 row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">
                                Banner Image
                            </label>
                            <div class="col-sm-10">
                                <div class="input-group mb-3">
                                    <input
                                        type="file"
                                        class="form-control"
                                        id="inputGroupFile01"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            class="btn btn-primary mt-2"
                            type="submit"
                            onClick={''}
                        >
                            Add More
                        </button>


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

export default SaranaDanPrasaranaAdmin;
