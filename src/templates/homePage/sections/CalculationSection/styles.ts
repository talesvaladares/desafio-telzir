import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

`;

export const CalculatorContainer = styled.div`
  width: 100%;
  height: 30rem;
  background: #FFE8D3;
`;

export const CalculatorContainerContent = styled.div`
  max-width: 142,4rem;
  height: 30rem;
  
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.6rem;

  @media(max-width: 437px){
    overflow-x: auto;
  }
 
`;

export const Label = styled.div`

  max-width: 36rem;

  > h1{
    font-size: 4.0rem;
  }

  > p {
    color: #666666;
  }

  @media(max-width: 1080px){
    display: none;
  }

`;

export const BoxCalculator = styled.div`

  height: 20rem;
  width: 52rem;

  background: #ffffff;

  border-radius: 8px;

  padding: 1.6rem;

  header{
    
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;

    padding-bottom: 1.6rem;
    border-bottom: 1px solid #A8A8A8;

    div{
      /* display: flex;
      flex-direction: column; */
         

      label, select, option {
        font-size: 1.4rem;
      }

      select{
        border: none;
        background: #ffffff;
        color: #A8A8A8;

        font-size: 1.2rem;

        option{
          color: #000000;
        }

      }
    
    }
    input[type=number]::-webkit-inner-spin-button { 
      -webkit-appearance: none;
    }

    input.tempo {
      border: none;
      font-size: 1.2rem;
      outline: 0;
      
      &::placeholder{
        color: #A8A8A8;
        font-size: 1.2rem;
      }
      
    }
    
  }

  div.select-planos{
    margin-top: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    font-size: 1.4rem;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid #A8A8A8;


    label, select, option {
      font-size: 1.4rem;
    }

    select{
      border: none;
      background: #ffffff;
      color: #A8A8A8;

      font-size: 1.2rem;

      option{
        color: #000000;
               
      }

    }
  }
  footer{

    margin-top: 1.6rem;

    div{
      display: flex;
      justify-content: space-between;

      font-size: 1.4rem;
    }
  }

  @media(max-width: 1080px){
    margin: 0 auto;
  }

`;

export const HeaderPlans = styled.header`
  text-align: center;
  max-width: 46rem;
  
  margin: 3.2rem auto;

  h2{
    font-size: 3.2rem;
  }

  p{
    font-size: 1.8rem;
    color: #666666;
    margin-top: 1.6rem;
  }
  
`;

export const PlasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: calc(100vh - 30rem);
  overflow-y: auto;

  @media(min-width: 760px){
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

`;

