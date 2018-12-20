import actions from '../../constants/action_type'
// import { persist } from '../../redux/store'

export function getLoginInfo() {
    return {
        type: actions.GET_LOGIN_INFO
    }
}

export function loginInfo(response) {
    return {
        type: actions.LOGIN_INFO,
        response: response
    }
}

export const logoutInfo =()=>{
    return (dispatch) =>{
        // persist.purge();
        dispatch({
            type : actions.LOGOUT,
            response: {}
        })
    }
}