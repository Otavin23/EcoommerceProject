import styled from "styled-components";

export const ImagemFundo = styled.div`
  position: absolute;
  margin-top: -100px;
  &::before {
    content: "";
    height: 105.5vh;
    width: 100vw;
    position: absolute;
    background: hsl(0, 0%, 0%);
    opacity: 0.8;
    z-index: 1;
    overflow: hidden;
  }
  @media (max-width: 593px) {
    display: none;
  }
`;

export const ContainerImagem = styled.div`
  position: absolute;
  left: 400px;
  top: 100px;
  z-index: 2;
  @media (max-width: 643px){
    left: 60px;
  }
  .remove-exit {
    display: flex;
    justify-content: end;
    svg {
      cursor: pointer;
    }
  }
  .photo-main {
    margin-top: 1rem;
    align-items: center;
    display: flex;
    .next {
      background: hsl(0, 0%, 98%);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
    }
    .previous {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: hsl(0, 0%, 98%);
      cursor: pointer;
    }
    img {
      max-width: 400px;
      max-height: 400px;
      border-radius: 1rem;
    }
  }
  .photo-selector {
    margin-top: 1rem;
    display: flex;
    justify-content: space-evenly;
    img {
      max-width: 60px;
      border-radius: 0.7rem;
      cursor: pointer;
    }
  }
`;
