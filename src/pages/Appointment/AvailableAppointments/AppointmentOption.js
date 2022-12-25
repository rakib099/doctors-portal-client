import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots, } = option;

    return (
        <div className="card shadow-lg border-t-slate-400">
            <div className="card-body text-center">
                <h3 className="text-xl font-semibold text-secondary">{name}</h3>
                <div className="slot-texts my-1">
                    <p className=' text-sm mb-2'>{slots.length > 0 ? slots[0] : "Try another day"}</p>
                    <p className=' text-sm'>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                </div>
                <div className="card-actions justify-center">
                    < label 
                    disabled={slots.length === 0}
                    htmlFor="booking-modal" 
                    className={`btn btn-primary ${slots.length < 1 ? "" : "bg-gradient-to-tr from-primary to-secondary"} text-white`}
                    onClick={() => setTreatment(option)}
                    >Book Appointment</label >
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;