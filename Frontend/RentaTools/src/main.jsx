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
  Categories,
  List,
  Policies,
  Error,
  Edit,
  NotFound,
} from "./pages";

import "./index.css";

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
            <Route path="categories" element={
              <AdminProtectedRoute>
                <Categories/>
              </AdminProtectedRoute>} 
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
