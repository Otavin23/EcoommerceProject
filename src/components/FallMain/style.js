import styled from "styled-components"

export const MainBG = styled.main`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3.5rem;
  @media (max-width: 425px){
    padding: 0;
  }
`

export const ContainerMain = styled.div`
  display: flex;
  max-width: 900px;
  @media (max-width: 594px){
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`

export const Image = styled.div`
  @media (max-width: 594px){
    width: 100%;
    display: flex;
    align-items: center;

  }


  .next{
    display: none;
    @media (max-width: 594px){
      width: 40px;
      height: 40px;
      border-radius: 50%;    
      display: flex;
      align-items: center;
      justify-content: center;
      background: hsl(0, 0%, 98%);
      cursor: pointer;
      position: absolute;
      left: 1.5rem;
    }
  }
  .previous{
    display: none;
    @media (max-width: 594px){   
      width: 40px;
      height: 40px;
      border-radius: 50%;    
      display: flex;
      align-items: center;
      justify-content: center;
      background: hsl(0, 0%, 98%);
      cursor: pointer;
      position: absolute;
      right: 1.5rem;
    }
  }
  img {
    max-width: 400px;
    max-height: 400px;
    border-radius: 0.6rem;
    cursor: pointer;
  }
  #img-load{
    @media (max-width: 594px){
      max-width: 100%;
      max-height: 100%;
      border-radius: 0;
    }
  }
  .selectPhoto {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 594px){
      display: none;
    }
    img {
      max-width: 100%;
      max-height: 84px;
      &:hover{
        border: 3px solid hsl(26,100%, 55%);
        opacity:0.3;
      }
      @media (max-width: 594px){
        max-width: 100%;
        max-height: 70px;
      }
    }
  }
`

export const TextInformation = styled.div`
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 320px){
    padding-left: 1rem;
  }
  @media (max-width: 594px){
    justify-content: flex-start;
    margin: 0;
    max-width: 350px;
    padding-top: 1rem;
  }
  #sneaker {
    color: hsl(26, 100%, 55%);
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 16px;
  }
  #fall {
    margin-top: 1rem;
    max-width: 400px;
    font-size: 40px;
    text-transform: capitalize;
    @media (max-width: 594px){
      font-size: 30px;
    }
  }
  #description {
    margin-top: 2rem;
    color: hsl(219, 9%, 45%);
    opacity: 0.9;
    font-size: 16px;
  }
  .prices {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    max-width: 150px;
    button {
      border: none;
      width: 45px;
      font-weight: 700;
      color: hsl(26, 100%, 55%);
      background: hsl(25, 100%, 94%);
      font-size: 16px;
      text-align: center;
    }
  }
  #decoration-line {
    color: hsl(220, 14%, 75%);
    text-decoration: line-through;
    margin-bottom: 2rem;
  }
  .buttons-add-cart {
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    #addCart {
      width: 55%;
      background: hsl(26, 100%, 55%);
      color: hsl(0, 0%, 100%);
      font-size: 17px;
      justify-content: center;
      box-shadow: 0px 1px 15px hsl(26, 100%, 55%);
      cursor: pointer;
      svg {
        color: white;
        margin-right: 1rem;
      }
      &:hover{
        opacity: 0.7;
      }
    }
    button {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 40%;
      height: 3rem;
      border: none;
      font-weight: 700;
      background: hsl(0, 0%, 96%);
      border-radius: 0.5rem;
      p {
        color: hsl(26, 100%, 55%);
        font-size: 30px;
        cursor: pointer;
      }
    }
  }
`