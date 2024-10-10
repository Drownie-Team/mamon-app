import {createContext} from 'react';

export type NavItem = {
  title: string;
  icon_name: string;
  is_active: boolean;
};

export type GlobalContextProps = {
  navItems: NavItem[];
  changeNavigation: (index: number) => void;
  currency: string;
  changeCurrency: (newCurrency: string) => void;
};

const defaultPropsValue: GlobalContextProps = {
  navItems: [],
  changeNavigation: () => {},
  currency: '$',
  changeCurrency: () => {},
};

export const GlobalContext =
  createContext<GlobalContextProps>(defaultPropsValue);
