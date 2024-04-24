import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import DashboardPage from "./components/DashboardPage.jsx";
import ChatPage from "./components/ChatPage.jsx";
import AddRecord from "./components/AddRecord.jsx";
import EditRecord from "./components/EditRecord.jsx";
import HeroPage from "./components/HeroPage.jsx";
import Dashboard from "./components/Dashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<HeroPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="dashboard" element={<DashboardPage />}>
          <Route index element={<Dashboard />} />
          <Route path="add-record" element={<AddRecord />} />
          <Route path="edit-record/:recordId" element={<EditRecord />} />
          <Route path="chat" element={<ChatPage />} />
        </Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
