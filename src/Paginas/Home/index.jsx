import React from 'react'
import Conteudo from '../../Componentes/Conteudo'
import {backgroundColor} from "../../Componentes/UI/variaveis"
import styled from 'styled-components'
import ConteudoInvertido from '../../Componentes/ConteudoIvertido';

import Informacao from '../../Componentes/Informacao';

const Principal = styled.main`
    background-color: ${backgroundColor};
    width: 100%;
    margin: 0;
    padding-top: 80px;
   
`;
const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;


export default function Home() {
  return (
    <Principal >
    <Container>
        <Conteudo  
        titulo="Farm Clean" 
        subtitulo= "Utilize IA para combater os Ácaros da sua Fazenda"
        descricao = "O Farn Clean é uma solução inovadora que utiliza Inteligência Artificial para monitorar e combater os ácaros indesejados em sua fazenda. Com a poderosa combinação entre IA e agricultura, você terá uma lavoura mais saudável e produtiva, garantindo o sucesso do seu investimento."
        imagem= "fazenda"
        />
        <ConteudoInvertido 
        titulo="Ácaro Vermelho" 
        subtitulo= "Os invasores"
        descricao = "Os ácaros vermelhos são pequenos aracnídeos de cor avermelhada que podem causar danos significativos às plantas. Eles se alimentam da seiva das plantas, enfraquecendo-as e comprometendo seu crescimento saudável. Esses ácaros são particularmente prejudiciais em lavouras e jardins, onde podem se proliferar rapidamente e causar sérios prejuízos na produção agrícola."
        imagem = "acaro"
        />
        <Conteudo
        titulo="Monitoramento com Câmera na lavoura"
        subtitulo="Detecção precisa de Ácaros Vermelhos: Monitore sua lavoura com IA e câmeras em postes"
        descricao="Monitora a sua lavoura utilizando Inteligência Artificial 
        e câmeras estrategicamente posicionadas em postes. Com a combinação poderosa da IA e algoritmos avançados,
         nosso sistema detecta de forma precisa os Ácaros Vermelhos ! Alertando e acionando sitemas para combater o avanço do ácaro. 
      "
        />
          <ConteudoInvertido 
        titulo="IA generativa" 
        subtitulo= "como vamos indentificar ?"
        descricao = "Vamos utilizar IA generativa , abastecemos nossa IA com várias fotos dos ácaros vermelho, assim a nossa solução consiguira distiguir e  indentificar os invasores , aumentando a produtividade e reduzindo o prejuízo! "
        />
        
        <Informacao/>
    </Container>

      


    
    </Principal>
     
     
  )
}
