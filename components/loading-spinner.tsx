import React from "react";
import { Oval } from "react-loader-spinner";

const LoadingSpinner = () => {
    return (
        <Oval
            height={60}
            width={60}
            color="#FF5403"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#FF5403"
            strokeWidth={4}
            strokeWidthSecondary={4}
        />
    );
};

export default LoadingSpinner;
