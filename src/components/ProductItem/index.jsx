import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../utils/stockIcon";
import { Cart, ImageBox, Info, Stock } from "./style";

const ProductItem = (product) => {
  const { id, title, price, toPrice, image, stock } = product;
  return (
    <>
      <Cart>
        <ImageBox>
          <Stock>
            {stock?.trade ? (
              <Icon type="trade" width>
                <Icon.Trade />
              </Icon>
            ) : null}
            {stock?.bundle && (
              <Icon type="bundle" width>
                <Icon.Bundle />
              </Icon>
            )}
            {stock?.dicount && (
              <Icon type="discount" width>
                <Icon.Discount />
              </Icon>
            )}
            {stock?.discount1 && (
              <Icon type="discount1" width>
                <Icon.Discount1 />
              </Icon>
            )}
          </Stock>
          <img src={image} alt="" />
        </ImageBox>
        <Info>
          <Link to={`/checkout/${id}`}>{title.slice(0, 20)}...</Link>
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
