import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyle';
import CreateGroup from './routes/CreateGroup';
import Home from './routes/Home';
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
        path: '/creategroup',
        element: <CreateGroup />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/market',
        element: <Market />,
      },
      {
        path: '/lineup',
        element: <LineUp />,
      },
      {
        path: '/ranking',
        element: <Ranking />,
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
