import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import MainPage from './screens/mainPage';
import CountryDetail from './screens/mainPage/CountryDetail';

const router = createBrowserRouter([  
  {    path: "/",
       element: <MainPage />,
  },
  {
    path: "region/:regionName",
    element: <CountryDetail />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
