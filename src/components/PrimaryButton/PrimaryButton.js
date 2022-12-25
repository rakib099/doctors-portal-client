import React from 'react';

const PrimaryButton = ({children, type, onClick}) => {
    return (
        <button onClick={onClick} type={type} className="btn btn-primary bg-gradient-to-tr from-primary to-secondary text-white">{children}</button>
    );
};

export default PrimaryButton;