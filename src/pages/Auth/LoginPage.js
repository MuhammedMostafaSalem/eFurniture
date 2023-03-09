import React from 'react'
import './Auth.css'
import { Col, Container, Row } from 'react-bootstrap'
import LogIn from '../../components/Auth/LogIn'
import Head from '../../components/HeadTitle/Head';


const Login = () => {
    return (
        <Head title={'(login)'}>
            <Container>
                <Row>
                    <Col lg='6' className='m-auto text-center'>
                        <LogIn/>
                    </Col>
                </Row>
            </Container>
        </Head>
    )
}

export default Login