import {FirstCardBenefic} from '../../components/FirtsCardBenefic';
import {SecondaryCardBenefic} from '../../components/SecondaryCardBenefic';
import {ThirdCardBenefic} from '../../components/ThirdCardBenefic';

import {BeneficContainer, BeneficsContentContainer, BeneficsList, Side} from './styles';

export function BeneficsSection() {
  return (
    <BeneficContainer id="vantagens">
      <BeneficsContentContainer>
        <Side>
          <h1>Vantagens do FaleMais</h1>
        </Side>
        <BeneficsList>
          <FirstCardBenefic />
          <SecondaryCardBenefic />
          <ThirdCardBenefic />
        </BeneficsList>
      </BeneficsContentContainer>
    </BeneficContainer>
  );
}