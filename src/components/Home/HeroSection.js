import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/hero-img.png';
import { motion } from 'framer-motion';

const HeroSection = () => {

    const year = new Date().getFullYear()

    return (
        <div className='hero'>
            <Container>
                <Row>
                    <Col md='6' sm='12'>
                        <div className='hero_content'>
                            <p className='hero_subtitle'>trending products in {year}</p>
                            <h2>make your intterior more minimalistic & modern</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, deleniti. Natus fugit beatae assumenda at atque fuga amet ex vero.</p>
                            <motion.button whileHover={{scale:1.1}} className='buy_btn'>
                                <Link to="/shop">shop now</Link>
                            </motion.button>
                        </div>
                    </Col>
                    <Col md='6' sm='12'>
                        <div className='hero_img'>
                            <img src={heroImg} alt='' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeroSection