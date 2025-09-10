import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import HomeCarousel from "./components/HomeCarousel";
import Footer from "./components/Footer";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import MyNotes from "./pages/MyNotes";
import { useState } from "react";
import Users from "./admin/pages/Users";
import { ToastContainer } from 'react-toastify';
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./utils/ProtectedRoute";
import Unauthorized from "./pages/Unauthorized";
import RootLayout from './layout/RootLayout';
import MinLayout from './layout/MinLayout';
import Cart from './pages/Cart';
import AddProduct from './admin/pages/AddProduct';
import ListProducts from './admin/pages/ListProducts';
import EditProduct from './admin/pages/EditProduct';

function App() {

  const [cartItems, setCartItems] = useState(0);
  // const products = [
  //   { id: 1, productName: 'Sample product 1', productPrice: 100, productDescription: "Sample product 01 description will be here", productPhoto: "https://m.media-amazon.com/images/I/41h2cTyybzL._SX300_SY300_QL70_FMwebp_.jpg" },
  //   { id: 2, productName: 'Sample product 2', productPrice: 200, productDescription: "Sample product 02 description will be here", productPhoto: "https://m.media-amazon.com/images/I/41X9qNxoJKL._SX300_SY300_QL70_FMwebp_.jpg" },
  //   { id: 3, productName: 'Sample product 3', productPrice: 300, productDescription: "Sample product 03 description will be here", productPhoto: "https://m.media-amazon.com/images/I/41uR6Pme6NL._SX300_SY300_QL70_FMwebp_.jpg" },
  //   { id: 4, productName: 'Sample product 4', productPrice: 400, productDescription: "Sample product 04 description will be here", productPhoto: "https://m.media-amazon.com/images/I/417i5BdW1LL._SX300_SY300_QL70_FMwebp_.jpg" },
  //   { id: 5, productName: 'Sample product 5', productPrice: 500, productDescription: "Sample product 05 description will be here", productPhoto: "https://m.media-amazon.com/images/I/417i5BdW1LL._SX300_SY300_QL70_FMwebp_.jpg" },
  // ]

  return (
    <>
      <Router>
        <ToastContainer position="top-right" autoClose={2000} />
        <Routes>
          <Route path='/' element={<RootLayout cartItems={cartItems}><Outlet /></RootLayout>}>
            <Route index element={<Home setCartItems={setCartItems}  />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="/profile" element={<ProtectedRoute>
              <Profile />
            </ProtectedRoute>} />
            <Route path="notes" element={<ProtectedRoute requiredRole={['admin', 'seller']}>
              <MyNotes />
            </ProtectedRoute>} />
            <Route path="admin/users" element={<ProtectedRoute requiredRole={['admin']}>
              <Users />
            </ProtectedRoute>} />
            <Route path="admin/add-product" element={<ProtectedRoute requiredRole={['admin']}>
              <AddProduct />
            </ProtectedRoute>} />
            <Route path="admin/edit-product/:id" element={<ProtectedRoute requiredRole={['admin']}>
              <EditProduct />
            </ProtectedRoute>} />
            <Route path="admin/list-products" element={<ProtectedRoute requiredRole={['admin']}>
              <ListProducts />
            </ProtectedRoute>} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path='/' element={<MinLayout><Outlet /></MinLayout>}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="unauthorized" element={<Unauthorized />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
