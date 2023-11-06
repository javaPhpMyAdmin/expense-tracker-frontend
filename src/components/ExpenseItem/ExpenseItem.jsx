import styled from 'styled-components';
import { dollar, calender, comment, trash } from '@/utils';
import { Button } from '@/components';
import { expenseOptions, light, water, food, gift, circle } from '@/utils';
import { useGlobalContext } from '@/hooks';

export default function ExpenseItem({ item, indicatorColor }) {
  const { deleteExpense } = useGlobalContext();

  const expenseCategoryIcon = (category) => {
    switch (category) {
      case expenseOptions.LIGHT:
        return light;
      case expenseOptions.WATER:
        return water;
      case expenseOptions.FOOD:
        return food;
      case expenseOptions.GIFTS:
        return gift;
      case expenseOptions.OTHER:
        return circle;
    }
  };

  const handleDelete = (id) => {
    deleteExpense(id);
  };

  return (
    <ExpenseItemContainer indicator={indicatorColor}>
      <div className="icon">{expenseCategoryIcon(item.category)}</div>
      <div className="content">
        <h5>{item.title}</h5>
        <div className="inner-content">
          <div className="text">
            <p>
              UY{dollar} {item.amount}
            </p>
            <p>
              {calender} {item.date}
            </p>
            <p>
              {comment}
              {item.description}
            </p>
          </div>
          <div className="btn-con">
            <Button
              icon={trash}
              bPad="1rem"
              bRad="50%"
              bg="var(--primary-color)"
              color="#fff"
              iColor="#fff"
              hColor="var(--color-green)"
              onClick={() => handleDelete(item._id)}
            />
          </div>
        </div>
      </div>
    </ExpenseItemContainer>
  );
}

const ExpenseItemContainer = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  color: #222260;
  .icon {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ffffff;
    i {
      font-size: 2.6rem;
    }
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    h5 {
      font-size: 1.3rem;
      padding-left: 2rem;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: ${(props) => props.indicator};
      }
    }
    .inner-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-color);
          opacity: 0.8;
        }
      }
    }
  }
`;
