export const amountFormater = (amount) => {
  return amount <= 0 ? 0 : amount;
};

export const helperMaxAmount = (expensesOrIncomes) => {
  return Math.max(...expensesOrIncomes.map((item) => item.amount));
};

export const helperMinAmount = (expensesOrIncomes) => {
  return Math.min(...expensesOrIncomes.map((item) => item.amount));
};
