import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { GlobalStyle } from '@/styles';
import { GlobalProvider } from '@/context';
import { GoogleOAuthProvider } from '@react-oauth/google';
const GOOGLE_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <GoogleOAuthProvider clientId={GOOGLE_ID}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </GoogleOAuthProvider>
  </>,
);
