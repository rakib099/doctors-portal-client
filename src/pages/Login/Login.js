import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className='lg:h-[37rem] flex justify-center items-center  mx-auto'>
            <div className='shadow-[3px_4px_10px_2px_rgba(0,0,0,0.05)] p-7 rounded-2xl w-4/6 md:w-1/2 lg:w-1/4 mt-3 lg:mt-0'>
                <h3 className="text-xl text-center">Login</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")} placeholder="" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")} placeholder="" className="input input-bordered w-full mb-1" />
                        <span className="label-text-alt">Forgot Password?</span>
                    </div>
                    <input type="submit" className='btn btn-neutral w-full mb-2' value="Login" />
                </form>
                <p className='text-xs'>New to Doctors Portal? <Link className='text-secondary' to="/signup">Create new account</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline uppercase w-full">Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;