import React from 'react'
import Conteudo from '../../Componentes/Conteudo'
import {backgroundColor} from "../../Componentes/UI/variaveis"
import styled from 'styled-components'
import { Container } from '@mui/material';
import ConteudoInvertido from '../../Componentes/ConteudoIvertido';

const Principal = styled.main`
    background-color: ${backgroundColor};
    width: 100%;
    margin: 0;
    padding-top: 80px;
`;


export default function Home() {
  return (
    <Principal >
    <Container maxWidth="lg">

        <Conteudo  
        titulo="Farn Clean" 
        subtitulo= "Utilize IA para combater os Ácaros da sua Fazenda"
        descricao = "O Farn Clean é uma solução inovadora que utiliza Inteligência Artificial para monitorar e combater os ácaros indesejados em sua fazenda. Com a poderosa combinação entre IA e agricultura, você terá uma lavoura mais saudável e produtiva, garantindo o sucesso do seu investimento."
        imagem= "fazenda"
        />
        <ConteudoInvertido 
        titulo="Ácaro Vermelho" 
        subtitulo= " Utilize IA para combater os Ácaros da sua Fazenda"
        descricao = "O Ácaro Vermelho é uma solução baseada em Inteligência Artificial para o combate efetivo dos ácaros na sua fazenda. Com algoritmos avançados, ele monitora e identifica os invasores indesejados, proporcionando o controle necessário para proteger suas plantações. Aproveite os benefícios da IA na agricultura e livre-se dos ácaros com facilidade"
        />
        <Conteudo
        titulo="Monitoramento com Câmera na lavoura"
        subtitulo="Detecção precisa de Ácaros Vermelhos: Monitore sua lavoura com IA e câmeras em postes"
        descricao="monitora a sua lavoura utilizando Inteligência Artificial 
        e câmeras estrategicamente posicionadas em postes. Com a combinação poderosa da IA e algoritmos avançados,
         nosso sistema detecta de forma precisa os Ácaros Vermelhos ! proporcionando o controle necessário para proteger suas plantações. 
      "

        />
       

    </Container>


    
    </Principal>
     
     
  )
}
