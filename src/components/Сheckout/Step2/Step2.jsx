import React from 'react';
import {Field, reduxForm} from "redux-form";
import RenderInputField from "../../common/FormsControls/RenderInputField";
import {validateStep2} from "../../validators/validators";

const Step2 = ({handleSubmit}) => {

    const upper = value => value && value.toUpperCase();

    return <form onSubmit={handleSubmit}>

        <p>Имя на карте</p>
        <Field name="nameOnTheCard" type="text" component={RenderInputField} label="Имя на карте" normalize={upper}/>

        <p>Номер карты</p>
        <Field name="cardNumber" type="text" component={RenderInputField}
               normalize={normalizeCardNumber} label="ХХХХ ХХХХ ХХХХ ХХХХ ХХХХ"/>

        <p>Срок</p>
        <Field name="date" type="text" component={RenderInputField}
               normalize={normalizeDate} label="MM / YY"/>

        <p>CVV</p>
        <Field name="CVV" type="password" component={RenderInputField}
               normalize={normalizeCVV} label=""/>

        <div>
            <button>Оплатить</button>
        </div>
    </form>
};


const normalizeCardNumber = (value, previousValue) => {
    if (!value) {
        return value
    }
    const onlyNums = value.replace(/[^\d]/g, '');

    if (onlyNums.length < 4) return onlyNums;
    if (onlyNums.length === 4) return onlyNums + " ";

    if (onlyNums.length < 8) return onlyNums.slice(0, 4) + " " + onlyNums.slice(4);
    if (onlyNums.length === 8) return onlyNums.slice(0, 4) + " " + onlyNums.slice(4, 8);

    if (onlyNums.length < 12) return onlyNums.slice(0, 4) + " " + onlyNums.slice(4, 8) + " " + onlyNums.slice(8);
    if (onlyNums.length === 12) return onlyNums.slice(0, 4) + " " + onlyNums.slice(4, 8) + " " + onlyNums.slice(8, 12);

    if (onlyNums.length < 16) return onlyNums.slice(0, 4) + " " + onlyNums.slice(4, 8) + " " + onlyNums.slice(8, 12)
        + " " + onlyNums.slice(12);
    if (onlyNums.length === 16) return onlyNums.slice(0, 4) + " " + onlyNums.slice(4, 8) + " " + onlyNums.slice(8, 12)
        + " " + onlyNums.slice(12, 16);

    if (onlyNums.length < 20) return onlyNums.slice(0, 4) + " " + onlyNums.slice(4, 8) + " " + onlyNums.slice(8, 12)
        + " " + onlyNums.slice(12, 16) + " " + onlyNums.slice(16);

    return onlyNums.slice(0, 4) + " " + onlyNums.slice(4, 8) + " " + onlyNums.slice(8, 12)
        + " " + onlyNums.slice(12, 16) + " " + onlyNums.slice(16, 20);

};

const normalizeDate = (value, previousValue) => {
    if (!value) {
        return value
    }
    const onlyNums = value.replace(/[^\d]/g, '');

    if (onlyNums.length === 1) {
        if (Number.parseInt(onlyNums) > 1) {
            return 1
        } else return onlyNums
    }

    if (onlyNums.length === 2) {
        if (Number.parseInt(onlyNums[1]) === 0) {
            return onlyNums.slice(0, 1) + "1 / "
        } else if (Number.parseInt(onlyNums) <= 12) {
            return onlyNums + " / "
        } else {
            return "12 / "
        }
    }

    if (onlyNums.length === 3) {
        return onlyNums.slice(0, 2) + " / " + onlyNums.slice(2)
    }
    return onlyNums.slice(0, 2) + " / " + onlyNums.slice(2, 4)
};

const normalizeCVV = (value, previousValue) => {
    if (!value) {
        return value
    }

    const onlyNums = value.replace(/[^\d]/g, '');

    if (onlyNums.length < 3) {
        return onlyNums
    }

    return onlyNums.slice(0, 3)
};

const ReduxStep2Form = reduxForm({
    form: 'step2',
    validate: validateStep2
})(Step2);

export default ReduxStep2Form