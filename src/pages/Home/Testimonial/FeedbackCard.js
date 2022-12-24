import React from 'react';

const FeedbackCard = ({ card }) => {
    const { img, name, region, description } = card

    return (
        <div className="card bg-base-100 shadow-md">
            <div className="card-body">
                <p>{description}</p>
                <div className='flex items-center gap-3 mt-9 lg:mt-11'>
                    <img className='w-16 border-secondary border-2 rounded-full p-[0.15rem]' src={img} alt="client-img" />
                    <div>
                        <h3 className='text-xl font-semibold'>{name}</h3>
                        <h6 className='text-normal'>{region}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;