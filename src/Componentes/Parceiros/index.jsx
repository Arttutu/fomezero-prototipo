
import React from 'react'
import Titulo from '../Titulo'
import Descricao from '../Descricao'
import styled from 'styled-components'
import { corSecundaria } from '../UI/variaveis'
import parceiros from "./parceiros.png"
import Imagem from '../Imagem'
import Subtitulo from '../Subtitulo'

const Caixa = styled.div `
 background-color: ${corSecundaria};
 text-align: center;
 padding: 100px 2.5rem;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 4rem;
`
export default function Parceiros() {
  return (
    <Caixa>
        <Titulo>Nosso Objetivo</Titulo>
        <Descricao>A <strong>farm clean</strong> tem como objetivo combater fome mundial e a escassez de alimentos são problemas complexos 
          e urgentes que afetam milhões de pessoas em todo o mundo. 
          A ONU, em seu conjunto de Objetivos de<strong> Desenvolvimento Sustentável (ODS) </strong>, 
          inclui o ODS 2, Fome Zero e Agricultura Sustentável como metas para erradicar a fome e 
          promover sistemas agrícolas sustentáveis até <strong>2030.</strong></Descricao>
          <Subtitulo>Nossos parceiros</Subtitulo>
          <Imagem src={parceiros}></Imagem>
    </Caixa>
      
    

  )
}
