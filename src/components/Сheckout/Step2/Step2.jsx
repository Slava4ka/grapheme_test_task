import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderInputField from '../../common/FormsControls/RenderInputFieldStep2'
import { validateStep2 } from '../../../scripts/validators/validators'
import {
	normalizeCardNumber,
	normalizeCVV,
	normalizeDate,
} from '../../../scripts/normalizes/step2Normalize'
import style from './Step2.module.scss'
import { connect } from 'react-redux'

const Step2 = ({ handleSubmit, buttonBlocked }) => {
	const upper = value => value && value.toUpperCase()

	return (
		<form onSubmit={handleSubmit}>
			<div className={`${style.heading} ${style.step2__heading}`}>
				<span>Оплата</span>
			</div>

			<div className={`${style.label} ${style.step2__nameOnTheCard_label}`}>
				<span>Имя на карте</span>
			</div>

			<Field
				className={`${style.input} ${style.customInput} ${style.step2__nameOnTheCard_input}`}
				name='nameOnTheCard'
				type='text'
				component={RenderInputField}
				label='Имя на карте'
				normalize={upper}
			/>

			<div className={`${style.label} ${style.step2__nameOnTheCard_label}`}>
				<span>Номер карты</span>
			</div>

			<Field
				className={`${style.input} ${style.customInput} ${style.step2__cardNumber_input}`}
				name='cardNumber'
				type='text'
				component={RenderInputField}
				normalize={normalizeCardNumber}
				label='ХХХХ ХХХХ ХХХХ ХХХХ ХХХХ'
			/>

			<div className={style.step2__dateAndCvvBox}>
				<div className={style.step2__date}>
					<div className={`${style.label}`}>
						<span>Срок</span>
					</div>
					<Field
						className={`${style.input} ${style.customInput} ${style.step2__dateAndCvv_input}`}
						name='date'
						type='text'
						component={RenderInputField}
						normalize={normalizeDate}
						label='MM / YY'
					/>
				</div>

				<div className={style.step2__cvv}>
					<div className={`${style.label}`}>
						<span>CVV</span>
					</div>

					<Field
						className={`${style.input} ${style.customInput} ${style.step2__dateAndCvv_input}`}
						name='CVV'
						type='password'
						component={RenderInputField}
						normalize={normalizeCVV}
						label=''
					/>
				</div>
			</div>

			<div className={style.step2__button}>
				<button disabled={buttonBlocked} className={style.button}>
					Оплатить
				</button>
			</div>
		</form>
	)
}

const ReduxStep2Form = reduxForm({
	form: 'step2',
	validate: validateStep2,
	enableReinitialize: true,
})(Step2)

const mapStateToProps = state => ({
	initialValues: state.persistedStore.step2FormData,
})

export default connect(mapStateToProps, {})(ReduxStep2Form)
