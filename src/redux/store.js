import {createStore, applyMiddleware, combineReducers} from 'redux';
import peopleReducer from './people/peopleReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    peopleReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
