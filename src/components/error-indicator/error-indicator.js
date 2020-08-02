import React from "react";
import './error-indicator.css';

const ErrorIndicator = () => {
    return(
        <div className='error-indicator'>
            <p className='hey'>
                Heeeeey!
            </p>
            <p>
                I gonna tell you that something is wrong
            </p>
            <p>
                (don't worry, it will be fine soon)
            </p>
        </div>
    )
}
export default ErrorIndicator;