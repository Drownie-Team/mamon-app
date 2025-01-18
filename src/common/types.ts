export type WalletItem = {
    title: string;
    balance: number;
    balance_rate: number;
    color: string;
    icon: string;
};

export type NavItem = {
    title: string;
    icon_name: string;
    is_active: boolean;
    component: React.FC
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
