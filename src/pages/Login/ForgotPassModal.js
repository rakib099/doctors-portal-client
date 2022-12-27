import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const ForgotPassModal = ({ setOpenModal }) => {
    const { forgotPassword } = useContext(AuthContext);

    const handleResetPassword = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        setOpenModal(false);

        forgotPassword(email)
            .then(() => {
                toast.success("Password reset email sent! Check your inbox.");
            })
            .catch(err => console.error(err));
    }

    // const handleChange = (e) => {
    //     setEmail(e.target.value);
    // }

    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="reset-pass-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                <label htmlFor="reset-pass-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Reset Password</h3>
                    <form onSubmit={handleResetPassword}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" name="email" className="input input-bordered w-full" />
                        </div>
                        <div className="modal-action">
                            <button type="submit" className="btn">Send Reset Email</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ForgotPassModal;