import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../ProductsList/CardProductsContainer'
import Subtitle from './../Utility/Subtitle/Subtitle';
import products from './../../assets/data/products';

const Popular = () => {
    const [watch, setWatch] = useState([])

    useEffect(()=> {
        const filteredWatch = products.filter(
            (item)=> item.category === 'watch'
        )

        setWatch(filteredWatch)
    }, [])

    return (
        <div className='Popular_section'>
            <Container>
                <Row>
                    <div className='subTitlePopular'>
                        <Subtitle title='popular in category' />
                    </div>
                    <CardProductsContainer data={watch} />
                </Row>
            </Container>
        </div>
    )
}

export default Popular