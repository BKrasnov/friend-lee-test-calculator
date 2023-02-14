import { FC, memo, useState } from 'react';

import { InputRange } from '../../components/InputRange';
import { TextField } from './components/TextField';
import { Button } from '../../components/Button';

import { INITIAL_PERCENT } from '../../core/constants/calculator';

import './CalculatorPage.scss';

const MIN_CAR_COST = 1_500_000;
const MAX_CAR_COST = 10_000_000;

const MIN_PERCENT_CONTRIBUTION = 10;
const MAX_PERCENT_CONTRIBUTION = 60;

const MIN_LEASING_PERIOD = 6;
const MAX_LEASING_PERIOD = 120;

const INITIAL_CAR_COST = 3_300_300;

const INITIAL_LEASING_PERIOD = 60;

const CalculatorPageComponent: FC = () => {
  const [carCost, setCarCost] = useState(INITIAL_CAR_COST);
  const [percent, setPercent] = useState(INITIAL_PERCENT);
  const [leasingPeriod, setLeasingPeriod] = useState(INITIAL_LEASING_PERIOD);

  const contribution = Math.ceil((carCost * percent) / 100);

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
              max={MAX_CAR_COST}
              min={MIN_CAR_COST}
            />
            <InputRange
              setValue={setPercent}
              title="Первоначальный взнос"
              type="percent"
              value={contribution}
              percent={percent}
              max={MAX_PERCENT_CONTRIBUTION}
              min={MIN_PERCENT_CONTRIBUTION}
            />
            <InputRange
              setValue={setLeasingPeriod}
              title="Срок лизинга"
              type="months"
              value={leasingPeriod}
              min={MIN_LEASING_PERIOD}
              max={MAX_LEASING_PERIOD}
            />
          </div>
          <div className="calculator__bottom">
            <div className="calculator__cost">
              <TextField title="Сумма договора лизинга" price={'41 467 313'} currency="₽" />
              <TextField title="Ежемесячный платеж" price={'114 455'} currency="₽" />
            </div>
            <Button>Оставить заявку</Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export const CalculatorPage = memo(CalculatorPageComponent);
