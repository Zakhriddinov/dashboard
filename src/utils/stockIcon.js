import styled from "styled-components";
import { ReactComponent as trade } from '../assets/icons/trade.svg'
import { ReactComponent as bundle } from '../assets/icons/bundle.svg'
import { ReactComponent as discount } from '../assets/icons/discount.svg'
import { ReactComponent as discount1 } from '../assets/icons/discount1.svg'

const background = ({ type }) => {
   switch (type) {
      case "trade": return "#F39DBD"
      case "bundle": return "#A2AEDB"
      case "discount": return "#FFBD95"
      case "discount1": return "#AAD9AC"
   }
}

const Icon = styled.div`
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


export { Icon }