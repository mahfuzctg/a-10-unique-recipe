import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Compment/Main/Main.jsx";
import Home from "./Compment/Home/Home.jsx";
import Login from "./Compment/Login/Login.jsx";
import Blog from "./Compment/Blog/Blog.jsx";
import Recipe from "./Compment/Recipe/Recipe.jsx";
import Chef from "./Compment/Chef/Chef.jsx";
import Resister from "./Compment/Rerister/Resister.jsx";
import AuthProviders from "./Compment/Providers/AuthProviders.jsx";
import PrivateRoute from "./Compment/Routes/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/resister",
        element: <Resister></Resister>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "chef",
    element: <Chef></Chef>,
  },
  {
    path: "/recipe",
    element: (
      <PrivateRoute>
        <Recipe></Recipe>
      </PrivateRoute>
    ),

    loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
