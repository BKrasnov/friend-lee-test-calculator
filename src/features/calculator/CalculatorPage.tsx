import { FC, memo } from 'react';

import { InputRange } from '../../components/InputRange';
import { TextField } from './components/TextField';
import { Button } from '../../components/Button';

import './CalculatorPage.scss';

const MIN_CAR_COST = 1_500_000;
const MAX_CAR_COST = 10_000_000;

const CalculatorPageComponent: FC = () => {
  return (
    <section className="calculator">
      <h1 className="h1 nekst-black-xl">Рассчитайте стоимость автомобиля в лизинг</h1>
      <div className="calculator__wrapper">
        <form className="calculator__form">
          <div className="calculator__range">
            <InputRange
              title="Стоимость автомобиля"
              type="currency"
              value={33303300}
              max={MAX_CAR_COST}
              min={MIN_CAR_COST}
            />
            <InputRange title="Первоначальный взнос" type="percent" value={420000} max={60} min={10} />
            <InputRange title="Срок лизинга" type="months" value={60} min={6} max={120} />
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
    </section>
  );
};

export const CalculatorPage = memo(CalculatorPageComponent);
