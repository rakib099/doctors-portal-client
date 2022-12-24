import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import ServiceSection from '../ServiceSection/ServiceSection';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCards />
            <ServiceSection />
        </div>
    );
};

export default Home;