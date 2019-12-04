import React from 'react';
import Select from "react-select";

const RenderInputField = ({input, label, meta: {touched, error, warning}, options, className}) => {

    const hasError = touched && error;
    console.log(`error ${label} - ${hasError}`);

    const customStyles = {
        indicatorSeparator: () => ({
            display: 'none',
        }),

        container: (base, state) => ({
            ...base,
            height: '40px',
        }),

        control: (base, state) => ({
            ...base,
            height: 40,
            minHeight: 40,
            borderColor: '#DEDCDC',
            borderRadius: 5
        }),
        placeholder: (base, state) => ({
            ...base,
            fontFamily: 'Helvetica Neue, sans-serif',
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: 16,
            lineHeight: 18,
            color: '#6B6B6B',
            marginLeft: 7
        })
    };

        const styles = hasError ?{...customStyles, control: (base, state) => ({...base, borderColor: '#FFADAD'})} : customStyles;

    return (
        <div className={className}>
            <Select
                {...input}
                styles={styles}
                placeholder={label}
                onChange={value => input.onChange(value)}
                onBlur={() => input.onBlur(input.value)}
                options={options}
            />
        </div>
    )
};

export default RenderInputField