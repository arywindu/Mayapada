import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PendaftaranAdmin.css';
import LayoutAdmin from '../../../Layout/LayoutAdmin';

const PendaftaranAdmin = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const getData = async () => {
        try {
            const response = await axios.get(
                'https://api.stikesmayapada.ac.id/api/form/all'
            );
            setData(response.data.data.rows);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <LayoutAdmin>
            <div>
                <div className="row mt-5 mb-5" style={{ margin: '3% 10% 10% 10%', overflowX: 'auto' }}>
                    <h4>
                        <span className="bg-primary text-white">Alumni Story Admin</span>
                    </h4>
                    <hr className="bg-danger border-2 border-top border-dark mt-2 mb-4" />
                    <div style={{ overflowX: 'auto' }}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">NISN</th>
                                    <th scope="col">KTP</th>
                                    <th scope="col">Program Studi</th>
                                    <th scope="col">Program Kelas</th>
                                    <th scope="col">Tanggal Lahir</th>
                                    <th scope="col">Tempat Lahir</th>
                                    <th scope="col">Tinggi Badan</th>
                                    <th scope="col">Provinsi</th>
                                    <th scope="col">Alamat</th>
                                    <th scope="col">Berat Badan</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Kota</th>
                                    <th scope="col">Kode Pos</th>
                                    <th scope="col">Jenis Kelamin</th>
                                    <th scope="col">Nama Ortu</th>
                                    <th scope="col">Asal Sekolah</th>
                                    <th scope="col">No HP</th>
                                    <th scope="col">Agama</th>
                                    <th scope="col">Tanggal Mendaftar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.nama_lengkap}</td>
                                        <td>{item.nisn}</td>
                                        <td>{item.ktp}</td>
                                        <td>{item.program_studi}</td>
                                        <td>{item.program_kelas}</td>
                                        <td>{item.tanggal_lahir}</td>
                                        <td>{item.tempat_lahir}</td>
                                        <td>{item.tinggi_badan}</td>
                                        <td>{item.provinsi}</td>
                                        <td>{item.alamat}</td>
                                        <td>{item.berat_badan}</td>
                                        <td>{item.email}</td>
                                        <td>{item.kota}</td>
                                        <td>{item.kode_pos}</td>
                                        <td>{item.jenis_kelamin}</td>
                                        <td>{item.nama_ortu}</td>
                                        <td>{item.asal_sekolah}</td>
                                        <td>{item.no_hp}</td>
                                        <td>{item.pilih_agama}</td>
                                        <td>{item.createdAt}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <hr className="bg-danger border-2 border-top border-dark mt-2 mb-4" />
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default PendaftaranAdmin;
