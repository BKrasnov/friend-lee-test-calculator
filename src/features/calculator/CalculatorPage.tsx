import { FC, memo } from 'react';

import { Form } from '../../components/Form';

const CalculatorPageComponent: FC = () => {
  return (
    <div>
      <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
      <section>
        {/* Общий контейнер для forms и TextFields */}
        <div>
          <Form />
          <Form />
          <Form />
        </div>
        <div>
          <span>Сумма договора лизинга</span>
          <div>4 467 313 Р</div>
        </div>
      </section>
    </div>
  );
};

export const CalculatorPage = memo(CalculatorPageComponent);
