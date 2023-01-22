import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import AddCustomer from "../Pages/Dahboard/AddCustomer/AddCustomer";
import AddProduct from "../Pages/Dahboard/AddProduct/AddProduct";
import CustomerList from "../Pages/Dahboard/CustomerList/CustomerList";
import Dashboard from "../Pages/Dahboard/Dashboard";
import ProductList from "../Pages/Dahboard/ProductList/ProductList";
import Home from "../Pages/Home/Home";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route
        path="/dashboard"
        element={
          <AdminRoute>
            <DashboardLayout />
          </AdminRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/customerlist" element={<CustomerList />} />
        <Route path="/dashboard/addcustomer" element={<AddCustomer />} />
        <Route path="/dashboard/productlist" element={<ProductList />} />
        <Route path="/dashboard/addproduct" element={<AddProduct />} />
      </Route>
    </>
  )
);
