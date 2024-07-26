import React, { useState, useEffect } from 'react';
import './styled.css';
import Nav from "../Nav";
import { Outlet } from 'react-router-dom';
import { Context } from '../Context';
import { useLocalStorage } from '../../hooks/useLocalStorage';
const Layout = () => {
    const [cart, setCart] = useLocalStorage('cart', []);
    return (
        <>
            <Context.Provider value={{ cart, setCart }}>
                <Nav />
                <Outlet />
            </Context.Provider >
        </>
    )
};

export default Layout;
