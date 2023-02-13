import { FC } from 'react';

import { CalculatorPage } from './features/calculator';

export const App: FC = () => {
  return (
    <div className="container">
      <CalculatorPage />
    </div>
  );
};
