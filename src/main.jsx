import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Login } from './pages/Login';
import GlobalStyle from './styles/globalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <GlobalStyle />
  </StrictMode>,
);
