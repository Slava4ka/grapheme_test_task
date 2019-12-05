const SET_VALUE_TO_STEP1_FORM_DATA =
	'grapheme_test_task/checkout-reducer/ADD-VALUE-TO-STEP1-FORM-DATA'

const EDIT_VALUE_TO_STEP1_FORM_DATA =
	'grapheme_test_task/checkout-reducer/EDIT-VALUE-TO-STEP1-FORM-DATA'

const SET_VALUE_TO_STEP2_FORM_DATA =
	'grapheme_test_task/checkout-reducer/ADD-VALUE-TO-STEP2-FORM'

const EDIT_VALUE_TO_STEP2_FORM_DATA =
	'grapheme_test_task/checkout-reducer/EDIT-VALUE-TO-STEP2-FORM-DATA'

const DROP_ALL_STEP_DATA =
	'grapheme_test_task/checkout-reducer/DROP-ALL-STEP-DATA'

const initialState = {
	countries: [
		{ value: 'RUS', label: 'Россия' },
		{ value: 'ESH', label: 'Западная Сахара' },
		{ value: 'BLM', label: 'Сен-Бартельми' },
		{ value: 'SVN', label: 'Словения' },
		{ value: 'USA', label: 'Соединенные Штаты' },
		{ value: 'SLE', label: 'Сьерра-Леоне' },
		{ value: 'PHL', label: 'Филиппины' },
		{ value: 'CHL', label: 'Чили' },
		{ value: 'JPN', label: 'Япония' },
	],
	step1FormData: {},
	step2FormData: {},
}

const editFormData = (currentFormData, newFormData) => {
	return Object.assign(currentFormData, newFormData)
}

const checkoutReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_VALUE_TO_STEP1_FORM_DATA: {
			return { ...state, step1FormData: action.value }
		}
		case EDIT_VALUE_TO_STEP1_FORM_DATA: {
			return {
				...state,
				step1FormData: editFormData(state.step1FormData, action.value),
			}
		}
		case SET_VALUE_TO_STEP2_FORM_DATA: {
			return { ...state, step2FormData: action.value }
		}
		case EDIT_VALUE_TO_STEP2_FORM_DATA: {
			return {
				...state,
				step2FormData: editFormData(state.step2FormData, action.value),
			}
		}
		case DROP_ALL_STEP_DATA: {
			return { ...state, step1FormData: {}, step2FormData: {} }
		}
		default:
			return state
	}
}

export const dropAllStepData = () => ({
	type: DROP_ALL_STEP_DATA,
})

export const setToStep1FormData = value => ({
	type: SET_VALUE_TO_STEP1_FORM_DATA,
	value,
})

export const editToStep1FormData = value => ({
	type: EDIT_VALUE_TO_STEP1_FORM_DATA,
	value,
})

export const editToStep2FormData = value => ({
	type: EDIT_VALUE_TO_STEP2_FORM_DATA,
	value,
})

export const setToStep2FormData = value => ({
	type: SET_VALUE_TO_STEP2_FORM_DATA,
	value,
})

export default checkoutReducer
