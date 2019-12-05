import React from 'react'
import style from './Stepper.module.scss'
import { FiChevronRight } from 'react-icons/fi'

const Stepper = ({ stepsArr, stepperState, goToStep }) => {
	let stepperContent = []

	for (let step = 0; step < stepsArr.length; step++) {
		stepperContent.push({ stepper: stepsArr[step], id: step + 1 })
		if (step < stepsArr.length - 1) {
			stepperContent.push('FiChevronRight')
		}
	}

	return (
		<div className={stepperState ? style.stepperHide : style.stepper}>
			{stepperContent.map((step, id) =>
				step !== 'FiChevronRight' ? (
					<span
						key={id}
						className={
							step.stepper.isActive
								? `${style.stepper__step} ${style.stepper__step_active}`
								: `${style.stepper__step}`
						}
						onClick={() => goToStep(step.id)}
					>
						{step.stepper.name}
					</span>
				) : (
					<FiChevronRight key={id} className={style.stepper__chevronRight} />
				)
			)}
		</div>
	)
}

export default Stepper
