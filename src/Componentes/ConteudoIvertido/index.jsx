import React from 'react'
import Titulo from '../Titulo'
import Subtitulo from "../Subtitulo"
import Descricao from "../Descricao"
import styled from 'styled-components'
import Botao from '../Botao'
import acaro from "./img/acaro.jpg"
const Caixa = styled.div`
  background-color: white;
  padding: 3rem;
  display: flex;
  align-items: center;
  gap: 5rem;
  padding-top: 100px;
  @media (max-width: 1024px){
    flex-direction: column;
  }
`;
const CaixaConteudo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const Imagem = styled.img`
  max-width: 100%;
  border-radius: 15px;
  height: auto;
  @media (min-width: 1280px){
   max-width: 600px;
  }
  @media (min-width: 1024px){
   max-width: 600px;
  }
  
`;

export default function ConteudoInvertido({titulo, subtitulo, descricao}) {

  return (
    
        <Caixa>
            <Imagem src={acaro} alt={titulo}/>
            <CaixaConteudo>
                <Titulo>{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
                <Botao>Saiba Mais</Botao>
            </CaixaConteudo>
        </Caixa>
  )
}