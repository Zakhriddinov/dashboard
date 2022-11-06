import styled from "styled-components";
import { Carousel } from 'antd';

export const Container = styled(Carousel)`
width: 100%;
height: 100%;
padding: 54px 105px 16px 104px;
img{
   margin:  0 auto !important;
   height: 268.87px;
}

.slick-dots-bottom {
   margin-bottom: 0px !important;
}
.slick-dots{
   bottom: -10px !important;
}
.slick-dots li button{
    width: 6px;
    height: 6px;
    margin: 0 6px;
    background-color: var(--colorSilver);
    border-radius: 50%;
}

.slick-active{
    width: 12px !important;
}
.slick-active button{
    width: 6px !important;
    background-color: var(--backgroundPrimary) !important;
}
`