const initialState =  {
    todosLosProductos: [],
    productosCategoria: [],
    productosSubategoria: []
}

const productosReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'OBTENER_PRODUCTOS':
            return {
                ...state,
                todosLosProductos: action.payload
            }
        case 'PRODUCTOS_CATEGORIA':
            return {
                ...state,
                productosCategoria: action.payload
            }
        case 'PRODUCTOS_SUBCATEGORIA':
            return {
                ...state,
                productosSubategoria: action.payload,
            }
        default:
            return state
    }
}

export default productosReducer