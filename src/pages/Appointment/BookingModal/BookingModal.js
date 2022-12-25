import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    // treatment is just another name of appointment option
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const selectTimeSlot = <select name='slot' className="select select-bordered w-full mb-5">
        {/* checking if slots are available or not */}
        {
            !slots.length ?
                <option value="No slots available">No slots available</option>
                :
                slots.map((slot, idx) => <option
                    key={idx}
                    value={slot}
                >{slot}</option>)
        }
    </select>

    const handleBooking = (e) => {
        e.preventDefault();

        const form = e.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            appointmentDate: date,
            treatment: treatment.name,
            name,
            slot,
            phone,
            email
        }

        // Todo: send data to the server
        // once data is saved then close the modal
        // and display success toast
        console.log(booking)
        setTreatment(null); // closes the modal
    }

    return (
        <>
            < input type="checkbox" id="booking-modal" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                    <h3 className="font-bold text-lg mb-11">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" placeholder="Selected date" defaultValue={date} className="input input-bordered w-full mb-5 " disabled />
                        {/* Select a slot */}
                        {selectTimeSlot}
                        <input type="text" placeholder="Full Name" name='name' className="input input-bordered w-full mb-5" required />
                        <input type="number" placeholder="Phone Number" name='phone' className="input input-bordered w-full mb-5" />
                        <input type="email" placeholder="Email" name='email' className="input input-bordered w-full mb-5" required />
                        <input type="submit" value="Submit" className='btn w-full' />
                    </form>
                </div>
            </div>
        </>

    );
};

export default BookingModal;