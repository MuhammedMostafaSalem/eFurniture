import React from 'react'
import './CartPage.css'
import HeroCart from '../../components/Cart/HeroCart';
import Head from './../../components/HeadTitle/Head';
import { Col, Container, Row } from 'react-bootstrap';
import TableCart from '../../components/Cart/TableCart';
import CheckOut from '../../components/Cart/CheckOut';

const CartPage = () => {
    return (
        <Head title={'(cart)'}>
            <HeroCart/>
            <div className='cartPage'>
                <Container>
                    <Row>
                        <Col lg='9'>
                            <TableCart/>
                        </Col>
                        <Col lg='3'>
                            <CheckOut/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Head>
    )
}

export default CartPage