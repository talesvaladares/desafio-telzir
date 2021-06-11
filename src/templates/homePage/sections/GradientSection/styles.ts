import styled from 'styled-components';

export const Gradient = styled.div`
 
  height: 100vh;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;

  background: rgb(255,226,180);
  background: linear-gradient(90deg, rgba(255,226,180,1) 0%, rgba(242,206,154,1) 35%, rgba(254,189,118,1) 100%);

`;

export const Header = styled.header`
  margin: 0 auto;

  max-width: 144rem;

  height: 6.0rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3.2rem;

  > img {
    width: 5.8rem;
    height: 5.8rem;
  }

  nav {
    width: 40rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
      cursor: pointer;
      transition: all 300ms ease-in-out;

      &:hover{
        color: #AB49CE;
      }
    }

    > button {
      width: 14rem;
      height: 4.0rem;
      
      color: #fff;
      background: #AB49CE;

      border: 0;
      border-radius: 8px;
      transition: all 300ms ease-in-out;

      &:hover{
        filter: brightness(0.8);
      }   
       
    }
  }

  @media(max-width: 415px){
    display: none;
  }

`;

export const DropDownMenu = styled.header`

  > svg{
    position: absolute;

    top: 2rem;
    left: 2rem;
  }

  > div {
    position: absolute;
    top: 0;
    left: 0;

    height: 100vh;
    width: 80%;
    background:  rgba(0, 0, 0, 0.9);
    /* opacity: 0.8; */

    transition: all 300ms ease-in-out;

    > svg{
      position: absolute;
      display: block;
      top: 2rem;
      left: 2rem;
      pointer-events: all;
     

      color: red;
    }
    nav {
      
      display: block;
      width: 100%;
      height: 100%;

      padding: 20.0rem 0;

      font-size: 3.2rem;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

    a{
      color: #fff;
      cursor: pointer;
      transition: all 300ms ease-in-out;

      &:hover{
        color: #AB49CE;
      }
    }

    > button {
      width: 14rem;
      height: 4.0rem;
      
      color: #fff;
      background: #AB49CE;

      border: 0;
      border-radius: 8px;
      transition: all 300ms ease-in-out;

      &:hover{
        filter: brightness(0.8);
      }   
       
    }
  }

  }

  @media(min-width: 416px){
    display: none;
  }

`;

export const Banner = styled.footer`
  max-width: 120rem;
  padding: 0 0.8rem;
  margin: auto;

  display: flex;
  justify-content: space-between;

  img{
    max-width: 60rem;
    width: 100%;
  }

  @media(max-width: 760px){
    > img{
      display: none;
    }
  }

`;

export const Text = styled.section`
  max-width: 60rem;
  
  > h1 {
    font-size: 6.0rem;
  }

  > h2 {
    font-size: 6.0rem;
  }

  > p{
    margin-top: 1.8rem
  }

  > button {
    background: transparent;
    color: #AB49CE;
    font-weight: bold;

    width: 14rem;
    height: 4.0rem;

    border: 1px solid #AB49CE;
    border-radius: 8px;

    margin-top: 3.2rem;

    transition: all 300ms ease-in-out;
    
    &:hover{
      filter: brightness(0.8);
    }
  }
`