import React from 'react'
import './Home.css';
import Head from '../../components/HeadTitle/Head';
import HeroSection from '../../components/Home/HeroSection';
import Services from './../../components/Services/Services';
import TrendingProducts from './../../components/Home/TrendingProducts';
import BestSales from './../../components/Home/BestSales';

const Home = () => {
    return (
        <Head title={'(home)'}>
            <HeroSection/>
            <Services/>
            <TrendingProducts/>
            <BestSales/>
        </Head>
    )
}

export default Home