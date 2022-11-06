import styled from "styled-components";
import { SemiBold } from "../../utils/font";

const Container = styled.div`
h2{
   ${SemiBold}
   font-size: 16px;
   line-height: 19px;
   letter-spacing: -0.3px;
   color: var(--colorBlack);
   margin: 30px 0px 20px 0px;
}
`
const Wrapper = styled.div`
display: grid;
gap: 20px;
grid-template-columns: auto auto auto auto auto;

`
export { Container, Wrapper }