import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => {
                setAppointmentOptions(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <section className=''>
            <div className="text-center mb-12">
                <SectionTitle className="font-semibold">Available Services on {format(selectedDate, 'PP')}</SectionTitle>
                <h3 className="text-xl text-gray-400 mt-2">Please select a service</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                    >

                    </AppointmentOption>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;