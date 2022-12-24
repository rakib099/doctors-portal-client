import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceSection = () => {

    const cardData = [
        {
            id: 1,
            img: fluoride,
            title: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 2,
            img: cavity,
            title: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 3,
            img: whitening,
            title: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]

    return (
        <div className='mt-20 lg:mt-32'>
            <div className="text-center mb-16">
                <h3 className='text-xl font-bold text-secondary uppercase'>Our Services</h3>
                <h2 className='text-4xl text-neutral mt-2'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    cardData.map(card => <ServiceCard
                        key={card.id}
                        card={card}
                    />)
                }
            </div>
        </div>
    );
};

export default ServiceSection;