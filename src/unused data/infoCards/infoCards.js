import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg';

// I a made these cards at first
const infoCards = () => {
    return (
        <React.Fragment>
            <div className='flex flex-col lg:flex-row gap-6 text-white'>
                <div className='bg-gradient-to-tr from-primary to-secondary w-[28.125rem] h-[11.875rem] rounded-xl flex items-center p-7 gap-5'>
                    <img className='w-[86px] h-[86px]' src={clock} alt="" />
                    <div>
                        <h4 className='text-xl font-bold mb-3'>Opening Hours</h4>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>
                <div className='bg-neutral w-[28.125rem] h-[11.875rem] rounded-xl flex items-center p-7 gap-5'>
                    <img className='w-[86px] h-[86px]' src={marker} alt="" />
                    <div>
                        <h4 className='text-xl font-bold mb-3'>Visit our location</h4>
                        <p>Brooklyn, NY 10036, United States</p>
                    </div>
                </div>
                <div className='bg-gradient-to-tr from-primary to-secondary w-[28.125rem] h-[11.875rem] rounded-xl flex items-center p-7 gap-5'>
                    <img className='w-[86px] h-[86px]' src={phone} alt="" />
                    <div>
                        <h4 className='text-xl font-bold mb-3'>Contact us now</h4>
                        <p>+000 123 456789</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

