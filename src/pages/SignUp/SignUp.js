import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUserProfile, providerLogin } = useContext(AuthContext);
    const [error, setError] = useState(""); // firebase error message
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    
    if (token) {
        navigate('/');
    }

    const googleProvider = new GoogleAuthProvider();

    // User sign up function
    const handleSignUp = (data, e) => {
        const { email, password, name } = data;
        setError("");

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const profile = {
                    displayName: name
                }

                updateUserProfile(profile)
                    .then(() => {
                        console.log("profile updated")
                        saveUser(name, email);  // to save the user to DB
                    })
                    .catch(err => console.error(err));

                toast.success("Sign up successful!");
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
            });

        e.target.reset();   // resets the form
    }


    // Saving user to DB function
    const saveUser = (name, email) => {
        const user = { name, email };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);    // sets the email
            })
            .catch(err => console.error(err));
    }


    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate("/");
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='lg:h-[37rem] flex justify-center items-center  mx-auto'>
            <div className='shadow-[3px_4px_10px_2px_rgba(0,0,0,0.05)] p-7 rounded-2xl w-4/6 md:w-1/2 lg:w-1/4 mt-3 lg:mt-0'>
                <h3 className="text-xl text-center">Sign Up</h3>
                <form onSubmit={handleSubmit(handleSignUp)}>
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
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" },
                            pattern: {
                                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                message: "Password must have at least 1 uppercase, 1 special character and 1 number"
                            }
                        })} className="input input-bordered w-full mb-1" />
                        {/* validation error */}
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        {/* firebase error */}
                        {error && <p className='text-red-500'>{error}</p>}
                    </div>
                    <input type="submit" className='btn btn-neutral w-full mb-2' value="Sign Up" />
                </form>
                <p className='text-xs'>Already have account? <Link className='text-secondary' to="/login">Login here</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline uppercase w-full">Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;