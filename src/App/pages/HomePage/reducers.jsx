import * as actions from '../../constants/action_type'
const initialState = {
    list_products: [],
    product_detail: {}
};

function homeReducer(state = initialState, action) {
    switch (action.type){
        case actions.GET_LIST_PRODUCT:
            return Object.assign({},state, {
                list_products : action.response
            });
            // return { ...state,list_products : action.response}
        case actions.GET_PRODUCT_DETAIL:
            return Object.assign({},state,{
                product_detail : action.response
            });
            //return { ...state,product_detail : action.response}
        default:
            return state;
    }
}

export default homeReducer;