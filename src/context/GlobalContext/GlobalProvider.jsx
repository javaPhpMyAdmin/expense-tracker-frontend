import React from 'react';
import axios from 'axios';
import { GlobalContext } from './GlobalContext';
import { config } from '@/config';

const BASE_URL = config.BASE_API_URL;

export default function GlobalProvider({ children }) {
  const [incomes, setIncomes] = React.useState([]);
  const [expenses, setExpenses] = React.useState([]);
  const [error, setError] = React.useState('');

  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}${config.API_ROUTES.ADD_INCOME}`, income)
      .then((res) => {
        alert('SUCCESS INCOME ADDED');
        getIncomes();
        totalIncome();
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };
  const addExpense = async (expense) => {
    const response = await axios
      .post(`${BASE_URL}${config.API_ROUTES.ADD_EXPENSE}`, expense)
      .then((res) => {
        alert('SUCCESS EXPENSE ADDED');
        getExpenses();
        totalExpense();
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };
  const getIncomes = async () => {
    const res = await axios.get(`${BASE_URL}${config.API_ROUTES.GET_INCOMES}`);
    setIncomes(res.data.incomes);
    totalIncome();
  };
  const getExpenses = async () => {
    const res = await axios.get(`${BASE_URL}${config.API_ROUTES.GET_EXPENSES}`);
    setExpenses(res.data.expenses);
  };

  const deleteIncome = async (id) => {
    const res = await axios.delete(
      `${BASE_URL}${config.API_ROUTES.DELETE_INCOME}/${id}`,
    );
    getIncomes();
  };

  const deleteExpense = async (id) => {
    const res = await axios.delete(
      `${BASE_URL}${config.API_ROUTES.DELETE_EXPENSE}/${id}`,
    );
    getExpenses();
  };

  const totalIncome = () => {
    let total = 0;
    incomes.forEach((income) => {
      total += income.amount;
    });
    return total;
  };

  const totalExpense = () => {
    let total = 0;
    expenses.forEach((expense) => {
      total += expense.amount;
    });
    return total;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpense();
  };

  const transactionsHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    return history.slice(0, 3);
  };

  React.useEffect(() => {
    getIncomes();
    getExpenses();
    totalIncome();
    totalExpense();
    totalBalance();
    transactionsHistory();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        incomes,
        expenses,
        error,
        addIncome,
        addExpense,
        getIncomes,
        getExpenses,
        deleteIncome,
        deleteExpense,
        totalIncome,
        totalExpense,
        totalBalance,
        transactionsHistory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
