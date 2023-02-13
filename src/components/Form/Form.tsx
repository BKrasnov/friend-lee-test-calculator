import { FC, memo } from 'react';

import './Form.scss';

const FormComponent: FC = () => {
  return (
    <>
      <span>Стоимость...</span>
      <div>Форма</div>
    </>
  );
};

export const Form = memo(FormComponent);
