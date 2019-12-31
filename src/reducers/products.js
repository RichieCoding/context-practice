const initialState = {
  loading: false,
  products: []
}

const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload
      }
    default:
      return state
  }
}

export default productReducer;

