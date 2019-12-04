import React from 'react';
import Select from "react-select";

const RenderInputField = ({input, label, meta: {touched, error, warning}, options}) => {

    const customStyles = {
        indicatorSeparator: () => ({
            display: 'none',
        })
    };

    const hasError = touched && error;
    console.log(`error ${label} - ${hasError}`);

    return (
        <div>
            <Select
                {...input}
                styles={customStyles}
                placeholder={label}
                onChange={value => input.onChange(value)}
                onBlur={() => input.onBlur(input.value)}
                options={options}
            />
        </div>
    )
};

export default RenderInputField