import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ProtectedRoute from './components/ProtectedRoute';
import GlobalStyle from './GlobalStyle';
import CreateGroup from './routes/CreateGroup';
import LineUp from './routes/LineUp';
import Login from './routes/Login';
import Market from './routes/Market';
import Ranking from './routes/Ranking';
import Register from './routes/Register';
import Root from './routes/Root';
import theme from './theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'dashboard',
        element: <ProtectedRoute />,
        children: [
          {
            path: 'create-group',
            element: <CreateGroup />,
          },
          {
            path: 'ranking',
            element: <Ranking />,
          },
          {
            path: 'lineup',
            element: <LineUp />,
          },
          {
            path: 'market',
            element: <Market />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
