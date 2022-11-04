import React, { createContext, useContext, useReducer, useState } from "react";
import product from "../../mock/products";
import { reducer } from "./reducer";

const ProductsContext = createContext();
export const Product = () => useContext(ProductsContext);

const ProuctProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: product,
    cart: []
  });
  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProuctProvider;
