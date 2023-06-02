import Home from "./Paginas/Home";
import {GlobalStyle} from "./Componentes/GlobalStyle"
import Rodape from "./Componentes/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produto from "./Componentes/Ideia";



function App() {
  return(

  <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route index  element={ <Home />} />
        <Route path="/produto"  element={ <Produto />} />
      </Routes>
    </BrowserRouter>
   
    <Rodape />
  </>
  ) 
 

}
export default App;
