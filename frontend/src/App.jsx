import React from "react"
import ProtectedRoutes from "./components/ProtectedRoutes"
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom"


import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import CreateNote from "./pages/CreateNote"
import Header from "./components/Header"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function Signup() {
  localStorage.clear()
  return <Register />

}

function App() {
  return (
      <div>
        <Header/>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/create-note" element={<CreateNote/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
