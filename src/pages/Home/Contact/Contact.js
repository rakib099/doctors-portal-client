import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Contact = () => {
    const style = {
        background: `url(${appointment})`
    }

    return (
        <section style={style} className="mt-32 lg:mt-36 py-16 rounded-lg">
            <div className='mb-4 lg:mb-10 text-center px-6'>
                <SectionTitle className="font-bold mb-2">Contact Us</SectionTitle>
                <h3 className="text-4xl text-white font-normal">Stay connected with us</h3>
            </div>
            <form>
                <div className="flex flex-col gap-5 items-center px-8 lg:px-0">
                    <input type="email" placeholder="Email Address" className="input w-full max-w-sm" />
                    <input type="text" placeholder="Subject" className="input w-full max-w-sm" />
                    <textarea className="textarea w-full max-w-sm mb-2" placeholder="Your message"></textarea>
                    <PrimaryButton type="submit">Submit</PrimaryButton>
                </div>
            </form>
        </section>
    );
};

export default Contact;