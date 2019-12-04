import React from 'react';

const RenderInputField = ({
                              input,
                              label,
                              type,
                              meta: {touched, error, warning},
                              initialValue,
                              disabled
                          }) => {

    const hasError = touched && error;
    console.log(`error ${label} ${type} - ${hasError}`);

    return (
        <div>
            <input {...input} placeholder={label} type={type} value={input.value} disabled={disabled}/>
        </div>
    )
};

export default RenderInputField