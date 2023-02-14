import { FC, memo } from 'react';
import { INITIAL_PERCENT } from '../../core/constants/calculator';

import './InputRange.scss';

type InputType = 'currency' | 'percent' | 'months';

interface IInputProps {
  title: string;
  value: number;
  setValue: (value: number) => void;
  type: InputType;
  max: number;
  min: number;
  percent?: number;
}

/** В зависимости от типа input, подставляет измеряемое значение. */
const renderInputRangeValue = (
  type: InputType,
  value: number,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
) => {
  if (type === 'currency') {
    return <span>₽</span>;
  }
  if (type === 'percent') {
    return <input className="input-range__percent" onChange={handleChange} value={`${value}%`} max={60} min={10} />;
  }
  if (type === 'months') {
    return <span>мес.</span>;
  }
};

const InputRangeComponent: FC<IInputProps> = ({
  title,
  value,
  setValue,
  type,
  min,
  max,
  percent = INITIAL_PERCENT,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, '');
    if (Number(value) > max) {
      setValue(max);
      return;
    }
    if (Number.isNaN(Number(value))) {
      setValue(min);
      return;
    }
    setValue(Number(value));
  };

  return (
    <div className="input-range">
      <span className="input-range__title gilroy-s">{title}</span>
      <div className="input-range__input">
        <input
          className="input-range__value nekst-black-m"
          value={value.toLocaleString('ru')}
          onChange={handleChange}
        />
        <div className="input-range__type nekst-black-m">{renderInputRangeValue(type, percent, handleChange)}</div>
      </div>
      <input
        className="input-range__slider"
        type="range"
        min={min}
        max={max}
        defaultValue={type === 'percent' ? INITIAL_PERCENT : value}
        onChange={(e) => setValue(e.target.valueAsNumber)}
      />
    </div>
  );
};

export const InputRange = memo(InputRangeComponent);
