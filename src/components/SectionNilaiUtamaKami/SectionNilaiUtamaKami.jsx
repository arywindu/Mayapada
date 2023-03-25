import React from 'react'
import './SectionNilaiUtamaKami.css'
import ellipse1 from '../../assets/icons/ellipse1.svg'

const SectionNilaiUtamaKami = () => {
    return (
        <div className='text-center text-nilai-utama mt-5 mb-5'>
            <h3>Nilai Utama Kami</h3>
            <div class="container mt-5">
                <div class="row gx-5 justify-content-center">

                    <div class="col-lg-2 col-md-12">
                        <img class="mb-4" src={ellipse1}></img>
                        Belas Kasih
                    </div>

                    <div class="col-lg-2 col-md-6">
                        <img class="mb-4" src={ellipse1}></img>
                        Integritas
                    </div>

                    <div class="col-lg-2 col-md-6">
                        <img class="mb-4" src={ellipse1}></img>
                        Kepercayaan
                    </div>

                    <div class="col-lg-2 col-md-6">
                        <img class="mb-4" src={ellipse1}></img>
                        Profesionalisme
                    </div>

                    <div class="col-lg-2 col-md-6">
                        <img class="mb-4" src={ellipse1}></img>
                        Komitmen
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SectionNilaiUtamaKami
