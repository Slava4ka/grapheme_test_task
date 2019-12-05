import React from 'react'
import style from '../../Сheckout/StepsCommonStyle.module.scss'
import { connect } from 'react-redux'
import { editToStep2FormData } from '../../../redux/reducers/checkout-reducer'

const RenderInputField = ({
	input,
	label,
	type,
	meta: { touched, error, warning },
	disabled,
	className,
	editToStep2FormData,
}) => {
	const hasError = touched && error

	const blur = (name, value) => {
		if (value.length > 0 && name !== 'CVV') {
			console.log(value)
			editToStep2FormData({ [name]: value })
		}
	}
	return (
		<div className={className}>
			<input
				{...input}
				className={hasError ? style.input_error : ''}
				placeholder={label}
				type={type}
				value={input.value}
				disabled={disabled}
				onBlur={() => blur(input.name, input.value)}
			/>
		</div>
	)
}

export default connect(null, { editToStep2FormData })(RenderInputField)
