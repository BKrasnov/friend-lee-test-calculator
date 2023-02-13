import { FC, memo } from 'react';

import './Button.scss';

const FormComponent: FC = () => {
  return <button>Кнопка</button>;
};

export const Form = memo(FormComponent);
