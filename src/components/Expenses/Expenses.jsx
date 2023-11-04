import styled from 'styled-components';
import { InnerLayout } from '@/styles';
import Form from '../Form/Form';
import { useGlobalContext } from '@/hooks';
import { ExpenseItem } from '@/components';

export default function Expenses() {
  const { expenses, totalExpense } = useGlobalContext();

  return (
    <ExpensesContainer>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-expense">
          Total Expenses: <span>$UY {totalExpense()}</span>
        </h2>
        <div className="expense-content">
          <div className="form-container">
            <Form type="expense" />
          </div>
          <div className="expenses">
            {expenses.map((expense) => (
              <ExpenseItem
                item={expense}
                key={expense._id}
                indicatorColor="var(--color-green)"
              />
            ))}
          </div>
        </div>
      </InnerLayout>
    </ExpensesContainer>
  );
}

const ExpensesContainer = styled.div`
  display: flex;
  overflow: auto;
  .total-expense {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ecb2cf;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  .expense-content {
    display: flex;
    gap: 2rem;
    .expenses {
      flex: 1;
    }
  }
`;
