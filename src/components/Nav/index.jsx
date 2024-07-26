import React, {useContext, useEffect, useRef, useState} from 'react';
import './styled.css';

import Logo from './../../assets/icons/Logo.svg';
import { HashLink as Link} from 'react-router-hash-link';
import { Context } from '../Context';

const Nav = () => {
    const value = useContext(Context)

    
    return (
        <nav className='nav'>
            <Link to='/' className='logo'>
                <img src={Logo} alt='Logo' />
                <h2>Fashion</h2>
            </Link>
            <div className='goods-links'>
                <Link smooth to="#catalogue" className='catalogue'>
                    Catalogue
                </Link>
                <Link to='/cart' className='special-button'>
                    Cart ({value.cart.length})
                </Link>
            </div>
        </nav >
    )
};

export default Nav;
