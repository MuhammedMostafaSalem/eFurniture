import React from 'react'
import './Footer.css'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faBagShopping } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <footer>
            <Container>
                <Row>
                    <Col lg='3' md='6' sm='6' xs='12'>
                        <div className='logo'>
                            <FontAwesomeIcon icon={faBagShopping} className='i' />
                            <h1>eFurniture</h1>
                        </div>
                        <p className='footer_text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugiat quam id corrupti non odio cupiditate at qui recusandae nobis.
                        </p>
                    </Col>
                    <Col lg='3' md='6' sm='6' xs='12'>
                        <div className='foote_quick_links'>
                            <h4>top categories</h4>
                            <ListGroup>
                                <ListGroupItem>
                                    <Link to='#'>mobile phones</Link>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Link to='#'>modern sofa</Link>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Link to='#'>arm chair</Link>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Link to='#'>smart watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3' md='6' sm='6' xs='12'>
                        <div className='foote_quick_links'>
                            <h4>useFul links</h4>
                            <ListGroup>
                                <ListGroupItem>
                                    <Link to='#'>shop</Link>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Link to='#'>cart</Link>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Link to='#'>login</Link>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Link to='#'>privacy policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3' md='6' sm='6' xs='12'>
                        <div className='foote_quick_links'>
                            <h4>contact</h4>
                            <ListGroup>
                                <ListGroupItem>
                                    <span>
                                        <FontAwesomeIcon icon={faLocationDot} className='i'/>
                                        <p>egypt</p>
                                    </span>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <span>
                                        <FontAwesomeIcon icon={faPhone} className='i'/>
                                        <p>+20 100000000000</p>
                                    </span>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <span>
                                        <FontAwesomeIcon icon={faEnvelope} className='i'/>
                                        <p>example@gmail.com</p>
                                    </span>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col>
                        <div className='footer_copyright'>
                            copyright &copy;{year} developed by muhammed mostafa. 
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer