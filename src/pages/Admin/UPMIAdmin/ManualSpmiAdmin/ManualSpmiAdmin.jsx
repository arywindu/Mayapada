import React from "react";
import LayoutAdmin from "../../../../Layout/LayoutAdmin";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const ManualSpmiAdmin = () => {
    return (
        <LayoutAdmin>
            <div>
                <div class="row mt-5 mb-5" style={{ margin: "3% 10% 10% 10%" }}>
                    <hr class="bg-danger border-2 border-top border-dark mt-1 mb-4"></hr>
                    <div class="mb-3 row">
                        <label for="" class="col-sm-2 col-form-label">Active Page</label>
                        <div class="col-sm-10">
                            <div class="input-group mb-3">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="active" />
                                    <label class="form-check-label" for="inlineRadio1">Active</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="disabled" />
                                    <label class="form-check-label" for="inlineRadio2">Disabled</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr class="bg-danger border-2 border-top border-dark mt-2 mb-4"></hr>
                        <div class="mb-3 row">
                            <label for="" class="col-sm-2 col-form-label">Text</label>
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

export default ManualSpmiAdmin;