import React from 'react'
import Titulo from '../Titulo'
import Subtitulo from '../Subtitulo'
import styled from 'styled-components'
import { backgroundColor, corSecundaria, font } from '../UI/variaveis'
import Descricao from '../Descricao'
import { CaixaInfo } from '../Informacao'
import Botao from '../Botao'


const CaixaIcone = styled.div`
  width: 500px;
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding: 30px;
  @media (max-width: 768px){
    width: auto;
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
const StyleLabel= styled.label`
  font-family: ${font};
  text-align: left;
  color: ${corSecundaria};
  font-size: 22px;
`
const StyleInput= styled.input`
    width: 400px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 28px;
`
const StyleMensagem= styled.textarea`
    max-width: 500px;
    padding: 10px;
    max-height: 500px;
    font-size: 18px;
    font-family: ${font};
`
export default function Contato() {
  return (
    <>
      <CaixaInfo >
            <Titulo>Entre em Contato</Titulo>
            <Descricao>Vamos contruir um futuro melhor, aumente a 
              produtividade da sua fazenda e ajude a combater a fome  e a insegurança alimentar  no mundo !</Descricao>
            <CaixaIcone>
                <Titulo contato>Faça seu Cadastro</Titulo>
                <StyleForm>
                    <StyleLabel>
                        CNPJ:
                    </StyleLabel>
                    <StyleInput type='number'>
                    </StyleInput>
                    <StyleLabel>
                        E-mail:
                    </StyleLabel>
                    <StyleInput type='text'>
                    </StyleInput>
                    <StyleLabel>
                        Hectares:
                    </StyleLabel>
                    <StyleInput type='number'>
                    </StyleInput>
                    <StyleLabel>
                        Mensagem:
                    </StyleLabel>
                    <StyleMensagem name="message" >
                    </StyleMensagem>
                    <Botao>Enviar</Botao>
                    
                </StyleForm>
            </CaixaIcone>
      </CaixaInfo>
        
    </>
  )
}
