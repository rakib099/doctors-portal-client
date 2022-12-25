import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppointmentOption = ({ option }) => {
    const { name, slots, } = option

    return (
        // <div className='py-10 px-28 shadow-lg rounded-lg'>
        //     <h3 className="text-xl text-secondary text-bold  text-center">{option.name}</h3>
        // </div>
        <div className="card shadow-lg border-t-slate-400">
            <div className="card-body text-center">
                <h3 className="text-xl font-semibold text-secondary">{name}</h3>
                <div className="slot-texts my-1">
                    <p className=' text-sm mb-2'>{slots.length > 0 ? slots[0] : "Try another day"}</p>
                    <p className=' text-sm'>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                </div>
                <div className="card-actions justify-center">
                    <PrimaryButton>Book Appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;