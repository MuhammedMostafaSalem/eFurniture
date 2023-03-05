import React, {useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import products from '../../assets/data/products';
import ProductCardShop from './ProductCardShop';

const FilterSearch = () => {
    const [productsData, setProductsData] = useState(products)

    // handleFilter on select options
    const handleFilter = e=> {
        const filterValue = e.target.value
        if(filterValue === 'allCategory') {
            const filteredProducts = products.filter(item => item.category)

            setProductsData(filteredProducts)
        }
        else if(filterValue === 'sofa') {
            const filteredProducts = products.filter(item => item.category === 'sofa')

            setProductsData(filteredProducts)
        }
        else if(filterValue === 'mobile') {
            const filteredProducts = products.filter(item => item.category === 'mobile')

            setProductsData(filteredProducts)
        }
        else if(filterValue === 'watch') {
            const filteredProducts = products.filter(item => item.category === 'watch')

            setProductsData(filteredProducts)
        }
        else if(filterValue === 'wireless') {
            const filteredProducts = products.filter(item => item.category === 'wireless')

            setProductsData(filteredProducts)
        }
    }

    // handleSearch on select input
    const handleSearch = e => {
        const searchItem = e.target.value

        const searcgedProducts = products.filter(
            item => item.productName.toLowerCase().includes(searchItem.toLowerCase())
        )

        setProductsData(searcgedProducts)
    }


    return (
        <div>
            <div className='FilterSearch_section'>
                <Container>
                    <Row>
                        <Col md='3' sm='3'>
                            <div className='filter_widget'>
                                <select onChange={handleFilter}>
                                    <option value='allCategory'>filter by category</option>
                                    <option value='sofa'>sofa</option>
                                    <option value='mobile'>mobile</option>
                                    <option value='chair'>chair</option>
                                    <option value='watch'>watch</option>
                                    <option value='wireless'>wireless</option>
                                </select>
                            </div>
                        </Col>
                        <Col md='3' sm='3'>
                            <div className='filter_widget'>
                                <select>
                                    <option>sort by</option>
                                    <option value='ascending'>ascending</option>
                                    <option value='descending'>descending</option>
                                </select>
                            </div>
                        </Col>
                        <Col md='6' sm='12'>
                            <div className='search_box'>
                                <input type='text' placeholder='Search By Category' onChange={handleSearch} />
                                <span>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <ProductCardShop productsData={productsData}/>
        </div>
    )
}

export default FilterSearch