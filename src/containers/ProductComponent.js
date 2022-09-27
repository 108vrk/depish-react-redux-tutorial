import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  let renderList = Array.isArray(products)
    ? products.map((product) => {
        const { id, title, images, price, category } = product;
        return (
          <div className="four wide column" key={id} style={{ marginTop: 20 }}>
            <Link
              to={{ pathname: `/product/${id}`, state: { product: product } }}
            >
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <img src={images[0]} alt={title} style={{ height: 150 }} />
                  </div>
                  <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">$ {price}</div>
                    <div className="meta">{category}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })
    : [];
  return <>{renderList}</>;
};

export default ProductComponent;
