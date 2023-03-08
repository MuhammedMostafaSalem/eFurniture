import React, { useState, useRef, useEffect } from 'react'
import Head from '../../components/HeadTitle/Head'
import './ProductsDetailsPage.css'
import products from './../../assets/data/products';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import CardProductsContainer from './../../components/ProductsList/CardProductsContainer';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice'
import { toast } from 'react-toastify';

const ProductsDetailsPage = () => {
    /* select find product */
    const { id } = useParams();
    const product = products.find(item => item.id === id);
    const {imgUrl, productName, price, reviews, avgRating, description, shortDesc, category} = product;

    /* select tab review */
    const [tab, setTab] = useState('description');
    const reviewUser = useRef('');
    const reviewMsg = useRef('');
    
    /* useState hook for rate user */
    const [rating, setRating] = useState(null)


    /* for add product to cart */ 
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(addItem({
                id: id,
                productName: productName,
                price: price,
                imgUrl: imgUrl,
            })
        )

        toast.success('Product added successfully');
    }

    /* submit handler review */
    const submitHandler = (e) => {
        e.preventDefault()

        const reviewUserName = reviewUser.current.value;
        const reviewUserMsg = reviewMsg.current.value;

        const reviewObj = {
            userName: reviewUserName,
            text: reviewUserMsg,
            rating,
        }

        console.log(reviewObj);
        toast.success('Review submited')
    }
    
    /* scrollToTop for choose another product  */
    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [product])



    /* filter related products */
    const relatedProducts = products.filter(item => item.category === category);

    return (
        <Head title={productName}>
            {/* start ProductsDetails */}
            <div className='ProductsDetailsPage'>
                <Container>
                    <Row>
                        <Col md='5'>
                            <img src={imgUrl} alt='' />
                        </Col>

                        <Col md='7'>
                            <div className='ProductText_section'>
                                <div className='d-flex gap-3'>
                                    <h3>{productName}</h3>
                                    <div className='product_rating'>
                                        <p>
                                            <span>{avgRating}</span> (rating)
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex gap-3 mt-3'>
                                    <div className='product_price'>${price}</div>
                                    <div className='product_rating'>category: ({category})</div>
                                </div>
                                <p className='shortDesc mt-3'>{shortDesc}</p>
                                <motion.button
                                    whileTap={{scale:1.1}}
                                    className='buy_btn'
                                    onClick={addToCart}
                                    >add to cart
                                </motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* end ProductsDetails */}




            {/* start tapWrapper_section */}
            <div className='tapWrapper_section'>
                <Container>
                    <div className='tapWrapper'>
                        <p
                        className={`${tab === 'description' ? "active_tab" : ""}`}
                        onClick={() => setTab('description')}
                        >
                            description
                        </p>
                        <p
                        className={`${tab === 'reviews' ? "active_tab" : ""}`}
                        onClick={() => setTab('reviews')}
                        >
                            reviews ({reviews.length})
                        </p>
                    </div>

                    <div className='tab_content'>
                        {
                            tab === 'description' ?
                            <p className='ms-3'>{description}</p> :
                            <div className='product_review'>

                                <div className='review_wrapper'>
                                    <ul>
                                        {
                                            reviews.map((item, index) => {
                                                return(
                                                    <li className='listItem product_rating' key={index}>
                                                        <h5>Jhon Doe</h5>
                                                        <p className='d-flex gap-2'>
                                                            <span>{item.rating}</span>
                                                            <span>(rating)</span>
                                                        </p>
                                                        <p>{item.text}</p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
            
                                    <div className='review_form'>
                                        <h4>leave your experience</h4>
                                        <form action='' onSubmit={submitHandler}>
                                            <div className='form_group'>
                                                <input
                                                    type='text'
                                                    placeholder='Enter your name'
                                                    ref={reviewUser}
                                                    required
                                                    />
                                                <div >
                                                    <motion.span whileHover={{scale: 1.2}} onClick={()=> setRating(1)}>
                                                        <p>1</p>
                                                        <i className="fa-solid fa-star"></i>
                                                    </motion.span>
                                                    <motion.span whileHover={{scale: 1.2}} onClick={()=> setRating(2)}>
                                                        <p>2</p>
                                                        <i className="fa-solid fa-star"></i>
                                                    </motion.span>
                                                    <motion.span whileHover={{scale: 1.2}} onClick={()=> setRating(3)}>
                                                        <p>3</p>
                                                        <i className="fa-solid fa-star"></i>
                                                    </motion.span>
                                                    <motion.span whileHover={{scale: 1.2}} onClick={()=> setRating(4)}>
                                                        <p>4</p>
                                                        <i className="fa-solid fa-star"></i>
                                                    </motion.span>
                                                    <motion.span whileHover={{scale: 1.2}} onClick={()=> setRating(5)}>
                                                        <p>5</p>
                                                        <i className="fa-solid fa-star"></i>
                                                    </motion.span>
                                                </div>
                                            </div>
                    
                                            <div className='form_group'>
                                                <textarea
                                                    rows={4}
                                                    type='text'
                                                    placeholder='Review message'
                                                    ref={reviewMsg}
                                                    required
                                                />
                                            </div>
            
                                            <motion.button whileTap={{scale:1.1}} type='submit' className='buy_btn'>submit</motion.button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </Container>
            </div>
            {/* end tapWrapper_section */}




            {/* start related_section */}
            <div className='related_section'>
                <Container>
                    <Row>
                        <h4>You might also like</h4>
                        <CardProductsContainer data={relatedProducts}/>
                    </Row>
                </Container>
            </div>
            {/* end related_section */}
        </Head>
    )
}

export default ProductsDetailsPage