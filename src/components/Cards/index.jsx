import React from 'react';
import './styled.css';
import { useQuery } from 'react-query';
import Card from '../Card';

const Cards = () => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['cards'],
        queryFn: async () => fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => res.filter((item) => item.id <= 9))
    })



    return (
        <div className='container'>
            <h2 className='cards-title'>new arrivals</h2>
            <div className='cards'>
                {isLoading ? <p className='specical-text'>Loading...</p> :
                    isError ? <p className='specical-text'>Error...</p> :
                        data?.map((item) => (
                            <Card
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                id={item.id}
                                quentity={1}
                            />

                        ))}
            </div>
        </div>
    )
};

export default Cards;
