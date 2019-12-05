import React, { useState } from 'react'
import ReduxStep1Form from './Step1/Step1'
import ReduxStep2Form from './Step2/Step2'
import Step3 from './Step3/Step3'
import style from './Checkout.module.scss'
import Stepper from '../common/Stepper/Stepper'
import {
	dropAllStepData,
	setToStep1FormData,
	setToStep2FormData,
} from '../../redux/reducers/checkout-reducer'
import { connect } from 'react-redux'

const Checkout = ({ setToStep1FormData, setToStep2FormData, dropAllStepData }) => {
	const [step, setStep] = useState(1)

	const [stepperHide, setStepperHide] = useState(false)

	const [currentStepper, setCurrentStepper] = useState([
		{ name: 'Доставка', isActive: true },
		{ name: 'Оплата', isActive: false },
	])

	const [blockOfPayButtonState, setBlockOfPayButtonState] = useState(true)

	const stepperController = stepperNumber => {
		switch (stepperNumber) {
			case 1:
				{
					setStep(1)
					setCurrentStepper([
						{ name: 'Доставка', isActive: true },
						{ name: 'Оплата', isActive: false },
					])
				}
				break
			case 2:
				{
					setStep(2)
					setCurrentStepper([
						{ name: 'Доставка', isActive: false },
						{ name: 'Оплата', isActive: true },
					])
				}
				break
			case 3:
				{
					setStepperHide(true)
					setStep(3)
				}
				break
		}
	}

	const onSubmitStep1 = formData => {
		console.log(formData)
		setToStep1FormData({
			fullName: formData.fullName,
			town: formData.town,
			address: formData.address,
			country: formData.country,
			index: formData.index,
		})
		stepperController(2)
		setBlockOfPayButtonState(false)
	}

	const onSubmitStep2 = formData => {
		setToStep2FormData(formData)
		dropAllStepData()
		stepperController(3)
	}

	const getCurrentStep = step => {
		switch (true) {
			case step === 1:
				return (
					<div>
						<ReduxStep1Form onSubmit={onSubmitStep1} />
					</div>
				)
			case step === 2:
				return (
					<div>
						<ReduxStep2Form
							onSubmit={onSubmitStep2}
							buttonBlocked={blockOfPayButtonState}
						/>
					</div>
				)
			case step === 3:
				return (
					<div>
						<Step3 />
					</div>
				)
			default:
				return <></>
		}
	}

	const currentStep = getCurrentStep(step)

	return (
		<div className={style.formContainer}>
			<div className={style.formContainer__body}>
				<Stepper
					stepsArr={currentStepper}
					stepperState={stepperHide}
					goToStep={stepperController}
				/>
				{currentStep}
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	step1Data: state.checkout.step1FormData,
	step2Data: state.checkout.step1FormData,
})

export default connect(mapStateToProps, {
	setToStep1FormData,
	setToStep2FormData,
	dropAllStepData
})(Checkout)
