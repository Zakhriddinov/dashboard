import styled from "styled-components"
import { Pagination } from 'antd';
const PaginationContainer = styled(Pagination)`
display: flex;
align-items: center;
justify-content: center;
margin-top:30px ;
position: relative;
.ant-pagination-item-active{
   background-color: #00C48C !important;
   border-radius: 10px;
   width: 36px;
   height: 36px;
   a{
      color: #fff;
      &:hover{
         color: #fff !important;
      }
   }
}
.ant-pagination-options{
   display: none;
}
.ant-pagination-item{
   max-width:36px !important ;
   max-height: 36px !important;
   height: 36px !important;
   background-color: transparent;
   border-radius: 10px;
   border: 0;
   font-family: 'Gilroy-Medium';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 0.01em;
   color: #262728;
   padding-top: 8px;
   a{
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover{
            color: #262728;
      }
   }
}
.ant-pagination-prev .ant-pagination-item-link,.ant-pagination-next .ant-pagination-item-link{
   background-color: transparent;
   border: none;
   font-size: 20px;
}
.ant-pagination-prev{
   position: absolute;
   left: 0;
}
.ant-pagination-next{
   position: absolute;
   right: 0;
}
`

export { PaginationContainer }