import React from 'react'
import Titulo from '../Titulo'
import Subtitulo from "../Subtitulo"
import Descricao from "../Descricao"
import styled from 'styled-components'
import Botao from '../Botao'
import fazenda from "./img/fazenda.jpg"
import camera from "./img/camera.jpg"
const Caixa = styled.div`
  background-color: white;
  padding-top: 2.5rem;
  padding-left: 2.5rem;
  display: flex;
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
  align-items: center;
  gap: 1.5rem;
`;
const Imagem = styled.img`
  max-width: 100%;
  border-radius: 5px;

  height: auto;
  @media (min-width: 1280px){
   max-width: 00px;
  }
  @media (min-width: 1024px){
   max-width: 500px;
  }
  
`;

export default function Conteudo({titulo, subtitulo, descricao, imagem}) {

  return (
    
        <Caixa>
              <CaixaConteudo>
                <Titulo>{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
                <Botao>Saiba Mais</Botao>
              </CaixaConteudo>
             <Imagem src={imagem == "fazenda" ? fazenda : camera} alt={titulo}/>
        </Caixa>
  )
}
