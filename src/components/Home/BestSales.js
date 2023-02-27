import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import products from '../../assets/data/products'
import CardProductsContainer from '../ProductsList/CardProductsContainer'
import Subtitle from '../Utility/Subtitle/Subtitle'

const BestSales = () => {

    const [bestSales, setBestSales] = useState([])

    useEffect(()=> {
        const filteredBest = products.filter(
            (item) => item.category === 'sofa'
        )

        setBestSales(filteredBest)
    }, [])

    return (
        <div className='bestSales_section'>
            <Container>
                <Row>
                    <Subtitle title='best sales' />
                    <CardProductsContainer data={bestSales} />
                </Row>
            </Container>
        </div>
    )
}

export default BestSales