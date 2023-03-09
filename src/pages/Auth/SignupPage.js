import React from 'react'
import './Auth.css'
import { Col, Container, Row } from 'react-bootstrap'
import SignUp from '../../components/Auth/Signup';
import Head from '../../components/HeadTitle/Head';

const Signup = () => {
    return (
        <Head title={'(signup)'}>
            <Container>
                <Row>
                    <Col lg='6' className='m-auto text-center'>
                        <SignUp/>
                    </Col>
                </Row>
            </Container>
        </Head>
    )
}

export default Signup