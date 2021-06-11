import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #E5E5E5;
  border-radius: 8px;

  padding: 1.6rem 3.2rem;
  max-width: 28rem;

  margin-bottom: 1.6rem;

`;

export const HeaderCard = styled.header`
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img{
    height: 6.0rem;
    width: 6.0rem;
  }

  p{
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

type PriceLabelProps = {
  custom?: boolean;
}

export const PriceLabel = styled.div<PriceLabelProps>`

  margin: 0.8rem 0;

  display: flex;
  justify-content: center;

  p{
    font-weight: 500;
    font-size: ${props => !props.custom? '4.0rem': '1.6rem'};
  }

  span p{
    font-weight: 500;
    font-size: 1.6rem;
  }
`;

export const Slogan = styled.p`
  text-align: center;
  font-size: 1.4rem;
`;

export const DescriptionPlanContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    font-size: 1.4rem;
    font-weight: 500;
    margin-top: 0.8rem;
  }

  ul{
    color: #666666;
    list-style: none;
  
    li::before{
      content: "✓ ";
      color: green;
    }

  }

  > button {

    height: 4.0rem;
    width: 13rem;

    color: #AB49CE;
    font-size: 1.6rem;
    font-weight: bold;

    background: transparent;
    
    border: 1px solid #AB49CE;
    border-radius: 8px;

    margin-top: 3.2rem;

    transition: all 300ms ease-in-out;


    &:hover{
      filter: brightness(0.8);
    }
  }

`;