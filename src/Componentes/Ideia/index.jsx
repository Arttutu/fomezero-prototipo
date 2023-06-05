import React from "react"
import Titulo from "../Titulo"
import styled from "styled-components"
import { backgroundColor, corSecundaria } from "../UI/variaveis"
import { Container, Principal } from "../../Paginas/Home"
import Subtitulo from "../Subtitulo"
import Regiao from "../Regiao"
import ExamplePage from "../Regiao"
import Conteudo from "../Conteudo"

const PrincipalProduto = styled.main`
  text-align: center;
  background-color: ${backgroundColor};
  width: 100%;
  padding-top: 80px;
`
const ContainerProduto = styled.div`
  background-color: ${corSecundaria};
  max-width: 1440px;
  padding-top: 80px;
  margin-left: auto;
  margin-right: auto;
`

export default function Ideia() {
  return (
    <PrincipalProduto>
      <ContainerProduto>
        <Titulo>Nosso Produto</Titulo>
        <Subtitulo>Veja um exemplo como nosso produto funciona !</Subtitulo>
        <ExamplePage />
        <Titulo>Pragas indentificas</Titulo>
        <Conteudo
          titulo="Lavoura 1 "
          subtitulo="Largata Cartucho"
          descricao="Foto"
          imagem="largataCartucho"
          path="/produto"
          botao="Mais informações"
        />
        <Conteudo
          titulo="Lavoura 1 "
          subtitulo="Praga y"
          descricao=""
          imagem="fazenda"
          path="/produto"
          botao="Mais informações"
        />
        <Conteudo
          titulo="Lavoura 4 "
          subtitulo="Praga y"
          descricao="."
          imagem="fazenda"
          path="/produto"
          botao="Mais informações"
        />
      </ContainerProduto>
    </PrincipalProduto>
  )
}
