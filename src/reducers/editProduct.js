import * as Types from './../constants/actionTypes';

const initialState = {}

const editProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            return action.product
        default:
            return state
    }
}

export default editProductReducer;