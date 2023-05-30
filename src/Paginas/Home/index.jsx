import React from 'react'
import Conteudo from '../../Componentes/Conteudo'
import { Container } from '@mui/material'
import {backgroundColor} from "../../Componentes/UI/variaveis"
import styled from 'styled-components'
const Principal = styled.main`
    background-color: ${backgroundColor};
    padding-top: 100px;
`;

export default function Home() {
  return (
    <Principal >
      <Container>
        <Conteudo />
        <Conteudo />
        <Conteudo />
        <Conteudo />
      </Container>
    </Principal>
     
     
  )
}
