import styled from 'styled-components';

export const Container = styled.div`

  /* background: green; */

  margin: 0 auto;

  max-width: 80rem;
  /* height: 26rem; */

  padding-left: 10rem;
  padding-top: 3.2rem;
  padding-bottom: 3.2rem;

  display: flex;
  justify-content: space-between;

  position: relative;

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

export const Table = styled.div`

  /* background: red; */

  margin: auto;
  width: 400px;

  table{
    width: 100%;
    border: 1px solid #D0D0D0;
    border-radius: 8px;
    padding: 1.6rem 3.2rem;

    td, tr, th{
      text-align: center;
      height: 30px;
    }

    td{
      font-size: 1.4rem;
    }

    th, td{
      border-bottom: 1px solid #D0D0D0;
    }
    
    th{
     color: #AB49CE;
     font-size: 1.8rem;
    }

  }
`;

