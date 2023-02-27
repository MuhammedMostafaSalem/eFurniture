import React from 'react'
import './Home.css';
import Head from '../../components/HeadTitle/Head';
import HeroSection from '../../components/Home/HeroSection';
import Services from './../../components/Services/Services';
import TrendingProducts from './../../components/Home/TrendingProducts';
import BestSales from './../../components/Home/BestSales';
import TimeCount from './../../components/timerCount/TimeCount';
import NewArrivals from './../../components/Home/NewArrivals';
import Popular from './../../components/Home/Popular';

const Home = () => {
    return (
        <Head title={'(home)'}>
            <HeroSection/>
            <Services/>
            <TrendingProducts/>
            <BestSales/>
            <TimeCount/>
            <NewArrivals/>
            <Popular/>
        </Head>
    )
}

export default Home