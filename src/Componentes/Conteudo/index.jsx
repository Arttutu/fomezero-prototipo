import React from "react"
import Titulo from "../Titulo"
import Subtitulo from "../Subtitulo"
import Descricao from "../Descricao"
import styled from "styled-components"
import Botao from "../Botao"
import fazenda from "./img/fazenda.jpg"
import largataCartucho from "./img/largataCartucho.jpg"
import camera from "./img/camera.jpg"
import { corSecundaria } from "../UI/variaveis"
import Imagem from "../Imagem"
import { Link } from "react-router-dom"
const Caixa = styled.section`
  background-color: ${corSecundaria};
  padding-top: 100px;
  padding-left: 2.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  gap: 5rem;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 768px) {
    justify-content: center;
    padding: 2rem;
    text-align: center;
  }
`
export const CaixaConteudo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

export default function Conteudo({
  titulo,
  subtitulo,
  descricao,
  imagem,
  path,
  botao,
}) {
  return (
    <Caixa>
      <CaixaConteudo>
        <Titulo>{titulo}</Titulo>
        <Subtitulo>{subtitulo}</Subtitulo>
        <Descricao>{descricao}</Descricao>
        <Link to={path}>
          <Botao>{botao}</Botao>
        </Link>
      </CaixaConteudo>
      <Imagem
        src={
          imagem == "fazenda"
            ? fazenda
            : imagem == "largataCartucho"
            ? largataCartucho
            : camera
        }
        alt={titulo}
      />
    </Caixa>
  )
}
