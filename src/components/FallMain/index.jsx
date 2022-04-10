import React, { useContext, useState } from "react";
import * as S from "./style";

import ProductImage1 from "../../assets/image-product-1.jpg";
import ProductImage2 from "../../assets/image-product-2.jpg";
import ProductImage3 from "../../assets/image-product-3.jpg";
import ProductImage4 from "../../assets/image-product-4.jpg";
import { CreateContextt } from "../../context/GlobalContext";
import ModalImage from "../ModalImage";
import { SelectorImage } from "../../utils/Utils";

const FallMain = () => {
  const { incrementar, contar, descrementar, addCartt, card, setCard } = useContext(CreateContextt);
  const [anterior, setAnterior] = useState(0);
  const [img, setImg] = useState("");
  const Array = SelectorImage;

  function OpenModalCard() {
    setCard(!card);
  }

  function Next() {
    setAnterior((anterior) => anterior + 1);
    if (anterior > 2) {
      setAnterior(0);
      setImg(Array[0]);
    } else {
      setImg(Array[anterior + 1]);
    }
  }

  function Previous() {
    setAnterior((anterior) => anterior - 1);
    if (anterior <= 0) {
      setAnterior(3);
      setImg(Array[3]);
    } else {
      setImg(Array[anterior - 1]);
    }
  }

  return (
    <>
      {card && <ModalImage />}
      <S.MainBG>
        <S.ContainerMain>
          <S.Image>
            <div className="next">
              <svg onClick={Previous} width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 1 3 9l8 8"
                  stroke="#696969"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
            {img === "" ? (
              <img id="img-load" src={ProductImage1} onClick={OpenModalCard} alt="produto-sapato" />
            ) : (
              <img id="img-load" src={img.src} onClick={OpenModalCard} alt="Produto sapato" />
            )}

            <div className="previous">
              <svg onClick={Next} width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2 1 8 8-8 8"
                  stroke="#696969"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
            <div className="selectPhoto">
              <img src={ProductImage1} alt="produto foto de um sapato" />
              <img src={ProductImage2} alt="produto foto de um sapato" />
              <img src={ProductImage3} alt="produto foto de um sapato" />
              <img src={ProductImage4} alt="produto foto de um sapato" />
            </div>
          </S.Image>

          <S.TextInformation>
            <p id="sneaker">SNEAKER COMPANY</p>
            <h2 id="fall">fall limited edition sneakers</h2>
            <p id="description">
              These-low-profile sneakers are you perfect casual wear companion.
              Featuring a durable rubber outer sole they'll withstand everything
              the weather can offer
            </p>
            <div className="prices">
              <h2>$125.00</h2>
              <button>50%</button>
            </div>
            <p id="decoration-line">$250.00</p>
            <div className="buttons-add-cart">
              <button>
                <p onClick={descrementar}>-</p>
                {contar}
                <p onClick={incrementar}>+</p>
              </button>
              <button id="addCart" onClick={addCartt}>
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="#a08080"
                    fill-rule="nonzero"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </S.TextInformation>
        </S.ContainerMain>
      </S.MainBG>
    </>
  );
};
export default FallMain;
