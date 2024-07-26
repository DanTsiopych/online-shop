import React from 'react';
import './styled.css';
import MediaGirl from '../../assets/media-girl.png'
import { HashLink } from 'react-router-hash-link';
const Header = () => {
    return (
        <header className='header'>
            <div className='header-block'>
                <div className='header-text'>
                    <h3>let's explore unique clothes.</h3>
                    <p>Live for Influential and Innovative fashion!</p>
                    <HashLink smooth to="/#catalogue" className='hashlink'>
                            Shop now
                    </HashLink>
                </div>
                <div className='header-image'>
                    <img src={MediaGirl} alt='media-girl' />
                </div>
            </div>
        </header>
    )
};

export default Header;
