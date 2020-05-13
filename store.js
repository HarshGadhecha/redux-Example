import { createStore, combineReducers } from 'redux';
import foodReducer from './Reducers/FoodReducers';

const rootReducer=combineReducers({
    foodReducer:foodReducer
});

const configureStore=()=>createStore(rootReducer);


export default configureStore;