import { FC, memo } from 'react';

import './Button.scss';

interface IButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.SyntheticEvent) => void;
}

const ButtonComponent: FC<Readonly<IButtonProps>> = ({ children, onClick, disabled = false }) => {
  return (
    <>
      <button type="button" className="button loading nekst-black-m" disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export const Button = memo(ButtonComponent);
