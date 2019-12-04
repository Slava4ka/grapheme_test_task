import React from 'react'
import { Field, reduxForm } from 'redux-form'

const upper = value => value && value.toUpperCase()
const lower = value => value && value.toLowerCase()
const lessThan = otherField => (value, previousValue, allValues) =>
    parseFloat(value) < parseFloat(allValues[otherField]) ? value : previousValue
const greaterThan = otherField => (value, previousValue, allValues) =>
    parseFloat(value) > parseFloat(allValues[otherField]) ? value : previousValue

const FieldNormalizingForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <div>
                    <Field
                        name="username"
                        component="input"
                        type="text"
                        placeholder="Username"
                        normalize={lower}
                    />
                </div>
            </div>
            <div>
                <label>Shout</label>
                <div>
                    <Field
                        name="shout"
                        component="input"
                        type="text"
                        placeholder="Shout something!"
                        normalize={upper}
                    />
                </div>
            </div>
            <div>
                <label>Phone</label>
                <div>
                    <Field
                        name="phone"
                        component="input"
                        type="text"
                        placeholder="Phone Number"
                        normalize={normalizePhone}
                    />
                </div>
            </div>
            <div>
                <label>Min</label>
                <div>
                    <Field
                        name="min"
                        component="input"
                        type="number"
                        normalize={lessThan('max')}
                    />
                </div>
            </div>
            <div>
                <label>Max</label>
                <div>
                    <Field
                        name="max"
                        component="input"
                        type="number"
                        normalize={greaterThan('min')}
                    />
                </div>
            </div>
            <div>
                <button type="submit" disabled={submitting}>
                    Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}

const normalizePhone = value => {
    if (!value) {
        return value
    }

    const onlyNums = value.replace(/[^\d]/g, '')
    if (onlyNums.length <= 3) {
        return onlyNums
    }
    if (onlyNums.length <= 7) {
        return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`
    }
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(
        6,
        10
    )}`
}

export default reduxForm({
    form: 'normalizing', // a unique identifier for this form
    initialValues: { min: '1', max: '10' }
})(FieldNormalizingForm)