import styled from 'styled-components';


export const FooterContainer = styled.footer`
  
  background: #FFE8D3;
  overflow-y: auto;

  margin-top: 20rem;

  > p{
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1.6rem 0;

    position: relative;

    > span img {
      margin-right: 0.8rem;
    }

    &::before{
      content: "";
      width: 98%;
      height: 1px;
      position: absolute;
      top: 0;
      background: #CBB7A5;
      display: flex;
      justify-content: center;

    }
  }

`;

export const FooterContainerContent = styled.div`

  margin: 0 auto;
  max-width: 142,4rem;
  padding: 0 1.6rem;
  text-align: center;


  ul{
    
    list-style: none;

    .heading{
      font-weight: bold;
      font-size: 1.8rem;
    }

    li{
      font-size: 1.6rem;
      line-height: 1.6;
    }
  }

  ul:first-child{
    margin-top: 1.6rem;
  }

  ul:last-child{
    margin-bottom: 1.6rem;
    position: relative;
  }

  ul + ul {
    margin-top: 1.6rem;
  }

  p{
    margin: 4.6rem 0;
  }

  @media(min-width: 760px){
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 1020px){

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    text-align: start;
  }

  @media(min-width: 1280px){

    display: grid;
    grid-template-columns: repeat(5, 1fr);

    text-align: start;
  }

`;