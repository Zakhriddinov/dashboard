import React from "react";
import { Link } from "react-router-dom";
import { CaruselProduct, Container, Info, Stock } from "./style";
import { ReactComponent as Next } from "../../assets/icons/next.svg";
import Tabs from "../Tabs";
import Carousel from "../Carousel";
import { Icon } from "../../utils/stockIcon";
const DetailsInfo = ({ details }) => {
  const { price, image, toPrice, type, internet, system, stock } = details;
  return (
    <>
      <Container>
        <CaruselProduct>
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
          <Carousel image={image} />
        </CaruselProduct>
        <Info>
          <p size>Цена телефона</p>
          <h4>{price} сум </h4>
          <div className="line"></div>

          <div className="price">
            <div>
              <p size>Общая цена (с наценкой)</p>
              <h4>7 300 000 сум</h4>
            </div>
            <div className="price_right">
              <div className="bgPrice">{toPrice} сум</div>
              <span>x3</span>
            </div>
          </div>
          <Tabs />
          <div className="line"></div>
          <p>Общие характеристики</p>
          <h6>
            Тип: {type} <br />
            Стандарт: {internet} <br />
            Операционная система: {system}
          </h6>
          <Link to="/">
            <span>Показать все</span>
            <Next />
          </Link>
        </Info>
      </Container>
    </>
  );
};

export default DetailsInfo;
