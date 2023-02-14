import { FC, memo } from 'react';

import './TextField.scss';

interface ITextFieldProps {
  title: string;
  price: string;
  currency: '₽';
}

const TextFieldComponent: FC<ITextFieldProps> = ({ title, price, currency }) => {
  return (
    <div className="text-field">
      <span className="text-field__title gilroy-s">{title}</span>
      <div className="text-field__price nekst-black-xl">
        <span>{price}</span>
        <span className="text-field__currency">{currency}</span>
      </div>
    </div>
  );
};

export const TextField = memo(TextFieldComponent);