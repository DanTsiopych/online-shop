import React from 'react'
import './styled.css'
import Phone from '../../assets/media-phone.png'
import Apple from '../../assets/icons/apple-icon.png'
import Android from '../../assets/icons/android-icon.png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-wrapper'>
        <div className='footer-content'>
          <div className='footer-content-title'>
            <h4>download app & get the voucher</h4>
          </div>
          <div className='footer-content-subtitle'>
            <p>Get 30% off for first transaction using Rondovision mobile app for now.</p>
          </div>
          <div className='game-stores'>
            <Link to='https://en.wikipedia.org/wiki/App_store'>
              <img src={Apple} alt='game store' />
            </Link>
            <Link to='https://play.google.com/store/games'>
              <img src={Android} alt='game store' />
            </Link>
          </div>
        </div>
        <div className='footer-image'>
          <img src={Phone} alt='media-phone' />
        </div>
      </div>
    </footer>
  )
}

export default Footer