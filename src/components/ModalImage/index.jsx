import React, { useContext,useState} from "react";
import * as S from "./style";
import ProductImage1 from "../../assets/image-product-1.jpg";
import { CreateContextt } from "../../context/GlobalContext";
import { SelectorImage } from "../../utils/Utils";

const ModalImage = () => {
  const { closeCard} = useContext(CreateContextt);
  const [anterior, setAnterior] = useState(0)
  const [img, setImg] = useState("")
  const Array = SelectorImage

  function SeleectorImg(){
    setAnterior((anterior)=> anterior + 1)
    if(anterior > 2){
      setAnterior(0)
      setImg(Array[0])
    }else{
      setImg(Array[anterior + 1])
    }
  }
  
  function SelectorImgSec(){
    setAnterior((anterior)=> anterior - 1)
    if(anterior <= 0){
      setAnterior(3)
      setImg(Array[3])
    }else{
      setImg(Array[anterior - 1])
    }
  }

  return (
    <S.ImagemFundo>
      <S.ContainerImagem>
        <div className="remove-exit">
          <svg
            onClick={closeCard}
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="hsl(26,100%, 55%)"
              fill-rule="evenodd"
            />
          </svg>
        </div>

        <div className="photo-main">
          <div className="next">
            <svg onClick={SelectorImgSec} width="12" height="18" xmlns="http://www.w3.org/2000/svg">
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
            <img src={ProductImage1} alt="produto-sapato" />

          ): (
            <img src={img.src} alt="Produto sapato" />
          )}

          <div className="previous">
            <svg onClick={SeleectorImg}
             width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#696969"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="photo-selector">
            {Array.map((el)=> (
                <img  src={el.src} alt="Produto sapato"/>
            ))}
        </div>
      </S.ContainerImagem>
    </S.ImagemFundo>
  );
};
export default ModalImage;
