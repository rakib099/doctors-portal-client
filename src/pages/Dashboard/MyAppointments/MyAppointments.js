import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import AppointmentRow from '../AppointmentRow/AppointmentRow';

const MyAppointments = () => {
    const { user } = useContext(AuthContext);

    const { data: appointments = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='bg-[#F1F5F9] px-12 pt-12 pb-16'>
            <div className='flex justify-between mb-5'>
                <h3 className=' text-2xl'>My Appointments</h3>
            </div>
            <div className="appointment-table">
                <div className="overflow-x-auto">
                    <table className="table w-1/3 lg:w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Service</th>
                                <th>Time</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointments.map((appointment, idx) => <AppointmentRow
                                    key={appointment._id}
                                    appointment={appointment}
                                    idx={idx}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAppointments;