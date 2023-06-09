import React from 'react'
import Titulo from '../Titulo'
import Subtitulo from "../Subtitulo"
import Descricao from "../Descricao"
import styled from 'styled-components'
import Botao from '../Botao'
import praga from "./img/praga.jpg"
import ia from "./img/ia.jpg"
import Imagem from '../Imagem'
const Caixa = styled.section`
  background-color: white;
  padding-top: 100px;
  padding-right: 2.5rem;
  display: flex;
  text-align: center;
  align-items: center;

  gap: 5rem;

  @media (max-width: 1024px){
    flex-direction: column;
  }
  @media (max-width: 768px){
    justify-content: center;
    padding: 2rem;
    text-align: center;
  }
`;
const CaixaConteudo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;


export default function ConteudoInvertido({titulo, subtitulo, descricao, imagem}) {

  return (
    
        <Caixa>
            <Imagem src={imagem == "praga" ? praga :  ia} alt={titulo}/>
            <CaixaConteudo>
                <Titulo>{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
                <Botao>Saiba Mais</Botao>
            </CaixaConteudo>
        </Caixa>
  )
}