import { FC } from 'react';

import { CalculatorPage } from './features/calculator';

import './App.scss';
import './style/index.scss';

export const App: FC = () => {
  return (
    <div className="container">
      <CalculatorPage />
    </div>
  );
};
