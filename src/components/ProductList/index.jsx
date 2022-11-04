import React, { useState } from "react";
import { Product } from "../../context/products";
import Pagination from "../Pagination";
import ProductItem from "../ProductItem";
import { Container, Wrapper } from "./style";

const ProductList = () => {
  const {
    state: { products },
    dispatch
  } = Product();

  return (
    <>
      <Container>
        <h2>Все товары ({products.length})</h2>

        <Wrapper>
          {products?.map((product, idx) => (
            <ProductItem {...product} key={idx} />
          ))}
        </Wrapper>
        <Pagination />
      </Container>
    </>
  );
};

export default ProductList;
