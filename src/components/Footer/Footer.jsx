import React, { useEffect, useState, useRef } from 'react';
import './Footer.css'
import { Link, NavLink } from "react-router-dom";
import logoFooter from '../../assets/images/logoFooter.svg'
import iconWa from '../../assets/icons/wa.svg'
import iconFb from '../../assets/icons/fb.svg'
import iconIg from '../../assets/icons/ig.svg'
import { async } from 'q';
import axios from 'axios';

const Footer = () => {

    const token = localStorage.getItem('token');
    const [data, setData] = useState(null);
    const [contactWa, setContactWa] = useState(null);
    const [contackIg, setContactIg] = useState(null);
    const [contactFb, setContactFb] = useState(null);
    const [contactEmail, setContactEmail] = useState(null);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios.get(
                'https://api.stikesmayapada.ac.id/api/contact/1'
            );
            // console.log(response.data, 'hub kami');
            const responseData = response.data.data;
            setContactWa(responseData.contact_wa);
            setContactIg(responseData.contact_ig);
            setContactFb(responseData.contact_fb);
            setContactEmail(responseData.contact_email);
            setData(responseData);
        } catch (error) { }
    };

    const sejarahRef = useRef();
    const visiMisiRef = useRef();
    const nilaiUtamaRef = useRef();
    const landasanHukumRef = useRef();
    const akreditasiRef = useRef();


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
                                        <NavLink className="text-reset text-decoration-none"
                                            onClick={() => sejarahRef.current.scrollIntoView({ behavior: 'smooth' })}
                                            to="/#sejarah">
                                            Sejarah
                                        </NavLink>
                                    </a>
                                </p>
                                <p>
                                    <a href="" className="text-reset text-decoration-none">
                                        <NavLink className="text-reset text-decoration-none"
                                            onClick={() => visiMisiRef.current.scrollIntoView({ behavior: 'smooth' })}
                                            to="/#visiMisi">
                                            Visi Misi
                                        </NavLink>
                                    </a>
                                </p>
                                <p>
                                    <a href="" className="text-reset text-decoration-none">
                                        <NavLink className="text-reset text-decoration-none"
                                            onClick={() => nilaiUtamaRef.current.scrollIntoView({ behavior: 'smooth' })}
                                            to="/#nilaiUtama">
                                            Nilai Utama
                                        </NavLink>
                                    </a>
                                </p>
                                <p>
                                    <a href="" className="text-reset text-decoration-none">
                                        <NavLink className="text-reset text-decoration-none"
                                            onClick={() => landasanHukumRef.current.scrollIntoView({ behavior: 'smooth' })}
                                            to="/#landasanHukum">
                                            Landasan Hukum
                                        </NavLink>
                                    </a>
                                </p>
                                <p>
                                    <a href="" className="text-reset text-decoration-none">
                                        <NavLink className="text-reset text-decoration-none"
                                            onClick={() => akreditasiRef.current.scrollIntoView({ behavior: 'smooth' })}
                                            to="/#akreditasi">
                                            Akreditasi
                                        </NavLink>
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
                                    <a className="text-reset text-decoration-none">Program Studi</a>
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
                                <p>Telepon: {contactWa}</p>
                                <p>
                                    <a href="mailto:info@stikesmayapada.ac.id" className="text-reset text-decoration-none">E-Mail: {contactEmail}</a>
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
                                        to="https://forms.gle/3C8L6pjWHRfzSK8j9"
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
                    Copyright ©  2023 Stikes Mayapada. All rights reserved.
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