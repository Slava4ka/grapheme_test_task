import React from 'react'
import './App.scss'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/redux-store'
import Checkout from './components/Сheckout/Сheckout'
import Header from './components/Header/Header'

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
				<App />
			</Provider>
		</HashRouter>
	)
}

export default AppDone
