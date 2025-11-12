import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// Used for opening and closing the FullScreenNav
export const NavbarContext = createContext()

// Used for changing navbar text-color based on route
export const NavbarColorContext = createContext()

const NavContext = ({ children }) => {

    const [navColor, setNavColor] = useState('white')     // white by default
    const [navOpen, setNavOpen] = useState(false)         // fullscreen nav is closed by default

    const currentPath = useLocation().pathname

    // Change navbar color based on route
    useEffect(() => {
        if (currentPath === '/projects' || currentPath === '/agence') {
            setNavColor('black')
        } else {
            setNavColor('white')
        }
    }, [currentPath])

    return (
        <NavbarContext.Provider value={[navOpen, setNavOpen]}>
            <NavbarColorContext.Provider value={[navColor, setNavColor]}>
                {children}
            </NavbarColorContext.Provider>
        </NavbarContext.Provider>
    )
}

export default NavContext
