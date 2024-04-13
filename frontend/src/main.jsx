import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./components/pages/login/LoginPage";
import DashboardPage from "./components/pages/dashboard/DashboardPage";
import ProductPage from "./components/pages/product/ProductPage";
import OrderPage from "./components/pages/order/OrderPage";
import ChatPage from "./components/pages/chat/ChatPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/order",
    element: <OrderPage />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
