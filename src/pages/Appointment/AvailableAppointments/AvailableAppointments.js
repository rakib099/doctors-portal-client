import React, { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../components/Spinner/Spinner';

const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const { data:appointmentOptions, refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Spinner loading={isLoading} />
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => {
    //             setAppointmentOptions(data);
    //         })
    //         .catch(err => console.error(err));
    // }, []);

    return (
        <section className='mt-8 mb-40'>
            <div className="text-center mb-12">
                <SectionTitle className="font-semibold">Available Services on {date}</SectionTitle>
                <h3 className="text-xl text-gray-400 mt-2">Please select a service</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {
                !!treatment &&
                <BookingModal
                    treatment={treatment}
                    refetch={refetch}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                />
            }
        </section>
    );
};

export default AvailableAppointments;