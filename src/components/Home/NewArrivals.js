import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../ProductsList/CardProductsContainer'
import Subtitle from '../Utility/Subtitle/Subtitle'
import products from './../../assets/data/products';

const NewArrivals = () => {
    const [mobile, setMobile] = useState([])
    const [wireless, setWireless] = useState([])

    useEffect(()=> {
        const filteredMobile = products.filter(
            (item)=> item.category === 'mobile'
        )

        setMobile(filteredMobile)
    }, [])
    useEffect(()=> {
        const filteredWireless = products.filter(
            (item)=> item.category === 'wireless'
        )

        setWireless(filteredWireless)
    }, [])


    return (
        <div className='NewArrivals_section'>
            <Container>
                <Row>
                    <Subtitle title='new arrivals'/>
                    <CardProductsContainer data={mobile} />
                    <CardProductsContainer data={wireless} />
                </Row>
            </Container>
        </div>
    )
}

export default NewArrivals