import React from "react";
import { Icon } from "../../utils/stockIcon";
import { Card, CheckboxStyle, Container, Wrapper } from "./style";

const Stock = () => {
  return (
    <>
      <Container>
        <h6>Акции</h6>

        <Wrapper>
          <Card>
            <div className="info">
              <Icon type="trade">
                <Icon.Trade />
              </Icon>
              <div className="info__text">
                <h4>Обменяй свой старый айфон и получи скидку на новый</h4>
                <p>- 400 000 сум</p>
              </div>
            </div>
            <CheckboxStyle />
          </Card>
          <div className="line"></div>
          <Card>
            <div className="info">
              <Icon type="bundle">
                <Icon.Bundle />
              </Icon>
              <div className="info__text">
                <h4>Наушники в подарок</h4>
                <p>Apple EarPods</p>
              </div>
            </div>
            <CheckboxStyle />
          </Card>
          <div className="line"></div>
          <Card>
            <div className="info">
              <Icon type="discount">
                <Icon.Discount />
              </Icon>
              <div className="info__text">
                <h4>Скидка 20% на смартфоны</h4>
                <p>- 10 000 сум</p>
              </div>
            </div>
            <CheckboxStyle />
          </Card>
          <div className="line"></div>
          <Card>
            <div className="info">
              <Icon type="discount1">
                <Icon.Discount1 />
              </Icon>
              <div className="info__text">
                <h4>Скидка на айфоны</h4>
                <h5>IMEI 012345678901234</h5>
                <p>- 10 000 сум</p>
              </div>
            </div>
            <CheckboxStyle />
          </Card>
        </Wrapper>
      </Container>
    </>
  );
};

export default Stock;
