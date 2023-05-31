import React from 'react'
import Titulo from '../Titulo'
import Subtitulo from "../Subtitulo"
import Descricao from "../Descricao"
import styled from 'styled-components'
import Botao from '../Botao'
import fazenda from "./img/fazenda.jpg"
import camera from "./img/camera.jpg"
import { corSecundaria } from '../UI/variaveis'
import Imagem from '../Imagem'
const Caixa = styled.section`
  background-color: ${corSecundaria};
  padding-top: 100px;
  padding-left: 2.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  gap: 5rem;
  @media (max-width: 1024px){
    flex-direction: column-reverse;
  }
  @media (max-width: 768px){
    justify-content: center;
    padding: 2rem;
    text-align: center;
  }
`;
export const CaixaConteudo = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
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
