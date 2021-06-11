import styled from 'styled-components';

export const BeneficContainer = styled.div`
  height: 100vh;
  max-height: 1080px;

  overflow-y: auto;
  
`;

export const BeneficsContentContainer = styled.div`
  margin: 0 auto;
  max-width: 142,4rem;

  padding: 0 1.6rem;

  display: flex;
`;

export const Side = styled.div`
  height: 100vh;
  max-width: 30rem;

  padding-top: 3.2rem;

  > h1{
    font-size: 4.0rem;
  }

  @media(max-width: 1323px){
    display: none;
  }

`;

export const BeneficsList = styled.div`
  width: 100%;
`;

