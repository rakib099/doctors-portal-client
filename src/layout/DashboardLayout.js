import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
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
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;