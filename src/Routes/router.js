import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout/:id" element={<Checkout />} />
      <Route path="/detail/:id" element={<ProductDetail />} />
    </Route>
  )
);
