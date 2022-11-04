import styled from "styled-components";

const Container = styled.div`
h2{
   font-family: 'Gilroy-Semibold';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: -0.3px;
   color: #262728;
   margin: 30px 0px 20px 0px;
}
`
const Wrapper = styled.div`
display: grid;
gap: 20px;
grid-template-columns: auto auto auto auto auto;

`
export { Container, Wrapper }