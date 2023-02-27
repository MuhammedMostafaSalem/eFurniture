import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import counterImg from '../../assets/images/counter-timer-img.png'
import Clock from './../Clock/Clock';
import { motion } from 'framer-motion';

const TimeCount = () => {
    return (
        <div className='TimeCount_section'>
            <Container>
                <Row>
                    <Col md='6' sm='6' xs='12' className='TimeCount_col'>
                        <div className='clockTop_content'>
                            <h4>limited offers</h4>
                            <h3>quality armchair</h3>
                        </div>
                        <Clock/>
                        <motion.button whileHover={{scale:1.1}} className='buy_btn'>
                            <Link to='/shop'>visit store</Link>
                        </motion.button>
                    </Col>
                    <Col md='6' sm='6' xs='12' className='TimeCount_col2'>
                        <img src={counterImg} alt='' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TimeCount