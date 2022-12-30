import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';
import ForgotPassModal from './ForgotPassModal';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, providerLogin } = useContext(AuthContext);
    const [error, setError] = useState(""); // firebase error message
    const [openModal, setOpenModal] = useState(true);
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();
    
    if (token) {
        navigate(from, { replace: true });
    }


    const handleLogin = (data, e) => {
        e.target.reset();
        setError("");

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                setLoginUserEmail(data.email);
            
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
            });
    }
    

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(user.email);
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='lg:h-[37rem] flex justify-center items-center  mx-auto'>
            <div className='shadow-[3px_4px_10px_2px_rgba(0,0,0,0.05)] p-7 rounded-2xl w-4/6 md:w-1/2 lg:w-1/4 mt-3 lg:mt-0'>
                <h3 className="text-xl text-center">Login</h3>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email address is required" })} placeholder="" className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be at least 6 characters long" }
                        })} placeholder="" className="input input-bordered w-full mb-1" />
                        <label onClick={() => setOpenModal(true)} htmlFor="reset-pass-modal" className=" label-text-alt cursor-pointer">Forgot Password?</label>
                    </div>
                    {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    {/* firebase error */}
                    {error && <p className='text-red-500'>{error}</p>}
                    <input type="submit" className='btn btn-neutral w-full mb-2' value="Login" />
                </form>
                <p className='text-xs'>New to Doctors Portal? <Link className='text-secondary' to="/signup">Create new account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline uppercase w-full">Continue with Google</button>
            </div>
            {
                !!openModal &&
                <ForgotPassModal
                    setOpenModal={setOpenModal}
                />
            }
        </div>
    );
};

export default Login;