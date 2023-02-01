import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <NavLink to='/' className='linkText navbarLink'>Inicio</NavLink>
            <NavLink to='/projects' className='linkText navbarLink'>Proyectos</NavLink>
        </nav>
    )
}
