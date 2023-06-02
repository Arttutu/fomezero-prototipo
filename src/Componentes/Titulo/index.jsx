import styled from 'styled-components'
import { corSecundaria, fontSecundaria } from '../UI/variaveis'
const Titulo = styled.h1 `
    font-size: 42px;
    font-family: ${fontSecundaria};
    color: ${(props) => props.secondary ? corSecundaria  : ""};

    `
export default Titulo