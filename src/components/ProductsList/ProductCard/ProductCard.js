import React from 'react'
import './ProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import {  useDispatch } from 'react-redux';
import { addItem } from '../../../redux/slices/cartSlice'

import { toast } from 'react-toastify';

const ProductCard = ({item}) => {

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl,
        }))

        toast.success('Product added successfully');
    }


    return (
        <Col lg='3' md='6' sm='6'>
            <div className='product_item'>
                <div className='product_img'>
                    <Link to={`/shop/${item.id}`}>
                        <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt='' />
                    </Link>
                </div>
                <div className='product_info p-2'>
                    <h3 className='product_name'>{item.productName}</h3>
                    <span>{item.category}</span>
                </div>
                <div className='productCard_bottom'>
                    <span className='price'>${item.price}</span>
                    <motion.span whileTap={{scale: 1.1}} onClick={() => addToCart()}>
                        <FontAwesomeIcon icon={faCirclePlus} className='i' />
                    </motion.span>
                </div>
            </div>
        </Col>
    )
}

export default ProductCard