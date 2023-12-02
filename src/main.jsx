import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Pages/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyCart from './Pages/MyCart/MyCart';
import Login from './Pages/Login/Login';
import BrandPage from './components/BrandPage/BrandPage';
import Private from './components/PrivateRoute/Private';
import Register from './components/Register/Register';
import Provider from './components/Provider/Provider';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Brand from './Pages/Brand/Brand';
import CarDetails from './components/CarDetails/CarDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/brandPage")
      },
      {
        path: '/addProduct',
        element: <Private><AddProduct></AddProduct></Private>
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/brand",
        element: <Brand></Brand>
      },
      // {
      //   path: '/brandPage',
      //   element: <BrandPage></BrandPage>,
      //   loader: () => fetch(`http://localhost:5000/brandPage`)
      // },
      {
        path: '/brandPage/:brand',
        element: <BrandPage></BrandPage>,
        loader: ({ params }) => fetch(`http://localhost:5000/addProduct/${params.brand}`)
      },
      {
        path: "/carDetails/:id",
        element: <Private><CarDetails></CarDetails></Private>,
        loader: ({ params }) => fetch(`http://localhost:5000/carDetails/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
