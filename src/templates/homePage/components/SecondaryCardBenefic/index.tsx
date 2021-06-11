import {FiMapPin , FiPhoneCall , FiX} from 'react-icons/fi'
import {Container, Label, PriceContainer, PriceLabel} from './styles';

export function SecondaryCardBenefic(){
  return (
    <Container>
      <Label>
        <h1>
          Duis aute irure dolor in reprehenderit
        </h1>
        <p>
          Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex 
          ea commodo consequat.
        </p>
      </Label>
      <PriceContainer>
        <div className="icons">
          <div>
            <FiMapPin size={40} />
            <p>Lorem</p>
          </div>
          <div className="cross">
            <FiX size={40}/>
          </div>
          <div>
            <FiPhoneCall size={40}/>
            <p>Ipsom</p>
          </div>
        </div>
        <PriceLabel>
          <p>00,</p>
          <span>
              <p>
                00
              </p>
              <p>
                /mês
              </p>
          </span>
        </PriceLabel>
      </PriceContainer>
      
    </Container>
  )
}