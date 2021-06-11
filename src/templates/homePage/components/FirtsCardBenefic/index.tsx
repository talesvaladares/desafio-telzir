import {Container, Label, Image} from './styles';
export function FirstCardBenefic(){
  return (
    <Container>
      <Label>
        <h1>
          Lorem ipsum dolor sit amet
        </h1>
        <p>
          Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex 
          ea commodo consequat.
        </p>
      </Label>
      <Image src="/assets/devices.png" alt="celulares" />
      
    </Container>
  )
}