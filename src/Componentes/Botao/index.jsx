import styled from "styled-components";
import { backgroundColor, corSecundaria, font } from "../UI/variaveis";


const Botao = styled.button `
    width: 200px;
    padding: 20px;
    font-size: 22px;
    font-family: ${font};
    color: ${corSecundaria};
    background-color: black;
    box-shadow: 5px 5px 5px #000000b0;
    transition: 0.5s ease;
    border: none;
    cursor: pointer;
    &:hover{
        background-color: ${backgroundColor};
        font-size: 28px;
    }
   
`

export default Botao