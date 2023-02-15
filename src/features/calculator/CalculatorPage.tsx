import { FC, memo, useCallback, useMemo, useState } from 'react';

import { InputRange } from './components/InputRange';
import { Button } from '../../components/Button';
import { TextField } from '../../components/TextField';

import { INITIAL_CAR_COST, INITIAL_LEASING_PERIOD, INITIAL_PERCENT } from '../../core/constants/calculator';
import { calculateLeasingAgreementValue, calculateMonthPay } from '../../core/utils/calculator';

import './CalculatorPage.scss';

const MIN_CAR_COST = 1_500_000;
const MAX_CAR_COST = 10_000_000;
const MIN_PERCENT_CONTRIBUTION = 10;
const MAX_PERCENT_CONTRIBUTION = 60;
const MIN_LEASING_PERIOD = 6;
const MAX_LEASING_PERIOD = 120;

const CalculatorPageComponent: FC = () => {
  const [carCost, setCarCost] = useState(INITIAL_CAR_COST);
  const [percent, setPercent] = useState(INITIAL_PERCENT);
  const [leasingPeriod, setLeasingPeriod] = useState(INITIAL_LEASING_PERIOD);

  const [isDisabled, setIsDisabled] = useState(false);

  const contribution = Math.ceil((carCost * percent) / 100);

  const monthPay = useMemo(
    () => calculateMonthPay(carCost, contribution, leasingPeriod),
    [carCost, contribution, leasingPeriod]
  );
  const leasingAgreementValue = useMemo(
    () => calculateLeasingAgreementValue(carCost, contribution, leasingPeriod),
    [carCost, contribution, leasingPeriod]
  );

  const handleClick = useCallback(() => {
    console.log(1);
    setIsDisabled((prevState) => !prevState);
  }, []);

  return (
    <main className="calculator">
      <h1 className="h1 nekst-black-xl">Рассчитайте стоимость автомобиля в лизинг</h1>
      <div className="calculator__wrapper">
        <form className="calculator__form">
          <div className="calculator__range">
            <InputRange
              title="Стоимость автомобиля"
              type="currency"
              value={carCost}
              setValue={setCarCost}
              min={MIN_CAR_COST}
              max={MAX_CAR_COST}
            />
            <InputRange
              title="Первоначальный взнос"
              type="percent"
              value={contribution}
              percent={percent}
              setValue={setPercent}
              min={MIN_PERCENT_CONTRIBUTION}
              max={MAX_PERCENT_CONTRIBUTION}
            />
            <InputRange
              title="Срок лизинга"
              type="months"
              value={leasingPeriod}
              setValue={setLeasingPeriod}
              min={MIN_LEASING_PERIOD}
              max={MAX_LEASING_PERIOD}
            />
          </div>
          <div className="calculator__bottom">
            <div className="calculator__cost">
              <TextField title="Сумма договора лизинга" price={leasingAgreementValue} currency="₽" />
              <TextField title="Ежемесячный платеж" price={monthPay} currency="₽" />
            </div>
            <Button disabled={isDisabled} onClick={handleClick}>
              Оставить заявку
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export const CalculatorPage = memo(CalculatorPageComponent);
