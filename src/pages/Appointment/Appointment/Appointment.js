import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    //default: new date() : show date according to one's current date

    return (
        <div className='mx-5'>
            <AppointmentBanner  
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            <AvailableAppointments selectedDate={selectedDate} />
        </div>
    );
};

export default Appointment;