import Request from '../../utils/Request'
import actions from '../../constants/action_type'

function getListProductRes(response) {
    return {
        type: actions.GET_LIST_PRODUCT,
        response: response
    }
}

function getDetailProductRes(response) {
    return {
        type: actions.GET_PRODUCT_DETAIL,
        response: response
    }
}

export function getListProduct(data){
    return (dispatch) => {
        Request.get('http://api.enow.vn/public/list_product',data).then((response) => {
            dispatch(getListProductRes(response));
        });
    }
}

export function getProductDetail(data){
    return (dispatch) => {
        Request.get('http://api.enow.vn/public/product_detail',data).then((response) => {
            dispatch(getDetailProductRes(response));
        });
    }
}