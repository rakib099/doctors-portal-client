import React from 'react';

const AppointmentRow = ({appointment, idx}) => {
    const {name, treatment, slot} = appointment;

    return (
        <>
            {/* <!-- row 2 --> */}
            <tr>
                <th>{idx+1}</th>
                <td>{name}</td>
                <td>{treatment}</td>
                <td>{slot}</td>
            </tr>
        </>
    );
};

export default AppointmentRow;