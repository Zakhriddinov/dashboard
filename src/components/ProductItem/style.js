import styled from "styled-components";

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
   font-family: 'Gilroy-Regular';
   font-style: normal;
   font-weight: 400;
   font-size: 15px;
   line-height: 17px;
   letter-spacing: -0.3px;
   color: var(--colorBlack);
}
h4{
   font-family: 'Gilroy-Medium';
   font-style: normal;
   font-weight: 500;
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
      font-family: 'Gilroy-Semibold';
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: -0.3px;
      color: #FFFFFF;
      text-align: center;
   }
   span{
      font-family: 'Gilroy-Regular';
      font-style: normal;
      font-weight: 400;
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
img{
   max-width: 105px;
   max-height: 142px;
}
`

export { Cart, Info, ImageBox }