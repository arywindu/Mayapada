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

                                <h6 className="text-uppercase fw-bold mb-4 text-white">
                                    Mayapada Hospital Jakarta Selatan
                                </h6>
                                <p className='text-white'>
                                    Jl. Lebak Bulus 1, Kav. 29
                                    <br></br>
                                    Jakarta Selatan
                                </p>
                                {/* <!-- Grid column --> */}
                            </div>

                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Tentang Kami
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Sejarah</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Visi Misi</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Nilai Utama</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Landasan Hukum</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Akreditasi</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    AKADEMIK
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Program Studi</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">DIII Keperawatan</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">S1 Admin RS</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Profesi NERS</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    UPMI
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Kebijakan SPMI</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Manual SPMI</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Standar SPMI</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">SOP</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Formulir SPMI</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    FASILITAS
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Sarana Prasarana</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Kegiatan</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Links --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-white">
                                <h6 className="text-uppercase fw-bold">

                                    Hubungi Kami
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">E-Mail: info@antariksa.co.id</a>
                                </p>
                                <div>
                                    <a href="" class="me-4 text-reset text-decoration-none">
                                        <img src={iconWa}></img>
                                    </a>
                                    <a href="" class="me-4 text-reset text-decoration-none">
                                        <img src={iconFb}></img>
                                    </a>
                                    <a href="" class="me-4 text-reset text-decoration-none">
                                        <img src={iconIg}></img>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    ALUMNI
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Ikatan Alumni</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Testimoni</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Tracer Studi</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    PENELITIAN
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Pengabdian</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">E-Journal</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    PUSAT KARIR
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Info Karir</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
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