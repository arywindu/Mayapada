import React from "react";
import "./KeperawatanAdmin.css";
import LayoutAdmin from "../../../../Layout/LayoutAdmin";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const HomeAdmin = () => {
    return (
        <LayoutAdmin>
            <div class="Home-Admin-Keperawatan">
                <div class="row mt-5 mb-5" style={{ margin: "3% 10% 10% 10%" }}>
                    <h4><span className="bg-primary text-white">Keperawatan Admin</span></h4>
                    <hr class="bg-danger border-2 border-top border-dark mt-1 mb-4"></hr>

                    <div id="SectionBanner">
                        <div class="mb-3 row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Banner Image</label>
                            <div class="col-sm-10">
                                <div class="input-group mb-3">
                                    <input type="file" class="form-control" id="inputGroupFile01" />
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Text Banner</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="InputText1" />
                            </div>
                        </div>

                        <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
                        <div class="mb-3 row">
                            <div class="mb-3 row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Image Visi Misi</label>
                                <div class="col-sm-10">
                                    <div class="input-group mb-3">
                                        <input type="file" class="form-control" id="inputGroupFile01" />
                                    </div>
                                </div>
                            </div>
                            <label for="" class="col-sm-2 col-form-label">Text Visi Misi</label>
                            <div class="col-sm-10">
                                <div class="input-group mb-3">
                                    <div className="App">
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data=""
                                            onReady={editor => {
                                                // You can store the "editor" and use when it is needed.
                                            }}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                            }}
                                            onBlur={(event, editor) => {
                                            }}
                                            onFocus={(event, editor) => {
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
                        <div class="mb-3 row">
                            <label for="" class="col-sm-2 col-form-label">Text Kurikulum</label>
                            <div class="col-sm-10">
                                <div class="input-group mb-3">
                                    <div className="App">
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data=""
                                            onReady={editor => {
                                                // You can store the "editor" and use when it is needed.
                                            }}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                            }}
                                            onBlur={(event, editor) => {
                                            }}
                                            onFocus={(event, editor) => {
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>

                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Title Mata Kuliah </label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="InputText1" />
                            </div>
                        </div>

                        <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
                        <div id="SectionBanner">
                            <div class="mb-3 row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">
                                    Photo Mata Kuliah
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
                                <div class="mb-3 row">
                                    <label for="" class="col-sm-2 col-form-label">
                                        Title Text
                                    </label>
                                    <div class="col-sm-10">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id=""
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
                            <div class="mb-3 row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">
                                    Jadwal Kurikulum DIII Keperawatan
                                </label>
                                <div class="col-sm-10">
                                    <div class="input-group mb-3">
                                        <input type="file" class="form-control" id="inputGroupFile01" />
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
                            <div class="mb-3 row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">
                                    Jadwal perkuliahan DIII Keperawatan
                                </label>
                                <div class="col-sm-10">
                                    <div class="input-group mb-3">
                                        <input type="file" class="form-control" id="inputGroupFile01" />
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
                            <button class="btn btn-success mt-2" type="submit">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default HomeAdmin;