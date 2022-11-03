import styled from "styled-components";


export const Container = styled.div`
background-color: var(--backgroundPrimary);
border-top-right-radius: 30px;
max-width: 263px;
width: 100%;
height: calc(100vh - 70px);
`
export const SidebarMenu = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
padding-top: 54px;
padding-left: 30px;
`
export const SidebarItem = styled.li`
margin-bottom: 26px;
margin-right: 1px;
a{
   display: flex;
   align-items: center;
   font-family: 'Gilroy-Regular';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   /* identical to box height */
   letter-spacing: -0.3px;
   /* blue-for-admin */
   color: #ffffff;
   /* Inside auto layout */
   flex: none;
   order: 1;
   flex-grow: 0;
   padding: 14px 0px 16px 30px;
}
.active{
   background-color: #fff;
   color: var(--colorPrimary);
   border-radius:30px 0px 0px 30px;
   
   svg path{
      fill: var(--colorPrimary);
   }
}
`

export const IconWrapper = styled.div`
margin-right: 16px;
`