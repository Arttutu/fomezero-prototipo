import React from 'react'
import Descricao from '../Descricao'
import { corRodape } from '../UI/variaveis';
import styled from 'styled-components';

const Caixa = styled.div`
    background-color: ${corRodape};
    padding: 5px;
    text-align: center;
`;
export default function Rodape() {
  return (
    <footer>    
        <Caixa>
            <Descricao rodape>Site Desenvolvido por @Arthur Gomes</Descricao>
        </Caixa>
    </footer>
  )
}
