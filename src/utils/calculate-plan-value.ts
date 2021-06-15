import {convertInTarrif} from './convertInTariff';

type CalculatePlanValueProps = {
  minutesUsed: string;
  plan: string;
  origem: string;
  destiny: string;

}
type CalculatePlanValueResults = {
  totalWithPlan: string;
  totalNoPlan: string;

}

type CalcProps = {
  minutesUsed: number;
  plan: string;
  tariff: number;
  limitMinutes: number
}

export function formatAmount(amount: number){

  return  Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export function calc({plan, tariff , minutesUsed, limitMinutes } : CalcProps): CalculatePlanValueResults {
  if(tariff === -1){
    throw new Error;
  }

  const planValue = parseFloat(plan);
  let excessMinutes = 0 ;

  if(minutesUsed < limitMinutes){
    return {
      totalWithPlan: formatAmount(planValue),
      totalNoPlan: formatAmount(minutesUsed * tariff),
      
    }
  }
  else{
    excessMinutes = minutesUsed - limitMinutes;
    const amount = parseFloat(plan)  + (excessMinutes * (tariff + (tariff * 0.1)));

    return {
      totalWithPlan: formatAmount(amount),
      totalNoPlan: formatAmount(minutesUsed * tariff),
    }
  }

}

export function calculatePlanValue({origem, destiny, plan, minutesUsed}: CalculatePlanValueProps) : CalculatePlanValueResults {
    
  
  const minutesUsedConverted = parseInt(minutesUsed);

  try{
      //plano de 29.9
    if (plan === '29.9'){
      return calc({plan, tariff: convertInTarrif({origem, destiny}), minutesUsed : minutesUsedConverted, limitMinutes: 30  }) 
    }
    //plano de 59.9
    if (plan === '59.9'){
      return calc({plan, tariff: convertInTarrif({origem, destiny}), minutesUsed : minutesUsedConverted, limitMinutes: 60  })
    }

    //plano de 119.9
    if (plan === '119.9'){
      return calc({plan, tariff: convertInTarrif({origem, destiny}), minutesUsed : minutesUsedConverted, limitMinutes: 120 })
    }
  }catch(error){
    return {
      totalNoPlan: '',
      totalWithPlan: '',
    }
  }
  
  
}