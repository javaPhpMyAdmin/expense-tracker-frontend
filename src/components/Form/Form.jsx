import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '@/components';
import { useGlobalContext } from '@/hooks';
import { plus } from '@/utils';

export default function Form() {
  const [inputState, setInput] = React.useState({
    title: '',
    amount: '',
    description: '',
    category: '',
    date: '',
  });

  const { addIncome } = useGlobalContext();

  const { title, description, category, date, amount } = inputState;

  const handleInput = (name) => (e) => {
    setInput({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState);
    console.log('submitting');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
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
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investiments">Investiments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="youtube">Youtube</option>
          <option value="other">Other</option>
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
          type="submit"
          name="Add Income"
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
