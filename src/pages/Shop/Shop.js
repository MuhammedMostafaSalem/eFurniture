import React from 'react';
import './Shop.css';
import Head from './../../components/HeadTitle/Head';
import HeroShop from '../../components/Shop/HeroShop';
import FilterSearch from '../../components/Shop/FilterSearch';

const Shop = () => {
    return (
        <Head title={'(shop)'}>
            <HeroShop/>
            <FilterSearch/>
        </Head>
    )
}

export default Shop