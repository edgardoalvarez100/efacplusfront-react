import React from 'react'
import { Footer } from './Footer'
import NavbarLayout from './NavbarLayout'
import "../../assets/css/custom.css"

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