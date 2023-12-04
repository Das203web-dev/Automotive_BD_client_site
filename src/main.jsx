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
import Update from './components/Update/Update';
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
        element: <Private><MyCart></MyCart></Private>,
        // loader: () => fetch(`http://localhost:5000/myCart`)
      },
      // {
      //   path: '/myCart/:_id',
      //   element: <MyCart></MyCart>,
      //   loader: ({ params }) => fetch(`http://localhost:5000/myCart/${params._id}`)
      // },
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
      {
        path: '/brandPage/:brand',
        element: <BrandPage></BrandPage>
      },
      {
        path: "/carDetails/:id",
        element: <Private><CarDetails></CarDetails></Private>,
        loader: ({ params }) => fetch(`http://localhost:5000/carDetails/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/brandPage/${params.id}`)
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
