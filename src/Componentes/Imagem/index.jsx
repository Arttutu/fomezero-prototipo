import styled from "styled-components";

const Imagem = styled.img`
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.308), 0 6px 20px 0 rgba(0, 0, 0, 0.452);
  max-width: 100%;
  height: auto;
  @media (min-width: 1280px){
   max-width: 600px;
  }
  @media (min-width: 1024px){
   max-width: 600px;
  }
  
`;
export default Imagem