import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const { data: specialtyOptions = [] } = useQuery({
        queryKey: ['doctorSpecialties'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctorSpecialties');
            const data = await res.json();
            return data;
        }
    });

    const handleAddDoctor = (data, e) => {
        const { name, email, specialty } = data;
        const image = data.image[0];

        // uploading image to a imgHosting server
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)

                    const doctor = {
                        name,
                        email,
                        specialty,
                        image: imgData.data.url
                    }
                    saveDoctorToDB(doctor); // saving doctor to DB
                }
            })
            .catch(err => console.error(err));


        const saveDoctorToDB = doctor => {
            fetch('http://localhost:5000/doctors', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(doctor)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        toast.success("Doctor Successfully Added!");
                        e.target.reset();
                        navigate('/dashboard/manageDoctors')
                    }
                })
                .catch(err => console.error(err));
        }

    }

    return (
        <div className='bg-[#F1F5F9] px-12 pt-12 pb-16'>
            <h3 className=' text-2xl font-bold mb-5'>Add a New Doctor</h3>
            <div className='bg-white p-7 rounded-lg w-96 mt-3 lg:mt-0'>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "Please fill up this field" })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email address is required" })} placeholder="" className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select className="select select-bordered w-full" defaultValue="Teeth Cleaning" {...register("specialty", { required: true })}>
                            {
                                specialtyOptions.map(opt => <option
                                    key={opt._id}
                                    value={opt.name}
                                >{opt.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Upload Photo</span>
                        </label>
                        <input type="file" {...register("image")} className="input w-full" />
                        {errors.img && <p className='text-red-600' role="alert">{errors.img?.message}</p>}
                    </div>
                    <input type="submit" className='btn btn-neutral w-full mb-2' value="Add" />
                </form>
            </div>
        </div>
    );
};


/**
 * Three places to store images
 * 1. Third party image hosting servers
 * 2. File system of your server (ex: digitalocean, aws)
 * 3. mongodb (database)

*/


export default AddDoctor;