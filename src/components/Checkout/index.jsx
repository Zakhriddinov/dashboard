import React from "react";
import Search from "../FilteringComponents/Search";
import ProductList from "../ProductList";
import Title from "../Title";
import { Container } from "./style";

const Checkout = () => {
  return (
    <Container>
      <p>
        Заявки {">"} <span>Оформить заказ</span>
      </p>
      <Title text="Оформить заказ" />
      <Search />
      <ProductList />
    </Container>
  );
};

export default Checkout;
