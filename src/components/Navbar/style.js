import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { ReactComponent as notification } from '../../assets/icons/notification.svg'
import { ReactComponent as account } from '../../assets/icons/personal-information.svg'
import { SemiBold } from "../../utils/font";

// duplicate style
const common = css`
display: flex;
align-items: center;
`
const font = css`
font-weight: 400;
font-size: 16px;
line-height: 19px;
`
// !dublicate style 
export const Nav = styled.nav``

export const NavContainer = styled.div`
margin: 0 auto;
${common}
justify-content: space-between;

`
// navbar logo style
export const NavLogo = styled(Link)`
font-family: 'Inter-Regular';
font-style: normal;
${font}
color: #000000;
margin-left: 64px;
`
// navbar right style
export const Information = styled.div`
${common}
`

// notification style
export const Notification = styled(Link)`
position: relative;
.count{
   position: absolute;
   width: 16px;
   height: 16px;
   border-radius: 50%;
   background-color: var(--backgroundGreen);
   ${common}
   justify-content: center;
   top: -8px;
   right: -5px;
   
   // font style
   ${SemiBold}
   font-size: 10px; 
   line-height: 12px;
   color: #FFFFFF;
}
`

// user info style
export const PersonalInformation = styled.div`
background-color: var(--backgroundPrimary);
width: 292px;
height: 70px;
padding: 19px 60px;
border-bottom-left-radius: 30px;
margin-left: 40px;
`

// link to style
export const Links = styled(Link)`
font-family: "Gilroy-Regular";
${font}
color: #fff;
${common}
`

// svg icon box
export const SVG = styled.div``

SVG.Notification = styled(notification)``
SVG.Account = styled(account)`
margin-left: 12px;
`