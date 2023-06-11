import React from 'react'
import './SectionNilaiUtamaKami.css'
import ellipse1 from '../../assets/icons/ellipse1.svg'
import ellipse2 from '../../assets/icons/ellipse2.svg'
import ellipse3 from '../../assets/icons/ellipse3.svg'
import ellipse4 from '../../assets/icons/ellipse4.svg'
import ellipse5 from '../../assets/icons/ellipse5.svg'

const SectionNilaiUtamaKami = () => {
    return (
        <div className='text-center text-nilai-utama mt-5 mb-5 pb-5 pt-5'>
            <h3 className='mt-5 pt-5'>Nilai Utama Kami</h3>
            <div class="container mt-5">
                <div class="row gx-5 justify-content-center">

                    <div class="col-lg-2 col-md-12">
                        <img class="mb-3" src={ellipse1}></img>
                        Belas Kasih
                    </div>

                    <div class="col-lg-2 col-md-6">
                        <img class="mb-3" src={ellipse2}></img>
                        Integritas
                    </div>

                    <div class="col-lg-2 col-md-6">
                        <img class="mb-3" src={ellipse3}></img>
                        Kepercayaan
                    </div>

                    <div class="col-lg-2 col-md-6">
                        <img class="mb-3" src={ellipse4}></img>
                        Profesionalisme
                    </div>

                    <div class="col-lg-2 col-md-6">
                        <img class="mb-3" src={ellipse5}></img>
                        Komitmen
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SectionNilaiUtamaKami
