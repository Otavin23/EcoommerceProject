import React,{useState,createContext} from "react"
import { SelectorImage } from "../utils/Utils";

export const CreateContextt = createContext({})

export function ProviderCard({children}){
    
    const [contar,setContar] = useState(0)
    const [carrinho, setAddCart] = useState(0)
    const [card, setCard] = useState(false)
    const [image, setImage] = useState("")
    const [Menu, setMenu] = useState(false)



    function closeCard(){
        setCard(false)
    }
    function incrementar(){
        setContar(contar + 1)
    }
    function descrementar(){
        if(contar <= 0){
            setContar(0)
        }else{
            setContar(contar - 1)
        }
    }
    function addCartt(){
        setAddCart(contar)
    }
    function removeCart(){
        setAddCart(0)
    }
    function GetImage({target}){
        setImage({
            src: target.src,
            active: true,
        })
    }



    const valor = {
        incrementar,
        descrementar,
        contar,
        carrinho,
        addCartt,
        removeCart,
        card,
        setCard,
        closeCard,
        image,
        GetImage,
        Menu,
        setMenu,
    }
    return (
        <CreateContextt.Provider value={valor}>
            {children}
        </CreateContextt.Provider>
    )

}
