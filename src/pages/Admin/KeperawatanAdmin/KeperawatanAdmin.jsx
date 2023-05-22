import React from "react";
import "./KeperawatanAdmin.css";
import LayoutAdmin from "../../../Layout/LayoutAdmin";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const HomeAdmin = () => {
    return (
        <LayoutAdmin>
            <div class="Home-Admin-Keperawatan">
                <div class="row mt-5 mb-5" style={{ margin: "3% 10% 10% 10%" }}>
                    <hr class="bg-danger border-2 border-top border-dark mt-1 mb-4"></hr>
                    <div class="mb-3 row">
                        <div class="mb-3 row">
                            <label for="inoutText" class="col-sm-2 col-form-label">Text Banner</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="InputText1" />
                            </div>
                        </div>
                    </div>
                    <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
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
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Button 1</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputText2" />
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Button 1
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Button 2</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword" />
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Button 2
                                    </label>
                                </div>
                            </div>
                        </div>
                        <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
                        <div class="mb-3 row">
                            <label for="" class="col-sm-2 col-form-label">Section Visi Misi</label>
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
                            <label for="" class="col-sm-2 col-form-label">Section Landasan Hukum</label>
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
                            <label for="" class="col-sm-2 col-form-label">Section Struktur Organisasi</label>
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
                        <button class="btn btn-success mt-2" type="submit">Save</button>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default HomeAdmin;