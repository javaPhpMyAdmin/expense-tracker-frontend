import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '@/styles';
import { Form } from '@/components';
import { useGlobalContext } from '@/hooks';
import { IncomeItem } from '@/components';
export default function Incomes() {
  const { incomes, totalIncome } = useGlobalContext();

  // React.useEffect(() => {
  //   getIncomes();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <IncomesContainer>
      <InnerLayout>
        <h1>Incomes</h1>
        <h2 className="total-income">
          Total Incomes: <span>$UY {totalIncome()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income) => (
              <IncomeItem
                item={income}
                key={income._id}
                indicatorColor="var(--color-green)"
              />
            ))}
          </div>
        </div>
      </InnerLayout>
    </IncomesContainer>
  );
}

const IncomesContainer = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
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
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;
