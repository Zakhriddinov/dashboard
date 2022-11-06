import styled from "styled-components";
import { Medium, Regular } from "../../utils/font";

export const Container = styled.div`
background: var(--backgroundSilver);
border-radius: 6px;
max-width: 1097px;
width: 100%;
margin: 0 auto;
margin-top: 20px;
margin-bottom: 16px;
padding: 20px 28px;
p{
   ${Regular}
   font-size: 12px;
   line-height: 14px;
   color: var(--colorSilver);
   flex: none;
   order: 0;
   flex-grow: 0;
   margin-bottom: 30px;
   span{
      ${Medium}
      font-size: 12px;
      line-height: 14px;
      color: var(--colorGreen);
   }
}
`