import React from 'react'
import './CheckOutPage.css'
import { Col, Container, Row } from 'react-bootstrap';
import BillInfo from '../../components/Checkout/BillInfo';
import Head from './../../components/HeadTitle/Head';
import CheckoutCart from '../../components/Checkout/CheckoutCart';

const CheckOutPage = () => {
    return (
        <Head title={'(checkout)'}>
            <div className='checkoutPege'>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <BillInfo/>
                        </Col>
                        <Col lg='4'>
                            <CheckoutCart/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Head>
    )
}

export default CheckOutPage