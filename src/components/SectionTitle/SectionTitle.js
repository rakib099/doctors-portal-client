import React from 'react';

const SectionTitle = ({children, className}) => {
    return (
        <h3 className={`text-xl text-secondary ${className}`}>{children}</h3>
    );
};

export default SectionTitle;