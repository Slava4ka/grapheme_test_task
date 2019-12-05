import React from 'react'
import style from '../../Сheckout/StepsCommonStyle.module.scss'

const RenderInputField = ({
	input,
	label,
	type,
	meta: { touched, error, warning },
	initialValue,
	disabled,
	className,
}) => {
	const hasError = touched && error
	console.log(`error ${label} ${type} - ${hasError}`)

	return (
		<div className={className}>
			<input
				{...input}
				className={hasError ? style.input_error : ''}
				placeholder={label}
				type={type}
				value={input.value}
				disabled={disabled}
			/>
		</div>
	)
}

export default RenderInputField
