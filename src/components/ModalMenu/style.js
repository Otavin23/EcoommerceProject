import styled from "styled-components"


export const MenuFundo = styled.div`
   background: white;
   z-index: 3;
   height: 1750px;
   display: flex;   
   align-items: center;
   margin-top: 8rem;
   position: absolute;
   left: -1px;
`
export const ContainerMenu = styled.div`
   width: 250px;
   margin-top: 5rem;
   margin-left: 1rem;
   .closeMenu{
      cursor: pointer;
   }
   nav{
      margin-top: 3rem;
      ul{
         li{
            margin-top: 1rem;
            list-style: none;
            font-weight: 700;
            text-transform: capitalize;
         }
      }
   }

`