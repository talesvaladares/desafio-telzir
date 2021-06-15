type ConvertInTariffProps = {
  origem: string;
  destiny: string;
}


export const convertInTarrif = ({origem , destiny}: ConvertInTariffProps):  number  => {
  const tariffs = {
    '1116': 1.9,
    '1611': 2.9,
    '1117': 1.7,
    '1711': 2.7,
    '1118': 0.9,
    '1811': 1.9,

  }
  return tariffs[`${origem}${destiny}`] ? tariffs[`${origem}${destiny}`] : - 1;
}