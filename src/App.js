import React from 'react'
import './App.scss'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/redux-store'
import Checkout from './components/Сheckout/Сheckout'
import Header from './components/Header/Header'

import { PersistGate } from 'redux-persist/integration/react'

function App() {
	return (
		<div className='App'>
			<Header />
			<main className='Container'>
				<Route exact path={'/'} render={() => <Checkout />} />
			</main>
		</div>
	)
}

const AppDone = () => {
	return (
		<HashRouter>
			<Provider store={store}>
				<PersistGate loading={<div>Loading</div>} persistor={persistor}>
					<App />
				</PersistGate>
			</Provider>
		</HashRouter>
	)
}

export default AppDone
