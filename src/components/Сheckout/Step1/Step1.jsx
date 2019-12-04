import React from 'react';
import {Field, reduxForm} from "redux-form";
import RenderInputField from "../../common/FormsControls/RenderInputField";
import {validateStep1} from "../../../scripts/validators/validators";
import RenderSelectCountryField from "../../common/FormsControls/RenderSelectCountryField";
import {connect} from "react-redux";

const Step1 = ({handleSubmit, countriesList}) => {

    return (
        <form onSubmit={handleSubmit}>

            <p>Получатель</p>
            <Field name="fullName" type="text" component={RenderInputField} label="ФИО"/>

            <p>Адрес</p>
            <Field name="town" type="text" component={RenderInputField} label="Город"/>
            <Field name="address" type="text" component={RenderInputField} label="Адрес"/>

            <Field name="country" type="text" component={RenderSelectCountryField} label="Страна" options={countriesList}/>
            <Field name="index" type="text" component={RenderInputField} label="Индекс"/>

            <div>
                <button>Submit</button>
            </div>
        </form>
    )
};

const ReduxStep1Form = reduxForm({
    form: 'step1',
    validate: validateStep1
})(Step1);

const mapStateToProps = state => ({
    countriesList: state.checkout.countries
});

export default connect(mapStateToProps, {})(ReduxStep1Form)