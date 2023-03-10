import React from 'react';

const InfoCard = ({card}) => {
    const {name, description, icon, bgClass} = card

    return (
        <div className={`card text-white p-6 md:card-side shadow-xl ${bgClass}`}>
            <figure><img src={icon} alt="info-icon" /></figure>
            <div className="card-body">
                <h2 className="text-xl font-bold mb-1">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;