import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {HashRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from './redux/redux-store';
import Checkout from "./components/Сheckout/Сheckout";
import Header from "./components/Header/Header";
import FieldNormalizingForm from './components/test'

function App() {
    return (
        <div className="App">
            <Header/>
            <Route exact path={'/'} render={() => (<Checkout/>)}/>
            <Route exact path={'/test'} render={() => (<FieldNormalizingForm/>)}/>
        </div>
    );
}

const AppDone = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    )
};

export default AppDone
