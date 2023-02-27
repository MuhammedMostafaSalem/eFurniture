import React from 'react'
import ProductCard from './ProductCard/ProductCard';

const CardProductsContainer = ({data}) => {
    return (
        <>
            {
                data.map((item, index)=> {
                    return (
                        <ProductCard item={item} key={index} />
                    )
                })
            }
        </>
    )
}

export default CardProductsContainer