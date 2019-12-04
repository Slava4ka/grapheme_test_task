import React from 'react';
import {Field, reduxForm} from "redux-form";
import RenderInputField from "../../common/FormsControls/RenderInputField";
import {validateStep2} from "../../../scripts/validators/validators";
import {normalizeCardNumber, normalizeCVV, normalizeDate} from "../../../scripts/normalizes/step2Normalize";
import style from './Step2.module.scss'

const Step2 = ({handleSubmit}) => {

    const upper = value => value && value.toUpperCase();

    return <form onSubmit={handleSubmit}>


        <div className={`${style.heading} ${style.step2__heading}`}>
            <span>Оплата</span>
        </div>

        <div className={`${style.label} ${style.step2__nameOnTheCard_label}`}>
            <span>Имя на карте</span>
        </div>

        <Field className={`${style.input} ${style.customInput} ${style.step2__nameOnTheCard_input}`}
               name="nameOnTheCard" type="text" component={RenderInputField} label="Имя на карте" normalize={upper}/>


        <div className={`${style.label} ${style.step2__nameOnTheCard_label}`}>
            <span>Номер карты</span>
        </div>

        <Field className={`${style.input} ${style.customInput} ${style.step2__cardNumber_input}`}
               name="cardNumber" type="text" component={RenderInputField}
               normalize={normalizeCardNumber} label="ХХХХ ХХХХ ХХХХ ХХХХ ХХХХ"/>

        <div className={style.step2__dateAndCvvBox}>

            <div className={style.step2__date}>
                <div className={`${style.label}`}>
                    <span>Срок</span>
                </div>
                <Field className={`${style.input} ${style.customInput} ${style.step2__dateAndCvv_input}`}
                       name="date" type="text" component={RenderInputField}
                       normalize={normalizeDate} label="MM / YY"/>
            </div>

            <div className={style.step2__cvv}>
                <div className={`${style.label}`}>
                    <span>CVV</span>
                </div>

                <Field className={`${style.input} ${style.customInput} ${style.step2__dateAndCvv_input}`}
                       name="CVV" type="password" component={RenderInputField}
                       normalize={normalizeCVV} label=""/>
            </div>
        </div>

        <div className={style.step2__button}>
            <button className={style.button}>Оплатить</button>
        </div>
    </form>
};

const ReduxStep2Form = reduxForm({
    form: 'step2',
    validate: validateStep2
})(Step2);

export default ReduxStep2Form