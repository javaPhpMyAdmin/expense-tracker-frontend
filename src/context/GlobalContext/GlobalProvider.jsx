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
      .post(`${BASE_URL}${config.ADD_INCOME}`, income)
      .then((res) => {
        alert('SUCCESS INCOME ADDED');
        getIncomes();
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
    console.log(response);
  };

  const getIncomes = async () => {
    const res = await axios.get(`${BASE_URL}${config.GET_INCOMES}`);
    setIncomes(res.data.incomes);
  };
  const getExpenses = async () => {
    const res = await axios.get(`${BASE_URL}${config.GET_EXPENSES}`);
    setExpenses(res.data.expenses);
  };

  const deleteIncome = async (id) => {
    const res = await axios.delete(`${BASE_URL}${config.DELETE_INCOME}/${id}`);
    getIncomes();
  };

  React.useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        incomes,
        expenses,
        error,
        addIncome,
        getIncomes,
        getExpenses,
        deleteIncome,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
