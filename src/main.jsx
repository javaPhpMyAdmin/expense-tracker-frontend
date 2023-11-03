import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { GlobalStyle } from '@/styles';
import { GlobalProvider } from '@/context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </>,
);
