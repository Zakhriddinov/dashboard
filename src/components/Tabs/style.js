import styled from "styled-components";

export const TabContainer = styled.div`
margin-top: 20px;
`
export const Tab = styled.div`
border: 1px solid #00C48C;
border-radius: 6px;
width: 100%;
height: 40px;
display: flex;
.active{
   background-color: #00C48C;
   color:  white !important;
}
`

export const Button = styled.button`
height: 100%;
width: 120px;
cursor: pointer;
outline: none;
border: 1px solid #00C48C;
border-radius: 6px 0px 0px 6px;
background-color: #fff;
color: #00C48C !important;
&:nth-child(2){
   border-radius: 0;
}
&:nth-child(3){
   border-radius: 0;
}
&:nth-child(4){
   border-radius: 0 6px 6px 0px;
}

font-family: 'Gilroy-Regular';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 17px;
letter-spacing: -0.3px;
color: #FFFFFF;
`