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
}

const checkoutReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default checkoutReducer
