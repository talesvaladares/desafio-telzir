import {useEffect, useState} from 'react';
import {calculatePlanValue} from '../../../../utils/calculate-plan-value'

import {CardPlan} from '../../components/CardPlan';
import {
  Container,
  CalculatorContainer,
  CalculatorContainerContent,
  Label,
  BoxCalculator,
  HeaderPlans, 
  PlasContainer
} from './styles';
export function CalculationSection() {

  const [origem, setOrigem] = useState('');
  const [destiny, setDestiny] = useState('');
  const [time, setTime] = useState('');
  const [plan, setPlan] = useState('');
  const [totalWithPlan,setTotalWithPlan] = useState(' ');
  const [totalNoPlan,setTotalNoPlan] = useState(' ');

  useEffect(() => {
    const results = calculatePlanValue({destiny, origem, plan, minutesUsed: time});

    if(results){
      setTotalWithPlan(results.totalWithPlan);
      setTotalNoPlan(results.totalNoPlan);
    }

  },[plan, origem, destiny, time]);

  return (
    <Container id="calculo">
      <CalculatorContainer>
        <CalculatorContainerContent>
          <Label>
            <h1>
              Faça o cálculo do FaleMais
            </h1>
            <p>
              Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </Label>
          <BoxCalculator>
            <header>
              <div>
                <label htmlFor="origem">ORIGEM</label>
                <select value={origem} className="origem" onChange={(e) => setOrigem(e.target.value)}>
                  <option value="" disabled hidden>Escolher origem</option>
                  <option value="11" >011 - São Paulo</option>
                  <option value="16">016 - Rio de Janeiro</option>
                  <option value="17">017 - Belo Horizonte</option>
                  <option value="18">018 - Salvador</option>
                </select>
              </div>
              <div>
                <label htmlFor="destino" >DESTINO</label>
                <select value={destiny} className="destino" onChange={e => setDestiny(e.target.value)} >
                  <option value="" disabled hidden>Escolher destino</option>
                  <option value="11" >011 - São Paulo</option>
                  <option value="16">016 - Rio de Janeiro</option>
                  <option value="17">017 - Belo Horizonte</option>
                  <option value="18">018 - Salvador</option>
                </select>
              </div>
              <div>
                <label htmlFor="tempo" >TEMPO</label>
                {/* <select>
                  <option className="tempo" value="" selected disabled hidden>Escolher tempo</option>
                  <option value="30" >30 mins</option>
                  <option value="60">60 mins</option>
                  <option value="120">120 mins</option>
                </select> */}
                <input className="tempo" value={time} onChange={e => setTime(e.target.value)} placeholder="Tempo em minutos" type="number" />
              </div>
            </header>
            <div className="select-planos">
              <label htmlFor="plano" >Plano</label>
              <select value={plan} className="plano" onChange={e => setPlan(e.target.value)}>
                <option value=""  disabled hidden>Escolher o plano</option>
                <option value="29.9" >Fale mais 30 </option>
                <option value="59.9">Fale mais 60</option>
                <option value="119.9">Fale mais 120</option>
              </select>
            </div>
            <footer>
              <div>
                <span>Com o plano</span>
                <span>{totalWithPlan !== '' ? totalWithPlan : 'R$ 0,00'}</span>
              </div>
              <div>
                <span>Sem o plano</span>
                <span>{totalNoPlan !== '' ? totalNoPlan : 'R$ 0,00'}</span>
              </div>
            </footer>
          </BoxCalculator>
        </CalculatorContainerContent>
        <HeaderPlans>
          <h2>
            Planos
          </h2>
          <p>
            Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </HeaderPlans>
          <PlasContainer>
            <CardPlan
              srcImage="/assets/plan30.png"
              title="FaleMais 30"
              price="29.90"
              slogan="For organizing every corner of your life. "
              subtitle="Everything in Personal, plus"
            />
             <CardPlan
              srcImage="/assets/plan60.png"
              title="FaleMais 60"
              price="59.90"
              slogan="For organizing every corner of your life. "
              subtitle="Everything in Personal, plus"
            />
             <CardPlan
              srcImage="/assets/plan120.png"
              title="FaleMais 120"
              price="119.90"
              slogan="For organizing every corner of your life. "
              subtitle="Everything in Personal, plus"
            />
             <CardPlan
              srcImage="/assets/planPlus.png"
              title="Personalizado"
              custom
              slogan="For organizing every corner of your life. "
              subtitle="Everything in Personal, plus"
            />
          </PlasContainer>
      </CalculatorContainer>
    </Container>
  );
}