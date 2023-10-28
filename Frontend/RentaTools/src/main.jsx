/* eslint-disable react/prop-types */
// import third party libraries
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

//import App
import App from "./App.jsx"

// import Pages
import { Admin, Detail, Register, Home } from "./pages"

//import Styles
import "./index.css"
import Error from "./pages/Error"

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/error" replace />
  }

  return children
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="detail" element={<Detail />} />
          <Route path="admin">
            <Route
              index
              element={
                <ProtectedRoute user={"usuario"}>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route
              path="register"
              element={
                <ProtectedRoute user={"usuario"}>
                  <Register />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="error" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
