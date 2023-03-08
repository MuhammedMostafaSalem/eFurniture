import React from 'react'
import { useSelector } from 'react-redux';

const Checkout_cart = () => {

    const totalQty = useSelector(state => state.cart.totalQuantity);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    return (
        <div className='checkoutCart_section'>
            <div className='checkout_cart'>
                <h6>
                    total qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                    subtotal: <span>$ {totalAmount}</span>
                </h6>
                <h6>
                    <span>shipping: <br/> free shipping</span> <span>$0</span>
                </h6>
                <h4>
                    tatal cost: <span>$ {totalAmount}</span>
                </h4>
                <button className='buy_btn auth_btn'>place an order</button>
            </div>
        </div>
    )
}

export default Checkout_cart