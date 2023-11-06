import React from 'react';
import {
  Chart,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js/auto';

import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '@/hooks';

Chart.register({
  id: 'p1',
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Line,
});

import { dateFormat } from '@/utils';

export default function ChartComponent() {
  const { incomes, expenses } = useGlobalContext();
  const data = {
    labels: incomes.map((income) => {
      return dateFormat(income.date);
    }),
    datasets: [
      {
        label: 'Incomes',
        data: [
          ...incomes.map((income) => {
            return income.amount;
          }),
        ],
        backgroundColor: 'var(--color-green)',
        tension: 0.2,
      },
      {
        label: 'Expenses',
        data: [
          ...expenses.map((expense) => {
            return expense.amount;
          }),
        ],
        backgroundColor: 'red',
        tension: 0.2,
      },
    ],
  };

  return (
    <ChartContainer>
      <Line data={data} />
    </ChartContainer>
  );
}

const ChartContainer = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  height: 100%;
`;
