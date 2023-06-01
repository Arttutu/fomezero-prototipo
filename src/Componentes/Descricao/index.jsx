import styled from 'styled-components'
import { corSecundaria, font } from '../UI/variaveis'
const Descricao = styled.p `
    font-size: 22px;
    font-family: ${font};
    color: ${(props) => props.rodape ? corSecundaria : "" }
    `
export default Descricao