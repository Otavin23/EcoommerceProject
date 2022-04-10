import styled from "styled-components"

export const Modal = styled.div`
  margin-top: 10rem;
  width: 350px;
  height: 12rem;
  background: white;
  z-index: 100;
  box-shadow: 0px 3px 10px hsl(220, 14%, 75%);
  position: absolute;
  top: -105px;
  right: 25px; 
  border-radius: 0.5rem;
  @media (max-width: 375px){
    left: 0.8rem;  
  }
  @media (max-width: 320px){
    left: 0.7rem;
    max-width: 300px;
  }
  @media (max-width: 370px){
    max-width: 320px;
  }
  @media (max-width: 348px){
    max-width: 300px;
  }
  @media (max-width: 331px){
    max-width: 290px;
  }
  @media (max-width: 315px){
    max-width: 280px;
  }
`

export const HeaderModal = styled.header`
  height: 2.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid hsl(220, 14%, 75%);
  h3 {
    margin-left: 1.5rem;
    font-size: 16px;
    color: hsl(220, 13%, 13%);
  }
  
  
`

export const MainBg = styled.main` 
  height: 79%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(219, 9%, 45%);
`
export const ContainerModal = styled.div`
  @media (max-width: 320px){
    max-width: 280px;
  }
  @media (max-width: 370px){
    max-width: 300px;
  }
  @media (max-width: 348px){
    max-width: 280px;
  }
  @media (max-width: 315px){
    max-width: 260px;
  }
  .block-information-cart{
    display: flex;
    .CheckoutCart{
      img{
        max-width: 50px;
        max-height: 50px;
        border-radius: 0.5rem;
        @media (max-width: 320px){
          max-width: 40px;
        }
      }
    }
    .information-type-cart{
      margin-left: 0.5rem;
      p{
        max-width: 250px;
        strong{
          color: black;
          font-weight: 700;
          margin-left: 0.5rem;
        }
      }
    }
    .delete-cart-product{
      display: flex;
      align-items: center;
      cursor: pointer;
      img{
        max-width: 20px;
        max-height: 20px;
      }
    }
    
  }
  .Checkout-Carts{
    margin-top: 0.6rem;
    #checkout{
      margin: 0;
      width:100% ;
      height: 3rem;
      background:  hsl(26, 100%, 55%);
      color: white;
      font-weight: 700;
      font-size: 16px;
      border-radius: 0.7rem;
      &:hover{
        opacity: 0.8;
      }
    }
  }
` 
export  const Empty = styled.p`
  font-weight: 700;
  font-size: 18px;
` 