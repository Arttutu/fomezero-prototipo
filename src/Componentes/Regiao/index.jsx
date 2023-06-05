import React from "react"
import Titulo from "../Titulo"
import styled from "styled-components"
import nordeste from "./nordeste.png"

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
  margin: 100px 0px;
  display: flex;
  align-items: top;
  justify-content: space-around;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;

    align-items: center;
  }
`
const ContainerPraga = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: top;
  margin-top: 100px;
  @media (max-width: 768px) {
    align-items: center;
  }
`
const ContainerImagem = styled.div`
  width: 500px;
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
