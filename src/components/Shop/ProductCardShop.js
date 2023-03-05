import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CardProductsContainer from './../ProductsList/CardProductsContainer';

const ProductCardShop = ({productsData}) => {
    return (
        <div className='ProductCardShop_section'>
            <Container>
                <Row>
                    {
                        productsData.length === 0 ? <h3>No products are found</h3> : <CardProductsContainer data={productsData} />
                    }
                </Row>
            </Container>
        </div>
    )
}

export default ProductCardShop