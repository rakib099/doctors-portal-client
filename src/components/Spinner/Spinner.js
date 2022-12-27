import React from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner = ({loading}) => {
    const override = {
        display: "block",
        margin: "0 auto",
        // borderColor: "blue",
      };

    return (
        <ClipLoader
            color={"#00FF00"}
            loading={loading}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};

export default Spinner;