import React from 'react';

const PrimaryButton = ({children, type}) => {
    return (
        <button type={type} className="btn btn-primary bg-gradient-to-tr from-primary to-secondary text-white">{children}</button>
    );
};

export default PrimaryButton;