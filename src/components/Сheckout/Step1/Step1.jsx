import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderInputField from '../../common/FormsControls/RenderInputFieldStep1'
import { validateStep1 } from '../../../scripts/validators/validators'
import RenderSelectCountryField from '../../common/FormsControls/RenderSelectCountryField'
import { connect } from 'react-redux'

import style from './Step1.module.scss'

const Step1 = ({ handleSubmit, countriesList }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className={`${style.heading} ${style.step1__heading}`}>
				<span>Информация для доставки</span>
			</div>

			<div className={`${style.label} ${style.step1__recipient_label}`}>
				<span>Получатель</span>
			</div>

			<Field
				className={`${style.input} ${style.customInput} ${style.step1__FIO_input}`}
				name='fullName'
				type='text'
				component={RenderInputField}
				label='ФИО'
			/>

			<div className={`${style.label} ${style.step1__address_label}`}>
				<span>Адрес</span>
			</div>
			<Field
				className={`${style.input} ${style.customInput} ${style.step1__city_input}`}
				name='town'
				type='text'
				component={RenderInputField}
				label='Город'
			/>
			<Field
				className={`${style.input} ${style.customInput} ${style.step1__address_input}`}
				name='address'
				type='text'
				component={RenderInputField}
				label='Адрес'
			/>

			<div className={style.step1__countryAndZipBox}>
				<Field
					className={style.step1__country}
					name='country'
					type='text'
					component={RenderSelectCountryField}
					label='Страна'
					options={countriesList}
				/>

				<Field
					className={`${style.input} ${style.customInput} ${style.step1__zip}`}
					name='index'
					type='text'
					component={RenderInputField}
					label='Индекс'
				/>
			</div>

			<div className={style.step1__button}>
				<button className={style.button}>Продолжить</button>
			</div>
		</form>
	)
}

const ReduxStep1Form = reduxForm({
	form: 'step1',
	validate: validateStep1,
	enableReinitialize: true,
})(Step1)

const mapStateToProps = state => ({
	initialValues: state.checkout.step1FormData,
	countriesList: state.checkout.countries,
})

export default connect(mapStateToProps, {})(ReduxStep1Form)
