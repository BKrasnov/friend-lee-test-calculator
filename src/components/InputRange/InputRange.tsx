import { FC, memo, useState } from 'react';

import './InputRange.scss';

type InputType = 'currency' | 'percent' | 'months';

interface IInputProps {
  title: string;
  value: number;
  type: InputType;
  max?: number;
  min?: number;
}

const renderInputRangeValue = (type: InputType, value: number) => {
  if (type === 'currency') {
    return <span>₽</span>;
  }
  if (type === 'percent') {
    return <span>13%</span>;
  }
  if (type === 'months') {
    return <span>м</span>;
  }
};

const InputRangeComponent: FC<IInputProps> = ({ title, value, type, min, max }) => {
  const [sliderValue, setSlider] = useState(0);

  return (
    <div className="input-range">
      <span className="input-range__title gilroy-s">{title}</span>
      <div className="input-range__input">
        <input className="input-range__value nekst-black-m" value={sliderValue}></input>
        <div className="input-range__type nekst-black-m">{renderInputRangeValue(type, value)}</div>
      </div>
      <input
        className="input-range__slider"
        type="range"
        min={min}
        max={max}
        value={sliderValue}
        onChange={(e) => setSlider(e.target.valueAsNumber)}
      />
    </div>
  );
};

export const InputRange = memo(InputRangeComponent);
