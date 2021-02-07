import React from 'react';
import NavbarStyle from '../styles/Navbar.module.scss'
import Link from 'next/link'
import Image from "next/image";
import {FaHeart, FaUser} from "react-icons/fa";
const NavBar = () => {
    return (
        <nav className={NavbarStyle.navbar}>
            <div className={NavbarStyle.logo}>
<Link href='/'>


                <Image src='/Crying.png' width={80} height={50}/>
</Link>
            </div>
            <menu>
               <ul>
                   <li>
                     <FaUser/>
                   </li>
               </ul>
            </menu>
        </nav>
    );
};

export default NavBar;
