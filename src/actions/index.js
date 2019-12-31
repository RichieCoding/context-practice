export const increment = num => {
  return { 
    type: "INCREMENT",
    payload: num
  };
};

export const decrement = () => {
  return { type: "DECREMENT" };
};

export const fetchProducts = () => {
  return {
    type: 'FETCH_PRODUCTS_REQUEST'
  }
}

export const fetchProductsSuccess = products => {
  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: products
  }
}
