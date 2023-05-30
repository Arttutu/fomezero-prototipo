import React from 'react'
import Titulo from '../Titulo'
import Subtitulo from "../Subtitulo"
import Descricao from "../Descricao"
import styled from 'styled-components'
const Caixa = styled.div`
  background-color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export default function Conteudo() {

  return (
    
        <Caixa>
              <Titulo>Farn Clean</Titulo>
              <Subtitulo>Download Landing page for Farmer & Agriculture</Subtitulo>
              <Descricao>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point</Descricao>
        </Caixa>

  
     
 
  )
}
