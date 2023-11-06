import styled from 'styled-components';
import { useGlobalContext } from '@/hooks';
import { amountFormater } from '@/utils';

export default function History() {
  const { transactionsHistory } = useGlobalContext();

  return (
    <HistoryContainer>
      <h2>Recent History</h2>
      {transactionsHistory().map((historyItem) => {
        return (
          <div key={historyItem._id} className="history-item">
            <p
              style={{
                color:
                  historyItem.type === 'expense'
                    ? '#ff0000'
                    : 'var(--color-green)',
              }}
            >
              {historyItem.title}
            </p>
            <p
              style={{
                color:
                  historyItem.type === 'expense'
                    ? '#ff0000'
                    : 'var(--color-green)',
              }}
            >
              {historyItem.type === 'expense'
                ? `-${amountFormater(historyItem.amount)}`
                : `+${amountFormater(historyItem.amount)}`}
            </p>
          </div>
        );
      })}
    </HistoryContainer>
  );
}

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history-item {
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
