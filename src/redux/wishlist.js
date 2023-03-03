const initialState = {
    likedProducts: []
}

const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return {
                likedProducts: [...state.likedProducts, action.product]
            }
        case "CLEAR_WISHLIST":
            return {
                likedProducts: []
            }
        case "REMOVE_TO_WISHLIST":
            let removeProductIndex = state.likedProducts.findIndex(p => p.id === action.id)
            state.likedProducts.splice(removeProductIndex, 1)

            return {
                likedProducts: [...state.likedProducts]
            }
        default:
            return state
    }
}
export default wishlistReducer 