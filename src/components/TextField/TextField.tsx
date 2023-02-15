import { FC, memo } from 'react';

import './TextField.scss';

interface ITextFieldProps {
  title: string;
  content: number;
  symbol: '₽';
}

const TextFieldComponent: FC<Readonly<ITextFieldProps>> = ({ title, content, symbol }) => {
  return (
    <div className="text-field">
      <span className="text-field__title gilroy-s">{title}</span>
      <div className="text-field__content nekst-black-xl">
        <span>{content.toLocaleString('ru')}</span>
        <span className="text-field__symbol">{symbol}</span>
      </div>
    </div>
  );
};

export const TextField = memo(TextFieldComponent);
