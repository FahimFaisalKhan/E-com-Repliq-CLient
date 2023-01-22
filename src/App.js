import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-daisyui";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";
import { Toaster } from "react-hot-toast";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductsContextProvider from "./contexts/ProductsContext";
import UserContextProvider from "./contexts/UserContext";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <ProductsContextProvider>
            <RouterProvider router={router} />
            <Toaster />
          </ProductsContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
