import styled from "styled-components"
import { corVerde, corVermelho, font } from "../UI/variaveis"
import React from "react"
const StylesPropagacao = styled.p`
  font-size: 26px;
  font-family: ${font};
  font-weight: bolder;
  color: ${(props) => (props.cor ? corVermelho : corVerde)};
`
function Propagacao({ propagacao, cor }) {
  return (
    <>
      <StylesPropagacao cor={cor}>{propagacao} </StylesPropagacao>
    </>
  )
}

export default Propagacao
