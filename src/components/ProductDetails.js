import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductDetails } from './actions';

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);

  useEffect(() => {
    dispatch(fetchProductDetails(match.params.id));
  }, [dispatch, match.params.id]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{productDetails.title}</h2>
      <p>{productDetails.description}</p>
      <img src={productDetails.image} alt={productDetails.title} />
      <p>{productDetails.price}</p>
    </div>
  );
};

export default ProductDetails;
