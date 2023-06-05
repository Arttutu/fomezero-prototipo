import React from "react"
import styled from "styled-components"
import { corSecundaria } from "../UI/variaveis"
import Parceiros from "../Parceiros"
import Contato from "../Contato"

const Caixa = styled.section`
  background-color: ${corSecundaria};
  text-align: center;
  padding: 100px 2.5rem;
  display: flex;
  justify-content: center;
  align-items: top;
  gap: 5rem;
  @media (max-width: 1024px) {
    align-items: center;
    flex-direction: column;
  }
`
export const CaixaInfo = styled.div`
  padding-bottom: 100px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 50%;
  gap: 1.5rem;
  @media (max-width: 768px) {
    gap: 2rem;
    width: 100%;
  }
`

export default function Informacao() {
  return (
    <Caixa>
      <CaixaInfo>
        <Parceiros />
      </CaixaInfo>
      <Contato />
    </Caixa>
  )
}
