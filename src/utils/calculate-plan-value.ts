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

  //plano de 29.9
  if (plan === '29.9'){
    if(origem === '11' && destiny === '16'){
      return calc({plan, tariff : 1.90, minutesUsed : minutesUsedConverted, limitMinutes: 30  });
    }

    if(origem === '16' && destiny === '11'){
      return calc({plan, tariff : 2.90, minutesUsed : minutesUsedConverted, limitMinutes: 30  });
    }

    if(origem === '11' && destiny === '17'){
      return calc({plan, tariff : 1.70, minutesUsed : minutesUsedConverted, limitMinutes: 30  });
    }
    if(origem === '17' && destiny === '11'){
      return calc({plan, tariff : 2.70, minutesUsed : minutesUsedConverted, limitMinutes: 30  });
    }
    if(origem === '11' && destiny === '18'){
      return calc({plan, tariff : 0.90, minutesUsed : minutesUsedConverted, limitMinutes: 30  });
    }
    if(origem === '18' && destiny === '11'){
      return calc({plan, tariff : 1.90, minutesUsed : minutesUsedConverted, limitMinutes: 30  });
    }
  }

  //plano de 59.9
  if (plan === '59.9'){
    if(origem === '11' && destiny === '16'){
      return calc({plan, tariff : 1.90, minutesUsed : minutesUsedConverted, limitMinutes: 60  });
    }

    if(origem === '16' && destiny === '11'){
      return calc({plan, tariff : 2.90, minutesUsed : minutesUsedConverted, limitMinutes: 60  });
    }

    if(origem === '11' && destiny === '17'){
      return calc({plan, tariff : 1.70, minutesUsed : minutesUsedConverted, limitMinutes: 60  });
    }
    if(origem === '17' && destiny === '11'){
      return calc({plan, tariff : 2.70, minutesUsed : minutesUsedConverted, limitMinutes: 60  });
    }
    if(origem === '11' && destiny === '18'){
      return calc({plan, tariff : 0.90, minutesUsed : minutesUsedConverted, limitMinutes: 60  });
    }
    if(origem === '18' && destiny === '11'){
      return calc({plan, tariff : 1.90, minutesUsed : minutesUsedConverted, limitMinutes: 60  });
    }
  }

  //plano de 119.9
  if (plan === '119.9'){
    if(origem === '11' && destiny === '16'){
      return calc({plan, tariff : 1.90, minutesUsed : minutesUsedConverted, limitMinutes: 120  });
    }

    if(origem === '16' && destiny === '11'){
      return calc({plan, tariff : 2.90, minutesUsed : minutesUsedConverted, limitMinutes: 120  });
    }

    if(origem === '11' && destiny === '17'){
      return calc({plan, tariff : 1.70, minutesUsed : minutesUsedConverted, limitMinutes: 120  });
    }
    if(origem === '17' && destiny === '11'){
      return calc({plan, tariff : 2.70, minutesUsed : minutesUsedConverted, limitMinutes: 120  });
    }
    if(origem === '11' && destiny === '18'){
      return calc({plan, tariff : 0.90, minutesUsed : minutesUsedConverted, limitMinutes: 120  });
    }
    if(origem === '18' && destiny === '11'){
      return calc({plan, tariff : 1.90, minutesUsed : minutesUsedConverted, limitMinutes: 120  });
    }
  }
  return {
    totalNoPlan: '',
    totalWithPlan: '',
  }
}