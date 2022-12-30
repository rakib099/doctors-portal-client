import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = (id) => {

        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                toast.success('Making admin successful!');
                refetch();
            }
        })
        .catch(err => console.error(err));

    }

    return (
        <div className='bg-[#F1F5F9] px-12 pt-12 pb-16'>
            <div className='flex justify-between mb-5'>
                <h3 className=' text-2xl font-bold'>All Users: {users.length}</h3>
            </div>
            <div className="appointment-table">
                <div className="overflow-x-auto">
                    <table className="table w-1/3 lg:w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, idx) => <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role !== 'admin' && <button
                                        onClick={() => handleMakeAdmin(user._id)}
                                        className='btn btn-xs btn-secondary'>Make Admin</button>}</td>
                                    <td><button className='btn btn-xs btn-danger'>Remove user</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;