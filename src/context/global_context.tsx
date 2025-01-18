import React, { createContext, ReactNode, useCallback, useState } from 'react';

// Types
import {
  CurrencyOption,
  GlobalContextProps,
} from '../common/types';

export const GlobalContext = createContext<GlobalContextProps>({
  currency: '',
  changeCurrency: () => {},
  getCurrency: () => ({currency: 'USD', symbol: '$', rate: 1}),
});

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<string>('IDR');
  const [currencyOptions, _setCurrencyOption] = useState<CurrencyOption[]>([
    {
      currency: 'USD',
      symbol: '$',
      rate: 1,
    },
    {
      currency: 'IDR',
      symbol: 'Rp',
      rate: 0.0000635,
    },
  ]);

  const handleChangeCurrency = useCallback((newCurrency: string) => {
    setCurrency(newCurrency);
  }, []);

  const getCurrency = useCallback(() => {
    for (let currencyOption of currencyOptions) {
      if (currency === currencyOption.currency) {
        return currencyOption;
      }
    }

    return currencyOptions[0];
  }, [currency, currencyOptions]);

  const defaultPropsValue: GlobalContextProps = {
    currency: currency,
    changeCurrency: handleChangeCurrency,
    getCurrency: getCurrency,
  };

  return (
    <GlobalContext.Provider value={defaultPropsValue}>
      {children}
    </GlobalContext.Provider>
  );
};
