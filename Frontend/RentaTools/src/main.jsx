/* eslint-disable react/prop-types */
// import third party libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

//import App
import App from "./App.jsx";

// import Pages
import {
  Admin,
  Detail,
  Register,
  Home,
  SignUp,
  SignIn,
  Features,

} 
from "./pages";

import Favorites from "./pages/Favorites";
import List from "./pages/List";
import Policies from "./pages/Policies";
//import Styles
import "./index.css";
import Error from "./pages/Error";
import Edit from "./pages/Edit/index.jsx";
import NotFound from "./pages/NotFound/index.jsx";

const AdminProtectedRoute = ({ children }) => {
  const role = localStorage.getItem("role");
  if (role != "ADMIN") {
    return <Navigate to="/error" replace />;
  }

  return children;
};

// const UserProtectedRoute = ({ children }) => {
//   const role = localStorage.getItem("role")
//   if (role != "USER") {
//     return <Navigate to="/error" replace />
//   }

//   return children
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<List />} />
          <Route path="/products/paginated" element={<List />} />
          <Route path="products/:category" element={<List />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="/policies" element={<Policies/>}/>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="admin">
            <Route
              index
              element={
                <AdminProtectedRoute>
                  <Admin />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="register"
              element={
                <AdminProtectedRoute>
                  <Register />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="features"
              element={
                <AdminProtectedRoute>
                  <Features />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="edit/:id"
              element={
                <AdminProtectedRoute>
                  <Edit />
                </AdminProtectedRoute>
              }
            />
          </Route>
          <Route path="error" element={<Error />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
