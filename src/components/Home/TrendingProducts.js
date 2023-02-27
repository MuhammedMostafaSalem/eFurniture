import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Subtitle from './../Utility/Subtitle/Subtitle';
import CardProductsContainer from './../ProductsList/CardProductsContainer';
import products from './../../assets/data/products';

const TrendingProducts = () => {

    const [trendingProducts, setTrendingProducts] = useState([])

    useEffect(()=> {
        const filteredProducts = products.filter(
            (item) => item.category === 'chair'
        )

        setTrendingProducts(filteredProducts)
    }, [])

    return (
        <div className='TrendingProducts_section'>
            <Container>
                <Row>
                    <Subtitle title='trending products' />
                    <CardProductsContainer data={trendingProducts} />
                </Row>
            </Container>
        </div>
    )
}

export default TrendingProducts