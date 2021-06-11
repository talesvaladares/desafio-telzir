import {
  Container,
  HeaderCard,
  PriceLabel,
  Slogan,
  DescriptionPlanContainer
} from './styles';

type CardPlanProps = {
  srcImage: string;
  title: string;
  price?: string;
  slogan: string;
  subtitle: string;
  custom?: boolean;
}

export function CardPlan({ srcImage, title, price = "00.00", slogan, subtitle, custom = false }: CardPlanProps) {

  const value = price.split('.');

  return (
    <Container>
      <HeaderCard>
        <img src={srcImage} alt={title} />
        <p>{title}</p>
      </HeaderCard>
      <PriceLabel custom={custom}>
      {
        !custom ? (
         <>
           <p>{value[0]},</p>
            <span>
                <p>
                  {value[1]}
                </p>
                <p>
                  /mês
                </p>
            </span>
         </>
        )
        :(<p style={{textAlign: 'center', fontWeight: 500}} > Customize o plano do seu jeito!</p>)
      }
      </PriceLabel>
      <Slogan>
        {slogan}
      </Slogan>
      <DescriptionPlanContainer>
        <p>{subtitle}</p>
        <ul>
          <li>Unlimited file uploads</li>
          <li>Unlimited file uploads</li>
          <li>Unlimited file uploads</li>
          <li>Unlimited file uploads</li>
        </ul>

        <button type="button">Contratar</button>
      </DescriptionPlanContainer>
    </Container>
  );
};

