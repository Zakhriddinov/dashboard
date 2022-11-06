import styled from "styled-components";
import { Medium, Regular, SemiBold } from "../../utils/font";

const Cart = styled.div`
width: 192px;
height: 265px;
background: #FFFFFF;
box-shadow: 0px 10px 30px rgba(138, 149, 158, 0.1);
border-radius: 10px;
padding: 12px;
`
const Info = styled.div`
margin-top: 6px;
a{
   ${Regular}
   font-size: 15px;
   line-height: 17px;
   letter-spacing: -0.3px;
   color: var(--colorBlack);
}
h4{
   ${Medium}
   font-size: 15px;
   line-height: 18px;
   letter-spacing: -0.3px;
   color: var(--colorBlack);
   margin: 6px 0px;
}
.toPrice{
   display: flex;
   align-items: center;
   .bgPrice{
      background: #FF647C;
      border-radius: 2px;
      width: 109px;
      height: 20px;
      
      // font style
      ${SemiBold}
      font-size: 13px;
      line-height: 16px;
      letter-spacing: -0.3px;
      color: #FFFFFF;
      text-align: center;
   }
   span{
     ${Regular}
      font-size: 11px;
      line-height: 13px;
      letter-spacing: -0.3px;
      color: var(--colorSilver);
      margin-left: 6px;
   }
}
`
const ImageBox = styled.div`
width: 168px;
height: 168px;
background: #F7F7F7;
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
img{
   max-width: 105px;
   max-height: 142px;
}
`
const Stock = styled.div`
position: absolute;
top: 12px;
left: 6px;
display: grid;
grid-template-rows: auto auto auto auto;
grid-gap: 6px;
`
export { Cart, Info, ImageBox, Stock }