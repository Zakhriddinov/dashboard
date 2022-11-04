import React from "react";
import { Link } from "react-router-dom";
import { Cart, ImageBox, Info } from "./style";

const ProductItem = (product) => {
  const { id, title, price, toPrice, image } = product;
  return (
    <>
      <Cart>
        <ImageBox>
          <img src={image} alt="" />
        </ImageBox>
        <Info>
          <Link to={`/checkout/${id}`}>{title.slice(0,20)}...</Link>
          <h4>{price} сум</h4>
          <div className="toPrice">
            <div className="bgPrice">от {toPrice} сум</div>
            <span>x24</span>
          </div>
        </Info>
      </Cart>
    </>
  );
};

export default ProductItem;
