import styled from "styled-components";
import { ReactComponent as bag } from '../../assets/icons/checkout.svg'
export const Container = styled.div`
width: 1041px;
height: 980px;
background-color: #fff;
margin: 0 auto;
border-radius: 16px;
padding: 30px;
position: relative;
.line{
   width: 100%;
   height: 1px;
   opacity: 0.4;
   background-color: #BBC2D0;
   margin: 20px 0;
}
p{
   font-family: 'Gilroy-Regular';
   font-style: normal;
   font-weight: 400;
   font-size: 16px !important;
   line-height: 19px;
   color: #BBC2D0;
   margin-bottom: ${({ size }) => size ? "8px" : 0} !important;
}
h4{
   font-family: 'Gilroy-Medium';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: -0.3px;
   color: #262728;
}
`

export const Button = styled.button`
width: 981px;
height: 52px;
border-radius: 30px;
background-color: var(--colorGreen);
cursor: pointer;
border: none;
outline: none;

font-family: 'Gilroy-Semibold';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
text-align: center;
letter-spacing: 0.01em;
color: #FFFFFF;
`

export const AddToCart = styled.div`
position: absolute;
top: -20px;
right: 16px;
width: 60px;
height: 60px;
background: #FF647C;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
cursor: pointer;
`
export const AddToCartWidth = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
position: absolute;
padding: 10px 18px;
top: -20px;
right: 16px;
max-width: 267px;
width: 100%;
height: 60px;
background-color: #FF647C;
border-radius: 40px;
cursor: pointer;
p{
   font-family: 'Gilroy-Semibold';
   font-style: normal;
   font-weight: 600;
   color: #fff !important;
   font-size: 17px;
   line-height: 20px;
}
.count{
   width: 40px;
   height: 40px;
   background-color: #fff;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   p{
      color: #FF647C !important;
      line-height: 21px;
   }
}
`
AddToCart.Bag = styled(bag)``