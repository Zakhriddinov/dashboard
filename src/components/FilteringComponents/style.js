import styled from "styled-components";
import { ReactComponent as search } from '../../assets/icons/search.svg';

const Container = styled.div`
margin-top: 20px;
label{
   width: 100%;
   height: 50px;
   display: flex;
   align-items: center;
   input{
      outline: none;
      border: none;
      border-radius: 26px 0px 0px 26px;
      height: 100%;
      width: 100%;
      // font style
      font-family: 'Gilroy-Regular';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: -0.3px;
      color: #BBC2D0;
      padding-left: 20px;
      &::placeholder{
         color: #BBC2D0;
      }
   }
}
`
const Button = styled.button`
width: 100px;
height: 50px;
outline: none;
border: none;
background: var(--backgroundGreen);
border-radius: 0px 26px 26px 0px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
`

const SGVSearch = styled(search)``
export { Container, Button, SGVSearch }