import { createContext, FC, ReactNode, useState } from 'react';

// Types
export type NavItem = {
  title: string;
  icon_name: string;
  is_active: boolean;
  component: FC
};

export type CurrencyOption = {
  currency: string;
  symbol: string;
  rate: number;
}

export type GlobalContextProps = {
  currency: string;
  changeCurrency: (newCurrency: string) => void;
  getCurrency: () => CurrencyOption;
};

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

  const handleChangeCurrency = (newCurrency: string) => {
    setCurrency(newCurrency);
  };

  const getCurrency = () => {
    for (let currencyOption of currencyOptions) {
      if (currency === currencyOption.currency) {
        return currencyOption;
      }
    }
    return currencyOptions[0];
  };

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
