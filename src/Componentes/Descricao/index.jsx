import styled from "styled-components"
import { backgroundColor, corSecundaria, font } from "../UI/variaveis"
const Descricao = styled.p`
  font-size: 20px;
  font-family: ${font};
  color: ${(props) => (props.rodape ? corSecundaria : "")};
  background-color: ${(props) => (props.background ? backgroundColor : "")};
`
export default Descricao
