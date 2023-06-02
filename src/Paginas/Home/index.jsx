import React from 'react'
import Conteudo from '../../Componentes/Conteudo'
import {backgroundColor, corSecundaria} from "../../Componentes/UI/variaveis"
import styled from 'styled-components'
import ConteudoInvertido from '../../Componentes/ConteudoIvertido';
import Informacao from '../../Componentes/Informacao';


export const Principal = styled.main`
    text-align: center;
    background-color: ${backgroundColor};
    width: 100%;
    margin: 0;
    padding-top: 80px;
   
`;
 const Container = styled.div`

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
        path ="/produto"
        />
        <ConteudoInvertido 
        titulo="As pragas" 
        subtitulo= "Os invasores"
        descricao = "As pragas agrícolas são organismos indesejáveis que atacam as plantas cultivadas, causando danos significativos à produção de alimentos. Esses organismos podem se multiplicar rapidamente, comprometendo a qualidade das colheitas, aumentando os custos de produção e impactando negativamente a oferta de alimentos. Para combatê-las, são necessárias práticas de manejo integrado, como controle biológico, rotação de culturas e o uso responsável de pesticidas, juntamente com o desenvolvimento contínuo de novas tecnologias e pesquisas no campo agrícola."
        imagem = "praga"
        />
        <Conteudo
        titulo="Monitoramento com Câmera na lavoura"
        subtitulo="Detecção precisa de Ácaros Vermelhos: Monitore sua lavoura com IA e câmeras em postes"
        descricao="Monitora a sua lavoura utilizando Inteligência Artificial 
        e câmeras estrategicamente posicionadas em postes. Com a combinação poderosa da IA e algoritmos avançados,
         nosso sistema detecta de forma precisa os Ácaros Vermelhos ! Alertando e acionando sitemas para combater o avanço do ácaro. 
      "
      path ="/"
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
