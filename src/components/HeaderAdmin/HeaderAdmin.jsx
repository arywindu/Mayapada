import React from 'react'
import './HeaderAdmin.css'
import { Link } from "react-router-dom";

const HeaderAdmin = () => {
    return (
        <div className="text-center mt-5 mb-3">
            <img className="mx-auto mt-4 mb-4" width={'10%'}></img>
            <h1>ADMIN PANEL</h1>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item px-2">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <Link className='text-reset text-decoration-none' to="/HomeAdmin">Home</Link>
                                </a>

                            </li>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Akademik
                                </a>
                                <ul className="dropdown-menu dropdown-menu-light rounded-0">
                                    <li><a className="dropdown-item" href="#">
                                        <Link className='text-reset text-decoration-none' to="/KeperawatanAdmin">Program DIII Keperawatan</Link>
                                    </a></li>
                                    <li><a className="dropdown-item" href="#">
                                        <Link className='text-reset text-decoration-none' to="/AdministrasiRumahSakit">Program S1 Administrasi Rumah Sakit</Link></a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    UPMI
                                </a>
                                <ul className="dropdown-menu dropdown-menu-light rounded-0">
                                    <li><a className="dropdown-item" href="#"><Link className='text-reset text-decoration-none' to="/KebijakanUpmiAdmin">Kebijakan SPMI</Link></a></li>
                                    <li><a className="dropdown-item" href="#"><Link className='text-reset text-decoration-none' to="/ManualSpmiAdmin">Manual SPMI</Link></a></li>
                                    <li><a className="dropdown-item" href="#"><Link className='text-reset text-decoration-none' to="/StandarSpmiAdmin">Standar SPMI</Link></a></li>
                                    <li><a className="dropdown-item" href="#"><Link className='text-reset text-decoration-none' to="/SopAdmin">SOP</Link></a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Fasilitas
                                </a>
                                <ul className="dropdown-menu dropdown-menu-light rounded-0">
                                    <li><a className="dropdown-item" href="#"><Link className='text-reset text-decoration-none' to="/SaranaDanPrasarana">Sarana dan Prasarana</Link></a></li>
                                    <li><a className="dropdown-item" href="#"><Link className='text-reset text-decoration-none' to="/GalleryKegiatan">Gallery Kegiatan</Link></a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    UPPM
                                </a>
                                <ul className="dropdown-menu dropdown-menu-light rounded-0">
                                    <li><a className="dropdown-item" href="#">Penelitian</a></li>
                                    <li><a className="dropdown-item" href="#">Pengabdian</a></li>
                                    <li><a className="dropdown-item" href="#">E-Jurnal</a></li>
                                </ul>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="#"><Link className='text-reset text-decoration-none' to="/PusatKarirAdmin">Pusat Karir</Link></a>
                            </li>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Alumni
                                </a>
                                <ul className="dropdown-menu dropdown-menu-light rounded-0">
                                    <li><a className="dropdown-item" href="#"><Link className='text-reset text-decoration-none' to="/IkatanAlumni">Ikatan Alumni</Link></a></li>
                                    <li><a className="dropdown-item" href="#"><Link className='text-reset text-decoration-none' to="/TracerStudy">Tracer Study</Link></a></li>
                                    <li><a className="dropdown-item" href="#"><Link className='text-reset text-decoration-none' to="/AlumniStory">Alumni Story</Link></a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    PMB
                                </a>
                                <ul className="dropdown-menu dropdown-menu-light rounded-0">
                                    <li><a className="dropdown-item" href="#"><Link className='text-reset text-decoration-none' to="/PenerimaanMahasiswa">Penerimaan Mahasiswa Baru</Link></a></li>
                                    <li><a className="dropdown-item" href="#"><Link className='text-reset text-decoration-none' to="/JalurMandiri">Program Jalur Mandiri</Link></a></li>
                                    <li><a className="dropdown-item" href="#"><Link className='text-reset text-decoration-none' to="/JalurBeasiswa">Program Jalur Beasiswa</Link></a></li>
                                </ul>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="#"><Link className='text-reset text-decoration-none' to="/HubungiKami">Hubungi Kami</Link></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HeaderAdmin