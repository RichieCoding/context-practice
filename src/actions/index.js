export const increment = num => {
  return { 
    type: "INCREMENT",
    payload: num
  };
};

export const decrement = () => {
  return { type: "DECREMENT" };
};

export const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products
  }
}
