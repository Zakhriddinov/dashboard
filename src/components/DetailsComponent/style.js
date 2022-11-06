import styled from "styled-components";
import { ReactComponent as bag } from '../../assets/icons/checkout.svg'
import { Medium, Regular, SemiBold } from "../../utils/font";
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
   background-color: var(--colorSilver);
   margin: 20px 0;
}
p{
  ${Regular}
   font-size: 16px !important;
   line-height: 19px;
   color: var(--colorSilver);
   margin-bottom: ${({ size }) => size ? "8px" : 0} !important;
}
h4{
   ${Medium}
   font-size: 16px;
   line-height: 19px;
   letter-spacing: -0.3px;
   color: var(--colorBlack);
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

${SemiBold}
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
background: var(--backgroundRed);
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
background-color: var(--backgroundRed);
border-radius: 40px;
cursor: pointer;
p{
  ${SemiBold}
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
      color: var(--backgroundRed) !important;
      line-height: 21px;
   }
}
`
AddToCart.Bag = styled(bag)``