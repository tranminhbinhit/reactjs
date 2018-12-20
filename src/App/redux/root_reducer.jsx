import {combineReducers} from 'redux';
import homeReducer from '../pages/HomePage/reducers'
import loginReducer from '../pages/LoginPage/reducers'

const rootReducer = combineReducers({
    home: homeReducer,
    login: loginReducer
});

export default rootReducer;