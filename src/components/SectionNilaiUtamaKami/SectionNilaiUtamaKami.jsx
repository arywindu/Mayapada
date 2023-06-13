import React from 'react'
import './SectionNilaiUtamaKami.css'
import ellipse1 from '../../assets/icons/ellipse1.svg'
import ellipse2 from '../../assets/icons/ellipse2.svg'
import ellipse3 from '../../assets/icons/ellipse3.svg'
import ellipse4 from '../../assets/icons/ellipse4.svg'
import ellipse5 from '../../assets/icons/ellipse5.svg'

const SectionNilaiUtamaKami = () => {
    return (
        <div className='text-center text-nilai-utama mb-5 pb-5'>
            <h3>Nilai Utama Kami</h3>
            <div class="container mt-5 pt-5">
                <div class="row gx-5 justify-content-center">

                    <div class="col">
                        <img class="mb-3 mobile-size" src={ellipse1}></img>
                        <p>Belas Kasih</p>
                    </div>

                    <div class="col">
                        <img class="mb-3 mobile-size" src={ellipse2}></img>
                        <p>Integritas</p>
                    </div>

                    <div class="col">
                        <img class="mb-3 mobile-size" src={ellipse3}></img>
                        <p>Kepercayaan</p>
                    </div>

                    <div class="col">
                        <img class="mb-3 mobile-size" src={ellipse4}></img>
                        <p>Profesionalisme</p>
                    </div>

                    <div class="col">
                        <img class="mb-3 mobile-size" src={ellipse5}></img>
                        <p>Komitmen</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SectionNilaiUtamaKami
