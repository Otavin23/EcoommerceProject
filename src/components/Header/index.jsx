import React, {useContext} from "react"
import * as S from "./style"
import Logo from "../../assets/image-avatar.png"
import { useState } from "react"
import Modal from "../ModalCard/index"
import { CreateContextt } from "../../context/GlobalContext"
import MenuModal from "../ModalMenu/index"

const Header = () => {
  const {carrinho, Menu, setMenu} = useContext(CreateContextt)
  const [modal, setModal] = useState(false)

  function visualizarModal() {
    setModal(!modal)
  }
  function visualizarMenu(){
    setMenu(!Menu)
  }

  return (
    <S.HeaderBg>
      <div className="logo-nav">
        <div className="logo">
          <svg onClick={visualizarMenu} width="16" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
              fill="#69707D"
              fill-rule="evenodd"
            />
          </svg>
          <h1>sneakers</h1>
        </div>
        {Menu && <MenuModal />}
        <S.Navegacao>
          <ul>
            <li>collections</li>
            <li>men</li>
            <li>women</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </S.Navegacao>
      </div>

      <S.Perfil>
        <div className="org">
          <p>{carrinho}</p>
        </div>

        <button onClick={visualizarModal}>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fill-rule="nonzero"
            />
          </svg>
        </button>

        {modal && <Modal />}

        <button>
          <img src={Logo} alt="avatar-logo-perfil" />
        </button>
      </S.Perfil>
    </S.HeaderBg>
  )
}
export default Header
