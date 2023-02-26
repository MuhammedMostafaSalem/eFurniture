import React from 'react'
import Head from '../../components/HeadTitle/Head';
import HeroSection from '../../components/Home/HeroSection';
import './Home.css';

const Home = () => {
    return (
        <Head title={'(home)'}>
            <HeroSection/>
        </Head>
    )
}

export default Home