import React, { useEffect, useRef } from 'react'
import './Header.css'
import { Container } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import logo from '../../../assets/images/eco-logo.png'
import userIcon from '../../../assets/images/user-icon.png'
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import useAuth from './../../../CustomHooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase.config';
import { toast } from 'react-toastify';


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

    // show total quantity in nav_icons => cart_icon
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)

    // to enter the shopping cart page
    const navegate = useNavigate()
    const navegateToCart = () => {
        navegate('/cart')
    }

    // select for Authenticate
    const {currentUser} = useAuth();

    const profileActionRef = useRef(null);
    const toggleprofileAction = ()=> profileActionRef.current.classList.toggle('show_profileActions')

    const logout = () => {
        signOut(auth).then(()=> {
            toast.success('Logged out');
            navegate('/')
        }).catch((error) => {
            toast.error(error.message);
        })
    }


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
                        <span className='cart_icon' onClick={navegateToCart}>
                            <FontAwesomeIcon icon={faBagShopping} className='i' />
                            {
                                totalQuantity ? (
                                    <span className='badge'>{totalQuantity}</span>
                                ) : <span className='badge'></span>
                            }
                        </span>
                        <div className='profile_img'>
                            <motion.img whileTap={{ scale: 1.2 }} src={currentUser ? currentUser.photoURL : userIcon} alt='' onClick={toggleprofileAction} />

                            <div className='profile_actions' ref={profileActionRef} onClick={toggleprofileAction}>
                                {
                                    currentUser ? <span onClick={logout}>Logout</span> :
                                    <div className='d-flex align-items-center justify-content-center flex-column'>
                                        <Link to='/signup'>Signup</Link>
                                        <Link to='/login'>Login</Link>
                                    </div>
                                }
                            </div>
                        </div>
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