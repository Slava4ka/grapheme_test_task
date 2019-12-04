import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import checkoutReducer from "./reducers/checkout-reducer";

const rootReducer = combineReducers({
    checkout: checkoutReducer,
    form: formReducer
});

const store = createStore(rootReducer);

window.__store__ = store;

export default store;