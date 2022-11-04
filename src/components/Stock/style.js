import styled from "styled-components";
import { ReactComponent as trade } from '../../assets/icons/trade.svg'
import { ReactComponent as bundle } from '../../assets/icons/bundle.svg'
import { ReactComponent as discount } from '../../assets/icons/discount.svg'
import { ReactComponent as discount1 } from '../../assets/icons/discount1.svg'
import { Checkbox } from 'antd'
export const Container = styled.div`
margin-bottom: 30px;
h6{
   font-family: 'Gilroy-Regular';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: -0.3px;
   color: #00C48C;
}
`
const background = ({ type }) => {
   switch (type) {
      case "trade": return "#F39DBD"
      case "bundle": return "#A2AEDB"
      case "discount": return "#FFBD95"
      case "discount1": return "#AAD9AC"
   }
}
export const Wrapper = styled.div`

`
export const Card = styled.div`
display: flex;
align-content: center;
justify-content: space-between;
.info{
   display: flex;
   &__text{
      margin-left: 16px;
      h5{
         font-family: 'Gilroy-Regular';
         font-style: normal;
         font-weight: 400;
         font-size: 16px;
         line-height: 19px;
         letter-spacing: -0.3px;
         color: #262728;
      }
   }
}
`
export const Icon = styled.div`
width: 36px;
height: 28px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 6px;
background-color: ${background};
`
Icon.Trade = styled(trade)``
Icon.Bundle = styled(bundle)``
Icon.Discount = styled(discount)``
Icon.Discount1 = styled(discount1)``

export const CheckboxStyle = styled(Checkbox)`
.ant-checkbox-checked .ant-checkbox-inner{
   background: #00C48C;
   border-radius: 6px;
}
.ant-checkbox-inner{
   border-radius: 6px;
   &:hover{
      border: none;
   }
}
`