import React, { useContext, useEffect, useState } from 'react';
import './styled.css';
import { Context } from '../Context';
import { useLocalStorage } from '../useLocalStorage';

const Cart = () => {
    const value = useContext(Context)
    const [count, setCount] = useLocalStorage('count', {})


    const costValue = value.cart
        .map((item) => count[item.id] ? count[item.id] * item.price : item.price)
        .reduce((sum, current) => sum + current, 0)

    console.log(count)

    function deleteItem(good) {
        value.setCart(value.cart.filter(item => item.id !== good.id))
    }



    console.log(count)

    return (
        <div className='cart'>
            <p className='total-price'>All: ${costValue === 0 ? '0.00' : costValue.toFixed(2)}</p>
            <p className='cart-message'>{value.cart.length ? '' : 'No items in cart'}</p>
            <div className='goods'>
                {value.cart.map((good) => (
                    <div className='good' key={good.id} >
                        <img src={good.image} alt='good-image' className='good-image' />
                        <p className='good-title'>{good.title}</p>
                        <div className='good-subtitle'>
                            <p className='good-price'>${good.price}</p>
                            <input
                                type='number'
                                min='1'
                                placeholder='1'
                                value={count[good.id] ? count[good.id] : 1}
                                onKeyDown={(e) => e.preventDefault()}
                                onChange={(e) => {
                                    setCount({
                                        ...count,
                                        [good.id]: e.target.value
                                    })
                                }
                                }



                                className='good-counter'
                            />
                            <button className='special-button remove'
                                onClick={() => deleteItem(good)

                                }
                            >Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Cart;
