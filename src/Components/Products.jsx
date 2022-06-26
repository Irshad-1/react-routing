import React from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  const [productsData, setProductsData] = React.useState([]);

  const getProducts = async () => {
    try {
      let res = await fetch("http://localhost:3001/products");
      let data = await res.json();
      console.log(data);
      setProductsData(data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div>Products</div>
      <table style={{ margin: "auto", padding: "20px" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>More Details</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>Rs-{data.price}</td>
              <td>
                <Link to={`/products/${data.id}`}>More Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
