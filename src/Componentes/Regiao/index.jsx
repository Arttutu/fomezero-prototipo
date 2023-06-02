import React from 'react'
import Titulo from '../Titulo'
import styled from 'styled-components'
import Imagem from '../Imagem'
import bahia from "./Bahia.jpg"
import Subtitulo from '../Subtitulo'
import { backgroundColor, corSecundaria, font } from '../UI/variaveis'

const ImagemRegiao = styled.img`
    max-width: 100%;
    height: auto;
    margin: 50px 0;
    @media (min-width: 1280px){
   max-width: 500px;
  }
  @media (min-width: 1024px){
   max-width: 500px;
  }
`;
const ContainerRegiao  =styled.div`
    background-color: ${backgroundColor};
    margin: 100px 2.5rem;
    display: flex;
  
    align-items: center;
    text-align: center;
    @media (max-width:768px){
        flex-direction: column;
    }
`
const ContainerPraga =styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
   
    @media (max-width:768px){
        width: 100%;
    }
`
const ContainerImagem =styled.div`
    width: 50%;
    background-color: black;
    margin: 50px;
    border-radius: 5%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-top: 20px;
    @media (max-width:768px){
      width: 90%;
    }
`
const Lista = styled.ol`
     list-style-type: upper-roman;

   

`
const ListaItem = styled.ul`

    font-style: ${font};
    font-size: 22px;
    color: ${corSecundaria};
    padding: 10px;

`
export default function Regiao() {
  return (
    <>
        <ContainerRegiao>
            <ContainerImagem>
                <Titulo secondary>Bahia</Titulo>
                <ImagemRegiao src={bahia}/>
                <Subtitulo secondary>Seu plantio :</Subtitulo>
                <Lista>
                    <ListaItem>Milho</ListaItem>
                    <ListaItem>Cana de Açucar</ListaItem>
                    
                </Lista>
            </ContainerImagem>
            <ContainerPraga>
                <Subtitulo secondary>Lista de pragas</Subtitulo>
                <Lista>
                    <ListaItem>Lagarta-do-cartucho (Spodoptera frugiperda)</ListaItem>
                    <ListaItem>Broca-do-colmo (Diatraea saccharalis)</ListaItem>
                    <ListaItem>Lagarta-elasmo (Elasmopalpus lignosellus)</ListaItem>
                    <ListaItem>Percevejo-barriga-verde (Dichelops melacanthus)</ListaItem>
                    <ListaItem>Lagarta-rosca (Agrotis ipsilon)</ListaItem>
                    <ListaItem>Lagarta-do-ovário (Helicoverpa zea)</ListaItem>
                    <ListaItem>Tripes-do-milho (Frankliniella williamsi)</ListaItem>
                    <ListaItem>Pulgões (Rhopalosiphum maidis)</ListaItem>
                    <ListaItem>Ácaros (Tetranychus urticae)</ListaItem>
                    <ListaItem>Gorgulho-do-milho (Sitophilus zeamais)</ListaItem>
                    <ListaItem>Broca-da-cana-de-açúcar (Diatraea saccharalis)</ListaItem>
                    <ListaItem>Cigarrinha-da-raiz (Mahanarva fimbriolata)</ListaItem>
                    <ListaItem>Percevejo-da-cana (Dermolepida albohirtum)</ListaItem>
                    <ListaItem>Mosca-dos-estádios (Nephopteryx sp.)</ListaItem>
                    <ListaItem>Cochonilha-da-raiz (Pseudococcus calceolariae)</ListaItem>
                    <ListaItem>Bicudo-da-cana (Sphenophorus levis)</ListaItem>
                    <ListaItem>Formigas cortadeiras (Atta spp., Acromyrmex spp.)</ListaItem>
                    <ListaItem>Broca-gigante (Telchin licus)</ListaItem>
                   
                </Lista>
            </ContainerPraga>
        </ContainerRegiao>
    </>
  )
}
