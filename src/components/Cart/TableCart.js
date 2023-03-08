import React from 'react'
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/slices/cartSlice'
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const TableCart = () => {

    const cartItems = useSelector(state => state.cart.cartItems);

    return (
        <div className='table_section'>
            {
                cartItems.length === 0 ? <h3>No item added to the cart</h3> :
                <Table responsive="sm">
                    <thead className='table bordered'>
                        <tr>                
                            <th>image</th>
                            <th>title</th>
                            <th>price</th>
                            <th>qty</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                
                    <tbody className='tableBody'>
                        {
                            cartItems.map((item, index) => {
                                return (
                                    <Tr item={item} key={index} />
                                )
                            })
                        }
                    </tbody>
                </Table>
            }
        </div>
    )
}

const Tr = ({item}) => {

    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch(deleteItem(item.id))

        toast.success('Product deleted successfully');
    }

    return (
        <tr>
            <td>
                <img src={item.imgUrl} alt='' />
            </td>
            <td>{item.productName}</td>
            <td>$ {item.price}</td>
            <td>{item.quantity}px</td>
            <td>
                <motion.i whileTap={{scale: 1.3}} className="fa-solid fa-trash" onClick={deleteProduct}></motion.i>
            </td>
        </tr>
    )
}

export default TableCart