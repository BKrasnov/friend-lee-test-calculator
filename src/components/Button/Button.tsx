import { FC, memo } from 'react';

import './Button.scss';

interface IButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const ButtonComponent: FC<IButtonProps> = ({ children, disabled = false }) => {
  return (
    <>
      <button type="submit" className="button nekst-black-m" disabled={disabled}>
        {children}
      </button>
    </>
  );
};

export const Button = memo(ButtonComponent);
