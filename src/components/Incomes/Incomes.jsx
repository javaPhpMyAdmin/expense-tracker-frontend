import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '@/styles';
import { Form } from '@/components';
import { useGlobalContext } from '@/hooks';
export default function Incomes() {
  const { incomes } = useGlobalContext();

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
              <div key={income.id}>{income.title}</div>
            ))}
          </div>
        </div>
      </InnerLayout>
    </IncomesContainer>
  );
}

const IncomesContainer = styled.div``;
