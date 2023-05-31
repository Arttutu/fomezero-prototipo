import React from 'react'
import Titulo from '../Titulo'
import Subtitulo from '../Subtitulo'
import { CaixaConteudo } from '../Conteudo'
import {AiTwotoneMail}  from "react-icons/ai"
import {BsFillTelephoneFill} from "react-icons/bs"
import styled from 'styled-components'
import { backgroundColor } from '../UI/variaveis'
import { corSecundaria } from '../UI/variaveis'
import Descricao from '../Descricao'
import { CaixaInfo } from '../Informacao'


const CaixaIcone = styled.div`
  width: 150px;
  height: 100px;
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5%;
  padding: 15px;
  cursor: pointer;

`
const StyledIcon = styled(AiTwotoneMail)`
  font-size: 50px;
  color: ${corSecundaria};
`;

export default function Contato() {
  return (
    <>
    <CaixaInfo >
        <Titulo>Entre em Contato</Titulo>
        <Descricao>Vamos contruir um futuro melhor, aumente a produtividade da sua fazenda e ajude a combater a fome  e a insegurança alimentar  no mundo !</Descricao>
        <CaixaIcone>
          <StyledIcon  />
          <Subtitulo contato>E-mail</Subtitulo>
        </CaixaIcone>
    </CaixaInfo>
    
    </>
  )
}
