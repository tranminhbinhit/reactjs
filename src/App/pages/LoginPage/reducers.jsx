import * as actions from '../../constants/action_type'
import { getCookie } from '../../utils/utils'
import constants from "../../constants/constants";

//var info = getCookie(constants.COOKIE_LOGIN);
const initialState = {
    login_info: {
        username : '',
        password : ''
    }//info !== '' ? JSON.parse(info) : {}
}

function loginReducer(state = initialState, action) {
    switch (action.type){
        case actions.GET_LOGIN_INFO:
            return Object.assign({},state,{})
        case actions.LOGIN_INFO:
            return Object.assign({},state, {
                login_info : action.response
            });
        case actions.LOGOUT:
            return Object.assign({},state, {
                login_info : {}
            });
        default:
            return state;
    }
}

export default loginReducer;