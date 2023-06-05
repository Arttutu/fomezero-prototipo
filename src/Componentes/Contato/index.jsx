import React from "react"
import Titulo from "../Titulo"
import styled from "styled-components"
import { backgroundColor, corSecundaria, font } from "../UI/variaveis"
import Descricao from "../Descricao"
import { CaixaInfo } from "../Informacao"
import Botao from "../Botao"
const CaixaIcone = styled.div`
  max-width: 500px;
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding: 40px;
  @media (max-width: 768px) {
    width: 300px;
  }
`
const StyleForm = styled.form`
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 1rem;
`
const StyleLabel = styled.label`
  font-family: ${font};
  text-align: left;
  color: ${corSecundaria};
  font-size: 22px;
`
const StyleInput = styled.input`
  width: 400px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 22px;
  font-family: ${font};
  @media (max-width: 768px) {
    width: 250px;
  }
`
const StyleMensagem = styled.textarea`
  max-width: 500px;
  padding: 10px;
  max-height: 500px;
  font-size: 22px;
  font-family: ${font};
`
const Styleselect = styled.select`
  width: 400px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  @media (max-width: 768px) {
    width: 250px;
  }
`

const Styleoption = styled.option`
  font-family: ${font};
  font-size: 18px;
`

export default function Contato() {
  return (
    <>
      <CaixaInfo>
        <Titulo>Entre em Contato</Titulo>
        <Descricao>
          Vamos contruir um futuro melhor, aumente a produtividade da sua
          fazenda e ajude a combater a fome e a insegurança alimentar no mundo !
        </Descricao>
        <CaixaIcone>
          <Titulo secondary>Faça seu Cadastro</Titulo>
          <StyleForm>
            <StyleLabel>CNPJ:</StyleLabel>
            <StyleInput
              type="number"
              placeholder="xx. xxx. xxx/xxxx-xx"
            ></StyleInput>
            <StyleLabel>E-mail:</StyleLabel>
            <StyleInput
              type="text"
              placeholder="seuemail@domínio.com"
            ></StyleInput>
            <StyleLabel>Telefone:</StyleLabel>
            <StyleInput type="numvwe" placeholder="Seu telefone"></StyleInput>
            <StyleLabel>Seleciona sua Região:</StyleLabel>
            <Styleselect>
              <Styleoption value="item1"></Styleoption>
              <Styleoption value="item1">Nordeste</Styleoption>
              <Styleoption value="item2">Norte</Styleoption>
              <Styleoption value="item3">Sudeste</Styleoption>
              <Styleoption value="item4">Sul</Styleoption>
              <Styleoption value="item4">Centro-Oeste</Styleoption>
            </Styleselect>
            <StyleLabel>Plantio:</StyleLabel>
            <StyleInput
              type="text"
              placeholder="Tamanho da sua Fazenda"
            ></StyleInput>
            <StyleLabel>Mensagem:</StyleLabel>
            <StyleMensagem
              name="message"
              placeholder="Deixa sua mensagem"
            ></StyleMensagem>
            <Botao>Enviar</Botao>
          </StyleForm>
        </CaixaIcone>
      </CaixaInfo>
    </>
  )
}
