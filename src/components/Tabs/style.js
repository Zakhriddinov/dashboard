import styled from "styled-components";
import { Regular } from "../../utils/font";

export const TabContainer = styled.div`
margin-top: 20px;
`
export const Tab = styled.div`
border: 1px solid var(--backgroundGreen);
border-radius: 6px;
width: 100%;
height: 40px;
display: flex;
.active{
   background-color: var(--backgroundGreen);
   color:  white !important;
}
`

export const Button = styled.button`
height: 100%;
width: 120px;
cursor: pointer;
outline: none;
border: 1px solid var(--backgroundGreen);
border-radius: 6px 0px 0px 6px;
background-color: #fff;
color: var(--backgroundGreen) !important;
&:nth-child(2){
   border-radius: 0;
}
&:nth-child(3){
   border-radius: 0;
}
&:nth-child(4){
   border-radius: 0 6px 6px 0px;
}

${Regular}
font-size: 15px;
line-height: 17px;
letter-spacing: -0.3px;
color: #FFFFFF;
`