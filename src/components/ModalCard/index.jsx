import React, { useContext } from "react"
import * as S from "./style"
import Image from "../../assets/image-product-1-thumbnail.jpg"
import IconDelete from "../../assets/icon-delete.jpg"
import { CreateContextt } from "../../context/GlobalContext"

const ModalCard = () => {
  const { carrinho, removeCart } = useContext(CreateContextt)

  return (
    <S.Modal>
      <S.HeaderModal>
        <h3>Cart</h3>
      </S.HeaderModal>
      <S.MainBg>
         {carrinho >= 1 ? (
           <>
            <S.ContainerModal>
              <div className="block-information-cart">
                
                <div className="CheckoutCart">
                  <img src={Image} alt="image sapato checkout" />
                </div>

                <div className="information-type-cart">
                  <p>
                    fall limited edition sneakers $125.00 x {carrinho}
                    <strong>${carrinho * 125.0}</strong>
                  </p>

                </div>
                <div className="delete-cart-product">
                  <img
                    onClick={removeCart}
                    src={IconDelete}
                    alt="deletar o produto do carrinho"
                  />
                </div>
              </div>
              <div className="Checkout-Carts">
                <button id="checkout">Checkout</button>
              </div>
            </S.ContainerModal>
           </>
         ): (
           <S.Empty>Your cart is empty.</S.Empty>
         )}
      </S.MainBg>
    </S.Modal>
  )
}

export default ModalCard
      