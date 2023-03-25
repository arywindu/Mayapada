import React from 'react'
import './Footer.css'
import logoFooter from '../../assets/images/logo-footer.svg'
import iconWa from '../../assets/icons/wa.svg'
import iconFb from '../../assets/icons/fb.svg'
import iconIg from '../../assets/icons/ig.svg'

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start bg-blue">
                {/* <!-- Section: Social media --> */}
                <section className="d-flex justify-content-center justify-content-lg-between">
                </section>
                {/* <!-- Section: Social media --> */}

                {/* <!-- Section: Links  --> */}
                <section className="border-bottom">
                    <div className="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <div className='mb-5'>
                                    <img className="mx-auto" src={logoFooter}></img>
                                </div>

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Mayapada Hospital Jakarta Selatan
                                </h6>
                                <p>
                                    Jl. Lebak Bulus 1, Kav. 29
                                    <br></br>
                                    Jakarta Selatan
                                </p>
                                {/* <!-- Grid column --> */}
                            </div>

                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Tentang Kami
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Sejarah</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Visi Misi</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Nilai Utama</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Landasan Hukum</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Akreditasi</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    AKADEMIK
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Program Studi</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">D3 Keperawatan</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">S1 Admin RS</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Profesi NERS</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    UPMI
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Kebijakan SPMI</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Manual SPMI</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Standar SPMI</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">SOP</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Formulir SPMI</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    FASILITAS
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Sarana Prasarana</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Kegiatan</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Links --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">

                                    Hubungi Kami
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">E-Mail: info@antariksa.co.id</a>
                                </p>
                                <div>
                                    <a href="" class="me-4 text-reset">
                                        <img src={iconWa}></img>
                                    </a>
                                    <a href="" class="me-4 text-reset">
                                        <img src={iconFb}></img>
                                    </a>
                                    <a href="" class="me-4 text-reset">
                                        <img src={iconIg}></img>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    ALUMNI
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Ikatan Alumni</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Testimoni</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Tracer Studi</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    PENELITIAN
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pengabdian</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">E-Journal</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    PUSAT KARIR
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Info Karir</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Informasi Pendaftaran Baru
                                </h6>
                            </div>
                            {/* <!-- Grid column --> */}

                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Copyright --> */}
                <div className="mb-4 text-white mt-4 text-center">
                    Copyright ©  2023 Mayapada Nursing Academy. All rights reserved.
                </div>
                <div className='pb-3'>

                </div>
                {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}
        </div >
    )
}

export default Footer