import React, { useEffect, useState, useContext } from 'react';
import './styled.css';
import Tick from '../../assets/icons/tick-icon.png'
import { Context } from '../Context';

const Card = ({ price, title, image, quentity, id }) => {
    const [buttonState, setButtonState] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const value = useContext(Context)


    useEffect(() => {
        setTimeout(() => setButtonState(false), 3000)
    }, [buttonState])


    useEffect(() => {
        const isItemInCart = value.cart.some(item => item.id === id)

        if (isItemInCart) {
            setButtonDisabled(true)
        }
    }, [value.cart, id])

    return (
        <div className='card'>
            <div className={buttonState ? 'task-block' : 'task-block no-active'}>
                <img src={Tick} alt='tick-icon' />
                <p>Added</p>
            </div>
            <img src={image} alt="good's image" />
            <p className='title'>{title}</p>
            <div className='under_description'>
                <p className='price'>{`$${price}`}</p>
                <button
                    disabled={buttonDisabled}
                    className={buttonDisabled ? 'special-button activated'
                        : 'special-button'}
                    onClick={() => {
                        setButtonState(true);
                        setButtonDisabled(true);
                        {
                            value.cart.length ?
                                value.setCart([
                                    ...value.cart,
                                    {
                                        price,
                                        title,
                                        image,
                                        quentity,
                                        id,
                                    }])
                                :
                                value.setCart([{
                                    price,
                                    title,
                                    image,
                                    quentity,
                                    id,
                                }])
                        }

                    }
                    }
                >
                    {buttonDisabled ? 'Added' : 'Add to cart'}
                </button>
            </div>
        </div>
    )
};

export default Card;
