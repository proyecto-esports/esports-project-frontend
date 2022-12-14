import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ChildenProtected from './components/ChildenProtected';
import ProtectedRoute from './components/ProtectedRoute';
import GlobalStyle from './GlobalStyle';
import CreateGroup from './routes/CreateGroup';
import CurrentBids from './routes/CurrentBids';
import Home from './routes/Home';
import LineUp from './routes/LineUp';
import Login from './routes/Login';
import Market from './routes/Market';
import NotFound from './routes/NotFound';
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
            path: 'home',
            element: <Home />,
          },
          {
            path: 'create-group',
            element: <CreateGroup />,
          },
          {
            path: '',
            element: <ChildenProtected />,
            children: [
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
              {
                path: 'current-bids',
                element: <CurrentBids />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
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
