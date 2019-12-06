import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import checkoutReducer from './reducers/checkout-reducer'

import { persistReducer } from 'redux-persist'

import { persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const numberPersistConfig = {
	key: 'presistedStore',
	storage,
}

const rootReducer = combineReducers({
	persistedStore: persistReducer(numberPersistConfig, checkoutReducer),
	form: formReducer,
	//checkout: checkoutReducer,
})

const store = createStore(rootReducer)

window.__store__ = store

export const persistor = persistStore(store)

export default store
