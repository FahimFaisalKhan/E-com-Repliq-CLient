import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-daisyui";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductsContextProvider from "./contexts/ProductsContext";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProductsContextProvider>
          <RouterProvider router={router} />
        </ProductsContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
