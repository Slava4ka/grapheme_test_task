import React, { useState } from 'react'
import ReduxStep1Form from './Step1/Step1'
import ReduxStep2Form from './Step2/Step2'
import Step3 from './Step3/Step3'

import style from './Checkout.module.scss'
import Stepper from '../common/Stepper/Stepper'

const Checkout = () => {
	const [step, setStep] = useState(1)

	const [stepperHide, setStepperHide] = useState(false)

	const [currentStepper, setCurrentStepper] = useState([
		{ name: 'Доставка', isActive: true },
		{ name: 'Оплата', isActive: false },
	])

	const onSubmitStep1 = () => {
		setStep(2)
		setCurrentStepper([
			{ name: 'Доставка', isActive: false },
			{ name: 'Оплата', isActive: true },
		])
	}

	const onSubmitStep2 = () => {
		setStep(3)
		setStepperHide(true)
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
						<ReduxStep2Form onSubmit={onSubmitStep2} />
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
				<Stepper stepsArr={currentStepper} stepperState={stepperHide} />
				{currentStep}
			</div>
		</div>
	)
}
export default Checkout
