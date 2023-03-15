const initialState = {
    products: [],
    productDetails: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS':
        return { ...state, products: action.payload };
      case 'FETCH_PRODUCT_DETAILS':
        return { ...state, productDetails: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  