import styled from "styled-components";
import { Checkbox } from 'antd'
import { Regular } from "../../utils/font";

export const Container = styled.div`
margin-bottom: 30px;
h6{
   ${Regular}
   font-size: 16px;
   line-height: 19px;
   letter-spacing: -0.3px;
   color: var(--colorGreen);
}
`
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
        ${Regular}
         font-size: 16px;
         line-height: 19px;
         letter-spacing: -0.3px;
         color: var(--colorBlack);
      }
   }
}
`

export const CheckboxStyle = styled(Checkbox)`
.ant-checkbox-checked .ant-checkbox-inner{
   background: var(--colorGreen);
   border-radius: 6px;
}
.ant-checkbox-inner{
   border-radius: 6px;
   &:hover{
      border: none;
   }
}
`