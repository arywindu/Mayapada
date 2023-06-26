import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
import logoFooter from '../../assets/images/logoFooter.svg'
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
                    <div className="container text-center text-md-start mt-5 pt-3">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mb-4">
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
                                    <a href="" className="text-reset text-decoration-none">
                                        <Link className="text-reset text-decoration-none" to="/">
                                            Sejarah
                                        </Link>
                                    </a>
                                </p>
                                <p>
                                    <a href="" className="text-reset text-decoration-none">
                                        <Link className="text-reset text-decoration-none" to="/">
                                            Visi Misi
                                        </Link>
                                    </a>
                                </p>
                                <p>
                                    <a href="" className="text-reset text-decoration-none">
                                        <Link className="text-reset text-decoration-none" to="/">
                                            Nilai Utama
                                        </Link>
                                    </a>
                                </p>
                                <p>
                                    <a href="" className="text-reset text-decoration-none">
                                        <Link className="text-reset text-decoration-none" to="/">
                                            Landasan Hukum
                                        </Link>
                                    </a>
                                </p>
                                <p>
                                    <a href="" className="text-reset text-decoration-none">
                                        <Link className="text-reset text-decoration-none" to="/">
                                            Akreditasi
                                        </Link>
                                    </a>
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
                                    <a href="#!" className="text-reset text-decoration-none">
                                        <Link
                                            className="text-reset text-decoration-none"
                                            to="/Keperawatan"
                                        >
                                            Program DIII Keperawatan
                                        </Link>
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none"><Link
                                        className="text-reset text-decoration-none"
                                        to="/AdministrasiRumahSakit"
                                    >
                                        S1 Admin RS
                                    </Link></a>
                                </p>
                                {/* <p>
                                    <a href="#!" className="text-reset text-decoration-none">Profesi NERS</a>
                                </p> */}
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    UPMI
                                </h6>
                                <p>
                                    <a href="#" className="text-reset text-decoration-none">
                                        <Link className="text-reset text-decoration-none" to="/KebijakanUpmi"
                                        >Kebijakan SPMI
                                        </Link>
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">
                                        <Link className="text-reset text-decoration-none" to="/ManualSpmi"
                                        >Manual SPMI
                                        </Link></a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">
                                        <Link
                                            className="text-reset text-decoration-none"
                                            to="/StandarSpmi"
                                        >
                                            Standar SPMI
                                        </Link>
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none"> <Link
                                        className="text-reset text-decoration-none"
                                        to="/SOP"
                                    >
                                        SOP
                                    </Link></a>
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
                                    <a href="#!" className="text-reset text-decoration-none">
                                        <Link
                                            className="text-reset text-decoration-none"
                                            to="/SaranaDanPrasarana"
                                        >
                                            Sarana dan Prasarana
                                        </Link>
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">  <Link
                                        className="text-reset text-decoration-none"
                                        to="/GalleryKegiatan"
                                    >
                                        Kegiatan
                                    </Link></a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Links --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-white">
                                <h6 className="text-uppercase fw-bold">

                                    Hubungi Kami
                                </h6>
                                <p>
                                    <a href="mailto:info@antariksa.co.id" className="text-reset text-decoration-none">E-Mail: info@antariksa.co.id</a>
                                </p>
                                <div>
                                    <a href="https://wa.me/6281288710710" class="me-2 text-reset text-decoration-none">
                                        <img src={iconWa}></img>
                                    </a>
                                    <a href="https://www.facebook.com/stikesmayapada" class="me-2 text-reset text-decoration-none">
                                        <img src={iconFb}></img>
                                    </a>
                                    <a href="https://www.instagram.com/stikesmayapada" class="me-2 text-reset text-decoration-none">
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
                                    <a href="#!" className="text-reset text-decoration-none">
                                        <Link
                                            className="text-reset text-decoration-none"
                                            to="/IkatanAlumni"
                                        >
                                            Ikatan Alumni
                                        </Link></a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none"> <Link
                                        className="text-reset text-decoration-none"
                                        to="/AlumniStory"
                                    >
                                        Testimoni
                                    </Link></a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">
                                        <Link
                                            className="text-reset text-decoration-none"
                                            to="/TracerStudy"
                                        >
                                            Tracer Study
                                        </Link>
                                    </a>
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
                                    <a href="#!" className="text-reset text-decoration-none"> <Link
                                        className="text-reset text-decoration-none"
                                        to="/PusatKarir"
                                    >
                                        Pusat Karir
                                    </Link></a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <Link
                                        className="text-reset text-decoration-none"
                                        to="/PJB"
                                    >
                                        Informasi Pendaftaran Baru
                                    </Link>
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