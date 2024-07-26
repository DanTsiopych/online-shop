import React from 'react';
import './styled.css';
import Sponsor1 from '../../assets/sponsor-1.png'
import Sponsor2 from '../../assets/sponsor-2.png'
import Sponsor3 from '../../assets/sponsor-3.png'
import Sponsor4 from '../../assets/sponsor-4.png'
import Sponsor5 from '../../assets/sponsor-5.png'
import Sponsor6 from '../../assets/sponsor-6.png'
const DownHeader = () => {
    return (
        <section className='sponsors'>
            <div className='container'>
                <div className='grid-container'>
                    <img src={Sponsor1} alt='sponsor-image' />
                    <img src={Sponsor2} alt='sponsor-image' />
                    <img src={Sponsor3} alt='sponsor-image' />
                    <img src={Sponsor4} alt='sponsor-image' />
                    <img src={Sponsor5} alt='sponsor-image' />
                    <img src={Sponsor6} alt='sponsor-image' />
                </div>
            </div>
        </section>
    )
};

export default DownHeader;
