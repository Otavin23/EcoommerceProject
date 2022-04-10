import React from "react"
import Main from "./components/Main"
import { ProviderCard } from "./context/GlobalContext"

const App = ()=>{
  return (
    <ProviderCard>
        <Main />
    </ProviderCard>
  )
}
export default App 
