import React from 'react'
import Titulo from '../Titulo'
import Descricao from '../Descricao'
import Imagem from '../Imagem'
import parceiros from './parceiros.png'
import styled from 'styled-components'

  const ImagemParceiros = styled(Imagem)`
      box-shadow: none ;
  `;
export default function Parceiros() {
  return (
    <>
        <Titulo>Nosso Objetivo</Titulo>
        <Descricao>A <strong>farm clean</strong> tem como objetivo combater fome mundial e a escassez de alimentos são problemas complexos 
        e urgentes que afetam milhões de pessoas em todo o mundo. 
        A ONU, em seu conjunto de Objetivos de<strong> Desenvolvimento Sustentável (ODS) </strong>, 
        inclui o ODS 2, Fome Zero e Agricultura Sustentável como metas para erradicar a fome e 
        promover sistemas agrícolas sustentáveis até <strong>2030.</strong></Descricao>
        <Titulo>Nossos parceiros</Titulo>
        <ImagemParceiros src={parceiros}></ImagemParceiros>
      </>
  )
}
