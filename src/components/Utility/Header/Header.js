import React, { useEffect, useRef } from 'react'
import './Header.css'
import { Container } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import logo from '../../../assets/images/eco-logo.png'
import userIcon from '../../../assets/images/user-icon.png'
import { motion } from "framer-motion";


const nav_links = [
    {
        path: '/',
        display: 'Home',
    },
    {
        path: 'shop',
        display: 'Shop',
    },
    {
        path: 'cart',
        display: 'Cart',
    },
]

const Header = () => {
    
    // toggle icon bar
    const iconRef = useRef(null)
    const iconToggle = () => iconRef.current.classList.toggle('fa-times')

    // toggle menu
    const menuRef = useRef(null)
    const menuToggle = () => menuRef.current.classList.toggle('active_menu')

    // select window scroll in navbar
    const headerRef = useRef(null)
    const stickyHeader = () => {
        window.addEventListener('scroll', ()=> {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky_header')
            }
            else {
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }
    useEffect(()=> {
        stickyHeader()
        return ()=> window.removeEventListener('scroll', stickyHeader)
    })

    return (
        <header className='header' ref={headerRef}>
            <Container>
                <div className='nav_wrapper'>
                    <NavLink to="/">
                        <div className='logo'>
                            <img src={logo} alt='logo' />
                            <h1>eFurniture</h1>
                        </div>
                    </NavLink>

                    <div className='navigation'>
                        <ul className='menu' ref={menuRef} onClick={menuToggle}>
                            {
                                nav_links.map((item, index) => {
                                    return (
                                        <li className='nav_item' key={index}>
                                            <NavLink 
                                            to={item.path} 
                                            className={(navClass) => 
                                                navClass.isActive ? 'nav_active' : ''
                                            }
                                            >{item.display}</NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className='nav_icons'>
                        <span className='fav_icon'>
                            <FontAwesomeIcon icon={faHeart} className='i' />
                            <span className='badge'>1</span>
                        </span>
                        <span className='cart_icon'>
                            <FontAwesomeIcon icon={faBagShopping} className='i' />
                            <span className='badge'>1</span>
                        </span>
                        <span className='cart_icon'>
                            <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt='userIcon' />
                        </span>
                        <div className='mobile_bar'>
                            <span onClick={menuToggle}>
                                <i className="fa-solid fa-bars i" ref={iconRef} onClick={iconToggle}></i>
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header