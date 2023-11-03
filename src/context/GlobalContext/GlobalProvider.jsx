import React from 'react';
import { GlobalContext } from './GlobalContext';
import axios from 'axios';

const BASE_URL = 'http://localhost:5001/api/v1';

export default function GlobalProvider({ children }) {
  const [incomes, setIncomes] = React.useState([]);
  const [expenses, setExpenses] = React.useState([]);
  const [error, setError] = React.useState('');

  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}/add-income`, income)
      .then((res) => {
        alert('SUCCESS INCOME ADDED', res.json());
        // setIncomes(res);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
    console.log(response);
  };

  const getIncomes = () => {
    axios
      .get(`${BASE_URL}/get-incomes`)
      .then((res) => {
        console.log(res.data.incomes);
        setIncomes(res.data.incomes);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };
  const getExpenses = () => {};

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
