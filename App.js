import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './src/utils/appStore';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Cart from './src/components/Cart';

// Define your App component
function App() {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

// Create your appRouter using createBrowserRouter
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
]);

// Render your App component wrapped with RouterProvider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
