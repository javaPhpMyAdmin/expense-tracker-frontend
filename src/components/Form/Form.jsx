import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '@/components';
import { useGlobalContext } from '@/hooks';
import { plus, incomeOptions, expenseOptions } from '@/utils';

const INITIAL_FORM_STATE = {
  title: '',
  amount: '',
  description: '',
  category: '',
  date: '',
  typeTransaction: '',
};

export default function Form({ type = 'income' }) {
  const [inputState, setInput] = React.useState(INITIAL_FORM_STATE);

  const { addIncome, addExpense, error, setError } = useGlobalContext();

  const { title, description, category, date, amount } = inputState;

  const handleInput = (name) => (e) => {
    setInput({ ...inputState, [name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'income') {
      setInput({ ...inputState, typeTransaction: 'income' });
      addIncome(inputState);
      setInput(INITIAL_FORM_STATE);
    } else {
      setInput({ ...inputState, typeTransaction: 'expense' });
      addExpense(inputState);
      setInput(INITIAL_FORM_STATE);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={'title'}
          placeholder="Salary Title"
          onChange={handleInput('title')}
        />
      </div>
      <div className="input-control">
        <input
          type="text"
          value={amount}
          name={'amount'}
          placeholder="Salary Amount"
          onChange={handleInput('amount')}
        />
      </div>
      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Enter A date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInput({ ...inputState, date });
          }}
        />
      </div>
      <div className="selects input-control">
        <select
          required
          value={category}
          name={'category'}
          id="category"
          onChange={handleInput('category')}
        >
          <option value="" disabled>
            Select Category
          </option>
          {type === 'income'
            ? Object.entries(incomeOptions).map(([key, value]) => (
                <option key={key} value={value}>
                  {value.charAt(0).toLocaleUpperCase() + value.slice(1)}
                </option>
              ))
            : Object.entries(expenseOptions).map(([key, value]) => (
                <option key={key} value={value}>
                  {value.charAt(0).toLocaleUpperCase() + value.slice(1)}
                </option>
              ))}
        </select>
      </div>
      <div className="input-control">
        <textarea
          value={description}
          name={'description'}
          placeholder="Add a Description"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput('description')}
        />
      </div>
      <div className="submit-btn">
        <Button
          icon={plus}
          bPad=".8rem 1.6rem"
          bRad="30px"
          bg="var(--color-accent)"
          color="#fff"
          name={type === 'income' ? 'Add Income' : 'Add Expense '}
        />
      </div>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }
  textarea {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }

  .input-control {
    input {
      width: 100%;
    }
  }
  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }
  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: var(--color-green) !important;
      }
    }
  }
`;
