import React from 'react';
import { useNavigate } from 'react-router-dom';
import doctor from '../../../assets/images/doctor-small.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const MakeAppointment = () => {
    const navigate = useNavigate();

    return (
        <section className='mt-16 lg:mt-60'>
            <div className="hero bg-[url('/src/assets/images/appointment.png')] rounded-lg">
                <div className="hero-content flex-col lg:flex-row px-7 py-16 lg:py-0">
                    <img src={doctor} className="-mt-20 lg:w-1/2 rounded-lg shadow-2xl hidden lg:block" alt='doctor-img' />
                    <div className=''>
                        <SectionTitle className="font-bold mb-5">Appointment</SectionTitle>
                        <h1 className="text-4xl text-white font-semibold">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton 
                        onClick={() => navigate('/appointment')}
                        >Make Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;