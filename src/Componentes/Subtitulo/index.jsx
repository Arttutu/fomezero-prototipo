import styled from "styled-components";
import { corSecundaria, font } from "../UI/variaveis";
 const Subtitulo = styled.h2`
    font-size: 28px;
    font-family: ${font};
    color: ${(props) => props.secondary ? corSecundaria  : ""};
    

`
export default Subtitulo