import ResultBox from './ResultBox';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup} from '@testing-library/react';

  describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });

    it('should render proper info about conversion when PLN -> USD', () => {
        const testCases = [
            { amount: '100', from: 'PLN', to: 'USD', result: 'PLN 100.00 = $28.57'},
          //  { amount: '20', from: 'USD', to: 'PLN' },
            { amount: '200', from: 'PLN', to: 'USD', result: 'PLN 200.00 = $57.14' },
            { amount: '1', from: 'PLN', to: 'USD', result: 'PLN 1 = $0.29' },
          //  { amount: '345', from: 'USD', to: 'PLN' },
      ];

      for(const testObj of testCases) {
        
        render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);
        const output = screen.getByTestId('test');
        expect(output).toHaveTextContent(testObj.result);
        cleanup();
      }
    })
   
});


