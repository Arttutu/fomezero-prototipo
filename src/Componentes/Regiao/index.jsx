import React from "react"
import Titulo from "../Titulo"
import styled from "styled-components"
import nordeste from "./nordeste.png"
import Subtitulo from "../Subtitulo"
import Plantio from "../Plantio"
import { backgroundColor } from "../UI/variaveis"

const ImagemRegiao = styled.img`
  max-width: 300px;
  height: auto;
  margin: 50px 0;
  @media (min-width: 1280px) {
    max-width: 500px;
  }
  @media (min-width: 1024px) {
    max-width: 500px;
  }
`
const ContainerRegiao = styled.div`
  margin: 100px 50px;
  display: flex;
  align-items: top;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const ContainerPraga = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: top;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const ContainerImagem = styled.div`
  width: 50%;
  padding-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${backgroundColor};

  @media (max-width: 768px) {
    width: 90%;
  }
`

export default function Regiao() {
  return (
    <>
      <ContainerRegiao>
        <ContainerImagem>
          <Titulo secondary>Sua Regão: Nordeste</Titulo>
          <ImagemRegiao src={nordeste} />
        </ContainerImagem>
        <ContainerPraga>
          <Titulo>Seu Plantio:</Titulo>
          <Plantio />
        </ContainerPraga>
      </ContainerRegiao>
    </>
  )
}
