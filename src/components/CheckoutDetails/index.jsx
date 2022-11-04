import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../context/products";
import DetailsComponent from "../DetailsComponent";
import { Container } from "./style";

const CheckoutDetails = () => {
  const { id } = useParams();
  const {
    state: { products }
  } = Product();
  const [details, setDetails] = useState({});
  useEffect(() => {
    products?.filter((item) => {
      if (item.id == id) {
        setDetails(item);
      }
    });
  }, [id]);

  return (
    <Container>
      <p>
        Заявки {">"} Оформить заказ {">"} <span>{details.title}</span>
      </p>

      <DetailsComponent details={details} />
    </Container>
  );
};

export default CheckoutDetails;
