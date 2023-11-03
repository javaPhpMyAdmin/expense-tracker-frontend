import React from 'react';
import { styled } from 'styled-components';
import bg from '@/assets/bg.png';
import { MainLayout } from '@/styles';
import { Orb, Navigation, Dashboard, Incomes, Expenses } from '@/components';
import { GlobalProvider } from '@/context';

function App() {
  const [active, setActive] = React.useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Incomes />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  const orbMemo = React.useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <>
      <GlobalProvider>
        <AppContainer bg={bg}>
          {orbMemo}
          <MainLayout>
            <Navigation active={active} setActive={setActive} />
            <main>{displayData()}</main>
          </MainLayout>
        </AppContainer>
      </GlobalProvider>
    </>
  );
}

const AppContainer = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
