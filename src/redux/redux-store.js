import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    form: formReducer
});

const store = createStore(rootReducer);

window.__store__ = store;

export default store;