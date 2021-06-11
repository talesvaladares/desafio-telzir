import styled from 'styled-components';

export const Container = styled.div`

  margin: 0 auto;

  max-width: 80rem;
  /* height: 26rem; */

  padding-left: 10rem;
  padding-top: 3.2rem;
  padding-bottom: 3.2rem;

  display: flex;
  justify-content: space-between;

  position: relative;

  &::after{
    content: "";
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 100%;
    background: #D0D0D0;    
  }

  @media(max-width: 1125px){
    padding: 3.2rem;
  }

  @media(max-width: 1180px){
    flex-direction: column;
    align-items: center;
    padding-left: 1.6rem;
  }
/* 
  @media(max-width: 768px){
    
  } */
`;

export const Label = styled.div`

  max-width: 360px;
  

  > p{
    margin-top: 1.6rem;
    color: #666666;
  }

  @media(max-width: 1180px){
    text-align: center;
  }

`;

export const Image = styled.img`
  margin: auto;
`;