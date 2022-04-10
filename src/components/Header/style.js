import styled from "styled-components"

export const HeaderBg = styled.header`
  max-width: 1440px;
  height: 4rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid hsl(220, 14%, 75%);
  .logo-nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 600px;
    @media (max-width: 425px) {
      max-width: 10.3rem;
      align-items: center;
    }
    .logo {
      display: flex;
      align-items: center;
      justify-content: space-around;
      @media (max-width: 425px){
          width: 100%;
      }
      svg {
        display: none;
        height: 100%;
        cursor: pointer;
        @media (max-width: 425px) {
          display: flex;
          margin-right: 0.5rem;
          max-height: 100%;
        }
      }
    }
  }
`
export const Navegacao = styled.nav`
  @media (max-width: 425px) {
    display: none;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      color: hsl(219, 9%, 45%);
      text-transform: capitalize;
      margin-right: 0.8rem;
      cursor: pointer;
      @media (max-width: 598px){
        display: none;
      }
    }
  }
`

export const Perfil = styled.div`
  display: flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 100%;
  .org{
    position: relative;
    left: 30px;
    bottom: 10px;
    background:  hsl(26, 100%, 55%);
    width:20px;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40%;
    p{
      color: white;
      font-weight: 700;
      font-size: 15px;
    }
  }
  button {
    height: 100%;
    border: none;
    background: transparent;
    cursor: pointer;
    padding-right: 1rem;
    @media (max-width: 425px) {
      margin-left: 1rem;
    }
    img {
      max-width: 40px;
      max-height: 40px;
    }
  }
`
