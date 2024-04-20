import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import LoginPage from "./components/pages/login/LoginPage";
import DashboardPage from "./components/pages/dashboard/DashboardPage";
import ProductPage from "./components/pages/product/ProductPage";
import OrderPage from "./components/pages/order/OrderPage";
import ChatPage from "./components/pages/chat/ChatPage";
import RegisterForm from "./components/RegisterForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="product" element={<ProductPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="order" element={<OrderPage />} />
      <Route path="chat" element={<ChatPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
