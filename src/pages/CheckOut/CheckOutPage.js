import React from 'react'
import './CheckOutPage.css'
import { Col, Container, Row } from 'react-bootstrap';
import BillInfo from '../../components/Checkout/BillInfo';
import Head from './../../components/HeadTitle/Head';
import Checkout_cart from '../../components/Checkout/Checkout_cart';

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
                            <Checkout_cart/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Head>
    )
}

export default CheckOutPage