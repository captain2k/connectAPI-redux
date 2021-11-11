import * as Types from "./../constants/actionTypes";


const initialState = []

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index
        }
    });
    return result
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products
            return [...state]
        case Types.DELETE_PRODUCT:
            var index = findIndex(state, action.id)
            if (index !== -1) {
                state.splice(index, 1)
            }
            return [...state]
        case Types.ADD_PRODUCT:
            state.push(action.product)
            return [...state]
        case Types.UPDATE_PRODUCT:
            var index = findIndex(state, action.product.id) // Update san pham theo ID nen phai tim dung ID cua san pham dc UPDATE
            state[index] = action.product
            return [...state]
        default:
            return [...state]
    }
}

export default productsReducer;