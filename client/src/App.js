import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Children } from 'react';
import { element } from 'prop-types';
import "./App.scss"

const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/products/:id',
        element:<Products/>
      },
      {
        path:'/product/:id',
        element:<Product/>
      },
    ]
  },
  {
    path: "/products/:id",
    element: <Products />
  },
  {
    path: "/product/:id",
    element: <Product />
  },
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
