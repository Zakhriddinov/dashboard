import React from "react";
import { Product } from "../../context/products";
import DetailsInfo from "../DetailsInfo";
import Stock from "../Stock";
import Title from "../Title";
import { AddToCart, AddToCartWidth, Button, Container } from "./style";

const DetailsComponent = ({ details }) => {
  const {
    state: { cart },
    dispatch
  } = Product();
  console.log(cart);
  return (
    <>
      <Container>
        {cart.length > 0 ? (
          <AddToCartWidth>
            <AddToCart.Bag />
            <p>Перейти в корзину</p>
            <div className="count">
              <p>{cart.length}</p>
            </div>
          </AddToCartWidth>
        ) : (
          <AddToCart>
            <AddToCart.Bag />
          </AddToCart>
        )}

        <Title text={details?.title} />
        <DetailsInfo details={details} />
        <Stock />
        <Button
          type="button"
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: details
            })
          }
        >
          Добавить в корзину
        </Button>
      </Container>
    </>
  );
};

export default DetailsComponent;
