import React,{useContext} from "react"
import * as S from "./style"
import { CreateContextt } from "../../context/GlobalContext"

const ModalMenu = ()=>{

   const{Menu, setMenu} = useContext(CreateContextt)
   function closeMeenu(){
      setMenu(false)
   }

   return (
         <S.MenuFundo>
            <S.ContainerMenu>
               <div className="closeMenu">
                  <svg onClick={closeMeenu} width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#afafaf" fill-rule="evenodd"/></svg>
               </div>
               <nav>
                  <ul>
                     <li>collections</li>
                     <li>men</li>
                     <li>women</li>
                     <li>about</li>
                     <li>contact</li>
                  </ul>
               </nav>
            </S.ContainerMenu>
         </S.MenuFundo>
   )
}
export default ModalMenu 