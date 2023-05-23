import "./HomeAdmin.css";

import React, { useEffect, useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import LayoutAdmin from "../../../Layout/LayoutAdmin";
import { async } from "q";
import axios from "axios";

const HomeAdmin = () => {
    const token = localStorage.getItem("token");
    const [data, setData] = useState(null);
    const [visiMisi, setVisiMisi] = useState(null);
    const [landasanHukum, setLandasanHukum] = useState(null);
    const [strukturOrganisasi, setStrukturOrganisasi] = useState(null);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/homepage/1");
            console.log(response.data, "res");
            setData(response.data.homePage);
        } catch (error) { }
    };

    const saveData = async () => {
        try {
            const response = await axios.put(
                "http://localhost:3001/api/homepage/1",
                {
                    status: 1,
                    visi_misi: visiMisi,
                    landasan_hukum: landasanHukum,
                    struktur_organisasi: strukturOrganisasi,
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            getData();
            // const { data } = response;
            // const { success } = data;
            // if (success) {
            //     alert(`Berhasil update data`);
            // }
        } catch (error) {
            alert(`${error.response.data.message}`);
            console.log(error, "error");
        }
    };

    return (
        <LayoutAdmin>
            <div class="Home-Admin">
                <div class="row mt-5 mb-5" style={{ margin: "3% 10% 10% 10%" }}>
                    <h4><span className="bg-primary text-white">Home Admin</span></h4>
                    <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
                    <div class="mb-3 row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">
                            Logo Image
                        </label>
                        <div class="col-sm-10">
                            <div class="input-group mb-3">
                                <input type="file" class="form-control" id="inputGroupFile01" />
                            </div>
                        </div>
                    </div>
                    <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
                    <div id="SectionBanner">
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
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">
                                Text Banner
                            </label>
                            <div class="col-sm-10">
                                <input
                                    type="password"
                                    class="form-control"
                                    id="inputPassword"
                                />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">
                                Button 1
                            </label>
                            <div class="col-sm-10">
                                <input
                                    type="password"
                                    class="form-control"
                                    id="inputPassword"
                                />
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="defaultCheck1"
                                    />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Button 1
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">
                                Button 2
                            </label>
                            <div class="col-sm-10">
                                <input
                                    type="password"
                                    class="form-control"
                                    id="inputPassword"
                                />
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="defaultCheck1"
                                    />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Button 2
                                    </label>
                                </div>
                                <button class="btn btn-primary mt-2" type="submit">
                                    Add More Banner
                                </button>
                            </div>
                        </div>
                        <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
                        <div class="mb-3 row">
                            <label for="" class="col-sm-2 col-form-label">
                                Section Visi Misi
                            </label>
                            <div class="col-sm-10">
                                <div class="input-group mb-3">
                                    <div className="App">
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={data && data.visi_misi}
                                            onReady={(editor) => {
                                                // You can store the "editor" and use when it is needed.
                                            }}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                setVisiMisi(data);
                                            }}
                                            onBlur={(event, editor) => { }}
                                            onFocus={(event, editor) => { }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
                        <div class="mb-3 row">
                            <label for="" class="col-sm-2 col-form-label">
                                Section Landasan Hukum
                            </label>
                            <div class="col-sm-10">
                                <div class="input-group mb-3">
                                    <div className="App">
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={data && data.landasan_hukum}
                                            onReady={(editor) => {
                                                // You can store the "editor" and use when it is needed.
                                            }}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                setLandasanHukum(data);
                                            }}
                                            onBlur={(event, editor) => { }}
                                            onFocus={(event, editor) => { }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
                        <div class="mb-3 row">
                            <label for="" class="col-sm-2 col-form-label">
                                Section Struktur Organisasi
                            </label>
                            <div class="col-sm-10">
                                <div class="input-group mb-3">
                                    <div className="App">
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={data && data.struktur_organisasi}
                                            onReady={(editor) => {
                                                // You can store the "editor" and use when it is needed.
                                            }}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                setStrukturOrganisasi(data);
                                            }}
                                            onBlur={(event, editor) => { }}
                                            onFocus={(event, editor) => { }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
                        <button
                            class="btn btn-success mt-2"
                            type="submit"
                            onClick={saveData}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default HomeAdmin;
