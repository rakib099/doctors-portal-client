import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Spinner from '../../../components/Spinner/Spinner';
import { toast } from 'react-hot-toast';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.error(error);
            }
        }
    });

    if (isLoading) {
        return <Spinner loading={isLoading} />;
    }

    const closeModal = () => {
        setDeletingDoctor(null);
    }

    // deleting doctor fuction
    const handleDeleteDoctor = (doctor) => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    closeModal();
                    toast.success('Doctor deletion successful');
                    refetch();
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='bg-[#F1F5F9] px-12 pt-12 pb-16'>
            <h3 className=' text-2xl font-bold mb-5'>Manage Doctors: {doctors?.length < 10 ? "0".concat(doctors?.length) : doctors?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, idx) => <tr
                                key={doctor._id}>
                                <th>
                                    {
                                        idx + 1 < 10 ?
                                            `0${idx + 1}` :
                                            idx + 1
                                    }
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-10 h-10 rounded-full">
                                            <img src={doctor.image} alt='doctor-img' />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td><label
                                    onClick={() => setDeletingDoctor(doctor)}
                                    htmlFor="confirm-modal"
                                    className='btn btn-error btn-sm text-white'>Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                !!deletingDoctor && <ConfirmModal 
                    title={`Are you sure you want to remove ${deletingDoctor.name}?`}
                    successAction={handleDeleteDoctor}
                    modalData={deletingDoctor}
                />
            }
        </div>
    );
};

export default ManageDoctors;