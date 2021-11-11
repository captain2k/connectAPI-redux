import callAPI from "../utils/callAPI";
import * as Types from "./../constants/actionTypes";


export const fetchProductRequest = () => {
    return (dispatch) => {
        return callAPI("products", "GET", null).then(res => {
            dispatch(fetchProduct(res.data))
        })
    }
}

export const fetchProduct = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const deleteProductRequest = (id) => {
    return (dispatch) => callAPI(`products/${id}`, "DELETE", null).then(res => {
        return dispatch(deleteProduct(id))
    })
}

export const deleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const addProductRequest = (product) => {
    return (dispatch) => callAPI("products", "POST", product).then(res => {
        return dispatch(addProduct(res.data))
    })
}

export const addProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const editProductRequest = (id) => {
    return dispatch => {
        return callAPI(`products/${id}`, 'GET', null).then(res => {
            dispatch(editProduct(res.data))
        })
    }
}

export const editProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const updateProductRequest = (product) => {
    return dispatch => {
        return callAPI(`products/${product.id}`, "PUT", product).then(res => {
            dispatch(updateProduct(res.data))
        })
    }
}

export const updateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}