import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import ConfirmModal from '../pages/Dashboard/ConfirmModal/ConfirmModal';
import Navbar from '../pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    return (
        <>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="side-bar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="side-bar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to="/dashboard/users">All Users</Link></li>
                                <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                                <li><Link to="/dashboard/manageDoctors">Manage Doctors</Link></li>
                            </>
                        }
                    </ul>
                </div>
                <ConfirmModal />
            </div>
        </>
    );
};

export default DashboardLayout;