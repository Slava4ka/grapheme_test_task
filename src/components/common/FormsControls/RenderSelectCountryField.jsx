import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { editToStep1FormData } from '../../../redux/reducers/checkout-reducer'

const RenderInputField = ({
	input,
	label,
	meta: { touched, error, warning },
	options,
	className,
	editToStep1FormData,
}) => {
	const hasError = touched && error

	const customStyles = {
		indicatorSeparator: () => ({
			display: 'none',
		}),

		container: (base, state) => ({
			...base,
			height: 40,
		}),

		menu: (base, state) => ({
			...base,
			height: 120,
		}),

		menuList: (base, state) => ({
			...base,
			height: 120,
		}),

		control: (base, state) => ({
			...base,
			height: 40,
			minHeight: 40,
			borderColor: '#DEDCDC',
			borderRadius: 5,
		}),
		placeholder: (base, state) => ({
			...base,
			fontFamily: 'Helvetica Neue, sans-serif',
			fontStyle: 'normal',
			fontWeight: 300,
			fontSize: 16,
			lineHeight: 18,
			color: '#6B6B6B',
			marginLeft: 7,
		}),
		singleValue: (base, state) => ({
			...base,
			fontFamily: 'Helvetica Neue, sans-serif',
			fontStyle: 'normal',
			fontWeight: 300,
			fontSize: 16,
			lineHeight: 18,
			color: 'black',
			marginLeft: 7,
		}),
	}

	const styles = hasError
		? {
				...customStyles,
				control: (base, state) => ({ ...base, borderColor: '#FFADAD' }),
		  }
		: customStyles

	const onChangeToState = (input, value) => {
		editToStep1FormData({ [input.name]: value })
		input.onChange(value)
	}

	return (
		<div className={className}>
			<Select
				{...input}
				styles={styles}
				placeholder={label}
				onChange={value => onChangeToState(input, value)}
				/*onBlur={() => input.onBlur(input.value)}*/
				onInputChange={() => input.onBlur(input.value)}
				options={options}
			/>
		</div>
	)
}

export default connect(null, { editToStep1FormData })(RenderInputField)
