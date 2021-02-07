import React from 'react';
import NavbarStyle from '../styles/Navbar.module.scss'
import Link from 'next/link'
const NavBar = () => {
    return (
        <nav className={NavbarStyle.navbar}>
            <div className={NavbarStyle.logo}>
                <h2><em>LOGO</em></h2>
            </div>
            <menu>
               <ul>
                   <li>
                       <Link href='/login'>
                           Login
                       </Link>
                   </li>
               </ul>
            </menu>
        </nav>
    );
};

export default NavBar;
