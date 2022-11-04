import React from "react";
import { Container } from "./style";

const Carousel = ({ image }) => {
  return (
    <Container effect="fade">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </Container>
  );
};

export default Carousel;
