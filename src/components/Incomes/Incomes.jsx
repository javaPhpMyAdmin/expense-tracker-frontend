import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '@/styles';
import { Form } from '@/components';
import { useGlobalContext } from '@/hooks';
import { IncomeItem } from '@/components';
export default function Incomes() {
  const { incomes } = useGlobalContext();

  // React.useEffect(() => {
  //   getIncomes();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <IncomesContainer>
      <InnerLayout>
        <h1>Incomes</h1>
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
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;
