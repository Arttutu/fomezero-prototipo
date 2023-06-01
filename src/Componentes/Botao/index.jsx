import styled from "styled-components";
import { corSecundaria, font } from "../UI/variaveis";

const Botao = styled.button `
    width: 200px;
    padding: 20px;
    font-size: 22px;
    font-family: ${font};
    color: ${corSecundaria};
    background-color: black;
    box-shadow: 5px 5px 5px #000000b0;
    cursor: pointer;
   
`
export default Botao