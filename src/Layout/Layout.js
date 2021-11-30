import React from 'react'
import NavBar from '../portfolioContainer/NavBar/NavBar'

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout
