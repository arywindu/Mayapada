import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Layout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header />
            <div style={{ flex: 'auto' }} ></div>
            <Footer />
        </div>
    )
}

export default Layout