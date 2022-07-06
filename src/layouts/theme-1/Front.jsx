import React from 'react'


import { Footer } from './Footer'
import NavbarLayout from './NavbarLayout'


const Front = ({ children }) => {
    return (
        <>
            <NavbarLayout />
            {children}
            <Footer />
        </>
    )
}

export default Front