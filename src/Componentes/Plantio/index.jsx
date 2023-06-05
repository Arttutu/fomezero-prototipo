import React from "react"
import styled from "styled-components"
import Descricao from "../Descricao"
import Titulo from "../Titulo"
import milho from "./milho.jpg"
import cana from "./Cana.jpeg"
import batata from "./batata.png"
import { backgroundColor } from "../UI/variaveis"
const ContainerPlantio = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  margin-top: 100px;
  gap: 2rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
const ContainerProduto = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: top;
`
const ImagemPlantio = styled.img`
  max-width: 150px;
  height: auto;
`

export default function Plantio() {
  return (
    <>
      <ContainerPlantio>
        <ContainerProduto>
          <ImagemPlantio src={milho}></ImagemPlantio>
          <Descricao background rodape>
            <strong>Milho</strong>
          </Descricao>
        </ContainerProduto>
        <ContainerProduto>
          <ImagemPlantio src={cana}></ImagemPlantio>
          <Descricao background rodape>
            <strong>Cana de Açucar</strong>
          </Descricao>
        </ContainerProduto>
        <ContainerProduto>
          <ImagemPlantio src={batata}></ImagemPlantio>
          <Descricao background rodape>
            <strong>Batata</strong>
          </Descricao>
        </ContainerProduto>
      </ContainerPlantio>
    </>
  )
}
