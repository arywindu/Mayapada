import React from 'react'
import Header from '../components/Header/Header'
import Carousel from '../components/Carousel/Carousel'
import SectionNilaiUtamaKami from '../components/SectionNilaiUtamaKami/SectionNilaiUtamaKami'
import SectionBlue from '../components/SectionBlue/SectionBlue'
import SectionWhite from '../components/SectionWhite/SectionWhite'
import Footer from '../components/Footer/Footer'

const Layout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header />
            <div style={{ flex: 'auto' }} ></div>
            <Carousel />
            <SectionNilaiUtamaKami />
            <SectionBlue />
            <SectionWhite />
            <Footer />
        </div>
    )
}

export default Layout