import styled from 'styled-components';

export const Container = styled.div`

  margin: 0 auto;

  max-width: 80rem;
  /* height: 26rem; */

  padding: 3.2rem 3.2rem 3.2rem 10rem;

  display: flex;
  justify-content: space-between;

  position: relative;

  &::after{
    content: " ";
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

  @media(max-width: 437px){
    overflow-x: auto;
  }
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

export const PriceContainer = styled.div`
  width: 400px;
  margin: auto;
  display: flex;
  justify-content: space-between;

  .icons{
    width: 200px;
    display: flex;
    justify-content: space-between;

    font-size: 1.4rem;
    

    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: 300;
     
      p{
        margin-top: 1.5rem;
      }
    }

    .cross{
      transform: translateX(30%) rotate(-45deg);
    }

    svg{
      color: #666666;
    }

    p{
      color: #666666;
    }
  }
`;

export const PriceLabel = styled.div`

  display: flex;
  color: #AB49CE;

  p{
    font-weight: 500;
    font-size: 5.6rem;
  }

  span p{
    font-weight: 500;
    font-size: 2.4rem;
  }

`;