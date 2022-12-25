import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    return (
        <header className='my-6'>
            <div className="hero lg:h-[50rem] lg:bg-[url('/src/assets/images/bg.png')]">
                <div className="hero-content flex-col lg:flex-row-reverse gap-28">
                    <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='dentist-chair' />
                    <div>
                        <div className='bg-white shadow-md rounded-2xl border-t py-2'>
                            <p className='text-center'>Please pick a date</p>
                            <DayPicker
                                mode='single'
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;