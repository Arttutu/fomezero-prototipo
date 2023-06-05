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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
const ContainerProduto = styled.div`
  background-color: ${corSecundaria};
  max-width: 1440px;
  padding-top: 80px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 100px;
`

export default function Ideia() {
  return (
    <PrincipalProduto>
      <ContainerProduto>
        <Titulo>Nosso Produto</Titulo>
        <Subtitulo>Veja um exemplo como nosso produto funciona !</Subtitulo>
        <ExamplePage />
        <Titulo>Pragas indentificas na sua Lavoura</Titulo>
        <Conteudo
          titulo="Lavoura Milho"
          subtitulo="Largata Cartucho"
          descricao="Nível de propagação:"
          propagacao="Alto"
          cor="alto"
          imagem="largataCartucho"
          path="/produto"
          botao="Mais informações (IA em construção)"
        />
        <Conteudo
          titulo="Lavoura Cana de Açucar"
          subtitulo="Choconiha"
          descricao="Nível de propagação:"
          propagacao="Baixo"
          imagem="chonilha"
          path="/produto"
          botao="Mais informações (IA em construção)"
        />
        <Conteudo
          titulo="Lavoura Milho"
          subtitulo="Percevejo"
          descricao="Nível de propagação:"
          propagacao="Baixo"
          imagem="percevejo"
          path="/produto"
          botao="Mais informações (IA em construção)"
        />
        <Conteudo
          titulo="Lavoura Batata"
          subtitulo=" Pragas"
          descricao="Nenhuma Praga indentificada"
          imagem="ok"
          path="/produto"
          botao="Mais informações (IA em construção)"
        />
      </ContainerProduto>
    </PrincipalProduto>
  )
}
