import React from 'react'
import Footer from '../components/Footer/Footer'
import Carousel from '../components/Carousel/Carousel'
import Header from '../components/Header/Header'

const Layout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Carousel />
            <div style={{ flex: 'auto' }} ></div>
            <Footer />
        </div>
    )
}

export default Layout