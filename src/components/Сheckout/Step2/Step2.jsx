import React from 'react';
import {Field, reduxForm} from "redux-form";
import RenderInputField from "../../common/FormsControls/RenderInputField";
import {validateStep2} from "../../../scripts/validators/validators";
import {normalizeCardNumber, normalizeCVV, normalizeDate} from "../../../scripts/normalizes/step2Normalize";

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

const ReduxStep2Form = reduxForm({
    form: 'step2',
    validate: validateStep2
})(Step2);

export default ReduxStep2Form