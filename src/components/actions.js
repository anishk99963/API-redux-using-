export const fetchProducts = () => async (dispatch) => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    dispatch({ type: 'FETCH_PRODUCTS', payload: data });
  };
  
  export const fetchProductDetails = (id) => async (dispatch) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    dispatch({ type: 'FETCH_PRODUCT_DETAILS', payload: data });
  };
  