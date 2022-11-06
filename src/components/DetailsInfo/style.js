import styled from "styled-components";
import { Regular, SemiBold } from "../../utils/font";

const Container = styled.div`
display: flex;
margin: 30px 0px;
`
const CaruselProduct = styled.div`
width: 480px;
height: 380px;
border-radius: 16px;
background-color: var(--backgroundSilver);
position: relative;
`
const Info = styled.div`
max-width: 481px;
width: 100%;
margin-left: 20px;

.price{
   display: flex;
   align-items: center;
   justify-content: space-between;
   .price_right{
      display: flex;
      align-items: center;
      span{
        ${Regular}
         font-size: 14px;
         line-height: 16px;
         letter-spacing: -0.3px;
         color: var(--colorSilver);
         margin-left: 8px;
      }
   }
   .bgPrice{
      ${SemiBold}
      font-size: 16px;
      line-height: 19px;
      text-align: right;
      letter-spacing: -0.3px;
      color: #FFFFFF;
      text-align: center;
      width: 108px;
      height: 23px;
      background: var(--backgroundRed);
      border-radius: 2px;
   }
}

h6{
   font-family: 'Gilroy-Regular';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: var(--colorBlack);
   margin: 8px 0px 21px 0px;
}

a{
   display: flex;
   align-items: center;
   justify-content: space-between;
   span{ 
      font-family: 'Gilroy-Semibold';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.01em;
      color: var(--colorGreen);
   }
}
`
const Stock = styled.div`
position: absolute;
display: grid;
grid-template-rows: auto auto auto auto;
flex-direction: column;
z-index: 1;
grid-gap: 6px;
margin: 20px;
`
export { Container, CaruselProduct, Info, Stock }