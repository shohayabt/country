import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../src/index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Countries } from './Component/Countries.jsx';
import { CountryDetails } from './Component/CountryDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Countries/>,
  },
  {
    path: "/country/:name",
    element: <CountryDetails/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
