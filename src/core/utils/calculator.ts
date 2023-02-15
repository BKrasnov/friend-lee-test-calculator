/**
 * Рассчитать ежемесячный платеж.
 * @param carCost Стоимость автомобиля.
 * @param contribution Первоначальный взнос.
 * @param leasingPeriod Срок лизинга.
 */
export function calculateMonthPay(carCost: number, contribution: number, leasingPeriod: number): number {
  const monthPay =
    (carCost - contribution) * ((0.05 * Math.pow(1 + 0.05, leasingPeriod)) / (Math.pow(1 + 0.05, leasingPeriod) - 1));
  return Math.ceil(monthPay);
}

/**
 * Рассчитать стоимость договора лизинга.
 * @param carCost Стоимость автомобиля.
 * @param contribution Первоначальный взнос.
 * @param leasingPeriod Срок лизинга.
 */
export function calculateLeasingAgreementValue(carCost: number, contribution: number, leasingPeriod: number): number {
  const leasingAgreementValue = contribution + leasingPeriod * calculateMonthPay(carCost, contribution, leasingPeriod);
  return leasingAgreementValue;
}
