import React from 'react';
import { GlobalContext } from '@/context';

export const useGlobalContext = () => {
  const context = React.useContext(GlobalContext);
  if (!context) throw new Error('GlobalContext must be inside a provider');
  return context;
};
