import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import FeedbackCard from './FeedbackCard';

const Testimonial = () => {

    const cardData = [
        {
            id: 1,
            img: people1,
            name: "Windson Harry",
            region: "California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 2,
            img: people2,
            name: "Zara Page",
            region: "Texas",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 3,
            img: people3,
            name: "Alexa Hershley",
            region: "Los Angles",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
    ]

    return (
        <section className='testimonial mt-16 lg:mt-28 lg:px-12 2xl:px-0'>
            <SectionTitle className="font-bold mb-2">Testimonial</SectionTitle>
            <h2 className="text-neutral text-4xl mb-16 lg:mb-24">What Our Patients Says</h2>
            <div className="feedbacks grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 lg:gap-14">
                {
                    cardData.map(card => <FeedbackCard 
                        key={card.id}
                        card={card}
                    />)
                }
            </div>
        </section>
    );
};

export default Testimonial;