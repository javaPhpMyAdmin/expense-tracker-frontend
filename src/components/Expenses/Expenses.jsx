import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '@/styles';

export default function Expenses() {
  return (
    <ExpensesContainer>
      <InnerLayout>EXPENSES</InnerLayout>
    </ExpensesContainer>
  );
}

const ExpensesContainer = styled.div``;
