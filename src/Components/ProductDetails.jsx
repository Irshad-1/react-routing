import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { productId } = useParams();
  const [ProductDetails, setProductsDetails] = React.useState({});
  const [productExist, setProductExist] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        let res = await fetch(`http://localhost:3001/products/${productId}`);
        if (res.ok) {
          let data = await res.json();
          setProductsDetails(data);
          setProductExist(true);
        }
      } catch (error) {
        console.log("error");
      }
    })();
  }, [productId]);
  return productExist ? (
    <>
      <div>ProductDetails</div>
      <h4>{ProductDetails.name}</h4>
      <h4>{ProductDetails.price}</h4>
    </>
  ) : (
    <h1>Product Does Not Exist</h1>
  );
};
