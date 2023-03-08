import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CheckOut = () => {

    const totalAmount = useSelector(state => state.cart.totalAmount)

    return (
        <div className='subTotal_section'>
            <div className='d-flex'>
                <h6>subtotal</h6>
                <span>$ {totalAmount}</span>
            </div>
            <p>Taxes and shipping will calculate in Checkout</p>
            <div className='btnGroup'>
                <button className='buy_btn'>
                    <Link to='/checkOut'>checkout</Link>
                </button>
                <button className='buy_btn'>
                    <Link to='/shop'>continue shopping</Link>
                </button>
            </div>
        </div>
    )
}

export default CheckOut