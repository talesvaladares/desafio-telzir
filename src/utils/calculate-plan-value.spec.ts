import {formatAmount, calc , calculatePlanValue} from './calculate-plan-value';

describe("Calculate plan value", () => {

  it("should convert a number to money" ,() => {

    const result = formatAmount(2);
    expect(result).toEqual("R$\xa02,00");

  });

  it("should calculate the plan", () => {

    const result = calc({plan: '29.9', tariff: 1.90 , limitMinutes: 30, minutesUsed: 60 });

    expect(result).toEqual(expect.objectContaining(({
      totalWithPlan: 'R$\xa092,60',
      totalNoPlan: 'R$\xa0114,00',

    })));
  });

  it("should calculate the plan with destiny and origem", () => {

    const result = calculatePlanValue({plan: '29.9', minutesUsed: '60', destiny: '16', origem: '11'});

    expect(result).toEqual(expect.objectContaining(({
      totalWithPlan: 'R$\xa092,60',
      totalNoPlan: 'R$\xa0114,00',
    })));
  });

  it("should return an empty object when passed a value not mapped by the function ", () => {

    const result = calculatePlanValue({plan: '29.9', minutesUsed: '60', destiny: '80', origem: '11'});

    expect(result).toEqual(expect.objectContaining(({
      totalWithPlan: '',
      totalNoPlan: '',
    })));
  });

});