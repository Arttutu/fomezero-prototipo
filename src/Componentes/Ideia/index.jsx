import React from 'react'
import Titulo from '../Titulo'
import styled from 'styled-components'
import { backgroundColor, corSecundaria } from '../UI/variaveis'
import { Container, Principal } from '../../Paginas/Home'
import Subtitulo from '../Subtitulo'

 const PrincipalProduto = styled.main`
    text-align: center;
    background-color: ${backgroundColor};
    width: 100%;
    padding-top: 80px;
`;
 const ContainerProduto = styled.div`
 background-color: ${corSecundaria};
 height: calc(100vh - 119px);
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

export default function Ideia() {
  return (
    <PrincipalProduto>

      <ContainerProduto>
        <Titulo>Nosso Produto</Titulo>
        <Subtitulo>Veja um exemplo como nosso produto funciona !</Subtitulo>
      </ContainerProduto>

    </PrincipalProduto>
  )
}
