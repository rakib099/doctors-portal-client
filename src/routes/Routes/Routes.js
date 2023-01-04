import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import ManageDoctors from "../../pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointments from "../../pages/Dashboard/MyAppointments/MyAppointments";
import Payment from "../../pages/Dashboard/Payment/Payment";
import ErrorPage from "../../pages/Shared/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/appointment',
                element: <Appointment />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointments />
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRoute><AddDoctor /></AdminRoute>
            },
            {
                path: '/dashboard/manageDoctors',
                element: <AdminRoute><ManageDoctors /></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <PrivateRoute><Payment /></PrivateRoute>,
                loader: ({params}) => {
                    return fetch(`https://doctors-portal-server-two-pi.vercel.app/bookings/${params.id}`, {
                        headers: {
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                }
            }
        ]
    },
    {
        path: '/testing',
        element: <Dashboard />
    }
]);

export default router;