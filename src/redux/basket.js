const initialState = {
    basketProducts: []
}

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                basketProducts: [...state.basketProducts, action.product]
            }
        case "REMOVE_FROM_BASKET":
            let removeProductIndex = state.basketProducts.findIndex(p => p.id === action.id)
            state.basketProducts.splice(removeProductIndex, 1)

            return {
                basketProducts: [...state.basketProducts]
            }
        case "CLEAR_BASKET":
            return {
                basketProducts: []
            }
        default:
            return state
    }
}
export default basketReducer 