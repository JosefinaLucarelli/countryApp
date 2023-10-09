import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import MainPage from './screens/mainPage';
import RegionDetail from './screens/mainPage/RegionDetail';
import CoutryDetail from './screens/mainPage/CountryDetail';

const router = createBrowserRouter([  
  {    path: "/",
       element: <MainPage />,
  },
  {
    path: "region/:regionName",
    element: <RegionDetail />
  },
  {
    path: "country/:countryName",
    element: <CoutryDetail />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
