import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentRow = ({ appointment, idx }) => {
    const { _id, name, treatment, slot, price } = appointment;

    return (
        <>
            {/* <!-- row 2 --> */}
            <tr>
                <th>{idx + 1}</th>
                <td>{name}</td>
                <td>{treatment}</td>
                <td>{slot}</td>
                <td>
                    {
                        !!price && !appointment.paid &&
                        <Link to={`/dashboard/payment/${_id}`}>
                            <button className="btn btn-secondary btn-sm text-white">Pay</button>
                        </Link>
                    }
                    {
                        !!price && appointment.paid &&
                        <span className='text-primary'>Paid</span>
                    }
                </td>
            </tr>
        </>
    );
};

export default AppointmentRow;